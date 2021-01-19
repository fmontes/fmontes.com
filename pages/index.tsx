import React from 'react';
import Head from 'next/head';
import BlogItem from '@components/BlogItem';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getPostsSortedByDate, MatterContent } from '@utils/content';

type Props = {
    posts: MatterContent[];
};

export default function Home({ posts }: Props): JSX.Element {
    return (
        <>
            <Head>
                <title>@fmontes</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

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
