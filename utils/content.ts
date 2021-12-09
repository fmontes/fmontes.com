import MDXComponents from '@components/MDXComponents';
import fs from 'fs';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import path from 'path';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import { getDatabase, getSlug } from './notion';

const FOLDER_POSTS = path.resolve(process.cwd(), 'data/posts');
const FOLDER_PAGES = path.resolve(process.cwd(), 'data/pages');
const FOLDER_PORTFOLIO = path.resolve(process.cwd(), 'data/portfolio');

const FOLDERS = {
    posts: FOLDER_POSTS,
    pages: FOLDER_PAGES,
    portfolio: FOLDER_PORTFOLIO
};

export interface Slugs {
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
    cover?: string;
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

export const getPosts = async (locale: string): Promise<MatterContent[]> => {
    // Get Notion posts
    const notion = await getDatabase(locale);
    const notionPosts = notion.results.map((item: any) => {
        return {
            title: item.properties.Title.title[0].text.content,
            date: item.created_time,
            description: item.properties.Description.rich_text[0].text.content,
            slug: item.properties.Slug.rich_text[0].text.content,
            // tech: '',
            // category: '',
            // canonical_url: '',
            cover: item?.cover?.external?.url || ''
        };
    });

    // Get MDX posts
    const mdxPosts = await getContentSortedByDate(locale, 'posts');

    // Sort and merge posts
    return [...mdxPosts, ...notionPosts].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateA < dateB ? 1 : -1; // ? -1 : 1 for ascending/increasing order
    });
};

export const getMDXPostsSlugs = async (): Promise<Slugs[]> => {
    return getSlugs('posts');
};

// {
//     "object": "page",
//     "id": "6c5da27f-4a74-4c6a-aa61-cf30fd6f3e3f",
//     "created_time": "2021-09-25T03:27:00.000Z",
//     "last_edited_time": "2021-09-25T04:59:00.000Z",
//     "cover": {
//         "type": "external",
//         "external": {
//             "url": "https://www.notion.so/images/page-cover/rijksmuseum_avercamp_1608.jpg"
//         }
//     },
//     "icon": {
//         "type": "emoji",
//         "emoji": "🌐"
//     },
//     "parent": {
//         "type": "database_id",
//         "database_id": "e9a32443-ff29-4d38-8c56-e9625516e9e5"
//     },
//     "archived": false,
//     "properties": {
//         "Description": {
//             "id": "kcoC",
//             "type": "rich_text",
//             "rich_text": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "But I'm a desc too",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "But I'm a desc too",
//                     "href": null
//                 }
//             ]
//         },
//         "Tags": {
//             "id": "rVil",
//             "type": "multi_select",
//             "multi_select": [
//                 {
//                     "id": "babe26bd-ac53-44f5-a1e6-643e99974ab0",
//                     "name": "css",
//                     "color": "gray"
//                 }
//             ]
//         },
//         "Title": {
//             "id": "title",
//             "type": "title",
//             "title": [
//                 {
//                     "type": "text",
//                     "text": {
//                         "content": "Blog title 2",
//                         "link": null
//                     },
//                     "annotations": {
//                         "bold": false,
//                         "italic": false,
//                         "strikethrough": false,
//                         "underline": false,
//                         "code": false,
//                         "color": "default"
//                     },
//                     "plain_text": "Blog title 2",
//                     "href": null
//                 }
//             ]
//         }
//     },
//     "url": "https://www.notion.so/Blog-title-2-6c5da27f4a744c6aaa61cf30fd6f3e3f"
// }
