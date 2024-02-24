import { SITE, getDefaultOpenGraph, getPosts } from '@/utils/content';
import { Date } from '@/components/Date';
import { getDictionary } from '../dictionaries';
import CardItem from '@/components/CardItem';

export async function generateMetadata({ params }: { params: any }) {

  const defaultOpenGraph = await getDefaultOpenGraph({
    lang: params.lang
  })

  return {
    title: 'Freddy Montes - Blog',
    openGraph: {
      ...defaultOpenGraph,
      title: 'Freddy Montes - Blog',
      url: `${SITE}/${params.lang}/${params.slug}`
    }
  };
}

export default async function Home({
  params,
}: {
  params: {
    slug: string;
    lang: 'en' | 'es'
  };
}) {
  if (params.lang as any === 'sw.js') return null;

  const dict = await getDictionary(params.lang)
  const posts = getPosts(params.lang);

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>{dict.nav.blog}</h1>

      <section className="flex flex-col gap-12">
        {posts.map((post, i: number) => {
          const { title, date, slug, category, cover, description } = post;

          let imageUrl

          if (cover) {
            try {
              new URL(cover);
              imageUrl = cover;
            } catch (error) {
              imageUrl = `/static/images/blog/${cover}`;
            }
          }
          
          return <CardItem
            category={category}
            key={i}
            href={`/blog/${slug}`}
            imageUrl={imageUrl}
          >
            <div>
              <Date
                className="text-blue-500 dark:text-blue-500"
                date={date}
              />
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </CardItem>;
        })}
      </section>
    </main>
  );
}
