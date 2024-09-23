import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./newgroup.css";

function DarkVariantExample({ spliti, data }: any) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 2500,
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
    <div className="container ">
      {spliti?.map((item: any, index: any) => (
        <Row key={index}>
          <Col lg={3} className="p-0 d-none d-md-flex">
            <div className="d-flex align-self-center  gap-4">
              <div
                className="bg-navy fw-semibold fs-5 align-self-center py-2 px-3"
                style={{ height: "fit-content" }}
              >
                {item.date.split(" ")?.map((part, index) => {
                  let styles = {};
                  if (index === 0) {
                    styles = {
                      fontSize: "30px", // for '1'
                      display: "block",
                      fontWeight: "400",
                      lineHeight: 1.2,
                    };
                  } else if (index === 1) {
                    styles = {
                      fontSize: "24px", // for 'Aug'
                      display: "block",
                      fontWeight: "300",
                    };
                  } else if (index === 2) {
                    styles = {
                      fontSize: "17px", // for '2023'
                      display: "block",
                      fontWeight: "300",
                      marginTop: "-6px",
                    };
                  }

                  return (
                    <span
                      className="date bg-navy text-light text-center"
                      key={index}
                      style={styles}
                    >
                      {part}
                    </span>
                  );
                })}
              </div>
              <div
                className="fw-semibold fs-1 align-self-center text-uppercase"
                style={{
                  height: "fit-content",
                  width: "160px",
                  display: "block",
                }}
              >
                {item.title.split("<br />")?.map((line, index) => (
                  <React.Fragment key={index}>
                    <span
                      className="fw-semibold fs-6 text-uppercase fz-20"
                      style={{
                        fontWeight: 500,
                      }}
                    >
                      {line}
                    </span>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Col>

          <Col className="d-inline d-md-none p-0 p-md-2">
            <div>
              <div className="p-0 p-md-2 fs-7" key={index}>
                {item?.date}
              </div>
            </div>

            <span>
              {item.title.split("<br />")?.map((line, index) => (
                <React.Fragment key={index}>
                  <span className="fw-bold fs-6 px-0 px-md-2">{line}</span>
                  <br />
                </React.Fragment>
              ))}
            </span>
          </Col>

          <Col lg={9} className="p-0">
            <div className="container gallery-img">
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
                        className="wow fadeInUp mb-2"
                        data-wow-delay=".1s"
                      >
                        <div className="item p-0 mb-5">
                          <div className="w-100 h-100">
                            <Image
                              src={item.image}
                              alt={item.description}
                              style={{ height: "160px", width: "100%" }}
                              width={800}
                              height={500}
                            />
                          </div>
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
  let result: any[] = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

const directionButtons = (direction) => {
  // console.log("🚀 ~ directionButtons ~ direction:", direction);
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        // bottom: "0",
        ...(direction === "Next" ? { right: "-80%" } : { left: "-80%" }),
        width: "fit-content",
        height: "fit-content",
        color: "black",
        fontWeight: "bold",
        padding: "10px 40px",
        borderRadius: "6px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // border: "1px solid #d4af5f",
        // backgroundColor: "white",
      }}
      className={`${direction} === Next ? button-next : button-prev swiper-arrow-mobile d-none d-md-block`}
    >
      {direction === "Next" ? (
        <IoIosArrowForward fontSize={48} />
      ) : (
        <IoIosArrowBack fontSize={48} />
      )}
    </span>
  );
};

const CarouselEvent = ({ data }) => {
  return (
    <Carousel
      interval={4000}
      controls={true}
      indicators={false}
      variant="dark"
      nextIcon={directionButtons("Next")}
      prevIcon={directionButtons("Previous")}
      className="d-flex flex-column gap-2  mb-3 mx-0 mx-md-3"
    >
      {splitarr.map((spliti, index) => {
        // console.log("out of ", spliti);
        return (
          <CarouselItem key={index}>
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
    title: "Lorem, ipsum dolor sit loerm",
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
    title: "Lorem, ipsum dolor sit loerm",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
    images: [
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
      "assets/images/contact/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm ",
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
