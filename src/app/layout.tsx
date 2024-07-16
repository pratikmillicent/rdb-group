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
      path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Roman.woff2",
      weight: "400",
      style: "roman",
    },
    {
      path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Medium.woff2",
      weight: "400",
      style: "medium",
    },
    {
      path: "../../public/fonts/rd-brother_fonts/avenirltstd-light.woff2",
      weight: "700",
      style: "light",
    },
    {
      path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Heavy.woff2",
      weight: "700",
      style: "heavy",
    },
    {
      path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Book.woff2",
      weight: "700",
      style: "book",
    },
    {
      path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Black.woff2",
      weight: "700",
      style: "black",
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
