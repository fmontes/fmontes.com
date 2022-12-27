import Script from 'next/script';

import useTranslation from '@utils/i18n/hooks';
import Head from 'next/head';

function Subscribe() {
    const t = useTranslation();

    return (
        <section className="bg-cyan text-cyan-900 rounded-xl p-8">
            <h2 className="text-lg leading-tight mb-2 font-bold">{t('newsletter_title')}</h2>
            <p dangerouslySetInnerHTML={{ __html: t('newsletter_desc') }} className="mb-6" />

            <div id="custom-substack-embed"></div>

            <Script
                id="substack"
                dangerouslySetInnerHTML={{
                    __html: `window.CustomSubstackWidget = {
                    substackUrl: "fmontes.substack.com",
                    placeholder: "example@gmail.com",
                    buttonText: "Subscribe",
                    theme: "custom",
                    colors: {
                        primary: "#02322e",
                        input: "#9cfcf3",
                        email: "#02322e",
                        text: "#fff",
                    }
                }`
                }}
            />

            <Script src="https://substackapi.com/widget.js" async></Script>

            <style jsx global>{`
                #custom-substack-embed form {
                    max-width: initial !important;
                    display: flex;
                    flex-direction: column;
                    border: none !important;
                    align-items: baseline !important;
                    gap: 0.73rem;
                    height: auto !important;
                    font-size: 1.25rem;
                    font-weight: bold;
                }

                #custom-substack-embed input {
                    border-bottom: solid 4px #03c7b7 !important;
                    height: 64px !important;
                }

                #custom-substack-embed input::placeholder {
                    color: #03c7b7 !important;
                }

                #custom-substack-embed button {
                    height: 64px !important;
                    font-size: 1.25rem !important;
                    font-weight: bold;
                    border-radius: 0.5rem;
                }
            `}</style>
        </section>
    );
}

export default Subscribe;
