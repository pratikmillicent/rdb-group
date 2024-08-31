//@ts-nocheck
"use client";
// import DashboardCount from "@/components/DashboardCount";
const DashboardCount = lazy(() => import("@/components/DashboardCount"));
import Heading from "@/components/heading/Heading";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import Card from "./components/Card";
import MobileCarousel from "./components/MobileCarousel";
import NewGroupGrid from "./components/NewGroup";
// import News from "./components/News";
import SectionImage from "./components/SectionImage";
import useMediaQuery from "./components/useMediaQuery";
import VideoGallary from "./components/VideoGallary";
import { lazy, useEffect, useRef, useState } from "react";
import { useInView } from "react-spring";
import News2 from "./News2";
const Carroussel3D = dynamic(() => import("./components/Carousel"), {
  ssr: false,
});

const data = [
  { value: 4500, label: "Home Protected" },
  { value: 16, suffix: "k", label: "People Saved" },
  { value: 4, suffix: "m", label: "Money Saved" },
  { value: 52, suffix: "k", label: "Contract Signed" },
  { value: 100, suffix: "+", label: "Countries" },
  { value: 2, suffix: "k", label: "Staff Member" },
];

export default function Home() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 767px)");
  const [ref, inView] = useInView({ once: true });

  const [loopCount, setLoopCount] = useState(0);
  const [videoSrc, setVideoSrc] = useState("/assets/video/HeroVideo1.mp4");
  const [headingText, setHeadingText] = useState("");
  const [linkHref, setLinkHref] = useState("/about");
  const [displayedText, setDisplayedText] = useState("");
  const videoRef = useRef(null);

  const videoData = [
    {
      src: "/assets/video/video-1.mp4",
      text: " Properties",
      link: "https://rdbrothers.com",
    },
    {
      src: "/assets/video/video-2.mp4",
      text: " Realty",
      link: "/realty",
    },
    {
      src: "/assets/video/video-3.mp4",
      text: " Fracto",
      link: "/fracto",
    },
    {
      src: "/assets/video/video-4.mp4",
      text: " Movies",
      link: "/movies",
    },
  ];

  const handleVideoEnd = () => {
    if (loopCount < videoData.length - 1) {
      setLoopCount(loopCount + 1);
    } else {
      setLoopCount(0);
    }
  };

  useEffect(() => {
    const { src, text, link } = videoData[loopCount];
    setVideoSrc(src);
    // setHeadingText(text);
    setLinkHref(link);
    setDisplayedText(""); // Reset the displayed text for typing effect
    videoRef?.current?.play(); // Ensure the next video plays automatically
    setTimeout(() => {
      setHeadingText("" + text);
    }, 1500);
  }, [loopCount]);

  useEffect(() => {
    let charIndex = 0;
    let typingTimeout;

    const typeText = () => {
      if (charIndex < headingText.length) {
        setDisplayedText((prev) => prev + headingText.charAt(charIndex));
        charIndex++;
        typingTimeout = setTimeout(typeText, 100); // Adjust the typing speed here
      }
    };

    if (headingText) {
      typeText();
    }

    return () => {
      clearTimeout(typingTimeout); // Clear the timeout on effect cleanup
    };
  }, [headingText]);

  return (
    <ParallaxProvider>
      <main className="mw-100">
        <div className="hero-responsive">
          <video
            className="mw-100"
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop={false} // Disable infinite looping
            preload="auto"
            onEnded={handleVideoEnd}
            ref={videoRef}
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
              <div className="d-flex align-items-center gap-3">
                <h1
                  className="text-white vh-10 hero-heading"
                  style={{
                    marginBottom: "20px",
                    lineHeight: "56px",
                    letterSpacing: "-1px",
                    fontWeight: 400,
                  }}
                >
                  R.D.BROTHERS
                </h1>
                <p
                  style={{
                    marginBottom: "20px",
                    lineHeight: "56px",
                    letterSpacing: "-1px",
                    fontWeight: 400,
                    fontSize: "42px",
                    color: "var(--golden)",
                  }}
                >
                  {displayedText}
                </p>
              </div>
              <a href={linkHref} className="block hero-button">
                Know more
              </a>
            </div>
          </div>
        </div>

        <div ref={ref}>{inView && <DashboardCount data={data} />}</div>

        <SectionImage />

        <div>
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
              height="300px"
              width="1000px"
              margin="0 auto"
              offset={5}
              showArrows={false}
            />
          ) : isSmallScreen ? (
            <MobileCarousel />
          ) : null}
        </div>

        <News2 />
        <VideoGallary />
      </main>
    </ParallaxProvider>
  );
}

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
