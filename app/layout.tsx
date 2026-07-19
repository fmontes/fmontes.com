import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <noscript>
          {/* Without JS, reveal everything and flatten the pinned scenes. */}
          <style>{`
            [data-reveal] { opacity: 1 !important; transform: none !important; }
            [data-pin] { height: auto !important; }
            [data-pin-inner] { position: static !important; height: auto !important; }
            [data-stack] { gap: 2.5rem !important; }
            [data-stack] > * { grid-area: auto !important; }
          `}</style>
        </noscript>
        {children}
      </body>
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
    </html>
  );
}
