import React, { useState } from "react";
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
        className="pb-60"
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Autoplay]}
        autoplay={false}
        loop={false}
        pagination={{ clickable: false }}
        navigation={{
          nextEl: ".award-swiper-button-next",
          prevEl: ".award-swiper-button-prev",
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
                padding: "20px",
                color: "white",
                textAlign: "center",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div className="award-card-content d-flex align-items-center justify-content-center flex-column">
                <h2 className="award-card-title" style={{ fontSize: "24px", marginBottom: "10px" }}>
                  {item.events}
                </h2>
                <p className="class-body" style={{ fontSize: "16px", marginBottom: "20px" }}>
                  {item.description}
                </p>
                <Link href="#" className="fz-30 fw-500" style={{ fontSize: "30px", fontWeight: "500" }}>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <div
          className={`award-swiper-button-prev ${activeButton === "prev" ? "animate-click" : ""}`}
          style={{ cursor: "pointer", marginRight: "20px", transition: "transform 0.3s ease" }}
          onClick={handlePrevClick}
        >
          <GrChapterPrevious size={30} />
        </div>
        <div
          className={`award-swiper-button-next ${activeButton === "next" ? "animate-click" : ""}`}
          style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
          onClick={handleNextClick}
        >
          <GrChapterNext size={30} />
        </div>
      </div>
    </div>
  );
};



export default Awards;
