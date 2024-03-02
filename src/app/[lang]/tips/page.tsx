import { PageParams, getDefaultOpenGraph, getTips } from '@/utils/content';
import { DateText } from '@/components/Date';
import { getDictionary } from '../dictionaries';
import { SITE } from '@/utils/const';
import { NavLink } from '@/components/NavLink';

export async function generateMetadata({ params }: { params: PageParams }) {
  const dictionary = await getDictionary(params.lang);
  const defaultOpenGraph = await getDefaultOpenGraph(params.lang);

  return {
    title: 'Freddy Montes - Frontend Tips',
    openGraph: {
      ...defaultOpenGraph,
      title: 'Freddy Montes - Frontend Tips',
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
  const posts = getTips(params.lang);

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>{dictionary.nav.tips}</h1>

      <section className="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 mx-12">
        {posts.map(({ title, date, slug }, i: number) => {

          return (
            <div key={i} className="rounded-md bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 p-1 transition-transform hover:scale-105 hover:-rotate-2 hover:shadow-sm">
              <NavLink
                href={`/tips/${slug}`}
                className="rounded h-full w-full bg-black bg-opacity-80 unset flex flex-col justify-center space-y-2 p-8 no-underline"
                style={{
                  containerType: 'inline-size'
                }}>
                <h2 className="font-semibold leading-none text-white" style={{
                  fontSize: 'clamp(1rem, 10cqi, 3rem)'
                }}>
                  {title}
                </h2>
                <DateText date={date} />
              </NavLink>
            </div>
          );
        })}
      </section>
    </main>
  );
}
