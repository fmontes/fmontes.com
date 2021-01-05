import React from 'react';
import Head from 'next/head';
import BlogItem from '@components/BlogItem';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>@fmontes</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>

            <main className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-3">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </main>
        </>
    );
}
