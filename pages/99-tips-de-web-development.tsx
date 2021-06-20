import Image from 'next/image';
import FlayyerIO from '@flayyer/flayyer';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import cover from '../public/images/99-tips/99-cover.png';
import { useRouter } from 'next/router';

export default function Book(): JSX.Element {
    const { locale } = useRouter();
    const date = '2021-06-20';
    const description =
        'Este libro recopila 99 soluciones a problemas de desarrollo web que se pueden resolver de manera nativa, fácil, pero más importante, eficientemente.';
    const title = 'eBook: 99 tips para Web Development';
    const slug = '99-tips-de-web-development';
    const url = `https://fmontes.com/${locale}/${slug}`;

    const flayyer = new FlayyerIO({
        tenant: 'fmontes-com',
        deck: 'fmontes-flayyer',
        template: 'main',
        variables: {
            image: 'https://fmontes.com/images/99-tips/99-rrss.png',
            title
        },
        meta: {
            id: slug
        }
    });

    return (
        <>
            <NextSeo
                description={description}
                openGraph={{
                    type: 'article',
                    url,
                    title,
                    description: description,
                    images: [{ url: flayyer?.href() }]
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
                images={[flayyer?.href()]}
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
                    <h3 className="m-0 my-4 text-base border border-yellow-300 bg-yellow-100 p-2 rounded">
                        🎁 El libro es gratis pero puedes regalarme un café o una cerveza.
                    </h3>
                </header>
                <p>
                    Este libro <b>recopila 99 soluciones a problemas</b> de desarrollo web que se
                    pueden resolver de manera nativa, fácil, pero más importante, eficientemente.
                </p>
                <script
                    async
                    data-uid="8e2fa14e8a"
                    src="https://fmontes.ck.page/8e2fa14e8a/index.js"
                />
            </div>
        </>
    );
}
