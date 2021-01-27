import Head from 'next/head';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { useRouter } from 'next/router';

import Header from '@components/Header';
import MDXComponents from '@components/MDXComponents';
import SEO from '../next-seo.config';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const { locale } = useRouter();
    const seoDefault = SEO[locale];

    return (
        <MDXProvider components={MDXComponents}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...seoDefault} />
            <div className="container p-5 sm:py-10 lg:grid lg:grid-cols-12 lg:gap-14 lg:items-start antialiased">
                <div className="lg:col-span-4">
                    <Header />
                </div>
                <div className="main lg:col-span-8 mt-5 lg:m-0">
                    <Component {...pageProps} />
                </div>
            </div>
        </MDXProvider>
    );
}

export default MyApp;
