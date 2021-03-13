import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Date from '@components/Date';
import MDXComponents from '@components/MDXComponents';
import { getContent, getSlugs, MatterContent } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';

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
    const t = useTranslation();

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
                title={`${title} – Freddy Montes`}
            />
            <ArticleJsonLd
                authorName="Freddy Montes"
                dateModified={date}
                datePublished={date}
                description={description}
                images={[image.url]}
                publisherLogo="/static/android-chrome-192x192.png"
                publisherName="Freddy Montes"
                title={title}
                url={url}
            />

            <main>
                <h1>{title}</h1>
                <p className="flex items-center">
                    <span className="flex items-center">
                        <Image
                            alt="Freddy Montes - Frontend Developer, Designer and Teacher"
                            className="rounded-full"
                            height={32}
                            src="/images/avatar.jpg"
                            width={32}
                        />

                        <span className="ml-2">
                            <a href="https://twitter.com/fmontes">Freddy Montes</a>
                        </span>
                    </span>
                    <span className="mx-4 text-gray-300">|</span>
                    <Date date={date} />
                </p>
                {content}
                <hr />
                <blockquote>
                    {t('post_blog_action')}: <a href="https://twitter.com/fmontes">@fmontes</a>
                </blockquote>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs('posts');

    return {
        fallback: false,
        paths
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const { mdxSource, frontMatter } = await getContent({
        slug: params.slug as string,
        locale,
        type: 'posts'
    });

    return {
        props: {
            mdxSource,
            frontMatter
        }
    };
};
