import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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

export async function getPosts(): Promise<BlogData[]> {
  const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
  const files = fs.readdirSync(FOLDER, 'utf-8');

  return files
    .filter(file => file.endsWith('.mdx'))
    .map((itemPath) => {
      const content = fs.readFileSync(path.join(FOLDER, itemPath), 'utf8');
      const { data } = matter(content);

      return {
        title: data.title,
        date: data.date,
        slug: itemPath.replace('.mdx', ''),
        category: data.category,
        description: data.description,
        cover: data.cover,
      } as BlogData;
    })
    .sort((postA, postB) => (new Date(postA.date) < new Date(postB.date) ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Blog | null> {
  try {
    const FOLDER = path.resolve(process.cwd(), 'src/data/posts');
    const fullPath = path.join(FOLDER, `${slug}.mdx`);
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

export async function getTips(): Promise<TipData[]> {
  const FOLDER = path.resolve(process.cwd(), 'src/data/tips');
  const files = fs.readdirSync(FOLDER, 'utf-8');

  return files
    .filter(file => file.endsWith('.mdx'))
    .map((itemPath) => {
      const content = fs.readFileSync(path.join(FOLDER, itemPath), 'utf8');
      const { data } = matter(content);

      return {
        title: data.title,
        date: data.date,
        slug: itemPath.replace('.mdx', ''),
        description: data.description,
      } as TipData;
    })
    .sort((postA, postB) => (new Date(postA.date) < new Date(postB.date) ? 1 : -1));
}

export async function getTipBySlug(slug: string): Promise<Tip | null> {
  try {
    const FOLDER = path.resolve(process.cwd(), 'src/data/tips');
    const fullPath = path.join(FOLDER, `${slug}.mdx`);
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

export const defaultOpenGraph = {
  siteName: 'Freddy Montes',
  locale: 'en',
  type: 'website',
};
