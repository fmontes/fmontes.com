import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import MDXComponents from '@components/MDXComponents';
import TechList from '@components/TechList';
import { getContent, getSlugs, MatterContent } from '@utils/content';
import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

type BlogPost = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Blog({
    mdxSource,
    frontMatter: { title, date, description, slug, tech }
}: BlogPost): JSX.Element {
    const { locale } = useRouter();

    const url = `https://fmontes.com${locale === 'es' ? '/es' : ''}/blog/${slug}`;
    const image = {
        url: `https://fmontes.com/static/images/banner_${locale}.png`,
        alt: title
    };

    return (
        <>
            <NextSeo
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

            <main className="prose lg:prose-lg xl:prose-xl mt-12 mx-auto">
                <h1>{title}</h1>

                <p>
                    <blockquote className="text-base">{description}</blockquote>
                </p>

                <h3>Tech Stack</h3>
                <TechList tech={tech} />
                <MDXRemote {...mdxSource} components={MDXComponents} />
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getSlugs('portfolio');

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
        type: 'portfolio'
    });

    return {
        props: {
            mdxSource,
            frontMatter
        }
    };
};
