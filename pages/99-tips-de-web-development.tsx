import Image from 'next/image';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import cover from '../public/images/99-tips/99-cover.png';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function Book(): JSX.Element {
    const { locale } = useRouter();
    const date = '2021-06-20';
    const description =
        'Este libro recopila 99 soluciones a problemas de desarrollo web que se pueden resolver de manera nativa, fácil, pero más importante, eficientemente.';
    const title = 'eBook: 99 tips para Web Development';
    const slug = '99-tips-de-web-development';
    const url = `https://fmontes.com/${locale}/${slug}`;

    // https://fmontes.com/images/99-tips/99-rrss.png



    return (
        <>
            <NextSeo
                description={description}
                openGraph={{
                    type: 'article',
                    url,
                    title,
                    description: description,
                    images: [{ url:  }]
                }}
                title={`${title} – Freddy Montes`}
                twitter={{
                    handle: '@fmontes',
                    site: '@fmontes',
                    cardType: 'summary_large_image'
                }}
            />
            <ArticleJsonLd
                authorName="Freddy Montes"
                dateModified={date}
                datePublished={date}
                description={description}
                images={[]}
                publisherLogo="/static/android-chrome-192x192.png"
                publisherName="Freddy Montes"
                title={title}
                url={url}
            />
            <h1 className="text-center">
                <Image
                    alt="99 tips de Web Development"
                    height="470"
                    src={cover}
                    title="99 tips de Web Development"
                    width="590"
                />
            </h1>

            <div className="max-w-lg m-auto">
                <header>
                    <h2>
                        Descargalo{' '}
                        <span className="uppercase text-green-600 font-bold">¡gratis!</span>
                    </h2>
                </header>

                <Script src="https://gumroad.com/js/gumroad-embed.js" />

                <div className="gumroad-product-embed">
                    <a href="https://gumroad.com/l/ZYhCP">Cargando...</a>
                </div>
            </div>
        </>
    );
}
