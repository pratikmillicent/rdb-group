// import React from 'react'

// const Project = () => {
//   return (
//     <div>Project</div>
//   )
// }

// export default Probject

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ModalVideo from "@/components/modal-video/ModalVideo";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import Link from "next/link";
import CarouselEvent from "../(home)/components/CardImagesCarousel";
import PrevNext from "@/utils/PrevNext";

const Project = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(null);
  const latestPrevRef = useRef(null);
  const latestNextRef = useRef(null);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 4,
    // slidesPerGroup: 3,
    // loop: true,
    spaceBetween: 0,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      640: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
    onSwiper: (swiper) => {
      setTimeout(() => {
        swiper.navigation.init();
        swiper.navigation.update();
      }, 0);
    },
  };

  const [active, setActive] = useState(0);

  return (
    <div>
      <section className="blog-modern">
        <div className="container">
          <div className="sec-lg-head">
            <div className="row">
              <div className="col-lg-12">
                <Heading headTitle="Projects" />
              </div>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              display: "flex",
              gap: "12px",
              fontSize: "18px",
              fontWeight: "500",
              color: "var(--navy)",
              marginBottom: "12px",
            }}
          >
            <div
              onClick={() => setActive(0)}
              style={{
                // textDecoration: active === 0 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Released
            </div>
            <div
              onClick={() => setActive(1)}
              style={{
                // textDecoration: active === 1 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Upcoming
            </div>

            <div
              style={{
                position: "absolute",
                left: active === 0 ? "5px" : active === 1 ? "92px" : "208px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>

          {active == 0 && (
            <div className="position-relative">
              <div className="blog-carsouel">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-blog"
                    className="swiper-container"
                  >
                    {completedProjectsData.map((item) => (
                      <SwiperSlide
                        key={item.id}
                        className="wow fadeInUp"
                        data-wow-delay=".100s"
                      >
                        <div className="item pb-5 mb-3">
                          <div className="img img-container">
                            <Image
                              src={item.image}
                              alt={item.description}
                              style={{
                                height: "320px",
                                objectFit: "contain",
                                // width: "100%",
                                borderRadius: "8px",
                              }}
                              width={800}
                              height={500}
                            />
                          </div>
                          <div className="cont mt-10">
                            <h6 className="fw-600">{item.description}</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                {/* <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} /> */}
              </div>
              <div
                className="swiper-button-next text-dark fw-600 swiper-arrow-mobile"
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
                className="swiper-button-prev text-dark swiper-arrow-mobile"
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
          )}

          {active == 1 && (
            <div className="position-relative">
              <div className="blog-carsouel">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-blog"
                    className="swiper-container"
                  >
                    {upcomingProjectsData.map((item) => (
                      <SwiperSlide
                        key={item.id}
                        className="wow fadeInUp"
                        data-wow-delay=".100s"
                      >
                        <div className="item pb-5 mb-3">
                          <div className="img img-container">
                            <Image
                              src={item.image}
                              alt={item.description}
                              style={{
                                height: "320px",
                                objectFit: "contain",
                                // width: "100%",
                                borderRadius: "8px",
                              }}
                              width={800}
                              height={500}
                            />
                          </div>
                          <div className="cont mt-10">
                            <h6 className="fw-600">{item.description}</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                {/* <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} /> */}
              </div>
              <div
                className="swiper-button-next text-dark fw-600 swiper-arrow-mobile"
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
                className="swiper-button-prev text-dark swiper-arrow-mobile"
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Project;

const completedProjectsData = [
  {
    id: 1,
    image: "/assets/images/movie/project/movies-released.jpeg",
    description: "Jhamkudi",
  },
  // {
  //   id: 2,
  //   image: "/assets/images/movie/kutch-express.jpg",
  //   description: "Kutch Express",
  // },
];

const upcomingProjectsData = [
  {
    id: 1,
    image: "/assets/images/movie/kutch-express.jpg",
    description: "Kutch Express",
  },
];
