import { getPosts } from '@utils/content';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import useTranslation from '@utils/i18n/hooks';
import { BlogPost } from './blog/[slug]';
import BlogItem from '@components/BlogItem';
import Subscribe from '@components/Subscribe';
import Ebooks from '@components/Ebooks';

type Props = {
    posts: BlogPost[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();

    const colors = ['blue', 'green', 'yellow'];

    return (
        <main className="main mx-auto mt-5">
            <h1
                dangerouslySetInnerHTML={{ __html: t('bio') }}
                className="text-cyan-900 dark:text-cyan text-lg sm:text-xl lg:text-2xl mt-16 mb-20 md:text-center font-normal leading-tight"
            />

            <div className="prose dark:prose-dark block max-w-full">
                <h2 className="text-2xl font-bold sm:text-3xl tracking-tight sm:leading-tight mb-6">
                    {t('latest_blog_posts')}
                </h2>
                <section className="flex flex-wrap gap-6 mb-16">
                    {posts
                        .filter((_item, i) => i < 3)
                        .map((post: BlogPost, i: number) => (
                            <BlogItem key={i} {...post} color={colors[i]} />
                        ))}
                </section>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-1">
                    <Subscribe />
                </div>
                <div className="flex-1">
                    <Ebooks />
                </div>
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getPosts(locale);

    return { props: { posts }, revalidate: 10 };
};
