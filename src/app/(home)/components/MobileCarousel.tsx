"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";

const MobileCarousel = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 17,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".blog-modern .swiper-button-next",
      prevEl: ".blog-modern .swiper-button-prev",
    },
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div className="container">
      <div className="blog-carsouel">
        {loadSwiper && (
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-blog"
            className="swiper-container"
          >
            {data.map((item) => (
              <SwiperSlide
                key={item.id}
                className="wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="item p-0">
                  <div className="img img-container">
                    <Image
                      src={item.image}
                      alt={item.image}
                      style={{ height: "320px", objectFit: "contain" }}
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    image: "/assets/home/Events.jpg",
  },
  {
    id: 2,
    image: "https://fakeimg.pl/640x320",
  },
];

export default MobileCarousel;
