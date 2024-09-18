//@ts-nocheck
"use client";
import { lazy, useEffect, useRef, useState } from "react";
import { useInView } from "react-spring";
import dynamic from "next/dynamic";
import { ParallaxProvider } from "react-scroll-parallax";
import useMediaQuery from "./components/useMediaQuery";
import SectionImage from "./components/SectionImage";
import NewGroupGrid from "./components/NewGroup";
import Heading from "@/components/heading/Heading";
import News2 from "./News2";
import VideoGallary from "./components/VideoGallary";
import Card from "./components/Card";
import MobileCarousel from "./components/MobileCarousel";
import OldGroupGrid from "./components/oldNewGroupWebiste";
import Image from "next/image";

const DashboardCount = lazy(() => import("@/components/DashboardCount"));
const Carroussel3D = dynamic(() => import("./components/Carousel"), {
  ssr: false,
});

const data = [
  { value: 1000, suffix: "+", label: "Developer Relationships" },
  { value: 5000, suffix: "+", label: "Channel partners" },
  {
    value: 8,
    suffix: (
      <>
        <span style={{ marginLeft: "4px" }}> cities +</span>
        <span style={{ fontSize: "17px", fontWeight: 500, marginLeft: "4px" }}>
          GCC
        </span>
      </>
    ),
    label: "Market Presence",
  },
  { value: 1000, suffix: "+", label: "Brands serviced" },
  { value: 50, suffix: "+", label: "Projects Launched" },
  // { value: 2, suffix: "k", label: "Team Members" },
];

export default function Home() {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  const [loopCount, setLoopCount] = useState(0);
  const [videoSrc, setVideoSrc] = useState("/assets/video/HeroVideo1.mp4");
  const [headingText, setHeadingText] = useState("");
  const [linkHref, setLinkHref] = useState("/about");
  const [displayedText, setDisplayedText] = useState("");
  const videoRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const videoData = [
    {
      src: "/assets/video/video-5.mp4",
      text: `Crafted with <span
         style="
              font-weight : 500
            "> Experience </span>, Built with <span style="
              font-weight : 500
            "> Trust </span>`,
      link: "/about",
    },
    {
      src: "/assets/video/video-1.mp4",
      text: "Properties",
      link: "https://rdbrothers.com",
    },
    {
      src: "/assets/video/video-2.mp4",
      text: "Realty",
      link: "/realty",
    },
    {
      src: "/assets/video/video-3.mp4",
      text: "Fracto",
      link: "/fracto",
    },
    {
      src: "/assets/video/video-4.mp4",
      text: "Movies",
      link: "/movies",
    },
  ];

  const handleVideoEnd = () => {
    setIsTransitioning(true); // Start the transition

    setTimeout(() => {
      if (loopCount < videoData.length - 1) {
        setLoopCount(loopCount + 1);
      } else {
        setLoopCount(0);
      }
      setIsTransitioning(false); // End the transition after source change
    }, 500); // Duration of the fade-out effect
  };

  useEffect(() => {
    const { src, text, link } = videoData[loopCount];
    setVideoSrc(src);
    setLinkHref(link);
    // setDisplayedText(""); // Reset the displayed text for typing effect
    videoRef?.current?.play(); // Ensure the next video plays automatically

    setHeadingText(text);
  }, [loopCount]);

  useEffect(() => {
    const { src, text, link } = videoData[loopCount];
    // let charIndex = 0;
    let typingTimeout;

    const typeText = (text) => {
      // if (charIndex < text.length) {
      //   setDisplayedText((prev) => prev + text.charAt(charIndex));
      //   charIndex++;
      // }

      setDisplayedText((prev) => prev + text.slice(0, 1));

      typingTimeout = setTimeout(() => typeText(text.slice(1)), 100); // Adjust the typing speed here
    };

    if (text) {
      typeText(text);
    }

    return () => {
      clearTimeout(typingTimeout); // Clear the timeout on effect cleanup
    };
  }, [loopCount]);

  return (
    <ParallaxProvider>
      <main className="mw-100">
        <div className="hero-responsive">
          <video
            style={{
              fontWeight: 600,
            }}
            className={`mw-100 ${isTransitioning ? "fade-out" : "fade-in"}`}
            src={videoSrc}
            autoPlay
            muted
            playsInline
            loop={false}
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
                padding: "0 20px 20px 20px ",
              }}
            >
              {loopCount !== 0 && (
                <img
                  src="/rdb_1.svg"
                  // style={{
                  //   width: "105px",
                  //   height: "119px",
                  //   objectFit: "contain",
                  // }}
                  style={{
                    height: isSmallScreen ? "80px" : "100px",
                    width: "55px",
                    objectFit: "contain",
                  }}
                />
              )}
              {/* <div className="d-flex align-items-center gap-3"> */}
              <p
                className=""
                style={{
                  marginBottom: "20px",
                  lineHeight: "56px",
                  letterSpacing: "-1px",
                  fontWeight: 600,
                  fontSize: "48px",
                  color: loopCount !== 0 ? "#fff" : "#fff",
                  transition: "all",
                  // opacity: "0.7",
                }}
                dangerouslySetInnerHTML={{
                  __html: headingText,
                }}
              >
                {/* {headingText} */}
              </p>
              {/* </div> */}
              {loopCount !== 0 && (
                <a href={linkHref} className="block hero-button">
                  Know more
                </a>
              )}
            </div>
          </div>
        </div>

        <DashboardCount data={data} />

        <SectionImage />

        <NewGroupGrid />

        {/* <div>
          <OldGroupGrid />
        </div> */}

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        > */}
        <Heading headTitle="Spotlight" isMargin="0px" />
        {/* </div> */}

        <div style={{ padding: "0" }}>
          {isMediumScreen ? (
            <Carroussel3D
              cards={cards}
              height="320px"
              width="1000px"
              margin="0 auto"
              offset={100}
              autoScrollInterval={5000}
              showArrows={false}
            />
          ) : isSmallScreen ? (
            <MobileCarousel data={data} />
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
    content: <Card imagen="/assets/home/Events.jpg" />,
  },
  {
    key: 2,
    content: <Card imagen="https://fakeimg.pl/640x320" />,
  },
  {
    key: 3,
    content: <Card imagen="/assets/home/Events.jpg" />,
  },
  {
    key: 4,
    content: <Card imagen="https://fakeimg.pl/640x320" />,
  },
];

// CSS for the video transition
<style jsx>{`
  .fade-in {
    opacity: 1;
    transition: opacity 0.3s ease-in;
  }
  .fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }
`}</style>;
