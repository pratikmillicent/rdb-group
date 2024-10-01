// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import FrameSlider from "./RealtySlideShow";
import OngoingProject from "./OngoingProject";
import gsap from "gsap";
import SectionImage from "../(home)/components/SectionImage";
import CompletedProjects from "./CompletedProject";
import UpcomingProject from "./UpcomingProject";
import Careers from "./Carrer";
import ResumeUpload from "../careers/components/ResumeUpload";
import FractoAdvantage from "./FractoAdvantage";
import Project from "./Project";
import Experience from "../about/components/Experience";
import DirectorCard from "../about/components/DirectorCard";
import Sustainability from "./Sustainability";
import ContactComponent from "../contact-us/components/ContactComponent";
import MissionVision from "./MissionVision";
import MissionVisionMobile from "./MissionVisionMobile";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const Realty = () => {
  return (
    <>
      <main className="bg- text-black">
        <div style={{ position: "relative" }}>
          <Image
            src="/assets/images/realty/banner.jpg"
            className="w-100 d-block  news-banner banner hero-height"
            // className="w-100 d-block  news-banner hero-height"
            alt="News Banner"
            // style={{objectFit : 'cover'}}
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
              background: "rgba(0,0,0, .3)",
              // background:
              //   "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                // paddingRight: "320px",
                height: "100%",
                // padding: "0 20px",
              }}
            >
              <p style={{ fontSize: "46px", color: "#FFF" }}>
                Taking real estate
                <br /> development to the next level
                <br /> with a customer-first attitude
              </p>
            </div>
          </div>
        </div>
        {/* <FrameSlider data={data} /> */}
        <div className="container">
          <Heading headTitle="Overview" />
          <p className="">
            In the real estate domain, we are renowned for our exceptional
            expertise and services, especially in luxury property development
            and strategic land acquisition. With a commitment to quality and
            innovation, we consistently strive to exceed our clients'
            expectations, delivering projects that epitomize sophistication and
            functionality. Our focus extends beyond mere construction; we create
            spaces that offer enduring value, blending aesthetic appeal with
            practical design. Each project is thoughtfully crafted to reflect
            our dedication to excellence, ensuring long-term satisfaction and a
            seamless blend of luxury living with modern convenience for
            discerning clients.
          </p>
        </div>
        <div className="d-none d-md-block">
          <MissionVision />
        </div>
        <div className="d-block d-md-none">
          <MissionVisionMobile />
        </div>
        <DirectorCard />
        <Project />
        <Sustainability />
        <ContactComponent />
      </main>
    </>
  );
};

export default Realty;

const data = [
  {
    id: 1,
    background: "/assets/images/realty/banner.jpg",
    year: "",
    type: "",
    title:
      "Taking real estate development to the next level with a customer-first attitude.",
  },
  {
    id: 2,
    background: "/assets/images/realty/banner-2.png",
    year: "2023",
    type: "Ongoing Project",
    title: "Estella",
  },
  {
    id: 3,
    background: "/assets/images/realty/banner-3.png",
    year: "2023",
    type: "Upcoming Project",
    title: "Sumatinath CHS",
  },
  {
    id: 4,
    background: "/assets/images/realty/banner-4.png",
    year: "2023",
    type: "Upcoming Project",
    title: "Alka CHS",
  },
  // {
  //   id: 5,
  //   background:
  //     "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   year: "2023",
  //   type: "Real Estate",
  //   title: "Modern Villa",
  // },
];
