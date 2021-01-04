import React from 'react';
import { AppProps } from 'next/app';
import Header from '@components/Header';

import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <div className="container p-5 lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start">
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
