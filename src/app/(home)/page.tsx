"use client";
import Marq from "@/components/marq/Marq";
import About from "./_components/About";
import GroupGrid from "./_components/Group";
import News from "./_components/News";
import VideoGallary from "./_components/VideoGallary";
import { ParallaxProvider } from "react-scroll-parallax";
import SideImage from "./_components/SideImage";
import Carroussel from "./_components/Carousel";
import Carousel from "@/components/carousel/Carousel";
import Card from "./_components/Card";
import Carroussel3D from "./_components/Carousel";
import NewGroupGrid from "./_components/NewGroup";
import NewSideImage from "../about/NewSideImage";

const marque_data = [
  "From the streets to the summit, our Tigers triumph! Let's raise a roar as we bring the trophy home.",
  "RD Brothers Venture rewrites the sports script by acquiring the ISPL Kolkata Team.",
  "On December 25, 2023, Aspect Hospitality inaugurated its divisional office situated at 4th Floor, 12 A, Nichani Kutir, CTS no. 996, TPS - II, Juhu Tara Rd, Mumbai - 400049.",
  "On the 8th of December 2023, Aspect Infra Pvt. Ltd. formally opened its divisional office located at 2nd Floor, Sayba Emarald, CTS no. 1318, in the village of Bandra, Bandra West, Mumbai - 400050.",
  "On the 7th of December 2023, RD Brothers Ventures Pvt. Ltd. formally opened its new office situated at 501, on the 5th Floor of Dalamal House, 206 Jamnalal Bajaj Marg, Nariman Point, Mumbai - 400021.",
];

export default function Home() {
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: 2,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: 3,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: 4,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: 5,
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <ParallaxProvider>
      <main className="mw-100">
        <div>
          <video
            className="mw-100 w-100"
            style={{ height: "calc(100dvh - 80px)", objectFit: "initial" }}
            src="/assets/video/HeroVideo.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            // poster="https://www.aspect.global/video/aspect_video.webp"
          ></video>

          {/* <Marq data={marque_data} /> */}
        </div>

        {/* <About /> */}
        {/* {/* <SideImage /> */}
        {/* <NewSideImage /> */}
        {/* <GroupGrid /> */}
        <NewGroupGrid />
        <Carroussel3D
          cards={cards}
          height="500px"
          width="30%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
        <News />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}
