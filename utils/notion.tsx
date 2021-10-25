import { Fragment } from 'react';

import slugify from 'slugify';

import { Text } from '@components/Text';
import { Client } from '@notionhq/client';

import Image from 'next/image';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const notion = new Client({
    auth: 'secret_uqfg9c6N0gaHrqmfXPpWEvFq9AdHdTWJfFXqL5V6pjI'
});

export const getDatabase = async (databaseId) => {
    const response = await notion.databases.query({
        database_id: databaseId
    });
    return response.results;
};

export const getPage = async (pageId) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
};

export const getBlocks = async (blockId) => {
    const response = await notion.blocks.children.list({
        block_id: blockId,
        page_size: 50
    });
    return response.results;
};

export const getSlug = (post): string => {
    return post && post?.properties?.Title?.title[0]
        ? slugify(post.properties.Title.title[0]?.plain_text).toLocaleLowerCase()
        : '';
};

export const renderBlock = (block) => {
    const { type, id } = block;
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
        case 'bulleted_list_item':
        case 'numbered_list_item':
            return (
                <li>
                    <Text text={value.text} />
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
                <SyntaxHighlighter useInlineStyles={false} language={value.language}>
                    {value.text[0].plain_text}
                </SyntaxHighlighter>
            );
        default:
            return `❌ Unsupported block (${
                type === 'unsupported' ? 'unsupported by Notion API' : type
            })`;
    }
};
