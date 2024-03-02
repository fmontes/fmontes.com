import { Inter } from "next/font/google";
import Script from 'next/script'

import DictionaryProvider from "@/providers/dictionary-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageParams, getDefaultOpenGraph } from "@/utils/content";
import { getDictionary } from "./dictionaries";

import "./global.css"
import { SITE } from "@/utils/const";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: PageParams }) {
  const dictionary = await getDictionary(params.lang)
  const defaultOpenGraph = await getDefaultOpenGraph(params.lang)

  return {
    metadataBase: new URL(SITE),
    title: dictionary.title,
    description: dictionary.description,
    openGraph: {
      ...defaultOpenGraph,
      title: dictionary.title,
      description: dictionary.description,
      url: SITE,
    }
  };
}

export default async function RootLayout({
  params,
  children
}: Readonly<{
  params: PageParams;
  children: React.ReactNode;
}>) {

  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <head>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
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
          <DictionaryProvider dictionary={dictionary}>
            <Header />
            {children}
            <Footer />
          </DictionaryProvider>
        </div>
      </body>
    </html>
  );
}
