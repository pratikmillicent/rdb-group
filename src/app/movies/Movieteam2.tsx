import React, { useState, useEffect } from "react";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Heading from "@/components/heading/Heading";
//= Data

const swiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    // reverseDirection: true,
  },
  spaceBetween: 0,
  speed: 1000,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testim-controls .swiper-button-next",
    prevEl: ".testim-controls .swiper-button-prev",
  },
};

function Movieteam2() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <>
      <Heading headTitle="Team" />

      <section className="testim-crv section-padding">
        <div className="">
          <div className="row ">
            <div className="col-lg-3 bg-navy">
              <h1
                className=""
                style={{
                  fontSize: "52px",
                  color: " #fff",
                  paddingTop: "100px",
                  textAlign: "left",
                  paddingLeft: "30px",
                }}
              >
                Our <br /> Team
              </h1>
              <div
                className="swiper-controls testim-controls arrow-out d-flex"
                style={{
                  marginTop: "100px",
                  marginLeft: "30px",
                }}
              >
                <div className="swiper-button-prev d-none d-md-block">
                  <span
                    className=""
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "transparent !important",
                      lineHeight: "50px",
                      textAlign: "center",
                      border: " 1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      transform: "rotate(180deg)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--golden)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className=" d-none d-md-block swiper-button-next ml-50">
                  <span
                    className=""
                    style={{
                      width: "50px",
                      backgroundColor: "transparent !important",
                      height: "50px",
                      lineHeight: "50px",
                      textAlign: "center",
                      border: " 1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "var(--golden)",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-9"
              style={{
                padding: 0,
                background:
                  "linear-gradient(to left, transparent 80%, var(--navy) 20%)",
              }}
            >
              <div className="testim-swiper2" style={{ padding: "100px 0" }}>
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-testim"
                    className="swiper-container"
                  >
                    {data.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="">
                          <div className="">
                            <img
                              src={item.image}
                              alt=""
                              className="circle-img"
                              style={{
                                height: "360px",
                                width: "260px",
                              }}
                            />
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
      </section>
    </>
  );
}

export default Movieteam2;

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
