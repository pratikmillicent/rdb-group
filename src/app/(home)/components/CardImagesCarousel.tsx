// @ts-nocheck
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem, Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

function DarkVariantExample({ spliti, data }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
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

  return (
    <div className="container">
      {spliti?.map((item, index) => (
        <Row key={index}>
          <Col lg={3} className="p-0 d-none d-md-flex">
            <div className="d-flex align-self-center  gap-4">
              <div
                className="bg-navy rounded fw-semibold fs-5 align-self-center py-2  "
                style={{ height: "fit-content" }}
              >
                {item.date.split(" ")?.map((part, index) => (
                  <div
                    className="date bg-navy text-light px-1 px-3 py-1 text-center"
                    key={index}
                  >
                    <div className=" d-block fs-4"> {part}</div>
                  </div>
                ))}
              </div>
              <div
                className="fw-semibold fs-6 align-self-center "
                style={{
                  height: "fit-content",
                  width: "200px",
                  display: "block",
                }}
              >
                {item.title.split("<br />")?.map((line, index) => (
                  <React.Fragment key={index}>
                    <span className="fw-semibold fs-5"> {line}</span>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Col>
          <Col className="d-inline d-md-none">
            <div>
              {/* {item?.date?.map((part, index) => ( */}
              <div className="p-2" key={index}>
                {item?.date}
              </div>
              {/* ))} */}
            </div>

            <span>
              {item.title.split("<br />")?.map((line, index) => (
                <React.Fragment key={index}>
                  <span className="fw-semibold fs-5 px-2"> {line}</span>
                  <br />
                </React.Fragment>
              ))}
            </span>
          </Col>

          <Col lg={9} className="p-0">
            <div className="container">
              <div className="blog-carsouel">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-blog"
                    className="swiper-container"
                  >
                    {data.map((item) => (
                      <SwiperSlide
                        key={item.id}
                        className="wow fadeInUp"
                        data-wow-delay=".1s"
                      >
                        <div className="item p-0">
                          <div className="w-100 h-100 py-1">
                            <Image
                              src={item.image}
                              alt={item.description}
                              style={{ height: "200px", width: "100%" }}
                              width={800}
                              height={500}
                            />
                          </div>
                          {/* <div className="cont mt-30 ">
                            <div className="fw-semibold">
                              {item.description}
                            </div>
                          </div> */}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
}

function splitToNChunks(array, n) {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const directionButtons = (direction) => {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        bottom: "0",
        width: "fit-content",
        height: "fit-content",
        display: "block",
        background: "red",
        padding: "10px",
        paddingX: "40px",
        borderRadius: "10px",
      }}
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction}
    </span>
  );
};

const CarouselEvent = ({ data }) => {
  return (
    <Carousel
      indicators={false}
      interval={null}
      controls={true}
      nextIcon={directionButtons("Next")}
      prevIcon={directionButtons("Previous")}
      className="d-flex flex-column gap-2 py-5"
    >
      {splitarr.map((spliti) => {
        console.log("out of ", spliti);
        return (
          <CarouselItem>
            <DarkVariantExample spliti={spliti} data={data} />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};
export default CarouselEvent;

const carouselData = [
  {
    date: "31 Oct 2022",
    title: "RD Brother Lifestyle Empowers Agents with Free Maharera Training",
    // images: [
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK92UVfWmKFimBK90JD7wPOjectFATDhpJ_g&s",
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEVj7-_LPKXkdXvEH40UXbPcTr43lXAnPYQ&s",
    //   "assets/images/contact/contact.jpg",
    // ],
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
];

const data = [
  {
    id: 1,
    image: "/assets/images2/news1.webp",
    description:
      "Augmented Reality in Real Estate: Forecasting Market Trends in 2024",
    link: "https://homecapital.in/augmented-reality-in-real-estate-forecasting-market-trends-in-2024/",
  },
  {
    id: 2,
    image: "/assets/images2/news2.jpg",
    description: "Best Place for Real Estate Investment in Mumbai...",
    link: "https://www.hiranandani.com/is-thane-the-best-real-estate-investment-destination.aspx",
  },
  {
    id: 3,
    image: "/assets/images2/news3.webp",
    description:
      "Why Hire Real Estate Agent: Benefits & Reasons | Spiffy Spools",
    link: "https://www.spiffyspools.com/spiffy-speak/why-hire-real-estate-agent/",
  },
];

const splitarr = splitToNChunks(carouselData, 3);
