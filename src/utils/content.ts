import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface Blog {
  title: string;
  date: string;
  slug: string;
}

export function getPosts(lang: string): Blog[] {
  const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
  const fullPath = path.join(FOLDER, `${lang}`);
  const files = fs.readdirSync(fullPath, 'utf-8');

  return files
    .map((itemPath) => {
      const content = fs.readFileSync(path.join(fullPath, itemPath), 'utf8');
      return {
        ...(matter(content).data as Pick<Blog, 'title' | 'date'>),
        slug: itemPath.replace('.mdx', ''),
      } as Blog;
    })
    .sort((postA, postB) => new Date(postA.date) < new Date(postB.date) ? 1 : -1);
}
