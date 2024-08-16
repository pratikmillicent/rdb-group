"use client";

import CallToAction from "./components/CallToAction";
// import CoreValue2 from "./components/CoreValue2";
// import Team from "./components/Team";
import DirectorCard from "./components/DirectorCard";
import SectionImage from "../(home)/components/SectionImage";
import TeamSection2 from "./components/TeamSection2";

function About() {
  return (
    <main className="mw-100">
      <div className="hero-responsive">
        <video
          className="mw-100 w-100 d-block "
          style={{
            //  height: "calc(100dvh - 80px)",
            objectFit: "initial",
          }}
          src="/assets/video/AboutHero.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        ></video>

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
            <h3 className="banner-heading">About Us</h3>
          </div>
        </div>
      </div>

      {/* <VisionMission /> */}
      <SectionImage />

      <DirectorCard />
      {/* <Team /> */}
      {/* <TeamSection /> */}
      {/* <CoreValue2 /> */}
      <TeamSection2 />
      <CallToAction />
    </main>
  );
}

export default About;
