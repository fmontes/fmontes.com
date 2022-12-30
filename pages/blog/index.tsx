import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import { getPosts } from '@utils/content';
import useTranslation from '@utils/i18n/hooks';
import { BlogPost } from './[slug]';
import Date from '@components/Date';
import CardItem from '@components/CardItem';

type Props = {
    posts: BlogPost[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();

    return (
        <main className="prose dark:prose-invert lg:prose-md xl:prose-lg mt-12 mx-auto max-w-4xl prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
            <h1>{t('blog')}</h1>

            <section className="flex flex-col gap-12">
                {posts.map(
                    (
                        {
                            frontMatter: { slug, category, cover, title, date, description },
                            type
                        }: BlogPost,
                        i: number
                    ) => {
                        let imageUrl = null;

                        if (cover) {
                            const isMDX = type === 'mdx';
                            imageUrl = isMDX ? `/images/blog/${cover}` : cover;
                        }

                        return <>
                            <CardItem
                                category={category}
                                key={i}
                                href={`/blog/${slug}`}
                                imageUrl={imageUrl}
                            >
                                <div>
                                    <h2>{title}</h2>
                                    <Date
                                        className="text-blue-500 dark:text-blue-500"
                                        date={date}
                                    />
                                    <p>{description}</p>
                                </div>
                            </CardItem>
                        </>
                    }
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
