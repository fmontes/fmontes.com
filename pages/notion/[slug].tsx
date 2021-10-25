import { Fragment } from 'react';
import { Text } from '@components/Text';
import { getBlocks, getDatabase, getPage, getSlug, renderBlock } from '@utils/notion';

interface Props {
    blocks: any;
    page: {
        properties: {
            Title: {
                title: string;
            };
        };
    };
}

export default function Post({ blocks, page }: Props): JSX.Element {
    return (
        <main className="prose lg:prose-lg xl:prose-xl">
            <h1>
                <Text text={page?.properties.Title.title} />
            </h1>
            {blocks?.map((block) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
        </main>
    );
}

export const getStaticPaths = async () => {
    const database = await getDatabase('e9a32443ff294d388c56e9625516e9e5');
    return {
        paths: database
            .filter((i, n) => n > 0)
            .map((page, m) => {
                return {
                    params: {
                        slug: getSlug(page)
                    },
                    locale: 'en'
                };
            }),
        fallback: true
    };
};

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const database = await getDatabase('e9a32443ff294d388c56e9625516e9e5');
    const { id } = database
        .filter((item, n) => n > 0)
        .find((item) => {
            return getSlug(item) === slug;
        });

    const page = await getPage(id);
    const blocks = await getBlocks(id);

    // Retrieve block children for nested blocks (one level deep), for example toggle blocks
    // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
    const childBlocks = await Promise.all(
        blocks
            .filter((block) => block.has_children)
            .map(async (block) => {
                return {
                    id: block.id,
                    children: await getBlocks(block.id)
                };
            })
    );
    const blocksWithChildren = blocks.map((block) => {
        // Add child blocks if the block should contain children but none exists
        if (block.has_children && !block[block.type].children) {
            block[block.type]['children'] = childBlocks.find((x) => x.id === block.id)?.children;
        }
        return block;
    });

    return {
        props: {
            page,
            blocks: blocksWithChildren
        },
        revalidate: 1
    };
};
