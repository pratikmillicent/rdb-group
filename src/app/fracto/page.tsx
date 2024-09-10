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
import HowItWorks2 from "./HowItWorks2";
import Heading from "@/components/heading/Heading";
import Cre from "./Cre";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="https://img.freepik.com/premium-photo/two-real-estate-agents-shaking-hands-stunning-urban-backdrop-generative-ai_108146-5933.jpg?w=900"
          className="w-100 news-banner banner "
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
              "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
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
            {/* <h3 className="banner-heading hero-heading">
              Invest in Opportunities. Unlock Real Estate Value.
            </h3> */}
            <Heading
              headTitle="Invest in Opportunities. Unlock Real Estate Value."
              color="white"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <p className="lead my-4">
            Strata was established with a bold vision: to democratize commercial
            real estate investing and make it accessible to a wider range of
            investors. Our mission is to break down the barriers to entry in
            this traditionally exclusive market, enabling more people to
            participate in high-value, institutional-grade real estate
            opportunities. We leverage technology and innovation to simplify the
            investment process, providing a transparent, hassle-free platform
            where investors can diversify their portfolios with carefully
            curated commercial properties. Our data-driven approach ensures that
            each investment is backed by thorough market research, expert
            analysis, and a commitment to delivering sustainable returns. At
            Strata, we believe in unlocking the true potential of real estate by
            offering fractional ownership, enabling investors to start small and
            scale as they grow. Our end-to-end services—from property selection
            and due diligence to asset management and exit strategies—are
            designed to maximize value and minimize risk for our investors.
          </p>
        </div>
        {/* <SectionImage /> */}
        <ProjectFracto />

        <Cre />
        {/* <Advantage /> */}
        <Advantage2 />
        <HowItWorks2 />
        {/* <HowItWorks /> */}
        {/* <Cre /> */}

        {/* <HowItWorks /> */}
        <Ourbrand />
        <Contact />
        {/* <Investment /> */}
      </div>
    </>
  );
};

export default page;
