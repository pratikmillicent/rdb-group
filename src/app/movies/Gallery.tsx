import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper navigation styles
import "./Gallery.css";
import Heading from "@/components/heading/Heading";

const images = [
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-0.avif",
    alt: "guitar player at concert",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-1.avif",
    alt: "duo singing",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-2.avif",
    alt: "crowd cheering1",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-3.avif",
    alt: "crowd cheering2",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-4.avif",
    alt: "crowd cheering3",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-5.avif",
    alt: "crowd cheering4",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-6.avif",
    alt: "crowd cheering5",
  },
  {
    src: "https://assets.codepen.io/1506195/unsplash-music-10.avif",
    alt: "crowd cheering6",
  },
];
0;
const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div
      className="py-5"
      // style={{ backgroundColor: "var(--background)", height: "110dvh" }}
    >
      <Heading headTitle="Gallery" />
      <article
        className="grid-gallery justify-content-center p-5"
        style={{
          height: "90dvh",
          backgroundImage: "url(/assets/images/movie/gallery_strip.jpg)",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </article>

      {/* Modal for displaying images */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            initialSlide={activeIndex}
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            navigation // Enable navigation arrows
            modules={[Navigation]} // Import the Swiper navigation module
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="swiper-image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
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
    </div>
  );
};

export default Gallery;
