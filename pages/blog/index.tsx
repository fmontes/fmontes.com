import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getPosts } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';
import { BlogPost } from './[slug]';
import Date from '@components/Date';
import BlogImage from '@components/BlogImage';

type Props = {
    posts: BlogPost[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();
    const { locale } = useRouter();

    return (
        <main className="prose dark:prose-invert lg:prose-md xl:prose-lg mt-12 mx-auto max-w-4xl prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
            <h1>{t('latest_blog_posts')}</h1>

            <section className="flex flex-col gap-12">
                {posts.map(
                    (
                        {
                            frontMatter: { slug, category, cover, title, date, description },
                            type
                        }: BlogPost,
                        i: number
                    ) => (
                        <article
                            key={i}
                            className="border-b-2 border-solid border-blue-100 dark:border-blue-800 pb-6"
                        >
                            <Link href={`/blog/${slug}`} locale={locale}>
                                <a className="flex flex-col gap-6 md:flex-row no-underline">
                                    <BlogImage
                                        category={category}
                                        cover={cover}
                                        type={type}
                                        width="w-full md:w-72"
                                    />

                                    <div>
                                        <h2>{title}</h2>
                                        <Date
                                            className="text-blue-500 dark:text-blue-500"
                                            date={date}
                                        />
                                        <p>{description}</p>
                                    </div>
                                </a>
                            </Link>
                        </article>
                    )
                )}
            </section>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getPosts(locale);

    return { props: { posts }, revalidate: 10 };
};
