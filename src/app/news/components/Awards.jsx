import React from "react";
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
        className="pb-60 "
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
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="award-card-content d-flex align-items-center justify-content-center flex-column">
                <h2 className="award-card-title">{item.events}</h2>
                <p className="class-body">{item.description}</p>
                <Link href="#" className="fz-30 fw-500">
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className=""> */}
        <div className="award-swiper-button-prev"><GrChapterPrevious /></div>
        <div className="award-swiper-button-next"><GrChapterNext /></div>
        {/* </div> */}
      </Swiper>

    </div>
  );
};

export default Awards;
