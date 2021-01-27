import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
// import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Date from '@components/Date';
import { NextSeo } from 'next-seo';

import MDXComponents from '@components/MDXComponents';
import { getContent, MatterContent } from '@utils/content';
import useTranslation from '@utils/i18n';

type BlogPost = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Blog({ mdxSource, frontMatter: { title } }: BlogPost): JSX.Element {
    const t = useTranslation();

    const content = hydrate(mdxSource, {
        components: MDXComponents
    });

    return (
        <>
            <NextSeo description={t('bio')} title={t('title')} />

            <main className="sm:col-span-2">
                <h1>{title}</h1>
                {content}
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    params,
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
