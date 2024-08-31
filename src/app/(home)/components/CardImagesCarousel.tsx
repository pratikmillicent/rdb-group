import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className="container">
      {spliti?.map((item: any, index: any) => (
        <Row key={index}>
          <Col lg={3} className="p-0 d-none d-md-flex">
            <div className="d-flex align-self-center  gap-4">
              <div
                className="bg-navy fw-semibold fs-5 align-self-center py-2  "
                style={{ height: "fit-content" }}
              >
                {item.date.split(" ")?.map((part, index) => (
                  <div
                    className="date bg-navy text-light px-1 px-3 py-1 text-center"
                    key={index}
                  >
                    <div className=" d-block fs-5"> {part}</div>
                  </div>
                ))}
              </div>
              <div
                className="fw-semibold fs-1 align-self-center "
                style={{
                  height: "fit-content",
                  width: "160px",
                  display: "block",
                }}
              >
                {item.title.split("<br />")?.map((line, index) => (
                  <React.Fragment key={index}>
                    <span className="fw-semibold fs-6"> {line}</span>
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </Col>
          <Col className="d-inline d-md-none">
            <div>
              {/* {item?.date?.map((part, index) => ( */}
              <div className="p-2 fs-5" key={index}>
                {item?.date}
              </div>
              {/* ))} */}
            </div>

            <span>
              {item.title.split("<br />")?.map((line, index) => (
                <React.Fragment key={index}>
                  <span className="fw-bold fs-5 px-2">{line}</span>
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
                    {data.map(item => (
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

const directionButtons = direction => {
  console.log("🚀 ~ directionButtons ~ direction:", direction);
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
      className={`${direction} === Next ? button-next : button-prev swiper-arrow-mobile`}
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
      interval={null}
      controls={true}
      indicators={false}
      variant="dark"
      nextIcon={directionButtons("Next")}
      prevIcon={directionButtons("Previous")}
      className="d-flex flex-column gap-2  pt-5 mb-3 ms-3 me-3"
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
