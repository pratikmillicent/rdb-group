"use client";

import CallToAction from "./components/CallToAction";
import CoreValue2 from "./components/CoreValue2";
import Team from "./components/Team";
import DirectorCard from "./components/DirectorCard";
import VisionMission from "./components/VisionMission";
import SectionImage from "../(home)/components/SectionImage";

function About() {
  return (
    <>
      <main className="mw-100 ">
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
        </div>

        {/* <VisionMission /> */}
        <SectionImage />

        <DirectorCard />
        <Team />
        {/* <TeamSection /> */}
        <CoreValue2 />
        <CallToAction />
      </main>
    </>
  );
}

export default About;
