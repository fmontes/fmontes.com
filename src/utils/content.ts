import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface BlogData {
  title: string;
  date: string;
  slug: string;
  category: string;
  description: string;
  cover: string;
}

interface Blog extends BlogData {
  content: string;
}

export function getPosts(lang: string): BlogData[] {
  const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
  const fullPath = path.join(FOLDER, `${lang}`);
  const files = fs.readdirSync(fullPath, 'utf-8');

  return files
    .map((itemPath) => {
      const content = fs.readFileSync(path.join(fullPath, itemPath), 'utf8');
      return {
        ...(matter(content).data as Pick<BlogData, 'title' | 'date'>),
        slug: itemPath.replace('.mdx', ''),
      } as BlogData;
    })
    .sort((postA, postB) => (new Date(postA.date) < new Date(postB.date) ? 1 : -1));
}

export function getPostBySlug(lang: string, slug: string): Blog {
  const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
  const fullPath = path.join(FOLDER, `${lang}/${slug}.mdx`);
  const markdown = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(markdown);

  return {
    title: data.title,
    date: data.date,
    slug,
    content: content
  };
}
