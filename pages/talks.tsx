import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { NextSeo } from 'next-seo';

import MDXComponents from '@components/MDXComponents';
import { getContent, MatterContent } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';
import { MDXRemote } from 'next-mdx-remote';

type Props = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Talks({ mdxSource, frontMatter: { title } }: Props): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <NextSeo description={t('bio')} title={t('title')} />

            <main>
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
        slug: 'talks',
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
