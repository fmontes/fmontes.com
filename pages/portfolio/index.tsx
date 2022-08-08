import { getContentSortedByDate, MatterContent } from '@utils/content';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPropsContext } from 'next';

import PortfolioListItem from '@components/PortfolioListItem';
import useTranslation from '@utils/i18n/hooks';

type Props = {
    posts: MatterContent[];
};

export default function Home({ posts }: Props): JSX.Element {
    const t = useTranslation();

    return (
        <>
            <main className="prose dark:prose-dark lg:prose-md xl:prose-lg mt-12 mx-auto">
                <h1>{t('portfolio')}</h1>
                {posts.map((post: MatterContent, i: number) => (
                    <PortfolioListItem key={i} {...post} />
                ))}
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
