import Link from 'next/link';

import { Text } from '@components/Text';
import { getDatabase, getSlug } from '@utils/notion';

export default function Notion({ posts }: any) {
    return (
        <main className="prose">
            <h1>Hello World</h1>
            <ol>
                {posts
                    .filter((post, n) => n > 0)
                    .map((post) => {
                        const slug = getSlug(post);
                        return (
                            <li key={post.id}>
                                <h2>
                                    <Link href={`/notion/${slug}`}>
                                        <a>
                                            <Text text={post.properties.Title.title} />
                                        </a>
                                    </Link>
                                </h2>
                                <p>
                                    <Text text={post.properties.Description.rich_text} />
                                </p>
                            </li>
                        );
                    })}
            </ol>
        </main>
    );
}

export const getStaticProps = async () => {
    const database = await getDatabase(process.env.NOTION_DATABASE);

    return {
        props: {
            posts: database.results
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every second
        revalidate: 1 // In seconds
    };
};
