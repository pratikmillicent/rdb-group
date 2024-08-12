import { useState } from "react";
import Image from "next/image";

const NewSideImage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("mission");
  const tabStyle = (isSelected: boolean) => ({
    backgroundColor: isSelected ? "#d4af5f" : "transparent",
    color: isSelected ? "white" : "black",
    fontWeight: "600",
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    outline: "none",
    transition: "background-color 0.3s, color 0.3s",
    borderRadius: "6px",
    fontSize: "16px",
  });

  return (
    <section className="sideimg-numbers section-padding pb-60 sub-g">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont mt-60">
              <div>
                <h2 className="fz-36">Overview</h2>
                <div className="d-flex gap-2 align-items-center">
                  <button
                    style={tabStyle(selectedTab === "mission")}
                    onClick={() => setSelectedTab("mission")}
                  >
                    Our Mission
                  </button>
                  <button
                    style={tabStyle(selectedTab === "vision")}
                    onClick={() => setSelectedTab("vision")}
                  >
                    Our Vision
                  </button>
                </div>
                <div col-md-12 d-flex>
                  <div className="tab-content mt-30">
                    {selectedTab === "mission" && (
                      <p>
                        To deliver professionalism and add a touch of Indian
                        warmth to the way property is managed across India and
                        overseas.
                      </p>
                    )}
                    {selectedTab === "vision" && (
                      <p>
                        Making Real Estate simple and effective through the use
                        of defined processes and technology.
                      </p>
                    )}
                  </div>
                  <div className="side-img col-md-6">
                    <Image
                      src={
                        selectedTab === "vision"
                          ? "/assets/images/home/our-vision.jpg"
                          : "assets/images/home/our-mission.jpg"
                      }
                      alt="mission-vision"
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewSideImage;
