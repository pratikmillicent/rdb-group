"use client";
import React from "react";
import About from "./About";
import Mission from "./Mission";
import Movieteam from "./Movieteam";
import Awards from "../news/components/Awards";
import LatestNews from "../news/LatestNews";
// import Contact from "./Contact";
import OurProjects from "./OurProjects";
import Enquiries from "./Enquiries";
import Contact from "../fracto/Contact";
import TeamSection2 from "../about/components/TeamSection2";
import Project from "../realty/Project";
import MovieSlider from "./MovieSlider";

const page = () => {
  return (
    <>
      <MovieSlider />
      {/* <About /> */}
      <Mission />
      {/* <OurProjects /> */}
      {/* <Project /> */}
      {/* <Movieteam /> */}
      {/* <TeamSection2 /> */}
      {/* <div className="container">
        <Awards />
      </div> */}

      {/* <LatestNews /> */}

      {/* <Enquiries /> */}
      {/* <Contact /> */}
      {/* <Contact /> */}
    </>
  );
};

export default page;
