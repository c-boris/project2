"use client";

import Script from "next/script";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/index.css";
import { Toaster } from "react-hot-toast";
import CookieConsent from "@/components/CookieConsent";
import { Providers } from "./providers";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap", // Optimize font loading
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4A6CF7" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://studio-126.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Studio 126" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className}`}>
        <Providers>
          <Header />
          {children}
          <CookieConsent />
          <Footer />
          <Toaster position="top-right" />
          <ScrollToTop />
          <Script
            src="https://www.googletagmanager.com/gtm.js?id=GTM-5FSWDXW5"
            strategy="lazyOnload"
          />
        </Providers>
      </body>
    </html>
  );
}
