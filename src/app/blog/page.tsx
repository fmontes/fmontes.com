import { getPosts } from '@/utils/content';
import { DateText } from '@/components/Date';
import CardItem from '@/components/CardItem';
import { SITE } from '@/utils/const';
import { Metadata } from 'next';
import { defaultOpenGraph } from '@/utils/content';

export const metadata: Metadata = {
  title: 'Freddy Montes - Blog',
  openGraph: {
    ...defaultOpenGraph,
    title: 'Freddy Montes - Blog',
    url: `${SITE}/blog`,
    images: [
      {
        url: `${SITE}/static/images/banner.png`,
        alt: 'Freddy Montes - Software Engineer, Frontend Developer, and UI Designer',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function Blog() {
  const posts = await getPosts();

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>Blog</h1>

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
                <DateText className="text-blue-500 dark:text-blue-500" date={date} />
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