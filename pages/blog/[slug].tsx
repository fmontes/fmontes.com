import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { Fragment } from 'react';

import Date from '@components/Date';
import MDXComponents from '@components/MDXComponents';
import Tweetme from '@components/Tweetme';
import { getContent, getMDXPostsSlugs, MatterContent } from '@utils/content';
import { getNotionPostPage, getNotionPostsSlugs, renderBlock } from '@utils/notion';
import { MDXRemote } from 'next-mdx-remote';

type MDXPost = {
    compiledSource: string;
    renderedOutput: string;
};

export type NotionBlocks = {
    [key: string]: any;
};

export type BlogPost = {
    content?: MDXPost | NotionBlocks[];
    frontMatter: MatterContent;
    type: 'notion' | 'mdx';
    color?: string;
};

interface Vars {
    title: string;
    logo: string;
    image?: string;
}

export default function Blog(props: BlogPost): JSX.Element {
    const { locale } = useRouter();

    const {
        content,
        frontMatter: { title, date, description, slug, canonical_url, cover, category }
    } = props;

    const url = `https://fmontes.com${locale === 'es' ? '/es' : ''}/blog/${slug}`;

    const variables: Vars = {
        title,
        logo: category?.toLowerCase() || 'fmontes'
    };

    const isMDX = props.type === 'mdx';

    let image = `https://fmontes.com/images/banner_${locale}.png/`

    if (cover) {
        image = isMDX ? `https://fmontes.com/images/blog/${cover}` : cover;
    }

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
                    images: [{ url: `https://fmontes.com/api/og?title=${encodeURI(title)}`, width: 1200, height: 620, alt: title }]
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
                images={[`https://fmontes.com/api/og?title=${encodeURI(title)}`]}
                publisherLogo="/static/android-chrome-192x192.png"
                publisherName="Freddy Montes"
                title={title}
                url={url}
            />

            <main className="prose prose-fmontes lg:prose-md xl:prose-lg dark:prose-invert mt-12 mx-auto">
                <header className="not-prose mb-10">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-none md:leading-none lg:leading-none text-prose text-blue-700 dark:text-blue-200 mb-6">{title}</h1>
                    <p className="flex items-center">
                        <span className="flex items-center">
                            <Image
                                alt="Freddy Montes - Frontend Developer, Designer and Teacher"
                                className="rounded-full m-0"
                                height={32}
                                src="/images/avatar.jpg"
                                width={32}
                            />

                            <span className="ml-2">
                                <a href="https://twitter.com/fmontes" className="underline text-blue-500 dark:text-cyan-500">Freddy Montes</a>
                            </span>
                        </span>
                        <span className="mx-4 text-gray-300">|</span>
                        <Date date={date} />
                    </p>
                </header>

                {isMDX ? (
                    <MDXRemote {...(content as MDXPost)} components={MDXComponents} />
                ) : (
                    (content as NotionBlocks[])?.map((block) => (
                        <Fragment key={block.id}>{renderBlock(block)}</Fragment>
                    ))
                )}

                <Tweetme />
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
        props = page;
    }

    return {
        props: {
            ...props
        },
        revalidate: 10
    };
};
