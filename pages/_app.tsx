import { useEffect } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import router, { useRouter } from 'next/router';

import Header from '@components/Header';
import MDXComponents from '@components/MDXComponents';
import SEO from '../next-seo.config';
import { pageview } from '@utils/google-analytics';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const { locale } = useRouter();
    const seoDefault = SEO[locale];

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageview(url, document.title);
        };
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

    return (
        <MDXProvider components={MDXComponents}>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <DefaultSeo {...seoDefault} />
            <div className="container p-5 sm:py-10 antialiased">
                <Header />
                <Component {...pageProps} />
            </div>
        </MDXProvider>
    );
}

export default MyApp;
