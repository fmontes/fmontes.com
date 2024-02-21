import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'

import { Date } from '@/components/Date';

function getPage(params) {
  const FOLDER = path.resolve(process.cwd(), 'src/data/pages')
  const fullPath = path.join(FOLDER, `${params.lang}/${params.slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  return matter(fileContents);
}

export async function generateMetadata({ params }) {
  const { data } = getPage(params);

  return {
    title: data.title,
  }
}

export default async function Page({ params }: {
  params: {
    slug: string, lang: string
  }
}) {
  const { data, content } = getPage(params);

  return (
    <main className="prose dark:prose-invert lg:prose-md xl:prose-lg mt-12 mx-auto max-w-4xl">
      <h1>{data.title}</h1>
      <MDXRemote components={{
        Date
      }} source={content} />
    </main>
  );
}