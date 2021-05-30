import translations from './utils/i18n/translations';

const { es, en } = translations;
const SITE = 'https://fmontes.com';
const TWITTER_HANDLE = '@fmontes';

const SEO = {
    en: {
        title: en.title,
        description: en.bio,
        openGraph: {
            type: 'website',
            locale: 'en_IE',
            url: SITE,
            title: en.title,
            description: en.bio,
            images: [
                {
                    url: `${SITE}/images/banner_en.png`,
                    alt: en.title,
                    width: 1280,
                    height: 720
                }
            ]
        },
        twitter: {
            handle: TWITTER_HANDLE,
            site: TWITTER_HANDLE,
            cardType: 'summary_large_image'
        }
    },
    es: {
        title: es.title,
        description: es.bio,
        openGraph: {
            type: 'website',
            locale: 'es_IE',
            url: SITE,
            title: es.title,
            description: es.bio,
            images: [
                {
                    url: `${SITE}/images/banner_es.png`,
                    alt: es.title,
                    width: 1280,
                    height: 720
                }
            ]
        },
        twitter: {
            handle: TWITTER_HANDLE,
            site: TWITTER_HANDLE,
            cardType: 'summary_large_image'
        }
    }
};

export default SEO;
