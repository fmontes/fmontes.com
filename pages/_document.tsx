import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@utils/google-analytics';

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
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
