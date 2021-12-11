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
    images: {
        domains: ['s3.us-west-2.amazonaws.com', 'res.cloudinary.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
