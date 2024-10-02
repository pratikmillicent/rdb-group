// import Heading from "@/components/heading/Heading";
// import React from "react";

// const OurMission = () => {
//   return (
//     <>
//       <Heading headTitle="About" />
//       <div
//         className=""
//         style={{
//           height: "80dvh",
//           width: "100vw",
//           backgroundColor: "var(--background)",
//         }}
//       >
//         <div
//           className=""
//           style={{
//             backgroundImage: `url(/assets/images/movie/director-chair.jpg)`,
//             backgroundSize: "contain", // Adjusted from contain to cover
//             backgroundRepeat: "no-repeat",
//             // backgroundPosition: "center center",
//             width: "100%",
//             height: "100%", // Increased height to ensure full section coverage
//             filter: "hue-rotate(45deg)",
//           }}
//         >
//           <div className="d-flex align-items-center">
//             <div className="d-flex flex-column flex-lg-row justify-content-center text-lg-start py-4">
//               <div className="d-flex flex-column justify-content-center align-items-start align-items-lg-start mb-4 mb-lg-0"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurMission;

import React from "react";
import "./ourmission.css";
import Image from "next/image";
import Heading from "@/components/heading/Heading";

const AboutUs = () => {
  return (
    <>
      <section
        id="section-highlight"
        className="relative text-light"
        data-bgcolor="var(--background)"
        style={{
          backgroundColor: "var(--background)",

          borderBottom: "3px solid var(--golden)",
        }}
      >
        <div className="container">
          <div
            style={{
              padding: "90px 0",
            }}
          >
            <div
              className="row align-items-center"
              style={{ marginBottom: "60px" }}
            >
              <div className="col-md-4" style={{}}>
                {/* <span
                className="p-title wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                Welcome
              </span> */}
                <br />
                <div style={{ width: "fit-content", position: "relative" }}>
                  <h2
                    className="wow fadeInUp animated"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      color: "#000",
                    }}
                  >
                    About Us
                  </h2>
                  <div
                    className="border-line position-absolute "
                    style={{
                      // width: borderWidth,
                      left: "12.5%",
                      right: "12.5%",
                      top: "100%",
                    }}
                  ></div>
                </div>
                <div className="small-border sm-left" style={{}}></div>
              </div>
              <div className="col-md-8" style={{}}>
                <p
                  className="wow fadeInRight animated"
                  style={{
                    visibility: "visible",
                    animationName: "fadeInRight",
                    // color: "#000",
                    fontWeight: "400",
                  }}
                >
                  RD Movies, the entertainment arm of RD Brothers, has made a
                  remarkable impact in the film industry by producing critically
                  acclaimed and commercially successful films. With a blend of
                  creative storytelling and sharp business acumen, we aim to
                  deliver cinematic experiences that resonate both culturally
                  and commercially. Our production house is responsible for
                  blockbuster films like Kutch Express as well as ventures into
                  new genres with our latest horror comedy release, Jhamkuddi.
                  At RD Movies, we are more than just filmmakers—we are
                  storytellers committed to creating unique, compelling
                  narratives for audiences worldwide.
                </p>
              </div>
            </div>
            <div className="spacer-double" style={{}}></div>
          </div>
        </div>
      </section>

      <section
        className="no-top relative z1000"
        style={{
          backgroundImage: "linear-gradient(var(--navy))",
          transform: "translateY(-90px)",
        }}
      >
        <div className="container" style={{}}>
          <div className="row" style={{ display: "flex", gap: "40px" }}>
            <div
              className="col-md-5 mb-sm-30 wow fadeInRight animated"
              style={{
                background: "var(--navy)",
                // border: "3px solid var(--golden)",

                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInRight",
                padding: "20px",
              }}
            >
              <div className="" style={{}}>
                <div className="" style={{}}>
                  <div className="c-inner" style={{}}>
                    <h4>
                      <i className="icofont-people"></i>
                      <span style={{ color: "var(--golden)" }}>Mission</span>
                    </h4>
                    <p style={{ color: "#fff" }}>
                      To create impactful cinematic experiences that blend
                      creativity with business acumen, ensuring our films
                      captivate audiences worldwide and contribute to the growth
                      of the entertainment industry.
                    </p>
                    <div className="spacer20" style={{}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 mb-sm-30 wow fadeInRight animated"
              style={{
                background: "var(--navy)",
                // border: "3px solid var(--golden)",

                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInRight",
                padding: "20px",
              }}
            >
              <div className="" style={{}}>
                <div className="" style={{}}>
                  <div className="c-inner" style={{}}>
                    <h4>
                      <i className="icofont-home"></i>
                      <span style={{ color: "var(--golden)" }}>Vision</span>
                    </h4>
                    <p style={{ color: "#fff" }}>
                      To promote meaningful filmmaking, delivering captivating
                      stories that connect with audiences on a cultural and
                      commercial level, while fostering innovation in film
                      production.
                    </p>
                    <div className="spacer20" style={{}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
