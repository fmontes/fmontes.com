import { Metadata } from 'next';
import { getTips } from '@/utils/content';
import Link from 'next/link';
import { DateText } from '@/components/Date';

export const metadata: Metadata = {
  title: 'Tips',
  description: 'Quick tips and tricks about web development',
};

export default async function TipsPage() {
  const tips = await getTips();

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg prose-h2:my-0 lg:prose-h2:my-0 xl:prose-h2:my-0 prose-h2:mb-4 lg:prose-h2:mb-4 xl:prose-h2:mb-4 dark:prose-a:text-white prose-a:text-blue-900 dark:prose-h2:text-yellow">
      <h1>Tips</h1>

      <section className="grid grid-flow-row gap-4 sm:grid-cols-1 md:grid-cols-2 lg:mx-12">
        {tips.map(({ title, date, slug }, i) => (
          <div key={i} className="rounded-md bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 p-1 transition-transform hover:scale-105 hover:-rotate-2 hover:shadow-sm">
            <Link
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
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
} 