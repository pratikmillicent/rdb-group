"use client";
import Image from "next/image";
import React from "react";
import SectionImage from "../(home)/components/SectionImage";
import Cre from "./Cre";
import HowItWorks from "./HowItWorks";
import Ourbrand from "./Ourbrand";
import Contact from "./Contact";
import Advantage from "./Advantage";
import Investment from "./InvestmentOption";

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
            <h3 className="banner-heading">Fracto</h3>
            <div
              className="border-line"
              style={{
                width: "50px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          <p className="lead my-4">
            Welcome to Fracto, where innovation meets real estate. Our mission
            is to revolutionize the way you buy, sell, and rent properties by
            leveraging cutting-edge technology and providing exceptional
            service. At Fracto, we understand that the real estate journey is
            not just about transactions, but about finding a place to call home
            or making a sound investment. That's why we are committed to
            offering a user-friendly platform, comprehensive market insights,
            and personalized support every step of the way.
          </p>
          <p className=" mb-4"></p>
        </div>
        <SectionImage />
        <Advantage />
        <Cre />
        <HowItWorks />
        <Ourbrand />
        <Contact />
        <Investment />
      </div>
    </>
  );
};

export default page;
