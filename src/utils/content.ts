import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type PageParams = {
  lang: 'es' | 'en';
  slug: string;
}
export interface BlogData {
  title: string;
  date: string;
  slug: string;
  category: string;
  description: string;
  cover: string;
}

export interface TipData {
  title: string;
  date: string;
  slug: string;
  description: string;
}

export interface Blog extends BlogData {
  content: string;
}
export interface Tip extends TipData {
  content: string;
}

export function getPosts(lang: PageParams['lang'] = 'en'): BlogData[] {
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

export function getPostBySlug({lang, slug}: PageParams): Blog | null {
  try {
    const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
    const fullPath = path.join(FOLDER, `${lang}/${slug}.mdx`);
    const markdown = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(markdown);
  
    return {
      title: data.title,
      date: data.date,
      slug,
      description: data.description,
      category: data.category,
      cover: data.cover,
      content: content,
    };
  } catch (error) {
    return null;
  }
}

export function getTips(lang: PageParams['lang'] = 'en'): TipData[] {
  const FOLDER = path.resolve(process.cwd(), 'src/data/tips');
  const fullPath = path.join(FOLDER, `${lang}`);
  const files = fs.readdirSync(fullPath, 'utf-8');

  return files
    .map((itemPath) => {
      const content = fs.readFileSync(path.join(fullPath, itemPath), 'utf8');

      return {
        ...(matter(content).data as Pick<TipData, 'title' | 'date'>),
        slug: itemPath.replace('.mdx', ''),
      } as TipData;
    })
    .sort((postA, postB) => (new Date(postA.date) < new Date(postB.date) ? 1 : -1));
}

export function getTipBySlug({lang, slug}: PageParams): Tip | null {
  try {
    const FOLDER = path.resolve(process.cwd(), 'src/data/tips');
    const fullPath = path.join(FOLDER, `${lang}/${slug}.mdx`);
    const markdown = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(markdown);
  
    return {
      title: data.title,
      date: data.date,
      slug,
      description: data.description,
      content: content,
    };
  } catch (error) {
    return null;
  }
}

export async function getDefaultOpenGraph(lang: PageParams['lang']) {
  return {
    siteName: 'Freddy Montes',
    locale: lang,
    type: 'website',
  };
}
