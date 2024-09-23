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

const Realty = () => {
  return (
    <>
      <main className="bg- text-black">
        <FrameSlider data={data} />
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
    background:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Skyline Tower",
  },
  {
    id: 2,
    background:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Urban Residence",
  },
  {
    id: 3,
    background:
      "https://images.unsplash.com/photo-1496328488450-9c5c5d555148?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Glass Towers",
  },
  {
    id: 4,
    background:
      "https://images.unsplash.com/photo-1468428936365-099c2f70e495?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "The Penthouse",
  },
  {
    id: 5,
    background:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    year: "2023",
    type: "Real Estate",
    title: "Modern Villa",
  },
];
