import React, { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";

const swiperOptions = {
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
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
          <div className="col-lg-4">
            <h6>
              <span className="fz-14">01 . </span> Ongoing Project
            </h6>
          </div>
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
                                    <div className="img circle-120 m-auto mb-30 px-2">
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
                                    <div className="arrow bg-dark"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-8">
                                <div className="cont">
                                  <div className="mb-30 icon-img-80 bg-golden">
                                    <img
                                      src={
                                        "/assets/images2/person/RDbrotherlogo.svg"
                                      }
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
                    </Swiper>
                  )}
                </div>
                <div className="swiper-controls">
                  <div className="row">
                    <div className="col-md-8 offset-md-4">
                      <div className="arrows-carsouel testim-controls">
                        <div className="swiper-controls">
                          <div
                            className="swiper-button-prev"
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#1d1d1d",
                              borderRadius: "50%",
                              width: "50px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              border: "2px solid #d4af5f",
                              left: "-60px", // Adjust positioning
                            }}
                          >
                            <span className="left">
                              <ImArrowRight
                                style={{ fontSize: "25px", color: "#d4af5f" }}
                              />
                            </span>
                          </div>
                          <div className="swiper-pagination"></div>
                          <div
                            className="swiper-button-next"
                            style={{
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                              backgroundColor: "#1d1d1d",
                              borderRadius: "50%",
                              width: "50px",
                              height: "50px",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              cursor: "pointer",
                              border: "2px solid #d4af5f",
                              right: "-60px", // Adjust positioning
                            }}
                          >
                            <span className="right">
                              <ImArrowRight
                                style={{ fontSize: "25px", color: "#d4af5f" }}
                              />
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
    picture:
      "https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/arch/works/4.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 2,
    picture:
      "https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/arch/works/3.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 3,
    picture:
      "https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/arch/works/1.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
  {
    id: 4,
    picture:
      "https://geekfolio-nextjs.themescamp.com/dark/assets/imgs/arch/works/2.jpg",
    name: "Leonard Heiser",
    position: "Customer",
    content:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
  },
];
