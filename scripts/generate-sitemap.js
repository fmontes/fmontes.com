/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const i18nConfig = require('../utils/i18n/config');

const { defaultLocale, locales } = i18nConfig;
const { getNotionSitemap } = require('./notion-sitemap');
const modDate = new Date().toISOString();


(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.tsx');
    const pages = await globby([
        'pages/**/*.tsx',
        '!pages/_*.tsx',
        '!pages/404.tsx', // Ignore error page
        '!pages/**/\\[*\\].tsx', // Ignore dynamic routes
        '!pages/api' // Ignore API routes
    ]);
    const posts = await globby(['data/posts/**/*.mdx', 'data/posts/**/_*.mdx']);


    const pagesRoutes = [];

    const postsRoutes = posts.map((post) => {
        const postPath = post.replace('data/posts/', '').replace('.mdx', '');
        const pathParts = postPath.split('/');
        if (pathParts.length === 1) {
            return pathParts[0];
        } else {
            const [langPrefix, ...restOfPath] = pathParts;
            const path = restOfPath.join('/');
            return langPrefix === defaultLocale ? `/blog/${path}` : `/${langPrefix}/blog/${path}`;
        }
    });

    pages
        .map((page) => {
            const path = page.replace('pages', '').replace('.tsx', '');
            if (page.endsWith('/index.tsx')) {
                const index = path.indexOf('/index');
                return path.slice(0, index);
            }
            return path;
        })
        .forEach((pagePath) => {
            locales.forEach((locale) => {
                pagesRoutes.push(locale === defaultLocale ? pagePath : `/${locale}${pagePath}`);
            });
        });

    const notionRoutes = await getNotionSitemap();

    const allRoutes = [...pagesRoutes, ...postsRoutes, ...notionRoutes];

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${allRoutes
          .map(
              (route) =>
                  `<url>
              <loc>${`https://fmontes.com${route}`}</loc>
              <lastmod>${modDate}</lastmod>
            </url>\n`
          )
          .join('')}
    </urlset>
  `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
    });

    // eslint-disable-next-line no-sync
    fs.writeFileSync('public/sitemap.xml', formatted);
})();
