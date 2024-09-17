import parallaxie from "@/common/parallaxie";
import React, { useState, useEffect } from "react";
import "../../(home)/SectionImage.css";

const images = {
  overview: "/assets/images/home/about3.jpg",
  vision: "/assets/images/home/our-vision.jpg",
  mission: "/assets/images/home/our-mission.jpg",
};

function AboutSectionImage() {
  const [selectedTab, setSelectedTab] = useState("overview");
  const [currentImage, setCurrentImage] = useState(images[selectedTab]);
  const [animate, setAnimate] = useState(false);

  const tabStyle = (isSelected) => ({
    backgroundColor: isSelected ? "var(--golden)" : "transparent",
    color: isSelected ? "white" : "white",
    fontWeight: "600",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "50px",
    fontSize: "16px",
    margin: "5px",
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
    <section className="">
      <div className="row screen-height">
        <div
          className="vision-container col-md-6 d-flex flex-column justify-content-center align-items-center bg-navy"
          // style={{ padding: "0px 100px" }}
        >
          <div className="w-100 mb-2 d-flex justify-content-start align-items-start text-white fz-36 fw-600">
            RD Brothers
          </div>
          <div className="w-100 mb-2 d-flex flex-wrap justify-content-start">
            {/* <button
              style={tabStyle(selectedTab === "overview")}
              onClick={() => handleTabClick("overview")}
              className="btn me-2 mb-2"
            >
              Our Aspiration
            </button> */}
            <button
              style={tabStyle(selectedTab === "mission")}
              onClick={() => handleTabClick("mission")}
              className="btn me-2 mb-2"
            >
              Mission
            </button>
            <button
              style={tabStyle(selectedTab === "vision")}
              onClick={() => handleTabClick("vision")}
              className="btn mb-2"
            >
              Vision
            </button>
          </div>
          <div className={`tab-content ${animate ? "slide-in" : ""}`}>
            {selectedTab === "overview" && (
              <p className="text-white fz-16 fw-400 w-100">
                What drives us forward and defines our purpose for the future.
              </p>
            )}
            {selectedTab === "mission" && (
              <p className="text-white fz-16 fw-400">
                Our vision is to elevate property management by blending
                exceptional professionalism with Indian warmth. We aim to
                deliver outstanding service across India and globally, while
                driving innovation and excellence in every aspect of our
                business.
              </p>
            )}
            {selectedTab === "vision" && (
              <p className="text-white fz-16 fw-400">
                Our vision is to streamline real estate with efficient processes
                and cutting-edge technology, while leading the global
                marketplace with excellence, innovation, and purpose-driven
                ventures
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
    </section>
  );
}

export default AboutSectionImage;
