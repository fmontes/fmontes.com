import Link from 'next/link';

import { Text } from '@components/Text';
import { getDatabase, getSlug } from '@utils/notion';

export default function Notion({ posts }: any) {
    return (
        <>
            <h1>Hello World</h1>
            <ol>
                {posts
                    .filter((post, n) => n > 0)
                    .map((post) => {
                        const slug = getSlug(post);
                        return (
                            <li key={post.id}>
                                <Link href={`/notion/${slug}`}>
                                    <a>
                                        <Text text={post.properties.Title.title} />
                                    </a>
                                </Link>
                                <p>
                                    <Text text={post.properties.Description.rich_text} />
                                </p>
                            </li>
                        );
                    })}
            </ol>
        </>
    );
}

export const getStaticProps = async () => {
    const database = await getDatabase('e9a32443ff294d388c56e9625516e9e5');

    return {
        props: {
            posts: database
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 1 // In seconds
    };
};
