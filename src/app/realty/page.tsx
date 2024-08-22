// @ts-nocheck
"use client";
import React, { useEffect } from "react";
import FrameSlider from "./RealtySlideShow";
import OngoingProject from "./OngoingProject";
import gsap from "gsap";
import SectionImage from "../(home)/components/SectionImage";
import CompletedProjects from "./CompletedProject";

const Realty = () => {
  return (
    <>
      <main className="bg-dark main-bg">
        <FrameSlider data={data} />
        <SectionImage />
        <OngoingProject />
        <CompletedProjects />
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
