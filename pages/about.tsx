import { MDXRemote } from 'next-mdx-remote';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { NextSeo } from 'next-seo';

import MDXComponents from '@components/MDXComponents';
import { getContent, MatterContent } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';

type BlogPost = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Blog({ mdxSource, frontMatter: { title } }: BlogPost): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <NextSeo description={t('bio')} title={t('title')} />

            <main className="prose dark:prose-invert lg:prose-lg xl:prose-xl mt-12 mx-auto">
                <h1>{title}</h1>
                <MDXRemote {...mdxSource} components={MDXComponents} />
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const { mdxSource, frontMatter } = await getContent({
        slug: 'about',
        locale,
        type: 'pages'
    });

    return {
        props: {
            mdxSource,
            frontMatter
        }
    };
};
