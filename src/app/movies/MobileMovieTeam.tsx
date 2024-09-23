//@ts-nocheck
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper";
import { FaArrowRight } from "react-icons/fa";
// import "../../ ";
import Heading from "@/components/heading/Heading";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import PrevNext from "@/utils/PrevNext";
import { FaLessThanEqual } from "react-icons/fa6";
import Image from "next/image";

function MobileMovieTeam() {
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
            // style={{ height: "100% !important", width: "100% !" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Heading headTitle="Team" />
      <div className="container">
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-12 p-0" style={{ position: "relative" }}>
              <div className="work-crus work-crus2">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-w"
                    className="swiper-container"
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    modules={[Navigation, Autoplay]}
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="">
                          <div className="px-2">
                            {/* <Image
                              src={item.image}
                              alt=""
                              className="circle-img"
                                style={{
                                  height: "360px",
                                  width: "260px",
                                }}
                            /> */}
                            <Image
                              src={item?.image}
                              className="circle-img"
                              alt="Landscape picture"
                              width={800}
                              height={300}
                              // style={{ height: "100% !important", width: "100% !" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                    {/* <div className="swiper-pagination" /> */}
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

export default MobileMovieTeam;

const data = [
  {
    id: 1,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-0.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 2,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-1.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 3,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-2.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 4,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-3.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 5,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-4.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 6,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "/assets/images/about/team-5.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
];
