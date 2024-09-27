// check
"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import ProgressScroll from "@/components/progress-scroll/ProgressScroll";
import Script from "next/script";
import { Epilogue, Jost } from "next/font/google";
import { useEffect } from "react";
import Loader from "@/components/loader/Loader";
import "../../public/css/plugins.css";
import "../../public/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import StickySocialMedia from "@/components/chat/StickySocialMedia";

// const Avenir = localFont({
//   src: [
//     {
//       path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Roman.woff2",
//       weight: "400",
//       style: "roman",
//     },
//     {
//       path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Medium.woff2",
//       weight: "400",
//       style: "medium",
//     },
//     {
//       path: "../../public/fonts/rd-brother_fonts/avenirltstd-light.woff2",
//       weight: "700",
//       style: "light",
//     },
//     {
//       path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Heavy.woff2",
//       weight: "700",
//       style: "heavy",
//     },
//     {
//       path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Book.woff2",
//       weight: "700",
//       style: "book",
//     },
//     {
//       path: "../../public/fonts/rd-brother_fonts/AvenirLTStd-Black.woff2",
//       weight: "700",
//       style: "black",
//     },
//   ],
// });

const JostFont = Jost({
  subsets: ["latin"],
  display: "swap",
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
      <head></head>
      <body className={JostFont.className}>
        <Navbar />
        {children}
        <Footer />

        <Cursor />
        <ProgressScroll />
        {/* <StickySocialMedia /> */}

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
