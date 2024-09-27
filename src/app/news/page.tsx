"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ModalVideo from "@/components/modal-video/ModalVideo";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselEvent from "../(home)/components/CardImagesCarousel";
import Awards from "./components/Awards";
import LatestNews from "./LatestNews";
import News2 from "../(home)/News2";
import AwardGallery from "./components/Award2";

const News = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/news/banner.png"
          className="w-100 d-block  news-banner banner hero-height"
          // className="w-100 d-block  news-banner hero-height"
          alt="News Banner"
          // style={{objectFit : 'cover'}}
          width={800}
          height={500}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div>
      </div>

      <div className="container">
        <News2 />

        <AwardGallery />
        <Heading headTitle="Gallery" />
        <CarouselEvent data={data} />
      </div>
    </>
  );
};

export default News;

const data = [
  {
    id: 1,
    image: "/assets/images2/news1.webp",
    description:
      "Augmented Reality in Real Estate: Forecasting Market Trends in 2024",
    link: "https://homecapital.in/augmented-reality-in-real-estate-forecasting-market-trends-in-2024/",
  },
  {
    id: 2,
    image: "/assets/images2/news2.jpg",
    description: "Best Place for Real Estate Investment in Mumbai...",
    link: "https://www.hiranandani.com/is-thane-the-best-real-estate-investment-destination.aspx",
  },
  {
    id: 3,
    image: "/assets/images2/news3.webp",
    description:
      "Why Hire Real Estate Agent: Benefits & Reasons | Spiffy Spools",
    link: "https://www.spiffyspools.com/spiffy-speak/why-hire-real-estate-agent/",
  },
];
