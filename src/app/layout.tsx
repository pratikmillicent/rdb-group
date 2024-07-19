import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import ProgressScroll from "@/components/progress-scroll/ProgressScroll";
import Script from "next/script";
import Whatapps from "@/components/chat/Whatapps";

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
const Sora = localFont({
  src: [
    {
      path: "../../public/fonts/Sora/Sora-Bold.ttf",
      // weight: "400",
      style: "bold",
    },
    {
      path: "../../public/fonts/Sora/Sora-ExtraBold.ttf",
      // weight: "400",
      style: "extra-bold",
    },
    {
      path: "../../public/fonts/Sora/Sora-ExtraLight.ttf",
      // weight: "700",
      style: "extra-light",
    },
    {
      path: "../../public/fonts/Sora/Sora-Light.ttf",
      // weight: "700",
      style: "light",
    },
    {
      path: "../../public/fonts/Sora/Sora-Medium.ttf",
      // weight: "700",
      style: "medium",
    },

    {
      path: "../../public/fonts/Sora/Sora-SemiBold.ttf",
      // weight: "700",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/Sora/Sora-Thin.ttf",
      // weight: "700",
      style: "thin",
    },
    {
      path: "../../public/fonts/Sora/Sora-Regular.ttf",
      // weight: "700",
      style: "regular",
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
      <body className={Sora.className}>
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
        <Script
          strategy="beforeInteractive"
          src="https://maps.googleapis.com/maps/api/js?sensor=false"
        ></Script>
      </body>
    </html>
  );
}
