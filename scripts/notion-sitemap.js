/* eslint-disable @typescript-eslint/no-var-requires */

const { Client } = require('@notionhq/client');

const notion = new Client({
    auth: process.env.NOTION_SECRET
});

const databaseIds = {
    es: process.env.NOTION_DATABASE_ES,
    en: process.env.NOTION_DATABASE_EN
};

const getDatabase = async (locale = 'en') => {
    const databaseId = databaseIds[locale];

    if (!databaseId) {
        throw new Error(`No database found for locale ${locale}`);
    }

    const response = await notion.databases.query({
        database_id: databaseId
    });

    return {
        ...response,
        results: response.results
    };
};

module.exports = {
    getNotionSitemap: async () => {
        const notionES = await getDatabase('es');
        const notionEN = await getDatabase('en');

        const siteMapES = notionES.results.map((page) => {
            return `/es/blog/${page.properties.Slug.rich_text[0]?.text.content}`;
        });

        const siteMapEN = notionEN.results.map((page) => {
            return `/blog/${page.properties.Slug.rich_text[0]?.text.content}`;
        });

        return [...siteMapES, ...siteMapEN];
    }
};
