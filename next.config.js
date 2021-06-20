/* eslint-disable @typescript-eslint/no-var-requires */
const i18nConfig = require('./utils/i18n/config');

module.exports = {
    async redirects() {
        return [
            {
                source: '/99',
                destination: '/es/99-tips-de-web-development',
                permanent: true
            }
        ];
    },
    i18n: i18nConfig,
    webpack5: true,
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    }
};
