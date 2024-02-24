import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'

import { Date } from '@/components/Date';
import { SITE, getDefaultOpenGraph } from '@/utils/content';

function getPage(params) {
  const FOLDER = path.resolve(process.cwd(), 'src/data/pages')
  const fullPath = path.join(FOLDER, `${params.lang}/${params.slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  return matter(fileContents);
}

export async function generateMetadata({ params }: { params: any }) {
  const { data } = getPage(params);

  const defaultOpenGraph = await getDefaultOpenGraph({
    lang: params.lang
  })

  return {
    title: `Freddy Montes - ${data.title}`,
    openGraph: {
      ...defaultOpenGraph,
      title: `Freddy Montes - ${data.title}`,
      url: `${SITE}/${params.lang}/${params.slug}`
    }
  };
}

export default async function Page({ params }: {
  params: {
    slug: string, lang: string
  }
}) {
  const { data, content } = getPage(params);

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg">
      <h1>{data.title}</h1>
      <MDXRemote components={{
        Date
      }} source={content} />
    </main>
  );
}