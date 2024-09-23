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
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    spaceBetween: 17,
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
        slidesPerView: 2,
        slidesPerGroup: 2,
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
              // onClick={() => setActive(0)}
              style={{
                // textDecoration: active === 0 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Ongoing
            </div>
            {/* <div
              // onClick={() => setActive(1)}
              style={{
                // textDecoration: active === 1 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Completed
            </div> */}
            {/* <div
              // onClick={() => setActive(2)}
              style={{
                // textDecoration: active === 2 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Upcomming
            </div> */}

            <div
              style={{
                position: "absolute",
                left: "3px",
                bottom: -4,
                height: "2px",
                width: "41px",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>

          {/* {active == 0 && ( */}
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
                              objectFit: "cover",
                              width: "100%",
                              borderRadius: "8px",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="cont mt-30">
                          <h6 className="fw-600">{item.description}</h6>
                          <Link
                            href={item.link}
                            className="mt-6 ls1 sub-title fw-500"
                            style={{
                              color: "#333",
                              fontSize: "14px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            Read More{" "}
                            <i
                              className="ml-5"
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.3s" }}
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {/* <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} /> */}
            </div>
            <div
              className="swiper-button-next text-dark fw-600 swiper-arrow-mobile d-none d-md-block"
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
              className="swiper-button-prev text-dark swiper-arrow-mobile d-none d-md-block"
              style={{
                fontWeight: "600",
                height: "40px",
                width: "3.1em",
                borderRadius: "50%",
                position: "absolute",
                left: "-60px",
                top: "56%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
          {/* )} */}

          {/* {active == 1 && ( */}
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
              // onClick={() => setActive(0)}
              style={{
                // textDecoration: active === 0 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Completed
            </div>

            <div
              style={{
                position: "absolute",
                left: "2px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>
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
                              objectFit: "cover",
                              width: "100%",
                              borderRadius: "8px",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="cont mt-30">
                          <h6 className="fw-600">{item.description}</h6>
                          <Link
                            href={item.link}
                            className="mt-6 ls1 sub-title fw-500"
                            style={{
                              color: "#333",
                              fontSize: "14px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            Read More{" "}
                            <i
                              className="ml-5"
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.3s" }}
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {/* <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} /> */}
            </div>
            <div
              className="swiper-button-next text-dark fw-600 swiper-arrow-mobile d-none d-md-block"
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
              className="swiper-button-prev text-dark swiper-arrow-mobile d-none d-md-block"
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
          {/* )} */}
          {/* {active == 2 && ( */}

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
              // onClick={() => setActive(0)}
              style={{
                // textDecoration: active === 0 ? "underline" : "none",
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
                left: "2px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>
          <div className="position-relative">
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {sustainabilityProjectsData.map((item) => (
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
                              objectFit: "cover",
                              width: "100%",
                              borderRadius: "8px",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="cont mt-30">
                          <h6 className="fw-600">{item.description}</h6>
                          <Link
                            href={item.link}
                            className="mt-6 ls1 sub-title fw-500"
                            style={{
                              color: "#333",
                              fontSize: "14px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            Read More{" "}
                            <i
                              className="ml-5"
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.3s" }}
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              {/* <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} /> */}
            </div>
            <div
              className="d-none d-md-block swiper-button-next text-dark fw-600 swiper-arrow-mobile"
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
              className=" d-none d-md-block swiper-button-prev text-dark swiper-arrow-mobile d-none d-md-block"
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

          {/* )} */}
        </div>
      </section>
    </div>
  );
};

export default Project;

const completedProjectsData = [
  {
    id: 1,
    image:
      "https://www.commercialproperty.review/wp-content/uploads/2020/12/The-World-Towers-Apartments-Worli-South-Mumbai.jpg",
    description: "Luxury Apartments in South Mumbai - Completed in 2023",
    link: "https://www.example.com/luxury-apartments-south-mumbai",
  },
  {
    id: 2,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h300_w450/2019/05/20/Project-Photo-11-Lodha-Supremus-Mumbai-5029261_345_1366_300_450.jpg",
    description: "Commercial Complex in Andheri - Completed in 2022",
    link: "https://www.example.com/commercial-complex-andheri",
  },
  {
    id: 3,
    image:
      "https://destinationcompress.s3.ap-south-1.amazonaws.com/acdb2987-80d1-4b05-9ad3-de30647a64ef.jpeg",
    description: "Eco-Friendly Villas in Pune - Completed in 2021",
    link: "https://www.example.com/eco-friendly-villas-pune",
  },
];

const upcomingProjectsData = [
  {
    id: 1,
    image:
      "https://www.piramalmahalaxmi.net/wp-content/uploads/2019/07/PMCENTRALTOWER-1024x877.jpg",
    description: "Skyline Tower in South Mumbai - Expected Completion in 2025",
    link: "https://www.example.com/skyline-tower-south-mumbai",
  },
  {
    id: 2,
    image:
      "https://static.squareyards.com/resources/images/mumbai/project-image/raiaskaran-tech-park-project-project-large-image1.jpg",
    description: "Tech Park in Andheri - Expected Completion in 2024",
    link: "https://www.example.com/tech-park-andheri",
  },
  {
    id: 3,
    image:
      "https://www.adanirealty.com/-/media/Project/Realty/Residential/Pune/Atelier-Greens/Carousel-Images/3.jpg",
    description:
      "Eco-Friendly Residences in Pune - Expected Completion in 2026",
    link: "https://www.example.com/eco-friendly-residences-pune",
  },
];

const sustainabilityProjectsData = [
  {
    id: 1,
    image:
      "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-40-Omkar-1973-Mumbai-5019920_345_1366_310_462.jpg",
    description: "Green Residential Towers in Worli - LEED Certified",
    link: "https://www.example.com/green-residential-towers-worli",
  },
  {
    id: 2,
    image: "https://www.ghar.tv/projectimages/168/photo-518.jpg",
    description: "Solar-Powered Office Complex in Andheri",
    link: "https://www.example.com/solar-powered-office-complex-andheri",
  },
  {
    id: 3,
    image:
      "https://admin.purplerealtors.in/admin/upload/Gallery/new_21387487501638337746.jpg",
    description: "Zero-Waste Community in Pune",
    link: "https://www.example.com/zero-waste-community-pune",
  },
];
