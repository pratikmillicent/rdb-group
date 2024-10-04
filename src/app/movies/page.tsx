"use client";
import React from "react";
import Project from "./Project";
import AwardMovie from "./AwardMovie";
import Review from "./Review";
import ContactComponent from "../contact-us/components/ContactComponent";
import Gallery2 from "./Gallery2";
import AboutUs from "./AboutUs";
import Founder from "./Founder";

const page = () => {
  return (
    <div className="w-100">
      <div className="hero-responsive">
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
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
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
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
      <Founder />
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
