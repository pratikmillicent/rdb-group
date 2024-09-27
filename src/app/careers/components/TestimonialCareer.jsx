import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";
import Heading from "@/components/heading/Heading";
//= Data
// const brandsData = [
//   "https://as1.ftcdn.net/v2/jpg/02/99/04/20/1000_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
// ];

// const appData = {
//   author: "ThemesCamp",
//   author_link: "https://themeforest.net/user/themescamp",
// };

const testimonialsData = [
  {
    id: 1,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image:
      "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 2,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "assets/imgs/testim/4.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 3,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professiona lism. It really feels like you are working with a team that can get the job done ",
    image: "assets/imgs/testim/3.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
  {
    id: 4,
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    image: "assets/imgs/testim/4.jpg",
    author: "Leonard Heiser",
    position: "CEO",
  },
];

const testimonialsSwiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 3,
  spaceBetween: 70,
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
const brandsSwiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

function TestimonialCareer() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
    loadBackgroudImages();
  }, []);

  return (
    <section className="testim-crv section-padding  text-dark position-re">
      <div className="container ontop">
        <Heading headTitle="Testimonials" />
        <div className="row">
          <div className="col-12">
            <div className="testim-swiper testim-swiper3 to-out">
              {loadSwiper && (
                <Swiper
                  {...testimonialsSwiperOptions}
                  id="content-carousel-container-unq-testim"
                  className="swiper-container"
                >
                  {testimonialsData.map(item => (
                    <SwiperSlide key={item.id}>
                      <div
                        className="item bg-white"
                        style={{
                          border: "1px solid var(--golden)",
                        }}
                      >
                        <div className="cont mb-40">
                          <div className="rate-stars mb-20 fz-12">
                            <span className="rate">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                            </span>
                          </div>
                          <p className="fw-400">{item.content}</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div>
                            <div className="img circle-60">
                              <img
                                src={
                                  "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                alt="person"
                                className="circle-img"
                                style={{
                                  objectFit: "cover",
                                }}
                              />
                            </div>
                          </div>
                          <div className="ml-30">
                            <div className="info">
                              <h6 className="fz-16">{item.author}</h6>
                              {/* <span className="opacity-7 sub-title">
                                {item.position}
                              </span> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
        <div
          className="swiper-button-next text-dark fw-600 swiper-arrow-mobile-right"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            right: "-60px",
            top: "59%",
            transform: "translateY(-50%)",
          }}
        ></div>

        <div
          className="swiper-button-prev text-dark swiper-arrow-mobile-left"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            position: "absolute",
            left: "-60px",
            top: "59%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      {/* <div className="clients-carso section-padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="swiper5"
                data-carousel="swiper"
                data-items="6"
                data-loop="true"
                data-space="30"
                data-speed="1000"
              >
                {loadSwiper && (
                  <Swiper
                    {...brandsSwiperOptions}
                    id="content-carousel-container-unq-clients"
                  >
                    {brandsData.map(item => (
                      <SwiperSlide key={item}>
                        <div className="item">
                          <div className="img icon-img-100">
                            <a href={appData.author_link}>
                              <img src={"/dark/" + item} alt="" /> 
                            </a>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div
        className="bg-pattern bg-img bg-repeat border"
        data-background="/dark/assets/imgs/patterns/noise.png"
      ></div> */}
    </section>
  );
}

export default TestimonialCareer;
