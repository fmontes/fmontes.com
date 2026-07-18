import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import FX from "./components/fx";
import "./globals.css";

const GA_ID = "G-44WBKT7YY5";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freddy Montes — VP of Product",
  description:
    "I build the AI systems I lead teams to ship. VP of Product at dotCMS.",
  openGraph: {
    title: "Freddy Montes — VP of Product",
    description:
      "I build the AI systems I lead teams to ship. VP of Product at dotCMS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FX />
        {/* Marks JS as available before first paint so reveal animations
            can gate on it; without JS the page renders fully visible. */}
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.add('js')`}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
