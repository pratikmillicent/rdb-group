"use client";
const DashboardCount = lazy(() => import("@/components/DashboardCount"));
import CallToAction from "./components/CallToAction";
// import CoreValue2 from "./components/CoreValue2";
// import Team from "./components/Team";
import DirectorCard from "./components/DirectorCard";
import SectionImage from "../(home)/components/SectionImage";
import TeamSection2 from "./components/TeamSection2";
import Team from "./components/Team";
import Experience from "./components/Experience";
import { useInView } from "react-spring";
import { lazy } from "react";

const data = [
  { value: 4500, label: "Home Protected" },
  { value: 16, suffix: "k", label: "People Saved" },
  { value: 4, suffix: "m", label: "Money Saved" },
  { value: 52, suffix: "k", label: "Contract Signed" },
  { value: 100, suffix: "+", label: "Countries" },
  { value: 2, suffix: "k", label: "Staff Member" },
];

function About() {
  const [ref, inView] = useInView({ once: true });
  return (
    <main className="">
      <div>
        <video
          className="mw-100 w-100 d-block hero-height"
          src="/assets/video/AboutHero.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
        ></video>
      </div>

      {/* 
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "90%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        ></div> */}
      {/* </div> */}

      <div className="bg-golden title-head">
        <h3 className="banner-heading hero-heading text-black pt-4">
          About Us
        </h3>
        <div className="title-center"></div>
      </div>
      {/* <VisionMission /> */}
      <Experience />
      <SectionImage />
      <DirectorCard />

      {/* <TeamSection /> */}
      {/* <CoreValue2 /> */}
      {/* <TeamSection2 /> */}
      <CallToAction />
      <Team />
      <div style={{ marginTop: "10px" }} ref={ref}>
        {inView && <DashboardCount data={data} />}
      </div>
    </main>
  );
}

export default About;
