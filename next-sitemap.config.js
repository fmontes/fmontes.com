/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://fmontes.com',
    generateRobotsTxt: true // (optional)
    // ...other options
};

export default config;
