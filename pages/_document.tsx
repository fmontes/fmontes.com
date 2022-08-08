import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@utils/google-analytics';
import Footer from '@components/Footer';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    {GA_TRACKING_ID && process.env.NODE_ENV === 'production' ? (
                        <>
                            <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                        window.dataLayer = window.dataLayer || [];
                                        function gtag(){dataLayer.push(arguments);}
                                        gtag('js', new Date());
                                        gtag('config', '${GA_TRACKING_ID}');
                                    `
                                }}
                            />
                        </>
                    ) : null}
                    <meta content="2c7afbfb9165a295" name="yandex-verification" />

                    <link href="/static/favicon.ico" rel="shortcut icon" />
                    <link href="/static/site.webmanifest" rel="manifest" />
                    <link
                        href="/static/apple-touch-icon.png"
                        rel="apple-touch-icon"
                        sizes="180x180"
                    />
                    <link
                        href="/static/favicon-32x32.png"
                        rel="icon"
                        sizes="32x32"
                        type="image/png"
                    />
                    <link
                        href="/static/favicon-16x16.png"
                        rel="icon"
                        sizes="16x16"
                        type="image/png"
                    />
                    <link color="#07313A" href="/static/safari-pinned-tab.svg" rel="mask-icon" />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                    <meta content="/static/browserconfig.xml" name="msapplication-config" />
                </Head>
                <body className="dark:bg-blue-900">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
