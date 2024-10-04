//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./gallery2.css";
import Heading from "@/components/heading/Heading";
import { Modal } from "react-bootstrap";

SwiperCore.use([Navigation, Pagination]);

interface IEvent {
  image: string;
  title: string;
}

interface IImage {
  image: string;
}

const events: IEvent[] = [
  {
    title: "Jhamkudi Movie Mumbai Premier",
    image: "/assets/images/movie/gallary/mumbai-premier/i (1).JPG",
  },
  {
    title: "Jhamkudi Movie Ahemdabad Premier",
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (1).JPG",
  },
];

const mumbai: IImage[] = [
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (1).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (2).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (3).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (4).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (5).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (6).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (7).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (8).JPG",
  },
  {
    image: "/assets/images/movie/gallary/mumbai-premier/i (9).JPG",
  },
];
const ahemdabad: IImage[] = [
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (1).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (2).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (3).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (4).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (5).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (6).JPG",
  },
  {
    image: "/assets/images/movie/gallary/ahemadabad-premier/i (7).JPG",
  },
];

function Gallary2() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const swiperRef = useRef<SwiperCore>(null);
  const [loadSwiper, setLoadSwiper] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const renderSlide = (item: IImage) => (
    <div className="mobile-padding" style={{ width: "100%" }}>
      <div className="">
        <div style={{ position: "relative", width: "100%" }}>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={800}
            height={300}
            style={{
              width: "100%",
              height: "250px",
            }}
          />
          <h3
            style={{
              position: "absolute",
              bottom: "0",
              left: "20px",
              color: "var(--white)",
              fontSize: "28px",
            }}
          >
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section
        style={{
          background: "var(--background)",
          backgroundSize: "cover",
          padding: "30px 0",
        }}
      >
        <Heading headTitle="Our Gallery" />
        <div
          className="container"
          style={{
            overlayX: "hidden",
          }}
        >
          <div className="container-fluid rest">
            <div className="row" style={{ marginBottom: "120px" }}>
              <div className="" style={{ position: "relative" }}>
                <div className="work-crus work-crus2">
                  {loadSwiper && (
                    <Swiper
                      {...swiperOptions}
                      id="content-carousel-container-unq-w"
                      className="swiper-container"
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      {events.map((item, i) => (
                        <SwiperSlide onClick={() => openModal(i)} key={i}>
                          {renderSlide(item)}
                        </SwiperSlide>
                      ))}
                      {/* <div className="swiper-pagination" /> */}
                    </Swiper>
                  )}
                </div>

                {/* <div
                className=""
                style={{
                  position: "absolute",
                  width: "89vw",
                  alignItems: "center",
                  top: "94%",
                  alignContent: "center",
                }}
              > */}
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
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for displaying images */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={activeIndex}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation // Enable navigation arrows
            modules={[Navigation]} // Import the Swiper navigation module
          >
            {ahemdabad.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-image-container">
                  <img
                    src={image.image}
                    alt={image.image}
                    className="landscape-image"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Modal.Body>
        <Modal.Footer>
          <div className="toast-header">
            {/* <button
              className="btn btn-5"
              style={{ color: "#fff" }}
              onClick={handleClose}
            >
              <span></span>
              Close
            </button> */}
            <div>
              <button
                onClick={handleClose}
                className="btn btn-10 flex-vh-center"
              >
                Close
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  centeredSlides: false,
  slidesPerView: 3,

  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //   },
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 60,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //     spaceBetween: 60,
  //   },
  //   1024: {
  //     slidesPerView: 2,
  //   },
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default Gallary2;
