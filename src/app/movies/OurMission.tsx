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

const OurMission = () => {
  return (
    <div>
      <Heading headTitle="Our mission" />

      <div className="silverscreen-container">
        {/* Top left corner: REC and timer */}
        <div className="top-left">
          <span
            className=""
            style={{ position: "absolute", top: "23px", left: "33px" }}
          >
            <Image
              src={"/assets/images/movie/about/recording2.gif"}
              alt={"corner"}
              width={100}
              height={100}
              style={{
                width: "50%",
              }}
            />
          </span>
          {/* <span className="timer">00:12:04 | 45:00</span> */}
          <Image
            src={"/assets/images/movie/about/corner1.png"}
            alt={"corner"}
            width={100}
            height={100}
            style={{
              width: "60%",
            }}
          />
        </div>

        {/* Center text: SILVERSCREEN */}
        <div
          className="center-text "
          style={{
            zIndex: 9,
            // backgroundColor: "var(--navy)",
            backgroundColor: "rgb(21, 21, 21)",
            padding: "40px",
            width: "50%",
            alignItems: "center",
            textAlign: "justify",
            // fontFamily: "FontAwesome",
          }}
        >
          <p className="text-white fz-18">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            ab quasi accusamus laudantium odio non tempora consequatur porro
            optio ex quaerat consectetur eligendi ullam, quod, autem fugit dolor
            voluptate eum accusantium velit beatae cupiditate! Doloribus
            repudiandae dicta eius commodi autem deleniti nulla perspiciatis
            optio modi dolorum unde amet asperiores atque quo velit, quidem
            minima aperiam illum consequatur vel impedit. Qui
          </p>
        </div>

        {/* Scroll Down indicator */}
        <div className="scroll-down">
          {/* <span>SCROLL DOWN</span> */}
          <Image
            src={"/assets/images/movie/about/element.png"}
            alt={"corner"}
            width={100}
            height={100}
            style={{
              width: "60%",
            }}
          />
          {/* <div className="scroll-arrow"></div> */}
        </div>

        {/* Bottom left: Camera settings */}
        <div className="bottom-left">
          {/* <span>ISO 100 | 1/80 | F4.0</span> */}
          <Image
            src={"/assets/images/movie/about/corner3.png"}
            alt={"corner"}
            width={100}
            height={100}
            style={{
              width: "60%",
            }}
          />
        </div>

        {/* Bottom right: Video length */}
        <div className="bottom-right">
          {/* <span>~01:30</span> */}
          <Image
            src={"/assets/images/movie/about/corner4.png"}
            alt={"corner"}
            width={100}
            height={100}
            style={{ width: "60%" }}
          />
        </div>

        {/* Top right: Video quality */}
        <div className="top-right">
          {/* <span>4K | 3840 x 2160 | 30FPS | 70Mbps</span> */}
          <Image
            src={"/assets/images/movie/about/corner2.png"}
            alt={"corner"}
            width={100}
            height={100}
            style={{
              width: "60%",

              objectFit: "cover",
            }}
          />
        </div>

        {/* Horizontal/Vertical Guides */}
        <div className="guides"></div>
      </div>
    </div>
  );
};

export default OurMission;
