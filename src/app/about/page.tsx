// @ts-nocheck
"use client";
import Team from "./Team";
import CoreValue2 from "./CoreValue2";
import CallToAction from "./CallToAction";
import TeamSection from "./TeamSection";
import VisionMission from "./VisionMission";
import DirectorCard from "../(home)/_components/DirectorCard";

function About() {
  return (
    <>
      <main className="mw-100 ">
        <div>
          <video
            className="mw-100 w-100"
            style={{ height: "calc(100dvh - 80px)", objectFit: "initial" }}
            src="/assets/video/AboutHero.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          ></video>
        </div>

        <VisionMission />

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
