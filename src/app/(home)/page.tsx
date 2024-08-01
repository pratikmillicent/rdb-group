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
import OurStory from "./_components/OurStory";
import DirectorCard from "./_components/DirectorCard";
import FrameSlider from "./_components/CardImagesCarousel";
import CarouselEvent from "./_components/CardImagesCarousel";

import NewSideImage from "../about/NewSideImage";
import VisionMission from "../about/VisionMission";
import Heading from "@/components/heading/Heading";

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
        <Card imagen="https://atharvlifestyle.com/assets/images/EVENTS/73.webp" />
      ),
    },
    {
      key: 2,
      content: (
        <Card imagen="https://atharvlifestyle.com/assets/images/EVENTS/63.webp" />
      ),
    },
    {
      key: 3,
      content: (
        <Card imagen="https://media.istockphoto.com/id/1393885905/photo/real-estate-agent-showing-a-mature-couple-a-new-house.jpg?s=612x612&w=0&k=20&c=uSziAtn73HvrWJxE8UR1HZlLkfjfvruhvgxZOPFDDzM=" />
      ),
    },
    {
      key: 4,
      content: (
        <Card imagen="https://media.istockphoto.com/id/1033661996/photo/two-businessmen-shaking-hands.webp?b=1&s=170667a&w=0&k=20&c=qn517_spE0VTbdC159vNLGDESuNhztqV1uIq5jmqq7U=" />
      ),
    },
    {
      key: 5,
      content: (
        <Card imagen="https://plus.unsplash.com/premium_photo-1661333830959-1f6ca808c5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwZXZlbnRzfGVufDB8fDB8fHww" />
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

          <Marq data={marque_data} />
        </div>

        <VisionMission />
        {/* <About /> */}
        {/* {/* <SideImage /> */}
        {/* <NewSideImage /> */}
        {/* <GroupGrid /> */}
        <NewGroupGrid />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Heading headTitle="Events" />
        </div>

        <Carroussel3D
          cards={cards}
          height="500px"
          // width="40%"
          margin="0 auto"
          offset={5}
          showArrows={false}
        />
        {/* <GroupGrid /> */}
        {/* director combine section with images    */}
        {/* <OurStory /> */}

        {/* director section  */}

        <News />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}
