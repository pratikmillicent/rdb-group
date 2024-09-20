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
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
  },
  {
    id: 2,
    title: "We create some things for your success in future growth",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
  },
  {
    id: 3,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
  },
  {
    id: 4,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
  },
  {
    id: 5,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news2.jpg",
    author: "Admin",
    date: "august 6, 2021",
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
  },
  {
    id: 6,
    title: "Creative advertising in our life became a info noise",
    cover: "/assets/images/home/news1.jpg",
    author: "Admin",
    date: "august 6, 2021",
    category: "real estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic",
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

function News2() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="blog-modern">
      <div className="container">
        {/* <div className="sec-lg-head mb-10">
          <div className="row" style={{ position: "relative" }}>
            <div className="col-lg-12">
              <div>
                <Heading headTitle="Latest News" />
              </div>
            </div>
          </div>
        </div> */}
        <Heading headTitle="Latest News" />

        <div className="blog-carsouel">
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
                        alt="Landscape picture"
                        width={800}
                        style={{
                          height: "320px",
                          objectFit: "cover",
                        }}
                        height={500}
                      />
                      {/* Date Badge */}
                      <div className="absolute top-2 left-2 bg-orange-600 text-white rounded-lg p-2">
                        <div className="text-center font-bold text-lg">
                          {item.date}
                        </div>
                        {/* <div className="text-center text-sm">NOV</div> */}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-6 py-4">
                      <div className="text-orange-600 font-semibold text-sm mb-2">
                        {item.category}
                      </div>
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="px-6 pt-4 pb-2">
                      <span className="text-gray-600 text-sm">
                        {item.author}
                      </span>
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

export default News2;
