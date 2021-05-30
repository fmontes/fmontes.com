/* eslint-disable @typescript-eslint/no-var-requires */
const i18nConfig = require('./utils/i18n/config');

module.exports = {
    i18n: i18nConfig,
    future: {
        webpack5: true
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            require('./scripts/generate-sitemap');
        }

        return config;
    }
};
