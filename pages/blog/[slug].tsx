import React from 'react';
import Head from 'next/head';
import hydrate from 'next-mdx-remote/hydrate';

import { getContent, getPostsSlugs } from '@utils/content';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import MDXComponents from '@components/MDXComponents';
import Date from '@components/Date';

type BlogPost = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: {
        date: string;
        description: string;
        title: string;
    };
};

export default function Blog({ mdxSource, frontMatter }: BlogPost): JSX.Element {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    });
    return (
        <>
            <Head>
                <title>@fmontes</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className="sm:col-span-2">
                <h1>{frontMatter.title}</h1>
                <p>
                    <Date date={frontMatter.date} />
                </p>
                {content}
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostsSlugs();

    return {
        fallback: false,
        paths
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const content = await getContent(params.slug as string, locale);

    return content;
};
