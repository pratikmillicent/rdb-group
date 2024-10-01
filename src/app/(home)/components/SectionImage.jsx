import parallaxie from "@/common/parallaxie";
import React, { useState, useEffect } from "react";
import "../SectionImage.css";

const images = {
  overview: "/assets/images/home/our-aspirations.png",
  vision: "/assets/images/home/what-drives-us.png",
  mission: "/assets/images/home/future-outlook.png",
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
      <div
        className="section-container d-md-flex flex-md-row"
        style={{ width: "100vw" }}
      >
        <div
          className="vision-container col-md-6 d-flex flex-column pt-40 align-items-center bg-navy"
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
                We aspire to be a global leader, setting new standards of
                excellence and innovation across diverse industries. With a
                relentless focus on purpose-driven ventures, we aim to create
                lasting value for our stakeholders, inspire progress, and
                positively impact the global marketplace. Through our visionary
                leadership and commitment to innovation, we strive to shape a
                future where every endeavor contributes meaningfully to the
                world.
              </p>
            )}
            {selectedTab === "mission" && (
              <p className="text-white fz-16 fw-400">
                Looking ahead, we see immense potential for growth and
                diversification across our ventures. In real estate, we plan to
                expand our footprint by venturing into new markets and
                incorporating sustainable practices that align with global
                trends. On the entertainment front, we aim to produce more
                diverse films across genres while exploring innovative ways to
                engage audiences. Through strategic partnerships, technology
                integration, and a focus on delivering excellence, we are poised
                to remain ahead of industry trends.
              </p>
            )}
            {selectedTab === "vision" && (
              <p className="text-white fz-16 fw-400 pb-5">
                We are driven by a passion for excellence, innovation, and
                making a meaningful impact. Our commitment to purpose-driven
                ventures fuels our determination to lead across diverse
                industries, constantly pushing the boundaries of what’s
                possible. Guided by our vision to deliver exceptional value, we
                thrive on challenges, embrace opportunities for growth, and
                remain steadfast in our pursuit of creating a sustainable, more
                innovative world for our stakeholders and communities.
              </p>
            )}
          </div>
        </div>
        <div
          className={`col-md-6 position-relative p-0 ${
            animate ? "slide-in" : ""
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
