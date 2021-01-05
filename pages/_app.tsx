import React from 'react';
import { AppProps } from 'next/app';
import Header from '@components/Header';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div className="container p-5 sm:p-10 lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start antialiased">
            <div className="lg:col-span-4 2xl:col-span-3">
                <Header />
            </div>
            <div className="lg:col-span-8 2xl:col-span-9 mt-10 lg:m-0">
                <Component {...pageProps} />
            </div>
        </div>
    );
}

export default MyApp;
