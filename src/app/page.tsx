import { getPosts } from '@/utils/content';
import HomeBlogItem from '@/components/HomeBlogItem';
import Ebooks from '@/components/Ebooks';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="mx-auto mt-5">
      <h1 className="my-16 text-xl font-normal leading-tight tracking-tight text-blue-700 dark:text-cyan lg:text-2xl sm:my-20 md:text-center">
        Bridging design and code for impactful product solutions
      </h1>

      <div className="block max-w-full prose dark:prose-invert">
        <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
          Latest Blog Posts
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