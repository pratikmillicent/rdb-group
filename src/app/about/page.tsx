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
import AboutSectionImage from "./components/AboutSectionImage";

const data = [
  { value: 4500, label: "Home Secured" },
  { value: 16, suffix: "k", label: "Lives Impacted" },
  { value: 4, suffix: "m", label: "Cost Savings Achived" },
  { value: 52, suffix: "k", label: "Agreements Finalized" },
  { value: 100, suffix: "+", label: "Global Presence" },
  { value: 2, suffix: "k", label: "Team Members" },
];

function About() {
  const [ref, inView] = useInView({ once: true });
  return (
    <>
      <div style={{ position: "relative", height: "100dvh" }}>
        <video
          className="mw-100 w-100 d-block hero-height"
          src="/assets/video/AboutHero.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          style={{ height: "100%" }}
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          ></div>
        </div>
      </div>

      <Experience />
      <AboutSectionImage />
      <DirectorCard />
      <CallToAction />
      <Team />
      <div style={{ marginTop: "10px" }} ref={ref}>
        {inView && <DashboardCount data={data} />}
      </div>
    </>
  );
}

export default About;
