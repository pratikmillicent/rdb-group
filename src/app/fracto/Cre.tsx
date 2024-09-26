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
      <div className="container">
        <div className="sec-lg-head">
          <div
            className="d-flex row justify-content-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <div className="col-lg-6" style={{ color: "var(--navy)" }}>
              <Heading
                headTitle="Why Commercial Real Estate?"
                fontSize="48px"
                textAlign="left"
              />
              {/* <h1 style={{ fontSize: "48px" }}>
                Why Commercial
                <br />
                Real Estate?
              </h1> */}
            </div>
            <div className="col-lg-6">
              <img
                style={{ height: "80vh" }}
                src="/assets/images/fracto/CRE.png"
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
