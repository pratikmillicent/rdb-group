"use client";
// import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import SectionImage from "../(home)/components/SectionImage";
import Advantage2 from "./Advantage2";
import HowItWorks from "./HowItWorks";
import Ourbrand from "./Ourbrand";
import Contact from "./Contact";
import Advantage from "./Advantage";
import Investment from "./InvestmentOption";
import About from "./About";
import ProjectFracto from "./ProjectFracto";
import Heading from "@/components/heading/Heading";
import Cre from "./Cre";
import Vision from "./Vision";
import Mission from "./Mission";
import FractoSectionImage from "./FractoVisionMission";
import FractoAdvantage from "./FractoAdvantage";
import "./howtowork2.css";
import FractoAdvantageMobile from "./FractoAdvantageMobile";
import Founder from "./Founder";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          style={{ objectFit: "fill" }}
          objectFit="cover"
          src="/assets/images/fracto/banner-2.png"
          // className="w-100 news-banner banner "
          className="w-100 news-banner banner"
          alt="fracto"
          width={800}
          height={500}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            <Heading
              headTitle="Unlocking the Future of Real Estate Investing."
              color="white"
              isSpace={false}
            />
            {/* <div
      style={{width: "fit-content", margin: "0 auto" }}
      className="position-relative"
    >
      <h2
        className="mb-80 mb-30 fs-2"
        style={{ fontSize: `${fontSize} !important` }}
      >
        <span style={{ color }} ref={spanRef}>
          {headTitle}
        </span>
      </h2>
      <div
        className="border-line position-absolute "
        style={{
          
          top: "100%",
          left: textAlign === "center" ? "12.5%" : "0",
          right: textAlign === "center" ? "12.5%" : "70%",
        }}
      ></div>
    </div> */}
          </div>
        </div>
      </div>
      <div className="">
        <div
          className="container"
          style={{
            marginBottom: "60px !important",
          }}
        >
          <Heading headTitle="About Us" />
          <p className="my-4 mobile-justify">
            Fracto makes commercial real estate investing easy and accessible to
            more people. We use technology to provide a simple, transparent
            platform where investors can buy shares in commercial properties and
            grow their portfolios. With expert research and analysis, we ensure
            smart investments that deliver sustainable returns. Our fractional
            ownership model lets investors start small, while our full-service
            approach—from property selection to asset management—helps maximize
            value and reduce risk.
          </p>
        </div>
        <FractoSectionImage />
        {/* <Vision />
        <Mission /> */}

        <Founder />

        <Cre />

        <div className="d-block d-lg-none">
          <FractoAdvantageMobile />
        </div>
        <div className="d-none d-lg-block">
          <FractoAdvantage />
        </div>

        <Advantage2 />

        <ProjectFracto />

        <Ourbrand />
        <Contact />
      </div>
    </>
  );
};

export default page;
