import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Page({ params }: {
  params: {
    slug: string, lang: string
  }
}) {
  const FOLDER = path.resolve(process.cwd(), 'src/data/pages')
  const fullPath = path.join(FOLDER, `${params.lang}/${params.slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);

  return (
    <div>
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </div>
  );
}