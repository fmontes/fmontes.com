import { PageParams, getDefaultOpenGraph, getPosts } from '@/utils/content';
import { Date } from '@/components/Date';
import { getDictionary } from '../dictionaries';
import CardItem from '@/components/CardItem';
import { SITE } from '@/utils/const';

export async function generateMetadata({ params }: { params: PageParams }) {
  const dictionary = await getDictionary(params.lang);
  const defaultOpenGraph = await getDefaultOpenGraph(params.lang);

  return {
    title: 'Freddy Montes - Blog',
    openGraph: {
      ...defaultOpenGraph,
      title: 'Freddy Montes - Blog',
      url: `${SITE}/${params.lang}/${params.slug}`,
      images: [
        {
          url: `${SITE}/static/images/banner_${params.lang}.png`,
          alt: `${dictionary.title} - ${dictionary.description}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function Home({ params }: { params: PageParams }) {
  if ((params.lang as any) === 'sw.js') return null;

  const dictionary = await getDictionary(params.lang);
  const posts = getPosts(params.lang);

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>{dictionary.nav.blog}</h1>

      <section className="flex flex-col gap-12">
        {posts.map((post, i: number) => {
          const { title, date, slug, category, cover, description } = post;

          let imageUrl = null;

          if (cover) {
            try {
              new URL(cover);
              imageUrl = cover;
            } catch (error) {
              imageUrl = `/static/images/blog/${cover}`;
            }
          }

          return (
            <CardItem category={category} key={i} href={`/blog/${slug}`} imageUrl={imageUrl}>
              <div>
                <Date className="text-blue-500 dark:text-blue-500" date={date} />
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </CardItem>
          );
        })}
      </section>
    </main>
  );
}
