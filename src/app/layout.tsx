import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import ProgressScroll from "@/components/progress-scroll/ProgressScroll";
import Script from "next/script";
import Whatapps from "@/components/chat/Whatapps";

const Avenir = localFont({
  src: [
    {
      path: "/fonts/Avenir-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/Avenir-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "/fonts/Avenir-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/Avenir-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "RD Brothers Group",
  description: "RD Brothers Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className={Avenir.className}>
        <Navbar />
        {children}
        <Footer />

        <Cursor />
        <ProgressScroll />
        <Whatapps />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/plugins.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/script.js"
        ></Script>
      </body>
    </html>
  );
}
