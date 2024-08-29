// import parallaxie from "@/common/parallaxie";
// import React, { useState, useEffect } from "react";
// import Heading from "@/components/heading/Heading";

// function SectionImage() {
//   const [selectedTab, setSelectedTab] = useState("overview");
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
//             style={tabStyle(selectedTab === "overview")}
//             onClick={() => handleTabClick("overview")}
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
//           {selectedTab === "overview" && (
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
  overview: "/assets/images/home/about3.jpg",
  vision: "/assets/images/home/our-vision.jpg",
  mission: "/assets/images/home/our-mission.jpg",
};

function SectionImage() {
  const [selectedTab, setSelectedTab] = useState("overview");
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
          className="col-md-6 d-flex flex-column align-items-center p-5 bg-navy"
          style={{}}
        >
          <div
            className="w-100 mb-2 d-flex justify-content-start align-items-start text-white fz-40 fw-700"
            style={{ marginTop: "60px" }}
          >
            RD Brothers
          </div>
          <div className="w-100 mb-2 d-flex flex-wrap justify-content-start">
            <button
              style={tabStyle(selectedTab === "overview")}
              onClick={() => handleTabClick("overview")}
              className="btn me-2 mb-2"
            >
              Overview
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
            className={`tab-content ${animate ? "slide-in" : ""}`}
          >
            {selectedTab === "overview" && (
              <p className="text-white fz-16">
                We are a global leader with a distinct vision to shape a sustainable future across the industries we serve. Our aim is to add value to your life through innovation, commitment to excellence, and integrity. With 20 years of experience and a strong global presence, our diverse portfolio encompasses Properties, Realty, Proptech, and Movie Production businesses as part of RD Group. We're more than just a large company; we're a dynamic force for change, creativity, and meaningful impact where it matters most.
              </p>
            )}
            {selectedTab === "mission" && (
              <p className="text-white fz-16" >
                Our mission is to deliver exceptional value and innovation across diverse
                industries and lead with a purpose.
              </p>
            )}
            {selectedTab === "vision" && (
              <p className="text-white fz-16">
                To lead the global marketplace with diversified excellence, innovation, and purpose-driven
                ventures.

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
    </section>
  );
}

export default SectionImage;
