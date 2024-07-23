"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import ModalVideo from "@/components/modal-video/ModalVideo";
import Carousel from "@/components/carousel/Carousel";
import Heading from "@/components/heading/Heading";
interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}
const News = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState<Video | null>(null);

  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 3,
    loop: true,
    spaceBetween: 17,
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

  function openVideo(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Video
  ) {
    event.preventDefault();
    setIsVideoOpen(item);
  }

  useEffect(() => {
    setLoadSwiper(true);
  }, []);
  return (
    <>
      <img src="/assets/images/news/banner.png" style={{ height: "100vh" }} />
      <div className="container">
        <section
          className="blog-modern section-padding"
          style={{ paddingBottom: "0" }}
        >
          <div className="container">
            <div className="sec-lg-head mb-30">
              <div className="row">
                <div className="col-lg-8">
                  <Heading headTitle="LATEST NEWS" fontSize="fs-1" />
                </div>
              </div>
            </div>
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
                        <div className="img">
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              height: "320px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <div className="cont mt-30">
                          <h6 className="fw-600">
                            <Link href="/dark/blog-post">
                              {item.description}
                            </Link>
                          </h6>
                          <Link
                            href="/dark/blog-post"
                            className="mt-6 ls1 sub-title fw-500"
                          >
                            Read More{" "}
                            <i className="ml-5">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </section>
        <section
          className="blog-modern section-padding"
          style={{ paddingBottom: "0px" }}
        >
          <div className="container">
            <div className="sec-lg-head mb-30">
              <div className="row">
                <div className="col-lg-8">
                  <Heading headTitle="AWARDS" fontSize="fs-1" />
                </div>
              </div>
            </div>
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {data1.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <div className="item p-0">
                        <div className="img">
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              height: "320px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </section>

        <section
          className="blog-modern section-padding"
          style={{ paddingBottom: "0px" }}
        >
          <div className="container">
            <div className="sec-lg-head mb-40">
              <div className="row">
                <div className="col-lg-8">
                  <Heading headTitle="PHOTOS GALLERY" fontSize="fs-1" />
                </div>
              </div>
            </div>
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {data2.map((item) => (
                    <SwiperSlide
                      key={item.id}
                      className="wow fadeInUp"
                      data-wow-delay=".1s"
                    >
                      <div className="item p-0">
                        <div className="img">
                          <img
                            src={item.image}
                            alt=""
                            style={{
                              height: "320px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </section>

        <div className="container section-padding">
          <div className="sec-lg-head">
            <div className="row">
              <div className="col-lg-8">
                <Heading headTitle="Video Gallery" fontSize="fs-1" />
              </div>
            </div>
          </div>
          <Carousel
            data={videoData}
            component={(item: Video) => (
              <div onClick={(e) => openVideo(e, item)}>
                <div style={{ position: "relative" }}>
                  <svg
                    style={{
                      position: "absolute",
                      width: "100px",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                    className="video-overlay-play-button"
                    viewBox="0 0 200 200"
                  >
                    <circle
                      cx="100"
                      cy="100"
                      r="90"
                      fill="none"
                      stroke-width="15"
                      stroke="#fff"
                    />
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff" />\
                  </svg>
                  <img src={item.image} />
                </div>
                <div
                  style={{
                    background: "#fff",
                    padding: "16px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </div>
              </div>
            )}
          />
          <ModalVideo
            isOpen={isVideoOpen}
            onClose={() => setIsVideoOpen(null)}
          />
        </div>
      </div>
    </>
  );
};

export default News;
const data = [
  {
    id: 1,
    image: "https://picsum.photos/1100/1100",
    description: "People Choice Awards - NAREDCO 2023",
  },
  {
    id: 2,
    image: "https://picsum.photos/1200/1200",
    description: "Top Emerging Developer - Times Of India 2023",
  },
  {
    id: 3,
    image: "https://picsum.photos/1300/1300",
    description: "Best Construction Quality Award - Reality Quaters 2023",
  },
];

const data1 = [
  {
    id: 1,
    image: "/assets/images2/news-awards.jpg",
  },
  {
    id: 2,
    image: "/assets/images2/news-awards.jpg",
  },
  {
    id: 3,
    image: "/assets/images2/news-awards.jpg",
  },
  {
    id: 4,
    image: "/assets/images2/news-awards.jpg",
  },
];

const data2 = [
  {
    id: 1,
    image: "https://picsum.photos/id/177/1200/1200",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/177/1200/1200",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/177/1200/1200",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/177/1200/1200",
  },
];

const data3 = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/fUmSkEvet08?si=YIHahVn80b5_y-yo",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/FeiiAvkAcnA?si=fXcp3EW3SacCe-hQ",
  },
];

const videoData: Video[] = [
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];
