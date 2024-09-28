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
import AwardMovie from "./AwardMovie";
import Review from "./Review";
import ContactComponent from "../contact-us/components/ContactComponent";
import Movieteam2 from "./Movieteam2";
import Gallery from "./Gallery";
import Gallery2 from "./Gallery2";
import AboutUs from "./AboutUs";
import MobileMovieTeam from "./MobileMovieTeam";

const page = () => {
  return (
    <div className="w-100">
      <div className="hero-responsive">
        <img
          style={{ objectFit: "fill" }}
          src="/assets/images/movie/gallary.png"
          alt="banner"
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
              marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px 20px 20px ",
            }}
          >
            <p
              className=""
              style={{
                marginBottom: "20px",
                lineHeight: "56px",
                letterSpacing: "-1px",
                fontWeight: 600,
                fontSize: "48px",
                color: "#fff",
                transition: "all",
              }}
            >
              Movies
            </p>
          </div>
        </div>
      </div>

      <AboutUs />
      {/* <About /> */}
      {/* <div className="d-none d-md-block">
        <Movieteam2 />
        </div>
        <div className="d-block d-md-none">
        <MobileMovieTeam />
        </div> */}
      {/* <ParallaxSlider data={data} /> */}
      {/* <MovieSlider /> */}
      {/* <Awards /> */}
      <AwardMovie />

      <Project />

      <Gallery2 />

      <Review />
      <ContactComponent />
    </div>
  );
};

export default page;
