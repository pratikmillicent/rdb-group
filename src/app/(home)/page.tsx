"use client";
import Marq from "@/components/marq/Marq";
import About from "./components/About";
import GroupGrid from "./components/Group";
import News from "./components/News";
import VideoGallary from "./components/VideoGallary";
import { ParallaxProvider } from "react-scroll-parallax";
import SideImage from "./components/SideImage";
import Carroussel from "./components/Carousel";
import Carousel from "@/components/carousel/Carousel";
import Card from "./components/Card";
import Carroussel3D from "./components/Carousel";
import NewGroupGrid from "./components/NewGroup";
import OurStory from "./components/OurStory";
import DirectorCard from "../about/components/DirectorCard";
import FrameSlider from "./components/CardImagesCarousel";
import CarouselEvent from "./components/CardImagesCarousel";

import NewSideImage from "../about/components/NewSideImage";
import VisionMission from "../about/components/VisionMission";
import Heading from "@/components/heading/Heading";
import DashboardCount from "@/components/DashboardCount";
import SectionImage from "./components/SectionImage";

const marque_data = [
  "From the streets to the summit, our Tigers triumph! Let's raise a roar as we bring the trophy home.",
  "RD Brothers Venture rewrites the sports script by acquiring the ISPL Kolkata Team.",
  "On December 25, 2023, Aspect Hospitality inaugurated its divisional office situated at 4th Floor, 12 A, Nichani Kutir, CTS no. 996, TPS - II, Juhu Tara Rd, Mumbai - 400049.",
  "On the 8th of December 2023, Aspect Infra Pvt. Ltd. formally opened its divisional office located at 2nd Floor, Sayba Emarald, CTS no. 1318, in the village of Bandra, Bandra West, Mumbai - 400050.",
  "On the 7th of December 2023, RD Brothers Ventures Pvt. Ltd. formally opened its new office situated at 501, on the 5th Floor of Dalamal House, 206 Jamnalal Bajaj Marg, Nariman Point, Mumbai - 400021.",
];

const data = [
  { value: 4500, label: "Home Protected" },
  { value: 16, suffix: "K", label: "People Saved" },
  { value: 4, suffix: "M", label: "Money Saved" },
  { value: 52, suffix: "K", label: "Contract Signed" },
  { value: 100, suffix: "+", label: "Countries" },
  { value: 2, suffix: "K", label: "Staff Member" },
];

export default function Home() {
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://plus.unsplash.com/premium_photo-1661333830959-1f6ca808c5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwZXZlbnRzfGVufDB8fDB8fHww" />
      ),
    },
    {
      key: 2,
      content: <Card imagen="/assets/images/home/movie.webp" />,
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
    // {
    //   key: 5,
    //   content: (
    //     <Card imagen="https://plus.unsplash.com/premium_photo-1661333830959-1f6ca808c5b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nJTIwZXZlbnRzfGVufDB8fDB8fHww" />
    //   ),
    // },
  ];

  return (
    <ParallaxProvider>
      <main className="mw-100">
        <div className="hero-responsive">
          <video
            className="mw-100 w-100"
            // borderBottom:"5px solid #d4af5f"
            // style={{ height: "calc(100dvh - 80px)", objectFit: "initial" }}
            src="/assets/video/HeroVideo.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
          />

          {/* <Marq data={marque_data} /> */}

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
              <h3 className="text-white" style={{ marginBottom: "40px" }}>
                Build on Experience
              </h3>
              <button className="block hero-button">Know more</button>
            </div>
          </div>
        </div>
        <DashboardCount data={data} />

        {/* <VisionMission /> */}
        <SectionImage />

        <div style={{ padding: "20px 0" }}>
          <NewGroupGrid />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Heading headTitle="Events" />
        </div>

        <div style={{ padding: "20px 0" }}>
          <Carroussel3D
            cards={cards}
            height="500px"
            // width="40%"
            margin="0 auto"
            offset={5}
            showArrows={false}
          />
        </div>

        <News />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}
