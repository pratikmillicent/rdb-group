// @ts-nocheck
"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import ProgressScroll from "@/components/progress-scroll/ProgressScroll";
import Script from "next/script";
import Whatapps from "@/components/chat/Whatapps";
import { Epilogue } from "next/font/google";
import { useEffect } from "react";
import Loader from "@/components/loader/Loader";
// import "./css/plugins.css";
import "@/app/globals.css";
import "../../public/css/plugins.css";
import "../../public/css/style.css";

// const epilogue = Epilogue({
//   subsets: ["latin"],
//   display: "swap",
// });
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    document.body.classList.add("home-startup", "main-bg");
    return () => document.body.classList.remove("home-startup", "main-bg");
  }, []);

  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" /> */}
      </head>
      <body className={Avenir.className}>
        <Navbar />
        {children}
        <Footer />

        <Cursor />
        <ProgressScroll />
        <Whatapps />

        <Loader />

        <Script
          strategy="beforeInteractive"
          src="/assets/js/plugins.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/script.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="https://maps.googleapis.com/maps/api/js?sensor=false"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/ScrollTrigger.min.js"
        ></Script>
        <Script
          strategy="beforeInteractive"
          src="/assets/js/ScrollSmoother.min.js"
        ></Script>
      </body>
    </html>
  );
}
