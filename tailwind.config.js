module.exports = {
    corePlugins: {},
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './data/**/*.mdx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        container: false,
        fontFamily: {
            display: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol'
            ],
            body: [
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol'
            ]
        },
        extend: {
            fontSize: {
                '4xl': ['3.815rem', '4.5rem'],
                '3xl': ['3.052rem', '4.5rem'],
                '2xl': ['2.441rem', '3rem'],
                xl: ['1.953rem', '3rem'],
                lg: ['1.563rem', '3rem'],
                md: ['1.25rem', '3rem'],
                base: ['1rem', '1.5rem'],
                sm: ['0.8rem', '1.5rem'],
                xs: ['0.64rem', '1.5rem']
            },
            spacing: {
                quarter: '0.375rem',
                half: '0.75rem',
                one: '1.5rem',
                two: '3rem',
                three: '4.5rem',
                four: '6rem',
                five: '7.5rem',
                six: '9rem',
                eight: '12rem',
                twelve: '18rem',
                sixteen: '24rem'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                '.main': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '70ch'
                    }
                },
                '.container': {
                    margin: '0 auto',
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '768px'
                    },
                    '@screen md': {
                        maxWidth: '1024px'
                    }
                }
            });
        }
    ]
};
