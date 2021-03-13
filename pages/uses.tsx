import hydrate from 'next-mdx-remote/hydrate';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { NextSeo } from 'next-seo';

import MDXComponents from '@components/MDXComponents';
import { getContent, MatterContent } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';

type Props = {
    mdxSource: {
        compiledSource: string;
        renderedOutput: string;
    };
    frontMatter: MatterContent;
};

export default function Blog({ mdxSource, frontMatter: { title } }: Props): JSX.Element {
    const t = useTranslation();

    const content = hydrate(mdxSource, {
        components: MDXComponents
    });

    return (
        <>
            <NextSeo description={t('bio')} title={t('title')} />

            <main>
                <h1>{title}</h1>
                {content}
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const { mdxSource, frontMatter } = await getContent({
        slug: 'uses',
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
