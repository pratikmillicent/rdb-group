import { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Tising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 2,
    title: "We create some things for your success in future growth",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 3,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 4,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 5,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
  {
    id: 6,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
  },
];

const swiperOptions = {
  modules: [Navigation],
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

function News() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="blog-modern">
      <div className="container">
        <div className="sec-lg-head mb-10">
          <div className="row" style={{ position: "relative" }}>
            <div className="col-lg-12">
              {/* <div> */}
              {/* <div className="fz-50 fw-600">Latest News</div> */}
              <Heading headTitle="Latest News" />
              {/* </div> */}
            </div>
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="col-lg-1 d-flex align-items-center text-nowrap"
            >
              <div className="full-width d-flex justify-content-end justify-end">
                <div className="vew-all wow fadeIn">
                  <Link href="/news">
                    View All Our News
                    <span>
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
                    </span>
                  </Link>
                </div>
              </div>
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
              {data?.map(item => (
                <SwiperSlide
                  key={item.id}
                  className="wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="item ">
                    <div className="img news-div">
                      <Image
                        src={item.cover}
                        alt="Landscape picture"
                        width={800}
                        style={{
                          height: "320px",
                          objectFit: "cover",
                        }}
                        height={500}
                      />
                      <div className="date">
                        <Link href="/dark/blog-post">{item.date}</Link>
                      </div>
                    </div>
                    <div className="cont mt-30">
                      <h6 className="lh-sm card-text">
                        <Link href="/dark/blog-post">{item.title}</Link>
                      </h6>
                      <Link href="/dark/blog-post" className="ls1 sub-title">
                        Read More{" "}
                        <i className="ml-2">
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
  );
}

export default News;
