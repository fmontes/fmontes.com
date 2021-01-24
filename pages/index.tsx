import { getPostsSortedByDate, MatterContent } from '@utils/content';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import BlogItem from '@components/BlogItem';

type Props = {
    posts: MatterContent[];
};

export default function Home({ posts }: Props): JSX.Element {
    return (
        <>
            <main className="grid gap-6 sm:grid-cols-2">
                {posts.map((post: MatterContent, i: number) => (
                    <BlogItem key={i} {...post} />
                ))}
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getPostsSortedByDate(locale);

    return { props: { posts } };
};
