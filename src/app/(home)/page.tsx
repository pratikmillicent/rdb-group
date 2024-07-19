"use client"
import Marq from "@/components/marq/Marq";
import About from "./_components/About";
import GroupGrid from "./_components/Group";
import News from "./_components/News";
import VideoGallary from "./_components/VideoGallary";
import { ParallaxProvider } from "react-scroll-parallax";
import SideImage from "./_components/SideImage";

const marque_data = [
  "From the streets to the summit, our Tigers triumph! Let's raise a roar as we bring the trophy home.",
  "RD Brothers Venture rewrites the sports script by acquiring the ISPL Kolkata Team.",
  "On December 25, 2023, Aspect Hospitality inaugurated its divisional office situated at 4th Floor, 12 A, Nichani Kutir, CTS no. 996, TPS - II, Juhu Tara Rd, Mumbai - 400049.",
  "On the 8th of December 2023, Aspect Infra Pvt. Ltd. formally opened its divisional office located at 2nd Floor, Sayba Emarald, CTS no. 1318, in the village of Bandra, Bandra West, Mumbai - 400050.",
  "On the 7th of December 2023, RD Brothers Ventures Pvt. Ltd. formally opened its new office situated at 501, on the 5th Floor of Dalamal House, 206 Jamnalal Bajaj Marg, Nariman Point, Mumbai - 400021.",
];

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="mw-100">
      <div>
        <video
          className="mw-100"
          src="https://www.aspect.global/video/aspect_global_apr24.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="https://www.aspect.global/video/aspect_video.webp"
        ></video>

        <Marq data={marque_data} />
      </div>
      <About />
     <SideImage/>
      <GroupGrid />
      <News />
      <VideoGallary />
    </main>
    </ParallaxProvider>
    
  );
}
