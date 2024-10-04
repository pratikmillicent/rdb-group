import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "@/components/heading/Heading";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiMoebiusTriangle } from "react-icons/gi";
import { ImProfile } from "react-icons/im";
import { Navigation, Pagination, Autoplay } from "swiper";

const Cre = () => {
  return (
    <section className="" style={{ background: "var(--background)" }}>
      <div className="">
        <div className="sec-lg-head">
          <div
            className="d-flex row justify-content-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div
              className="col-lg-6"
              style={{ color: "var(--navy)", padding: "0 100px" }}
            >
              <Heading
                headTitle="Why Commercial Real Estate?"
                fontSize="40px"
                textAlign="left"
                isMargin="0"
              />
              {/* <h1 style={{ fontSize: "48px" }}>
                Why Commercial
                <br />
                Real Estate?
              </h1> */}
              <p>
                Investing in commercial real estate has historically been one of
                the most lucrative options, providing strong returns, long-term
                stability, and portfolio diversification. Unlike other
                investment avenues, CRE offers higher yields, rental income, and
                appreciation potential while mitigating volatility. With Fracto,
                we make it easier for individual investors to tap into this
                high-value asset class, traditionally available only to
                institutional players.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                style={{ height: "80vh" }}
                src="/assets/images/fracto/CRE_3.png"
                alt="cre"
              />
            </div>
          </div>
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
