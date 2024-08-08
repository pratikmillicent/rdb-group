"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import Heading from "@/components/heading/Heading";
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
            {data.map(item => (
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
                      style={{ height: "320px", objectFit: "cover" }}
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
    image:
      "https://media.istockphoto.com/id/1033661996/photo/two-businessmen-shaking-hands.webp?b=1&s=170667a&w=0&k=20&c=qn517_spE0VTbdC159vNLGDESuNhztqV1uIq5jmqq7U=",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1661333830959-1f6ca808c5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwZXZlbnRzfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlfGVufDB8MHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?s=612x612&w=0&k=20&c=uSziAtn73HvrWJxE8UR1HZlLkfjfvruhvgxZOPFDDzM=",
  },
];

export default MobileCarousel;
