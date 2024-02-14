
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';


export default function Home({ params }: {
  params: {
    slug: string, lang: string
  }
}) {
  if (params.slug === '/sw.js') return null;

  const FOLDER = path.resolve(process.cwd(), 'src/data/posts')
  const fullPath = path.join(FOLDER, `${params.lang}`);
  const files = fs.readdirSync(fullPath, 'utf-8');

  const posts = files.map((itemPath) => {
    const content = fs.readFileSync(path.join(fullPath, itemPath), 'utf8');
    return matter(content).data
  }).sort((postA, postB) => {
    return new Date(postA.date) < new Date(postB.date) ? 1 : -1;
  });


  return (
    <main className="main mx-auto mt-5">
      <h1
        // dangerouslySetInnerHTML={{ __html: t('bio') }}
        className="text-blue-700 dark:text-cyan text-xl lg:text-2xl my-16 sm:my-20 md:text-center font-normal leading-tight tracking-tight"
      >Hello</h1>

      <div className="prose dark:prose-invert block max-w-full">
        <h2 className="text-2xl font-bold sm:text-3xl tracking-tight sm:leading-tight mb-6">
          {/* {t('latest_blog_posts')} */}
        </h2>
        <section className=" gap-6 mb-16">
          {posts
            .map((post, i: number) => (
              <div key={i}>
                <p>{post.title}</p>
                <p>{post.date}</p>
              </div>
            ))}
        </section>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex flex-1">
        </div>
        <div className="flex-1">
        </div>
      </div>
    </main>
  );
}