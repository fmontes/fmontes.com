import Link from 'next/link';

import { getPosts } from '@/utils/content';
import { Date } from '@/components/Date';
import { getDictionary } from '../dictionaries';
import CardItem from '@/components/CardItem';

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
    <main className="prose dark:prose-invert lg:prose-md xl:prose-lg mt-12 mx-auto max-w-4xl prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>{dict.nav.blog}</h1>

      <section className="flex flex-col gap-12">
        {posts.map((post, i: number) => {
          const { title, date, slug, category, cover, description } = post;          

          return <CardItem
            category={category}
            key={i}
            href={`/blog/${slug}`}
            imageUrl={cover}
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
