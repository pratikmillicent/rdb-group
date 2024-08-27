// import React from 'react'

// const Project = () => {
//   return (
//     <div>Project</div>
//   )
// }

// export default Project

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
      prevEl: latestPrevRef.current,
      nextEl: latestNextRef.current,
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
    onSwiper: swiper => {
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
                <Heading headTitle="Projects" width="70px" />
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
              Completed
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
              onClick={() => setActive(2)}
              style={{
                // textDecoration: active === 2 ? "underline" : "none",
                // textDecorationColor: "var(--navy)",
                // textUnderlineOffset: "4px",
                cursor: "pointer",
              }}
            >
              Sustainability
            </div>

            <div
              style={{
                position: "absolute",
                left: active === 0 ? "10px" : active === 1 ? "108px" : "208px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div>
          <div className="blog-carousel">
            {loadSwiper && (
              <Swiper
                {...swiperOptions}
                id="content-carousel-container-unq-blog"
                className="swiper-container"
              >
                {data.map(item => (
                  <SwiperSlide
                    key={item.id}
                    className="wow fadeInUp"
                    data-wow-delay=".100s"
                  >
                    <div className="pb-5 mb-3">
                      <div className="img img-container">
                        <div className="">
                          <Image
                            src={item.image}
                            alt={item.description}
                            style={{
                              height: "320px",
                              objectFit: "cover",
                              width: "100%",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                      </div>
                      <div className="cont mt-30">
                        <h6
                          className="fw-600"
                          style={{
                            textAlign: "center",
                            color: "#333", // Dark text color for better contrast
                            marginTop: "15px",
                          }}
                        >
                          {item.description}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} />
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;

const data = [
  {
    id: 1,
    // image: "/assets/images2/news1.webp",
    image:
      "https://www.equinoxindia.com/wp-content/uploads/images/sez-projects.jpg",
    description:
      "Augmented Reality in Real Estate: Forecasting Market Trends in 2024",
    link: "https://homecapital.in/augmented-reality-in-real-estate-forecasting-market-trends-in-2024/",
  },
  {
    id: 2,
    // image: "/assets/images2/news2.jpg",
    image:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    description: "Best Place for Real Estate Investment in Mumbai...",
    link: "https://www.hiranandani.com/is-thane-the-best-real-estate-investment-destination.aspx",
  },
  {
    id: 3,
    // image: "/assets/images2/news3.webp",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    description:
      "Why Hire Real Estate Agent: Benefits & Reasons | Spiffy Spools",
    link: "https://www.spiffyspools.com/spiffy-speak/why-hire-real-estate-agent/",
  },
];
