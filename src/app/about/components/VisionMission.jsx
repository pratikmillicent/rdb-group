import { useState } from "react";
import Image from "next/image";
import "./VisionMission.css";
import Heading from "@/components/heading/Heading";

const VisionMission = () => {
  const [selectedTab, setSelectedTab] = useState("about");
  const [animate, setAnimate] = useState(false);

  const tabStyle = (isSelected) => ({
    backgroundColor: isSelected ? "#d4af5f" : "transparent",
    color: isSelected ? "white" : "grey",
    fontWeight: "600",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "6px",
    fontSize: "16px",
  });

  const handleTabClick = (tab) => {
    if (selectedTab !== tab) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }
    setSelectedTab(tab);
  };

  return (
    <section>
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-col justify-content-center align-items-center">
          <div className="mb-4">
            {/* <h2 className='text-center text-grey'>Overview</h2> */}
            <Heading headTitle="Overview" />
          </div>
          <div className="mb-4 d-flex flex-wrap">
            <button
              style={tabStyle(selectedTab === "about")}
              onClick={() => handleTabClick("about")}
              className="me-2 mb-2"
            >
              Abouts us
            </button>
            <button
              style={tabStyle(selectedTab === "mission")}
              onClick={() => handleTabClick("mission")}
              className="me-2 mb-2"
            >
              Our Mission
            </button>
            <button
              style={tabStyle(selectedTab === "vision")}
              onClick={() => handleTabClick("vision")}
              className="mb-2"
            >
              Our Vision
            </button>
          </div>
          <div
            className={`tab-content p-5 text-center ${
              animate ? "slide-in" : ""
            }`}
          >
            {selectedTab === "about" && (
              <p>
                With a team of over 40 dedicated professionals, averaging more
                than 7 years of experience each, we add a touch of
                Professionalism to everything we do.
              </p>
            )}
            {selectedTab === "mission" && (
              <p>
                To deliver professionalism and add a touch of Indian warmth to
                the way property is managed across India and overseas.
              </p>
            )}
            {selectedTab === "vision" && (
              <p>
                Making Real Estate simple and effective through the use of
                defined processes and technology.
              </p>
            )}
          </div>
        </div>

        {/* Image Box */}
        <div className="col-12 col-md-6">
          <div className="ratio ratio-4x3">
            <Image
              src={
                selectedTab === "vision"
                  ? "/assets/images2/our-vision.jpg"
                  : selectedTab === "mission"
                  ? "/assets/images2/our-mission.jpg"
                  : "/assets/images2/news3.webp"
              }
              className={`img-fluid h-100 ${animate ? "fade-in" : ""}`}
              alt={selectedTab}
              width={800}
              height={500}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
