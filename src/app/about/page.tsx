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
    <div className="h-25">
      <div>
        <video
          className="mw-100 w-100 d-block "
          // style={{
          //    height: "calc(100dvh - 80px)",
          //   objectFit: "initial",
          //   height: "90%",
          // }}
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

      <div
        className="bg-golden"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          padding: "0 20px",
        }}
      >
        <h3 className="banner-heading hero-heading text-black pt-4">
          About Us
        </h3>
        <div
          style={{
            width: "70px",
            height: "3px",
            borderTop: "solid 2px var(--golden) !important",
            borderLeft: "none",
            borderRight: "none",
            display: "block",
            margin: "0 auto",
            marginBottom: "30px",
          }}
        ></div>
      </div>
      {/* <VisionMission /> */}
      <Experience />
      <SectionImage />
      <DirectorCard />
      <Team />

      <div style={{ marginTop: "10px" }} ref={ref}>
        {inView && <DashboardCount data={data} />}
      </div>

      {/* <TeamSection /> */}
      {/* <CoreValue2 /> */}
      {/* <TeamSection2 /> */}
      <CallToAction />
    </div>
  );
}

export default About;
