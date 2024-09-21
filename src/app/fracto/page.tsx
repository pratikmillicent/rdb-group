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
import Vision from "./Vision";
import Mission from "./Mission";

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
            At Fracto, we are trailblazers in the Proptech sector, merging the
            world of real estate with advanced technology to transform how
            properties are bought, sold, and managed. Our mission is to break
            down the barriers that traditionally restrict access to high-value
            real estate investments, empowering a broader range of investors to
            participate. Through cutting-edge digital platforms, we offer
            streamlined processes that provide transparency, efficiency, and
            superior tools to enhance the real estate investment journey. By
            leveraging data-driven insights and innovative technology, we are
            committed to delivering an experience that simplifies
            decision-making and maximizes value for our clients.
          </p>
        </div>
        {/* <SectionImage /> */}
        <Vision />
        <Mission />
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
