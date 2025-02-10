import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import './globals.css';
import './github-dark.min.css';
import { defaultOpenGraph } from '@/utils/content';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Freddy Montes',
    default: 'Freddy Montes',
  },
  description: 'Software Engineer, Frontend Developer, and UI Designer',
  metadataBase: new URL('https://fmontes.com'),
  openGraph: {
    ...defaultOpenGraph,
    title: 'Freddy Montes',
    description: 'Software Engineer, Frontend Developer, and UI Designer',
    url: 'https://fmontes.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="/static/favicon.ico" rel="shortcut icon" />
        <link href="/static/site.webmanifest" rel="manifest" />
        <link
          href="/static/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/static/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/static/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link color="#07313A" href="/static/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="/static/browserconfig.xml" name="msapplication-config" />
      </head>
      <body className={`${inter.className} dark:bg-blue-900`}>
        <div className="container p-6 md:p-8 lg:px-0 antialiased mx-auto max-w-[64rem]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
