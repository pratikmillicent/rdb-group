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
              headTitle="Unlocking the Future of Real Estate Investing."
              color="white"
            />
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
          <p className="lead my-4">
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
        {/* <SectionImage /> */}
        {/* <Vision /> */}
        {/* <Mission /> */}
        <FractoSectionImage />

        <div style={{ display: "flex", margin: "60px" }} className="container">
          <div style={{ flex: "1", paddingRight: "40px" }}>
            <Heading headTitle="Our Founder" textAlign="left" />
            <p>
              Dhaval Thakkar, with 15 years of experience in commercial and
              retail real estate, is known for his attention to detail and
              passion for innovation. His leadership has driven the company’s
              growth, delivering over 1.5 million square feet of prime real
              estate across 14 cities in India. Bold and forward-thinking,
              Dhaval focuses on diversification and embracing new technologies
              to create value.
            </p>
            <p>
              He inspires his team, fostering collaboration and creativity, and
              believes growth is about building a sustainable, innovative
              future. Dhaval’s vision has expanded the company’s reach and set
              new industry standards, keeping the business agile and
              competitive.
            </p>
          </div>
          <div style={{ flex: "", position: "relative" }}>
            <Image
              alt="Dhaval Thakkar"
              src="/assets/images2/Dhaval.png"
              style={{ width: "320px", zIndex: 1 }}
              width={100}
              height={100}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                border: "5px solid var(--golden)",
                left: "20px",
                top: "-20px",
                right: "-20px",
                bottom: "20px",
              }}
            ></div>
          </div>
        </div>

        <ProjectFracto />

        <Cre />
        <FractoAdvantage />
        {/* <Advantage /> */}
        {/* <Advantage2 /> */}
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
