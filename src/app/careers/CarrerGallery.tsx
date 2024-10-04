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
    image: "/assets/images/career/gallary/2.jpg",
  },
  {
    image: "/assets/images/career/gallary/3.jpg",
  },
  {
    image: "/assets/images/career/gallary/1.jpg",
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
// const ahemdabad: IImage[] = [

//   // {
//   //   image: "/assets/images/career/gallary/1.jpg",
//   // },
// ];

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
        <div style={{ position: "relative", height: "300px" }}>
          <Image
            src={item?.image}
            className="circle-img"
            alt="Landscape picture"
            fill
            // width={600}
            // height={250}
            // style={{ height: "250px" }}
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
                        <span key={i} className="text-center">
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
                    right: "-60px",
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
                    left: "-60px",
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
      <div style={{ maxHeight: "50vh" }}>
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              // initialSlide={activeIndex}
              // onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              navigation
              modules={[Navigation]}
            >
              {events.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-image-container">
                    <img
                      style={{ height: "300px" }}
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
            <button onClick={handleClose} className="btn btn-golden">
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

const swiperOptions = {
  speed: 1000,
  spaceBetween: 40,
  loop: true,
  centeredSlides: false,
  slidesPerView: 4,
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

export default CarrerGallery;
