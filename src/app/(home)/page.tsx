"use client";

import DashboardCount from "@/components/DashboardCount";
import Heading from "@/components/heading/Heading";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "./components/Card";
import MobileCarousel from "./components/MobileCarousel";
import NewGroupGrid from "./components/NewGroup";
import News from "./components/News";
import SectionImage from "./components/SectionImage";
import useMediaQuery from "./components/useMediaQuery";
import VideoGallary from "./components/VideoGallary";
const Carroussel3D = dynamic(() => import("./components/Carousel"), {
  ssr: false,
});

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
      content: (
        <Card imagen="https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29ycG9yYXRlfGVufDB8MHwwfHx8MA%3D%3D" />
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
  ];

  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

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

        <div style={{ padding: "0" }}>
          {isMediumScreen ? (
            <Carroussel3D
              cards={cards}
              height="450px"
              width="1000px"
              margin="0 auto"
              offset={5}
              showArrows={false}
            />
          ) : isSmallScreen ? (
            <MobileCarousel />
          ) : null}
        </div>

        <News />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}
