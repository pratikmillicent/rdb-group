import React, { useState, useEffect } from "react";
import Link from "next/link";
//= Modules
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "@/components/heading/Heading";
// stable asset
import { FaMoneyBillTrendUp } from "react-icons/fa6";
// monthly cashflow
import { GiTakeMyMoney } from "react-icons/gi";
// captial
import { GiMoebiusTriangle } from "react-icons/gi";

// portofolio
import { ImProfile } from "react-icons/im";

const swiperOptions = {
  speed: 1000,
  slidesPerView: 5,
  spaceBetween: 0,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  },
};

const Cre = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);
  return (
    <section className="approach-carso section-padding pb-4">
      <div className="container">
        <div className="sec-lg-head">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <Heading headTitle="Why Commercial Real Estate?" />
            </div>
          </div>
        </div>
        {/* <div className="">
          <p className="lead  my-4">
            Investing in commercial real estate has historically been one of the
            most lucrative options, providing strong returns, long-term
            stability, and portfolio diversification. Unlike other investment
            avenues, CRE offers higher yields, rental income, and appreciation
            potential while mitigating volatility. With Fracto, we make it
            easier for individual investors to tap into this high-value asset
            class, traditionally available only to institutional players
          </p>
        </div> */}
        <div className="swiper4">
          {loadSwiper && (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-approch"
              className="swiper-container  d-flex justify-content-center"
            >
              {data.map((item) => (
                <SwiperSlide className="px-3" key={item.id}>
                  <div className="item text-center">
                    {item.title.split(" ").map((text) => {
                      return (
                        <h4 key={text} className="">
                          {text}
                        </h4>
                      );
                    })}

                    <h2 className="fz-60 stroke num-font mt-30 text-golden">
                      {item.icon}
                    </h2>

                    {/* <p className="fz-16 mt-30">{item.text}</p> */}
                    <Link href="/dark/page-about" className="mt-15">
                      <span>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          style={{ color: "var(--golden)" }}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cre;

const data = [
  {
    id: 1,
    title: "High Returns",
    // text: "Investing in residential real estate provides steady rental income and potential for property value growth.",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    id: 2,
    title: "Stable Income",
    // text: "Explore opportunities in commercial real estate for higher returns and diverse investment portfolios.",
    icon: <GiTakeMyMoney />,
  },
  {
    id: 3,
    title: "Portfolio Diversification",
    // text: "Invest in REITs to gain exposure to real estate markets without owning physical properties.",
    icon: <GiMoebiusTriangle />,
  },
  {
    id: 4,
    title: "Capital Appreciation",
    // text: "Consider investing in land for future development or as a long-term appreciation strategy.",
    icon: <ImProfile />,
  },
  // {
  //   id: 5,
  //   title: "Portfolio Diversification",
  //   // text: "Consider investing in land for future development or as a long-term appreciation strategy.",
  //   icon: <ImProfile />,
  // },
];
