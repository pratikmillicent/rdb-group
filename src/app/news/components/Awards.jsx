import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import { FaArrowRight } from "react-icons/fa";
import "../Awards.css";
import Heading from "@/components/heading/Heading";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import PrevNext from "@/utils/PrevNext";

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

const Awards = () => {
  const [activeButton, setActiveButton] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handlePrevClick = () => {
    setActiveButton("prev");
    setTimeout(() => {
      setActiveButton(null);
    }, 300);
  };

  const handleNextClick = () => {
    setActiveButton("next");
    setTimeout(() => {
      setActiveButton(null);
    }, 300);
  };

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      const swiperInstance =
        document.querySelector(".swiper-container")?.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.update();
      }
    }
  }, [prevRef, nextRef]);

  return (
    <div className="px-2 my-4">
      <div className="sec-lg-head">
        <div className="row">
          <div className="col-lg-12">
            <Heading headTitle="Awards" />
          </div>
        </div>
      </div>
      <Swiper
        className="pb-20 swiper-container"
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        modules={[Navigation, Autoplay]}
        autoplay={false}
        loop={false}
        pagination={{ clickable: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
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
        }}
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
              <div className="award-card-content d-flex align-items-center justify-content-center flex-column">
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
      </Swiper>
      <PrevNext prevRef={prevRef} nextRef={nextRef} />
    </div>
  );
};

export default Awards;
