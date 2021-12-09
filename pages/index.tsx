import { getPosts, MatterContent } from '@utils/content';
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
        <main className="main mx-auto mt-5 constrain">
            <h1 className="text-2xl font-bold sm:text-3xl tracking-tight sm:leading-tight mb-8">
                {t('latest_blog_posts')}
            </h1>
            <main className="grid gap-6 sm:grid-cols-2">
                {posts.map((post: MatterContent, i: number) => (
                    <BlogItem key={i} {...post} />
                ))}
            </main>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getPosts(locale);

    return { props: { posts } };
};
