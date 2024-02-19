import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { getDictionary } from "./dictionaries";
import DictionaryProvider from "@/providers/dictionary-provider";
import "./global.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        <div className="container p-6 md:p-8 lg:px-0 antialiased mx-auto">
          <DictionaryProvider dictionary={dictionary}>
            <Header />
            {children}
          </DictionaryProvider>
        </div>
      </body>
    </html>
  );
}
