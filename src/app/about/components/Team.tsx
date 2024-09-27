"use client";

import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Modal, Row } from "react-bootstrap";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import "./callToAction.css";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-team-button-next",
    prevEl: ".swiper-team-button-prev",
  },
  slidesPerView: 4,
  loop: true,
  spaceBetween: 60,
  centeredSlides: true,
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
      slidesPerView: 4,
    },
  },
};

function Team() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);

  function handleStickyScroll() {
    const sticky_item = document.getElementById("sticky_item");
    if (!sticky_item) return;
    const width = sticky_item.getBoundingClientRect().width;
    const height = sticky_item.getBoundingClientRect().height;
    const parent = document
      .querySelector(".team-crev")
      ?.getBoundingClientRect();

    if (!parent) return;

    if (parent.top < -30 && parent.height / 2 < parent.bottom) {
      sticky_item.style.position = "fixed";
      sticky_item.style.top = "0px";
      sticky_item.style.width = `${width}px`;
      sticky_item.classList.add("is_stuck");

      if (sticky_item.nextElementSibling?.id !== "placeholder") {
        const placeholderElement = document.createElement("div");
        placeholderElement.id = "placeholder";
        placeholderElement.style.height = `${height}px`;
        placeholderElement.style.width = `${width}px`;
        sticky_item.after(placeholderElement);
      }
    } else if (parent.height / 2 > parent.bottom) {
      sticky_item.style.position = "absolute";
      sticky_item.style.top = "auto";
      sticky_item.style.bottom = "0";
      sticky_item.style.width = `${width}px`;
    } else {
      sticky_item.style.position = "unset";
      sticky_item.style.top = "unset";
      sticky_item.style.bottom = "unset";
      sticky_item.style.width = "auto";
      sticky_item.classList.remove("is_stuck");

      if (sticky_item.nextElementSibling?.id === "placeholder")
        sticky_item.nextElementSibling.remove();
    }
  }

  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  console.log("🚀 ~ Team ~ activeIndex:", activeIndex);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <section
        className="team-crev pb-0 bord-thin-bottom px-2"
        style={{ marginBottom: "10px" }}
      >
        <div className="container-fluid rest">
          <div className="row">
            <div className="col-12" style={{ position: "relative" }}>
              <div
                className="team-container sec-head-lg text-center text-u mb-80 text-golden"
                id="sticky_item"
              >
                <h2>Team</h2>
              </div>
              <div className="swiper4">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    className="swiper-container team-profile-container"
                  >
                    {data.map((item, index) => (
                      <SwiperSlide key={index} onClick={() => openModal(index)}>
                        <div className="item">
                          <div className="img" style={{ height: "" }}>
                            <Image
                              src={item.image}
                              className="img-fluid"
                              alt="Landscape picture"
                              width={800}
                              height={500}
                            />
                          </div>
                          <div className="info">
                            <div className="main-marq team-position">
                              <div className="slide-har st1 non-strok">
                                <div className="box">
                                  {new Array(5).fill("").map((_, i) => (
                                    <div className="item" key={i}>
                                      <h4>{item.position}</h4>
                                    </div>
                                  ))}
                                </div>
                                <div className="box">
                                  {new Array(5).fill("").map((_, i) => (
                                    <div className="item" key={i}>
                                      <h4>{item.position}</h4>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="main-marq team-name">
                              <div className="slide-har st1 non-strok">
                                <div className="box">
                                  {new Array(5)?.fill("").map((_, i) => (
                                    <div className="item" key={i}>
                                      <h4>{item.name}</h4>
                                    </div>
                                  ))}
                                </div>
                                <div className="box">
                                  {new Array(5).fill("").map((_, i) => (
                                    <div className="item" key={i}>
                                      <h4>{item.name}</h4>
                                    </div>
                                  ))}
                                </div>
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
        </div>
      </section>
      <div className="">
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              initialSlide={activeIndex}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              navigation
              modules={[Navigation]}
            >
              {data.map((person, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-image-container p-0">
                    <div className="align-items-center">
                      <div className="text-center">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={150}
                          height={150}
                          className="rounded-circle team-image"
                          style={{
                            height: "150px",
                            width: "150px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="mb-2">
                          <h3 className="text-golden">{person.name}</h3>
                          <div className="team-position fw-semibold text-black">
                            {person.position}
                          </div>
                          <p className="fz-16 px-3 mb-1">
                            {person.description}
                          </p>
                        </div>
                        <div className="social-icons">
                          {/* Add social media links with icons */}
                          <a href={""} className="ms-0">
                            <i className="fab fa-facebook"></i>
                          </a>
                          <a href={""}>
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href={""}>
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <a href={""}>
                            <i className="fab fa-github"></i>
                          </a>
                        </div>
                        {/* <button className="btn btn-pink mt-3">Learn More</button> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="btn btn-golden">
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Team;

const data = [
  {
    id: 1,
    image: "/assets/images/about/team-4.jpg",
    name: "John Miller",
    position: "Chief Executive Officer",
    description: "Oversees company strategy and drives organizational growth.",
  },
  {
    id: 2,
    image: "/assets/images/about/team-0.jpg",
    name: "Emily Davis",
    position: "Head of Sales",
    description:
      "Leads the sales team in securing real estate deals and client relationships.",
  },
  {
    id: 3,
    image: "/assets/images/about/team-3.jpg",
    name: "Mark Johnson",
    position: "Lead Architect",
    description:
      "Designs and oversees architectural projects for high-profile properties.",
  },
  {
    id: 4,
    image: "/assets/images/about/team-2.jpg",
    name: "Sarah Williams",
    position: "Marketing Director",
    description:
      "Heads marketing campaigns and client outreach for luxury properties.",
  },
  {
    id: 5,
    image: "/assets/images/about/team-1.jpg",
    name: "David Thompson",
    position: "Chief Financial Officer",
    description:
      "Manages company finances, budgeting, and financial forecasting.",
  },
  {
    id: 6,
    image: "/assets/images/about/team-5.jpg",
    name: "Rachel Brown",
    position: "Project Manager",
    description:
      "Oversees property development projects from concept to completion.",
  },
];
