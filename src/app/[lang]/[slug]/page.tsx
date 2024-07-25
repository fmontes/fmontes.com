import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation'

import { DateText } from '@/components/Date';
import { PageParams, getDefaultOpenGraph } from '@/utils/content';
import { SITE } from '@/utils/const';
import { getDictionary } from '../dictionaries';

function getPage(params: PageParams) {
  try {
    const FOLDER = path.resolve(process.cwd(), 'src/data/pages');
    const fullPath = path.join(FOLDER, `${params.lang}/${params.slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    return matter(fileContents);
  } catch (error) {
    console.error(error);
    return null
  }
}

export async function generateMetadata({ params }: { params: PageParams }) {
  const dictionary = await getDictionary(params.lang);
  const page = getPage(params);

  if (!page) {
    return;
  }

  const { data } = page;

  const defaultOpenGraph = await getDefaultOpenGraph(params.lang);

  return {
    title: `Freddy Montes - ${data.title}`,
    openGraph: {
      ...defaultOpenGraph,
      title: `Freddy Montes - ${data.title}`,
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

export default async function Page({ params }: { params: PageParams }) {
  const page = getPage(params);

  if (!page) {
    return notFound();
  }

  const { data, content } = page;

  return (
    <main className="max-w-4xl mx-auto mt-12 prose dark:prose-invert lg:prose-md xl:prose-lg">
      <h1>{data.title}</h1>
      <MDXRemote
        components={{
          Date: DateText,
        }}
        source={content}
      />
    </main>
  );
}
