import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home(): JSX.Element {
    return (
        <>
            <Head>
                <title>@fmontes Next.JS v10 starter</title>
                <link href="/favicon.ico" rel="icon" />
            </Head>
            <h1>
                @fmontes <Link href="https://nextjs.org/">Next.JS</Link> starter
            </h1>
        </>
    );
}
