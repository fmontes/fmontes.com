export default {
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
        domains: ['s3.us-west-2.amazonaws.com', 'res.cloudinary.com', 'images.unsplash.com'],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
    },
    i18n: {
        locales: ['en', 'es'],
        defaultLocale: 'en'
    }
};
