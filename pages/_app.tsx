import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '@styles/Global.styles';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
