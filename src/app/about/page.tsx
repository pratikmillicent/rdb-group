"use client";
import Intro from "./components/Overview2";
import Team from "./components/Team";
import CoreValue2 from "./components/CoreValue2";
import CallToAction from "./components/CallToAction";
import Director2 from "./components/Director2";
import TeamSection from "./components/TeamSection";
import NewSideImage from "./components/NewSideImage";
import VisionMission from "./components/VisionMission";
import DirectorCard from "./components/DirectorCard";

function About() {
  return (
    <>
      <main className="mw-100">
        <div className="about-banner">
          <div className="video-container">
            <video
              className="responsive-video"
              src="/assets/video/AboutHero.mp4"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
            ></video>
          </div>
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
