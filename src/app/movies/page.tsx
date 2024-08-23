"use client";
import React from "react";
import About from "./About";
import Mission from "./Mission";
import Movieteam from "./Movieteam";
import Awards from "../news/components/Awards";
import LatestNews from "../news/LatestNews";
import Contact from "./Contact";
import OurProjects from "./OurProjects";
import Enquiries from "./Enquiries";

const page = () => {
  return (
    <>
      <About />
      <Mission />
      <OurProjects />
      <Movieteam />
      <div className="container">
        <Awards />
      </div>

      <LatestNews />

      {/* <Enquiries /> */}
      <Contact />
    </>
  );
};

export default page;
