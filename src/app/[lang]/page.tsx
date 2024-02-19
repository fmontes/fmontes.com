import { getPosts } from '@/utils/content';
import { HomeBlogItem } from '@/components/HomeBlogItem';
import { getDictionary } from './dictionaries'

export default async function Home({
  params,
}: {
  params: {
    slug: string;
    lang: 'en' | 'es';
  };
}) {
  if ((params.lang as any) === 'sw.js') return null;

  const dict = await getDictionary(params.lang)

  const posts = getPosts(params.lang);

  return (
    <main className="mx-auto mt-5">
      <h1
        dangerouslySetInnerHTML={{ __html: dict.bio }}
        className="text-blue-700 dark:text-cyan text-xl lg:text-2xl my-16 sm:my-20 md:text-center font-normal leading-tight tracking-tight">
      </h1>

      <div className="prose dark:prose-invert block max-w-full">
        <h2 className="text-2xl font-bold sm:text-3xl tracking-tight sm:leading-tight mb-6">
          {dict.latest_blog_posts}
        </h2>
        <section className="flex flex-wrap gap-6 mb-16">
          {posts.slice(0, 3).map((post, i: number) => <HomeBlogItem key={i} {...post} />)}
        </section>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-1"></div>
        <div className="flex-1"></div>
      </div>
    </main>
  );
}
