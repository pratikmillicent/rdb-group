import { useEffect, useState } from "react";
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
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 2,
    title: "We create some things success in future growth",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  // Add more items as needed...
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

function News2() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="blog-modern overflow-hidden">
      <div className="container">
        <div className="sec-lg-head mb-10">
          <div className="row" style={{ position: "relative" }}>
            <div className="col-lg-12">
              <div>
                <Heading headTitle="Latest News" />
              </div>
            </div>
          </div>
        </div>

        <div className="blog-carousel">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-blog"
              className="swiper-container"
            >
              {data?.map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="max-w-sm rounded overflow-hidden  bg-white">
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={item.cover}
                        alt={item.title}
                        width={100}
                        height={100}
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="bg-grey" style={{ padding: "30px 40px" }}>
                      <div className="fw-700 fz-10 text-golden">
                        {/* {item.category} */}
                        LAW FIRM
                      </div>
                      <div className="fw-600 fz-22 mb-2">{item.title}</div>
                      <p className="fz-16 fw-400 ">{item.description}</p>
                      {/* Author */}
                      <div className="px-6 pt-4 pb-2">
                        <span className="text-grey news-firm">
                          Fynley Wilkinson
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Swiper Navigation Buttons */}
        {/* <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div> */}
      </div>
    </section>
  );
}

export default News2;
