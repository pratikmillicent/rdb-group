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

const page = () => {
  return (
    <>
      <About />
      <Mission />
      <OurProjects />
      {/* <Movieteam /> */}
      <TeamSection2 />
      <div className="container">
        <Awards />
      </div>

      <LatestNews />

      {/* <Enquiries /> */}
      {/* <Contact /> */}
      <Contact />
    </>
  );
};

export default page;
