import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Header from '@components/Header';
import MDXComponents from '@components/MDXComponents';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <MDXProvider components={MDXComponents}>
            <div className="container p-5 sm:py-10 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start antialiased">
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
