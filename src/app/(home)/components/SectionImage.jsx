import parallaxie from "@/common/parallaxie";
import React, { useState, useEffect } from "react";
import "../SectionImage.css";

const images = {
  overview: "/assets/images/home/about3.jpg",
  vision: "/assets/images/home/our-vision.jpg",
  mission: "/assets/images/home/our-mission.jpg",
};

function SectionImage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(images[selectedTab]);
  const [animate, setAnimate] = useState(false);

  const tabStyle = (isSelected) => ({
    backgroundColor: isSelected ? "var(--golden)" : "transparent",
    color: isSelected ? "white" : "white",
    fontWeight: "600",
    // padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "50px",
    fontSize: "14px",
    // margin: "5px",
  });

  const handleTabClick = (tab) => {
    if (selectedTab !== tab) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
        setSelectedTab(tab);
        setCurrentImage(images[tab]);
      }, 100);
    } else {
      setSelectedTab(tab);
    }
  };

  useEffect(() => {
    parallaxie(".back-image.parallaxie", 0.35);
  }, [currentImage]);

  return (
    <>
      <div className="section-container d-md-flex flex-md-row" style={{ width: "100vw" }}>
        <div
          className="vision-container col-md-6 d-flex flex-column justify-content-center align-items-center bg-navy"
        // style={{ padding: "0px 100px" }}
        >
          <div className="w-100 mb-2 d-flex justify-content-start align-items-start text-white fz-36 fw-600">
            RD Brothers
          </div>
          <div className="w-100 mb-4 d-flex flex-wrap justify-content-start">
            <button
              style={tabStyle(selectedTab === "overview")}
              onClick={() => handleTabClick("overview")}
              className="btn section-mobile"
            >
              Our Aspiration
            </button>
            <button
              style={tabStyle(selectedTab === "mission")}
              onClick={() => handleTabClick("mission")}
              className="btn section-mobile"
            >
              Future Outlook
            </button>
            <button
              style={tabStyle(selectedTab === "vision")}
              onClick={() => handleTabClick("vision")}
              className="btn section-mobile"
            >
              What Drives Us
            </button>
          </div>
          <div className={`tab-content ${animate ? "slide-in" : ""}`}>
            {selectedTab === "overview" && (
              <p className="text-white fz-16 fw-400 w-100">
                We aspire to be a leading force in both real estate and the entertainment industry, continuously pushing the boundaries of innovation and creativity. Our goal is to deliver value by shaping transformative real estate projects and create films that captivate audiences worldwide. By bridging the gap between technology, finance, and creativity, we aim to revolutionize the sectors we are present by ensuring our work creates a lasting impact
              </p>
            )}
            {selectedTab === "mission" && (
              <p className="text-white fz-16 fw-400">
                Looking ahead, we see immense potential for growth and diversification across our ventures. In real estate, we plan to expand our footprint by venturing into new markets and incorporating sustainable practices that align with global trends. On the entertainment front, we aim to produce more diverse films across genres while exploring innovative ways to engage audiences. Through strategic partnerships, technology integration, and a focus on delivering excellence, we are poised to remain ahead of industry trends.
              </p>
            )}
            {selectedTab === "vision" && (
              <p className="text-white fz-16 fw-400 pb-5">
                We are inspired by the power of innovation, the art of storytelling, and the ability to shape environments that influence people’s lives. Every project we undertake is driven by our belief in creating lasting value and making a meaningful difference in the industries we touch.
              </p>
            )}
          </div>
        </div>
        <div
          className={`col-md-6 position-relative p-0 ${animate ? "slide-in" : ""
            } d-none d-sm-none d-md-block d-lg-block d-xl-block`}
        >
          <div
            className="back-image bg-img parallaxie"
            data-background={currentImage}
            // data-overlay-dark="3"
            data-parallaxie={{
              speed: "-0.4",
              size: "auto",
            }}
            style={{
              // backgroundSize: "cover",
              // backgroundPosition: "center",
              height: "100%",
              // width: "100%",
              // backgroundPosition: "center",
              backgroundSize: "50vw 100%",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default SectionImage;
