//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Heading from "@/components/heading/Heading";
import { Modal } from "react-bootstrap";
import "../movies/gallery2.css";

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
    title: "",
    image: "https://fakeimg.pl/640x320",
  },
  {
    title: "",
    image: "https://fakeimg.pl/640x320",
  },
];

// const mumbai: IImage[] = [
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (1).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (2).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (3).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (4).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (5).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (6).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (7).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (8).JPG",
//   },
//   {
//     image: "/assets/images/movie/gallary/mumbai-premier/i (9).JPG",
//   },
// ];
const ahemdabad: IImage[] = [
  {
    image: "https://fakeimg.pl/640x320",
  },
  {
    image: "https://fakeimg.pl/640x320",
  },
  {
    image: "https://fakeimg.pl/640x320",
  },
  {
    image: "https://fakeimg.pl/640x320",
  },
];

function CarrerGallery() {
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
    <div className="" style={{}}>
      <div>
        <div style={{ position: "relative" }}>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            width={800}
            height={300}
            style={{ height: "250px" }}
          />

          <h3
            style={{
              position: "absolute",
              bottom: "0",
              left: "20px",
              color: "#fff",
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
      <section>
        <div className="container">
          <div className="container-fluid rest">
            <div className="row">
              <div className="col-12" style={{ position: "relative" }}>
                <div className="work-crus work-crus2">
                  {loadSwiper && (
                    <Swiper
                      {...swiperOptions}
                      id="content-carousel-container-unq-w"
                      className="swiper-container"
                      onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                      {events.map((item, i) => (
                        <span className="text-center">
                          <SwiperSlide onClick={() => openModal(i)} key={i}>
                            {renderSlide(item)}
                          </SwiperSlide>
                        </span>
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
                    right: "-60px !important",
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
                    left: "-60px !important",
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
  spaceBetween: 80,
  loop: true,
  centeredSlides: true,
  slidesPerView: 2,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    1024: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

export default CarrerGallery;
