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
  // const [loadSwiper, setLoadSwiper] = useState(false);
  // const [isVideoOpen, setIsVideoOpen] = useState<Video | null>(null);

  // useEffect(() => {
  //   setLoadSwiper(true);
  // }, []);

  // function openVideo(
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //   item: Video
  // ) {
  //   event.preventDefault();
  //   setIsVideoOpen(item);
  // }

  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/news/banner.png"
          className="w-100 d-block  news-banner banner hero-height"
          alt="News Banner"
          // style={{ height: "100vh" }}
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
        >
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          > */}
          {/* <h3 className="banner-heading hero-heading">Careers</h3>
            <div
              style={{
                width: "50px",
                height: "3px",
                borderTop: "solid 2px var(--golden) !important",
                borderLeft: "none",
                borderRight: "none",
                display: "block",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            ></div> */}
          {/* </div> */}
        </div>
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

// const award_data = [
//   {
//     id: 1,
//     image: "/assets/images/news/award1.jpg",
//   },
//   {
//     id: 2,
//     image: "/assets/images/news/news-awards.jpg",
//   },
//   {
//     id: 3,
//     image: "/assets/images/news/news-awards.jpg",
//   },
//   {
//     id: 4,
//     image: "/assets/images/news/news-awards.jpg",
//   },
// ];

// const data2 = [
//   {
//     id: 1,
//     image: "/assets/images/news/proj1.jpg",
//   },
//   {
//     id: 2,
//     image: "/assets/images/news/proj2.jpg",
//   },
//   {
//     id: 3,
//     image: "/assets/images/news/proj3.jpg",
//   },
//   {
//     id: 4,
//     image: "/assets/images/news/proj7.jpg",
//   },
//   {
//     id: 5,
//     image: "/assets/images/news/proj8.jpg",
//   },
//   {
//     id: 6,
//     image: "/assets/images/news/proj9.jpg",
//   },
//   {
//     id: 7,
//     image: "/assets/images/news/proj10.jpg",
//   },
//   {
//     id: 8,
//     image: "/assets/images/news/proj11.jpg",
//   },
//   {
//     id: 9,
//     image: "/assets/images/news/proj12.jpg",
//   },
// ];

// const videoData: Video[] = [
//   {
//     image: "/assets/images/home/business-update2.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update1.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update2.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update1.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
// ];

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
