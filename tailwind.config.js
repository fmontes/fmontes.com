module.exports = {
    corePlugins: {},
    content: ['./pages/**/*.tsx', './components/**/*.tsx', './data/**/*.mdx', './utils/notion.tsx'],
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
            ],
            mono: [
                'ui-monospace',
                'SFMono-Regular',
                'Menlo',
                'Monaco',
                'Consolas',
                'Liberation Mono',
                'Courier New',
                'monospace'
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
            },
            colors: {
                'blue': {
                    'DEFAULT': '#25B5D4',
                    '50': '#BEE8F4',
                    '100': '#ADE2F0',
                    '200': '#8AD7EA',
                    '300': '#67CCE4',
                    '400': '#45C1DE',
                    '500': '#25B5D4',
                    '600': '#1C8AA0',
                    '700': '#135E6C',
                    '800': '#0A3138',
                    '900': '#010404'
                },
                'gray': {
                    'DEFAULT': '#6A898F',
                    '50': '#D2DCDE',
                    '100': '#C7D3D5',
                    '200': '#AFC0C4',
                    '300': '#98AEB3',
                    '400': '#809CA1',
                    '500': '#6A898F',
                    '600': '#526A6F',
                    '700': '#3A4B4F',
                    '800': '#222C2E',
                    '900': '#0A0D0E'
                },
                'yellow': {
                    DEFAULT: '#E3CD41',
                    '50': '#FBF7E1',
                    '100': '#F8F2CF',
                    '200': '#F3E9AC',
                    '300': '#EDE088',
                    '400': '#E8D665',
                    '500': '#E3CD41',
                    '600': '#CEB61E',
                    '700': '#9D8B17',
                    '800': '#6C5F10',
                    '900': '#3B3409'
                },
            },
            typography: ({ theme }) => ({
                fmontes: {
                    css: {
                        '--tw-prose-body': theme('colors.gray[800]'),
                        '--tw-prose-headings': theme('colors.gray[700]'),
                        '--tw-prose-lead': theme('colors.gray[700]'),
                        '--tw-prose-links': theme('colors.blue[500]'),
                        '--tw-prose-bold': theme('colors.gray[900]'),
                        '--tw-prose-counters': theme('colors.gray[600]'),
                        '--tw-prose-bullets': theme('colors.gray[400]'),
                        '--tw-prose-hr': theme('colors.gray[300]'),
                        '--tw-prose-quotes': theme('colors.gray[900]'),
                        '--tw-prose-quote-borders': theme('colors.gray[300]'),
                        '--tw-prose-captions': theme('colors.gray[700]'),
                        '--tw-prose-code': theme('colors.gray[900]'),
                        '--tw-prose-pre-code': theme('colors.gray[100]'),
                        '--tw-prose-pre-bg': theme('colors.gray[900]'),
                        '--tw-prose-th-borders': theme('colors.gray[300]'),
                        '--tw-prose-td-borders': theme('colors.gray[200]'),
                        '--tw-prose-invert-body': theme('colors.blue[50]'),
                        '--tw-prose-invert-headings': theme('colors.blue[200]'),
                        '--tw-prose-invert-lead': theme('colors.gray[300]'),
                        '--tw-prose-invert-links': theme('colors.yellow[500]'),
                        '--tw-prose-invert-bold': theme('colors.white'),
                        '--tw-prose-invert-counters': theme('colors.gray[400]'),
                        '--tw-prose-invert-bullets': theme('colors.gray[600]'),
                        '--tw-prose-invert-hr': theme('colors.gray[700]'),
                        '--tw-prose-invert-quotes': theme('colors.gray[100]'),
                        '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
                        '--tw-prose-invert-captions': theme('colors.gray[400]'),
                        '--tw-prose-invert-code': theme('colors.white'),
                        '--tw-prose-invert-pre-code': theme('colors.gray[300]'),
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders': theme('colors.gray[600]'),
                        '--tw-prose-invert-td-borders': theme('colors.gray[700]'),
                    }
                }
            }),
            // typography: {
            //     DEFAULT: {
            //         css: {
            //             pre: {
            //                 backgroundColor: '#f3f4f6',
            //                 border: 'solid 1px #d1d5db',
            //                 color: '#1f2937'
            //             },
            //             a: {
            //                 color: '#1d4ed8'
            //             }
            //         }
            //     }
            // }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addComponents }) {
            addComponents({
                '.main': {
                    maxWidth: '100%'
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
                },
                '.constrain': {
                    '@screen sm': {
                        maxWidth: '47rem'
                    }
                }
            });
        }
    ]
};
