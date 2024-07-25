import { PageParams, getPosts } from '@/utils/content';
import HomeBlogItem from '@/components/HomeBlogItem';
import { getDictionary } from './dictionaries';
import Ebooks from '@/components/Ebooks';
import { i18n } from '@/utils/i18n/config';

export default async function Home({ params }: { params: PageParams }) {
  if (!i18n.locales.includes(params.lang as any)) return null;

  const dict = await getDictionary(params.lang);
  const posts = getPosts(params.lang);

  return (
    <main className="mx-auto mt-5">
      <h1
        dangerouslySetInnerHTML={{ __html: dict.bio }}
        className="my-16 text-xl font-normal leading-tight tracking-tight text-blue-700 dark:text-cyan lg:text-2xl sm:my-20 md:text-center"></h1>

      <div className="block max-w-full prose dark:prose-invert">
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
          {dict.latest_blog_posts}
        </h2>
        <section className="flex flex-wrap gap-6 mb-16">
          {posts.slice(0, 3).map((post, i: number) => (
            <HomeBlogItem key={i} {...post} />
          ))}
        </section>
      </div>

      <Ebooks />
    </main>
  );
}
