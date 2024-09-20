import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Tising in our life became a info noise",
    // cover: "/assets/images/home/news2.jpg",
    cover:
      "https://gdoc.io/uploads/Twitter_Real_Estate_Newspaper_2_1600_900_1artboards_.jpg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 2,
    title: "We create some things success in future growth",
    cover:
      "https://images.squarespace-cdn.com/content/5c115fec9d5abbba78a23c93/1597936991711-BPDT1FFFWNAGVDCD0EP7/How+Is+Commercial+Real+Estate+Valued-01.jpg?format=1500w&content-type=image%2Fjpeg",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  {
    id: 3,
    title: "We create some things success in future growth",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oK8Ovykk09mja3ilBvtk2Y6e-zIZYtURvA&s",
    author: "Admin",
    date: "August 6, 2021",
    category: "Real Estate",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus similique corrupti atque at quo ipsa porro, voluptas eos eligendi a provident ex quaerat, asperiores libero facere dignissimos hic.",
  },
  // Add more items as needed...
];

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
    1024: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

function News2() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section
      className="blog-modern overflow-hidden"
      style={{ position: "relative" }}
    >
      <div className="container">
        <Heading headTitle="Latest News" />
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
                  <div className="max-w-sm rounded overflow-hidden bg-white position-relative">
                    {/* Image */}
                    <div className="">
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
                      <div className="fw-700 fz-10 text-golden">LAW FIRM</div>
                      <div className="fw-600 fz-22 mb-2">{item.title}</div>
                      <p className="fz-16 fw-400">{item.description}</p>
                      {/* Author */}
                      <div className="px-6 pt-4 pb-2">
                        <span className="text-grey news-firm">
                          Fynley Wilkinson
                        </span>
                        <div className="bg-dark date-banner">
                          <DateBanner />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Navigation Buttons */}
        {/* <div
          className="swiper-button-next text-dark fw-600 news-arrow-mobile-right"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            // right: "-60px",
            // top: "59%",
            top: "18%",
            transform: "translateY(-50%)",
          }}
        ></div>

        <div
          className="swiper-button-prev text-dark news-arrow-mobile-left"
          style={{
            fontWeight: "600",
            height: "40px",
            width: "40px",
            borderRadius: "50%",
            position: "absolute",
            // left: "-60px",
            top: "18%",
            // top: "59%",
            transform: "translateY(-50%)",
          }}
        /> */}
      </div>
    </section>
  );
}

// const DateBanner = ({ date }) => {
//   return (
//     <div className="date-wrapper bg-golden">
//       <span>{date}</span>
//     </div>
//   );
// };

export default News2;

const DateBanner = () => {
  return (
    <>
      <div
        className="date-wrapper bg-golden"
        style={{
          position: "absolute",
          backgroundSize: "cover",
          bottom: "445px",
          left: "5px",
          borderRadius: "5px",
        }}
      >
        <div
          className="date-box text-white bg-golden"
          style={{ fontSize: "32px", fontWeight: 700 }}
        >
          10
        </div>
        <div
          className="date-letter-box py-2 text-white"
          style={{ backgroundColor: "#D29530", fontSize: "12px" }}
        >
          NOV
        </div>
      </div>
    </>
  );
};
