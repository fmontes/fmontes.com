import { getContentSortedByDate, MatterContent } from '@utils/content';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import useTranslation from '@utils/i18n/hooks';
import BlogItem from '@components/BlogItem';

type Props = {
    posts: MatterContent[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();
    return (
        <>
            <h1 className="mb-8">{t('latest_blog_posts')}</h1>
            <main className="grid gap-6 sm:grid-cols-2 constrain m-auto">
                {posts.map((post: MatterContent, i: number) => (
                    <BlogItem key={i} {...post} />
                ))}
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getContentSortedByDate(locale, 'posts');

    return { props: { posts } };
};
