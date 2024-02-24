import { Inter } from "next/font/google";

import DictionaryProvider from "@/providers/dictionary-provider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getDefaultOpenGraph } from "@/utils/content";
import { getDictionary } from "./dictionaries";

import "./global.css"
import { SITE } from "@/utils/const";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }: { params: any }) {
  const dictionary = await getDictionary(params.lang)
  const defaultOpenGraph = await getDefaultOpenGraph({
    lang: params.lang
  })

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
  params: {
    lang: 'en' | 'es';
    slug: string;
  };
  children: React.ReactNode;
}>) {

  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
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
