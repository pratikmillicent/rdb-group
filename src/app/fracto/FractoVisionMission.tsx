import parallaxie from "@/common/parallaxie";
import React, { useState, useEffect } from "react";
import "./../(home)/SectionImage.css";
import Heading from "@/components/heading/Heading";

// const images = {
//   overview: "/assets/images/home/about3.jpg",
//   vision: "/assets/images/about/vission.png",
//   mission: "/assets/images/about/mission.png",
// };

function FractoSectionImage() {
  useEffect(() => {
    parallaxie(".back-image.parallaxie", 0.35);
  }, []);

  return (
    <div
      className="section-container d-md-flex flex-md-row"
      style={{ width: "100vw" }}
    >
      <div
        className="vision-container col-md-6 d-flex flex-column align-items-center"
        style={{ backgroundColor: "var(--navy)", paddingBottom: "30px" }}
      >
        <div className={`tab-content slide-in`}>
          {/* <h5 className="mt-30" style={{ color: "var(--golden)" }}>
            Vision
          </h5> */}
          <Heading
            headTitle="Vision"
            color="#fff"
            textAlign="left"
            isMargin="mt-30"
          />
          <p style={{ color: "#fff" }} className="text-foreground w-100">
            To become India's leading real estate investment platform by
            simplifying access to high-yield opportunities and creating
            long-term value for our investors and stakeholders.
          </p>

          {/* <h5 className="mt-30" style={{ color: "var(--golden)" }}>
            Mission
          </h5> */}
          <Heading
            headTitle="Mission"
            color="#fff"
            textAlign="left"
            isMargin="mt-30"
          />
          <p style={{ color: "#fff" }} className="text-foreground">
            To transform real estate investing by leveraging technology and
            data, creating a seamless, transparent, and accessible platform that
            empowers investors and redefines the investment landscape.
          </p>
        </div>
      </div>

      <div
        className={`col-md-6 position-relative p-0 slide-in d-none d-sm-none d-md-block d-lg-block d-xl-block`}
      >
        <div
          className="back-image bg-img parallaxie"
          data-background="/assets/images/fracto/vision-mission.webp"
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
  );
}

export default FractoSectionImage;
