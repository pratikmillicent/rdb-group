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
    <>
      <div style={{ position: "relative" }}>
        <video
          className="mw-100 w-100 d-block hero-height"
          src="/assets/video/AboutHero.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
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
          >
            {/* <h3 className="banner-heading hero-heading">Careers</h3>
            <div
              style={{
                width: "50px",
                height: "3px",
                borderTop: "solid 2px var(--golden) !important",
                borderLeft: "none",
                borderRight: "none",
                display: "block",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            ></div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
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
    </>
  );
}

export default About;
