import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".testim-controls .swiper-button-next",
    prevEl: ".testim-controls .swiper-button-prev",
  },
};
const OngoingProject = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <div>
      <section className={`testim-clasic section-padding`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="testim">
                <div className="testim-swiper">
                  {loadSwiper && (
                    <Swiper
                      {...swiperOptions}
                      id="content-carousel-container-unq-testim"
                      className="swiper-container"
                    >
                      {data.map((item) => (
                        <SwiperSlide key={item.id}>
                          <div className="item">
                            <div className="row">
                              <div className="col-md-4">
                                <div className="author-info valign">
                                  <div className="full-width">
                                    <div className="img circle-120 m-auto mb-30">
                                      <img
                                        src={item.picture}
                                        alt=""
                                        className="circle-img"
                                      />
                                    </div>
                                    <div className="info">
                                      <h6>{item.name}</h6>
                                      <p className="sub-title">
                                        {item.position}
                                      </p>
                                    </div>
                                    <div className="arrow main-bg"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="cont">
                                  <div className="mb-30 icon-img-80 opacity-1">
                                    <img
                                      src={"/assets/images/carrer.jpg"}
                                      alt=""
                                    />
                                  </div>
                                  <h4 className="fw-300">{item.content}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                      <div className="button-container">
                        <div
                          style={{
                            position: "absolute",
                            bottom: "0",
                            width: "fit-content",
                            height: "fit-content",
                            color: "black !important",
                            fontWeight: "bold",
                            padding: "10px 40px",
                            borderRadius: "6px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "1px solid #d4af5f",
                            backgroundColor: "white",
                            fontSize: "20px !important",
                          }}
                        ></div>
                        <div
                          className="bg-light"
                          // style={{
                          //   position: "absolute",
                          //   // bottom: "0",
                          //   width: "fit-content",
                          //   height: "fit-content",
                          //   color: "black !important",
                          //   fontWeight: "bold",
                          //   padding: "10px 40px",
                          //   borderRadius: "6px",
                          //   display: "flex",
                          //   justifyContent: "center",
                          //   alignItems: "center",
                          //   border: "1px solid #d4af5f",
                          //   backgroundColor: "white",
                          //   fontSize: "20px !important",
                          // }}
                        ></div>
                      </div>
                    </Swiper>
                  )}
                </div>
                <div className="swiper-controls">
                  <div className="row">
                    <div className="col-md-8 offset-md-4">
                      <div className="arrows-carsouel testim-controls">
                        <div className="swiper-controls">
                          <div className="swiper-button-prev">
                            <span className="left">
                              <img src={"/assets/images/carrer.jpg"} alt="" />
                            </span>
                          </div>
                          <div className="swiper-pagination"></div>
                          <div className="swiper-button-next">
                            <span className="right">
                              <img src={"/assets/images/carrer.jpg"} alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OngoingProject;

const data = [
  {
    id: 1,
    picture: "/dark/assets/imgs/testim/1.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 2,
    picture: "/dark/assets/imgs/testim/2.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 3,
    picture: "/dark/assets/imgs/testim/3.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 4,
    picture: "/dark/assets/imgs/testim/4.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
];
