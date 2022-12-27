import { getContentSortedByDate, MatterContent } from '@utils/content';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import useTranslation from '@utils/i18n/hooks';
import CardItem from '@components/CardItem';

type Props = {
    posts: MatterContent[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <main className="prose dark:prose-invert lg:prose-md xl:prose-lg mt-12 mx-auto max-w-4xl prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
                <h1>{t('portfolio')}</h1>
                <section className="flex flex-col gap-12">
                    {posts.map(({ title, description, slug }: MatterContent, i: number) => (
                        <CardItem
                            key={i}
                            href={`/blog/${slug}`}
                            imageUrl={`/images/portfolio/${slug}/thumbnail.png`}
                        >
                            <div>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        </CardItem>
                    ))}
                </section>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async ({
    locale
}: GetStaticPropsContext<ParsedUrlQuery>) => {
    const posts = await getContentSortedByDate(locale, 'portfolio');

    return {
        props: {
            posts
        },
        revalidate: 10
    };
};
