import { useState, CSSProperties } from "react";
import "../VisionMission.css";
import Heading from "@/components/heading/Heading";

const VisionMission: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("about");
  const [animate, setAnimate] = useState<boolean>(false);

  const tabStyle = (isSelected: boolean): CSSProperties => ({
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
    margin: "5px",
  });

  const handleTabClick = (tab: string) => {
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
        <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center">
          <div className="mb-4">
            <Heading headTitle="Overview" />
          </div>
          <div className="mb-4 d-flex flex-wrap justify-content-center">
            <button
              style={tabStyle(selectedTab === "about")}
              onClick={() => handleTabClick("about")}
              className="me-2 mb-2"
            >
              About us
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
            className={`tab-content p-0 text-center ${
              animate ? "slide-in" : ""
            }`}
            style={{ margin: 0 }}
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

        <div
          className="col-12 col-md-6 d-flex justify-content-center align-items-center d-none d-sm-none d-md-block d-lg-block d-xl-block"
          style={{ height: "100vh" }}
        >
          {/* <div
            className="ratio ratio-4x3"
            style={{ position: 'relative', width: '100%', height: '100%', margin: 0, padding: 0 }}
          >
            <Image
              src={
                selectedTab === "vision"
                  ? "/assets/images/home/our-vision.jpg"
                  : selectedTab === "mission"
                    ? "/assets/images/home/our-mission.jpg"
                    : "/assets/images/home/news1.jpg"
              }
              className={`img-fluid ${animate ? "fade-in" : ""}`}
              alt={selectedTab}
              layout="fill"
              objectFit="cover"
              style={{ margin: 0, padding: 0 }}
            />
          </div> */}

          <div className="">
            <div
              className="ratio ratio-4x3"
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                margin: 0,
                padding: 0,
              }}
            >
              <div
                className="sec-bg-img bg-img parallaxie"
                style={{ height: "100vh" }}
                data-background={
                  selectedTab === "vision"
                    ? "/assets/images/home/our-vision.jpg"
                    : selectedTab === "mission"
                    ? "/assets/images/home/our-mission.jpg"
                    : "/assets/images/home/news1.jpg"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
