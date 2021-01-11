import MDXComponents from '@components/MDXComponents';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';

const FOLDER_POST = path.resolve(process.cwd(), 'data/posts');

interface Slugs {
    params: {
        slug: string;
    };
    locale: string;
}

type PageContent = {
    props: {
        mdxSource: MdxRemote.Source;
        frontMatter: {
            [key: string]: string;
        };
    };
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

export const getPostsSlugs = (): Slugs[] => {
    const files: string[] = getAllFileNames(FOLDER_POST);

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

export const getContent = async (slug: string, locale: string): Promise<PageContent> => {
    const fullPath = path.join(FOLDER_POST, `${locale}/${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
    const mdxSource = await renderToString(content, {
        components: MDXComponents,
        mdxOptions: {
            remarkPlugins: [require('remark-code-titles')],
            rehypePlugins: [mdxPrism]
        }
    });

    return { props: { mdxSource, frontMatter: data } };
};
