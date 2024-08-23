import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import { useEffect, useState } from "react";
import PrevNext from "@/utils/PrevNext";

const LatestNews = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
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
    navigation: {
      // nextEl: ".blog-modern .swiper-button-next",
      // prevEl: ".blog-modern .swiper-button-prev",
      prevEl: latestPrevRef.current,
      nextEl: latestNextRef.current,
    },
    onSwiper: swiper => {
      setTimeout(() => {
        swiper.navigation.init();
        swiper.navigation.update();
      }, 0);
    },
  };
  return (
    <div>
      <section className="blog-modern">
        <div className="container">
          <div className="sec-lg-head">
            <div className="row">
              <div className="col-lg-12">
                <Heading headTitle="Our Projects" width="100px" />
              </div>
            </div>
          </div>
          <div className="blog-carousel">
            {loadSwiper && (
              <Swiper
                {...swiperOptions}
                id="content-carousel-container-unq-blog"
                className="swiper-container"
              >
                {projects.map(item => (
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
                {/* <div className="button-container">
                  <div
                    className="swiper-button-prev mb-3"
                    style={{
                      color: "#000",
                      backgroundColor: "#eaa636",
                      padding: "20px",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      border: "2px solid #f0f0f0", // Matching light border for buttons
                    }}
                  ></div>
                  <div
                    className="swiper-button-next mb-3"
                    style={{
                      color: "#000",
                      backgroundColor: "#eaa636",
                      padding: "20px",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      border: "2px solid #f0f0f0", // Matching light border for buttons
                    }}
                  ></div>
                </div> */}
                <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} />
              </Swiper>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNews;

const projects = [
  {
    id: 1,
    title: "Modern Villas",
    location: "New York, NY",
    description:
      "A collection of 10 modern villas offering luxury living with state-of-the-art amenities.",
    image:
      "https://www.equinoxindia.com/wp-content/uploads/images/sez-projects.jpg",
    type: "Residential",
  },
  {
    id: 2,
    title: "Downtown Office Complex",
    location: "Los Angeles, CA",
    description:
      "A modern office complex with over 50,000 sq. ft. of commercial space.",
    image:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxyZWFsJTIwZXN0YXRlfGVufDB8fDB8fHww",
    type: "Commercial",
  },
  {
    id: 3,
    title: "Industrial Park",
    location: "Houston, TX",
    description:
      "A large industrial park designed to accommodate various manufacturing and distribution businesses.",
    image:
      "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlYWwlMjBlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    type: "Industrial",
  },
];
