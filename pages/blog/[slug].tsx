import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Date from '@components/Date';
import MDXComponents from '@components/MDXComponents';
import { getContent, getPostsSlugs, MatterContent } from '@utils/content';

type BlogPost = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Blog({
    mdxSource,
    frontMatter: { title, date, description, slug, canonical_url }
}: BlogPost): JSX.Element {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    });

    const { locale } = useRouter();

    const url = `https://fmontes.com${locale === 'es' ? '/es' : ''}/blog/${slug}`;
    const image = {
        url: `https://fmontes.com/static/images/banner_${locale}.png`,
        alt: title
    };

    return (
        <>
            <NextSeo
                canonical={canonical_url}
                description={description}
                openGraph={{
                    type: 'article',
                    article: {
                        publishedTime: date
                    },
                    url,
                    title,
                    description: description,
                    images: [image]
                }}
                title={`${title} – Lee Robinson`}
            />
            <ArticleJsonLd
                authorName="Freddy Montes"
                dateModified={date}
                datePublished={date}
                description={description}
                images={[image.url]}
                publisherLogo="/static/favicons/android-chrome-192x192.png"
                publisherName="Freddy Montes"
                title={title}
                url={url}
            />

            <main className="sm:col-span-2">
                <h1>{title}</h1>
                <p>
                    <Date date={date} />
                </p>
                {content}
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getPostsSlugs();

    return {
        fallback: false,
        paths
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const { mdxSource, frontMatter } = await getContent(params.slug as string, locale);

    return {
        props: {
            mdxSource,
            frontMatter
        }
    };
};
