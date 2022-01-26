import { Fragment } from 'react';

import Image from 'next/image';
import { Client } from '@notionhq/client';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
    GetPageResponse,
    ListBlockChildrenResponse,
    QueryDatabaseParameters,
    QueryDatabaseResponse
} from '@notionhq/client/build/src/api-endpoints';

import { Text } from '@components/Text';
import { MatterContent, Slugs } from './content';
import { BlogPost } from 'pages/blog/[slug]';
import { AsyncLocalStorage } from 'async_hooks';

const notion = new Client({
    auth: process.env.NOTION_SECRET
});

const databaseIds = {
    es: process.env.NOTION_DATABASE_ES,
    en: process.env.NOTION_DATABASE_EN
};

export const getDatabase = async (locale = 'en'): Promise<QueryDatabaseResponse> => {
    const databaseId = databaseIds[locale];

    if (!databaseId) {
        throw new Error(`No database found for locale ${locale}`);
    }

    const options: QueryDatabaseParameters = {
        database_id: databaseId
    };

    if (process.env.NODE_ENV === 'production') {
        options.filter = {
            property: 'Status',
            select: {
                equals: 'published'
            }
        };
    }

    const response = await notion.databases.query(options);

    return {
        ...response,
        results: response.results
    };
};

export const getPage = async (pageId: string): Promise<GetPageResponse> => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};

export const getBlocks = async (blockId: string): Promise<ListBlockChildrenResponse> => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50
    });
    return response;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const renderBlock = (block): JSX.Element => {
    const { type, id, has_children } = block;
    const value = block[type];

    switch (type) {
        case 'paragraph':
            return (
                <p>
                    <Text text={value.text} />
                </p>
            );
        case 'heading_1':
            return (
                <h1>
                    <Text text={value.text} />
                </h1>
            );
        case 'heading_2':
            return (
                <h2>
                    <Text text={value.text} />
                </h2>
            );
        case 'heading_3':
            return (
                <h3>
                    <Text text={value.text} />
                </h3>
            );
        case 'bulleted_list':
            return <ul>{block[type].children.results.map((child) => renderBlock(child))}</ul>;
        case 'numbered_list':
            return <ol>{block[type].children.results.map((child) => renderBlock(child))}</ol>;
        case 'bulleted_list_item':
            return (
                <li>
                    <Text text={value.text} />
                    {has_children ? (
                        <ul>{block[type].children.results.map((child) => renderBlock(child))}</ul>
                    ) : null}
                </li>
            );
        case 'numbered_list_item':
            return (
                <li>
                    <Text text={value.text} />
                    {has_children ? (
                        <ol>{block[type].children.results.map((child) => renderBlock(child))}</ol>
                    ) : null}
                </li>
            );
        case 'to_do':
            return (
                <div>
                    <label htmlFor={id}>
                        <input defaultChecked={value.checked} id={id} type="checkbox" />{' '}
                        <Text text={value.text} />
                    </label>
                </div>
            );
        case 'toggle':
            return (
                <details>
                    <summary>
                        <Text text={value.text} />
                    </summary>
                    {value.children?.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}
                </details>
            );
        case 'child_page':
            return <p>{value.title}</p>;
        case 'image':
            const src = value.type === 'external' ? value.external.url : value.file.url;
            const caption = value.caption.length ? value.caption[0].plain_text : '';
            return (
                <figure className="flex flex-col items-center gap-4">
                    <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
                        <Image alt={caption} layout="fill" objectFit="contain" src={src} />
                    </div>
                    {caption && <figcaption>{caption}</figcaption>}
                </figure>
            );
        case 'code':
            return (
                <SyntaxHighlighter language={value.language} useInlineStyles={false}>
                    {value.text[0].plain_text}
                </SyntaxHighlighter>
            );
        default:
            return (
                <p>
                    ❌ Unsupported block
                    {type === 'unsupported' ? 'unsupported by Notion API' : type}
                </p>
            );
    }
};

export const getNotionPostsSlugs = async (): Promise<Slugs[]> => {
    const notionES = await getDatabase('es');
    const notionEN = await getDatabase('en');

    const notionESPaths = notionES.results
        .filter((page: any, m) => {
            return page.properties.Slug.rich_text.length;
        })
        .map((page: any, m) => {
            return {
                params: {
                    slug: page.properties.Slug.rich_text[0]?.text.content
                },
                locale: 'es'
            };
        });

    const notionENPaths = notionEN.results
        .filter((page: any, m) => {
            return page.properties.Slug.rich_text.length;
        })
        .map((page: any, m) => {
            return {
                params: {
                    slug: page.properties.Slug.rich_text[0]?.text.content
                },
                locale: 'en'
            };
        });

    return [...notionESPaths, ...notionENPaths];
};

export const getNotionPostPage = async (slug: string, locale = 'en'): Promise<BlogPost> => {
    const database = await getDatabase(locale);
    const { id } = database.results.find((item: any) => {
        return item.properties.Slug.rich_text[0].text.content === slug;
    });

    const page = await getPage(id);
    const blocks = await getBlocks(id);

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
        blocks.results
            .filter((block) => {
                return block.has_children;
            })
            .map(async (block) => {
                return {
                    id: block.id,
                    children: await getBlocks(block.id)
                };
            })
    );

    const blocksWithChildren = blocks.results
        .map((block) => {
            // Add child blocks if the block should contain children but none exists
            if (block.has_children && !block[block.type].children) {
                block[block.type]['children'] = childBlocks.find(
                    (x) => x.id === block.id
                )?.children;
            }
            return block;
        })
        .reduce((acc, item: any) => {
            const isListItem =
                item.type === 'bulleted_list_item' || item.type === 'numbered_list_item';

            if (isListItem) {
                const lastItem = acc[acc.length - 1];

                if (lastItem?.type === 'bulleted_list' || lastItem?.type === 'numbered_list') {
                    lastItem[lastItem.type].children.results.push(item);
                    return acc;
                }

                const type = item.type === 'bulleted_list_item' ? 'bulleted_list' : 'numbered_list';
                const newItem = {
                    type,
                    object: 'block',
                    has_children: 'true',
                    [type]: { children: { results: [item] } }
                };

                return [...acc, newItem];
            }

            return [...acc, item];
        }, []);

    return {
        type: 'notion',
        content: blocksWithChildren,
        frontMatter: getFrontMatter(page)
    };
};

export const getFrontMatter = (page: any): MatterContent => {
    return {
        title: page.properties.Title.title[0]?.text.content || '',
        date: page.properties.Date.date?.start || null,
        description: page.properties.Description.rich_text[0]?.text.content || '',
        slug: page.properties.Slug.rich_text[0]?.text.content || '',
        category: page.properties.Category.select?.name || '',
        // canonical_url: '',
        cover: page?.cover?.external?.url || ''
    };
};
