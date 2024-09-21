"use client";
import React from "react";
import About from "./About";
import Mission from "./Project";
import Movieteam from "./Movieteam";
import Awards from "../news/components/Awards";
import LatestNews from "../news/LatestNews";
// import Contact from "./Contact";
import OurProjects from "./OurProjects";
import Enquiries from "./Enquiries";
import Contact from "../fracto/Contact";
import TeamSection2 from "../about/components/TeamSection2";

import MovieSlider from "./MovieSlider";
import Project from "./Project";
import OurMission from "./OurMission";
import AwardMovie from "./AwardMovie";
import Review from "./Review";
import ContactComponent from "../contact-us/components/ContactComponent";
import Movieteam2 from "./Movieteam2";
import Gallery from "./Gallery";

const page = () => {
  return (
    <div className="w-100">
      <MovieSlider />
      <OurMission />
      <About />
      {/* <Movieteam /> */}

      {/* <Movieteam2 /> */}

      <Project />
      {/* <AwardMovie /> */}
      {/* <Gallery /> */}
      <Review />
      <ContactComponent />
      {/* <Project /> */}
      {/* <LatestNews /> */}
      {/* <Enquiries /> */}
      {/* <Contact /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default page;
