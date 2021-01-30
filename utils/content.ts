import MDXComponents from '@components/MDXComponents';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

const FOLDER_POSTS = path.resolve(process.cwd(), 'data/posts');
const FOLDER_PAGES = path.resolve(process.cwd(), 'data/pages');
const FOLDER_PORTFOLIO = path.resolve(process.cwd(), 'data/portfolio');

const FOLDERS = {
    posts: FOLDER_POSTS,
    pages: FOLDER_PAGES,
    portfolio: FOLDER_PORTFOLIO
};

interface Slugs {
    params: {
        slug: string;
    };
    locale: string;
}

type PageContent = {
    mdxSource: MdxRemote.Source;
    frontMatter: {
        [key: string]: string;
    };
};

export type MatterContent = {
    title: string;
    date: string;
    description: string;
    slug: string;
    tech?: string;
    category?: string;
    canonical_url?: string;
};

type ContentType = 'pages' | 'posts' | 'portfolio';

type ContentProps = {
    slug: string;
    locale: string;
    type: ContentType;
};

const getAllFileNames = (folder: string, filesList = []): string[] => {
    if (!fs.existsSync(folder)) {
        return [];
    }
    const files = fs.readdirSync(folder);

    files
        .filter((file) => file !== '.DS_Store')
        .forEach((file) => {
            if (fs.statSync(`${folder}/${file}`).isDirectory()) {
                filesList = getAllFileNames(`${folder}/${file}`, filesList);
            } else {
                filesList.push(path.join(path.basename(folder), '/', file));
            }
        });

    // Filter to include only *.mdx files
    const filteredList = filesList.filter((file) => file.includes('.mdx'));

    return filteredList;
};

export const getContentSortedByDate = (locale: string, type: ContentType): MatterContent[] => {
    if (!FOLDERS[type]) {
        throw new Error(
            `You need to create folder "/data/${type}" and add it to the "FOLDERS" object`
        );
    }

    const fullPath = path.join(FOLDERS[type], `${locale}/`);

    if (!fs.existsSync(fullPath)) {
        return [];
    }
    const allPosts = fs.readdirSync(fullPath).map((itemPath) => {
        const content = fs.readFileSync(path.join(fullPath, itemPath), 'utf8');
        const frontMatter = matter(content).data;
        const slug = itemPath.replace(/\.mdx/, '');
        return { ...frontMatter, slug };
    });

    return (allPosts as MatterContent[]).sort((postA, postB) => (postA.date < postB.date ? 1 : -1));
};

export const getSlugs = (type: ContentType): Slugs[] => {
    if (!FOLDERS[type]) {
        throw new Error(
            `You need to create folder "/data/${type}" and add it to the "FOLDERS" object`
        );
    }

    const files: string[] = getAllFileNames(FOLDERS[type]);

    return files.map((fileName: string) => {
        const [locale, slug] = fileName.split('/');

        return {
            params: {
                slug: slug.replace(/\.mdx/, '')
            },
            locale
        };
    });
};

export const getContent = async ({ slug, locale, type }: ContentProps): Promise<PageContent> => {
    if (!FOLDERS[type]) {
        throw new Error(
            `You need to create folder "/data/${type}" and add it to the "FOLDERS" object`
        );
    }

    const fullPath = path.join(FOLDERS[type], `${locale}/${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [mdxPrism]
        }
    });

    return { mdxSource, frontMatter: { ...data, slug } };
};
