import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { FlayyerIO } from '@flayyer/flayyer';

import Date from '@components/Date';
import MDXComponents from '@components/MDXComponents';
import { getContent, getMDXPostsSlugs, MatterContent } from '@utils/content';
import { getNotionPostPage, getNotionPostsSlugs, renderBlock } from '@utils/notion';
import useTranslation from '@utils/i18n/hooks';
import React, { Fragment } from 'react';

type MDXPost = {
    compiledSource: string;
    renderedOutput: string;
};

export type NotionBlocks = {
    [key: string]: any;
};

export type BlogPost = {
    content: MDXPost | NotionBlocks[];
    frontMatter: MatterContent;
    type: 'notion' | 'mdx';
};

interface Vars {
    title: string;
    logo: string;
    image?: string;
}

export default function Blog(props: BlogPost): JSX.Element {
    const t = useTranslation();
    const { locale } = useRouter();

    console.log(props.frontMatter)

    // if (props.type !== 'mdx') {
    //     return <h1>Notion</h1>;
    // }

    const {
        content,
        frontMatter: { title, date, description, slug, canonical_url, cover, category }
    } = props;

    const render =
        props.type === 'mdx'
            ? hydrate(content as MDXPost, {
                  components: MDXComponents
              })
            : null;

    const url = `https://fmontes.com${locale === 'es' ? '/es' : ''}/blog/${slug}`;

    const variables: Vars = {
        title,
        logo: category?.toLowerCase() || ''
    };

    if (cover) {
        variables.image = `https://fmontes.com/images/blog/${cover}`;
    }

    const flayyer = new FlayyerIO({
        tenant: 'fmontes-com',
        deck: 'fmontes-flayyer',
        template: 'main',
        variables,
        meta: {
            id: slug
        }
    });

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

            <main className="prose lg:prose-lg xl:prose-xl mt-12 mx-auto">
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

                {render ||
                    (content as NotionBlocks[])?.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))}

                <hr />
                <blockquote>
                    {t('post_blog_action')}: <a href="https://twitter.com/fmontes">@fmontes</a>
                </blockquote>
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getMDXPostsSlugs();
    const notion = await getNotionPostsSlugs();

    return {
        fallback: false,
        paths: [...paths, ...notion]
    };
};

export const getStaticProps: GetStaticProps = async ({
    params,
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    let props = null;

    try {
        const { mdxSource, frontMatter } = await getContent({
            slug: params.slug as string,
            locale,
            type: 'posts'
        });
        props = {
            content: mdxSource,
            frontMatter,
            type: 'mdx'
        };
    } catch (error) {
        const page = await getNotionPostPage(params.slug as string, locale);
        console.log(page);
        props = page;
    }

    return {
        props: {
            ...props
        }
    };
};
