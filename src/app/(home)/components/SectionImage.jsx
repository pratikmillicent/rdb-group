// import parallaxie from "@/common/parallaxie";
// import React, { useState, useEffect } from "react";
// import Heading from "@/components/heading/Heading";

// function SectionImage() {
//   const [selectedTab, setSelectedTab] = useState("about");
//   const [animate, setAnimate] = useState(false);

//   const tabStyle = (isSelected) => ({
//     backgroundColor: isSelected ? "#d4af5f" : "transparent",
//     color: isSelected ? "white" : "grey",
//     fontWeight: "600",
//     padding: "10px 20px",
//     cursor: "pointer",
//     border: "none",
//     outline: "none",
//     transition: "background-color 0.3s, color 0.3s",
//     borderRadius: "6px",
//     fontSize: "16px",
//     margin: "5px",
//   });

//   const handleTabClick = (tab) => {
//     if (selectedTab !== tab) {
//       setAnimate(true);
//       setTimeout(() => {
//         setAnimate(false);
//       }, 500);
//     }
//     setSelectedTab(tab);
//   };

//   useEffect(() => {
//     parallaxie(".back-image.parallaxie", 0.35);
//   }, []);

//   return (
//     <section>
//       <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex flex-column justify-content-center align-items-center">
//         <div className="mb-4">
//           <Heading headTitle="Overview" />
//         </div>
//         <div className="mb-4 d-flex flex-wrap justify-content-center">
//           <button
//             style={tabStyle(selectedTab === "about")}
//             onClick={() => handleTabClick("about")}
//             className="me-2 mb-2"
//           >
//             About us
//           </button>
//           <button
//             style={tabStyle(selectedTab === "mission")}
//             onClick={() => handleTabClick("mission")}
//             className="me-2 mb-2"
//           >
//             Our Mission
//           </button>
//           <button
//             style={tabStyle(selectedTab === "vision")}
//             onClick={() => handleTabClick("vision")}
//             className="mb-2"
//           >
//             Our Vision
//           </button>
//         </div>
//         <div
//           className={`tab-content p-0 text-center ${animate ? "slide-in" : ""}`}
//           style={{ margin: 0 }}
//         >
//           {selectedTab === "about" && (
//             <p>
//               With a team of over 40 dedicated professionals, averaging more
//               than 7 years of experience each, we add a touch of Professionalism
//               to everything we do.
//             </p>
//           )}
//           {selectedTab === "mission" && (
//             <p>
//               To deliver professionalism and add a touch of Indian warmth to the
//               way property is managed across India and overseas.
//             </p>
//           )}
//           {selectedTab === "vision" && (
//             <p>
//               Making Real Estate simple and effective through the use of defined
//               processes and technology.
//             </p>
//           )}
//         </div>
//       </div>
//       <div
//         className="back-image bg-img parallaxie"
//         data-background="/assets/images/home/our-mission.jpg"
//         data-overlay-dark="5"
//       />
//     </section>
//   );
// }

// export default SectionImage;

import parallaxie from "@/common/parallaxie";
import React, { useState, useEffect } from "react";
import "../SectionImage.css";

const images = {
  about: "/assets/images/home/about3.jpg",
  vision: "/assets/images/home/our-vision.jpg",
  mission: "/assets/images/home/our-mission.jpg",
};

function SectionImage() {
  const [selectedTab, setSelectedTab] = useState("about");
  const [currentImage, setCurrentImage] = useState(images[selectedTab]);
  const [animate, setAnimate] = useState(false);

  const tabStyle = isSelected => ({
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

  const handleTabClick = tab => {
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
    <section className="container-fluid">
      <div className="row screen-height">
        <div
          className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4 bg-navy"
          style={{}}
        >
          <div
            className="mb-4 d-flex justify-content-center align-items-center text-white fw-600"
            style={{
              fontSize: "36px",
              lineHeight: "42px",
            }}
          >
            {/* <Heading headTitle="Overview" className="text-golden"/> */}
            Overview
          </div>
          <div className="mb-4 d-flex flex-wrap justify-content-center">
            <button
              style={tabStyle(selectedTab === "about")}
              onClick={() => handleTabClick("about")}
              className="btn me-2 mb-2"
            >
              About us
            </button>
            <button
              style={tabStyle(selectedTab === "mission")}
              onClick={() => handleTabClick("mission")}
              className="btn me-2 mb-2"
            >
              Our Mission
            </button>
            <button
              style={tabStyle(selectedTab === "vision")}
              onClick={() => handleTabClick("vision")}
              className="btn mb-2"
            >
              Our Vision
            </button>
          </div>
          <div
            className={`tab-content text-center ${animate ? "slide-in" : ""}`}
          >
            {selectedTab === "about" && (
              <p
                style={{
                  padding: "0 40px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  color: "white",
                }}
              >
                With a team of over 40 dedicated professionals, averaging more
                than 7 years of experience each, we add a touch of
                Professionalism to everything we do.
              </p>
            )}
            {selectedTab === "mission" && (
              <p
                style={{
                  padding: "0 40px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  color: "white",
                }}
              >
                To deliver professionalism and add a touch of Indian warmth to
                the way property is managed across India and overseas.
              </p>
            )}
            {selectedTab === "vision" && (
              <p
                style={{
                  padding: "0 40px",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "29px",
                  color: "white",
                }}
              >
                Making Real Estate simple and effective through the use of
                defined processes and technology.
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

export default SectionImage;
