// @ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import "../Awards.css";

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}

const data: Video[] = [
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];

function AwardGallery() {
  const swiperRef = useRef<SwiperCore>(null);
  const [loadSwiper, setLoadSwiper] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const renderSlide = (item: Video) => (
    <div className="">
      <div onClick={(e) => openVideo?.(e, item)}>
        <div style={{ position: "relative" }}>
          <svg
            style={{
              position: "absolute",
              width: "100px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            className="video-overlay-play-button"
            viewBox="0 0 200 200"
          >
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              strokeWidth="15"
              stroke="#fff"
            />
            <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
          </svg>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={800}
            height={300}
            style={{ height: "250px" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Heading headTitle="Awards" />
      <div className="container">
        <div className="container-fluid rest">
          <div className="row" style={{ marginBottom: "120px" }}>
            <div className="col-12 p-0" style={{ position: "relative" }}>
              <div className="work-crus work-crus2">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-w"
                    className="swiper-container"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation, Pagination, Autoplay]}
                  >
                    {Awards_data.map((item, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="award-card"
                          style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "10px",
                            color: "white",
                            textAlign: "center",
                            minHeight: "400px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "end",
                          }}
                        >
                          <div className="award-card-content d-flex align-items-center justify-content-start justify-content-md-center flex-column">
                            <h2
                              className="award-card-title"
                              style={{ fontSize: "24px", marginBottom: "10px" }}
                            >
                              {item.events}
                            </h2>
                            <p
                              className="class-body"
                              style={{ fontSize: "16px", marginBottom: "20px" }}
                            >
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination" />
                  </Swiper>
                )}
              </div>

              <div
                className="swiper-button-next text-dark fw-600 swiper-arrow-mobile d-none d-md-block "
                style={{
                  fontWeight: "600",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  right: "-60px",
                  top: "56%",
                  transform: "translateY(-50%)",
                }}
              />

              <div
                className="swiper-button-prev text-dark swiper-arrow-mobile d-none d-md-block "
                style={{
                  fontWeight: "600",
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "-60px",
                  top: "56%",
                  transform: "translateY(-50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default AwardGallery;

const Awards_data = [
  {
    image: "/assets/images/news/GEA1.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/GEA-4.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/GEA-6.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/GEA-7.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/GEA1.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/Global.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/ILA-3.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/ILA5.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
  {
    image: "/assets/images/news/national.jpg",
    events: "GEA and convention 2023",
    description: "Held Successfully with Mrs Madhuri Dixit Nene in Mumbai",
  },
];
