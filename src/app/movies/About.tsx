
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <Heading headTitle="About" />

      <div
        className="bg-opacity-50"
        style={{
          backgroundImage: `url(/assets/images/movie/about-bg-3.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          minHeight: "80vh", // Ensures it takes full height
        }}
      >
        <div
          className="d-flex align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <div className="container d-flex flex-column flex-lg-row justify-content-center text-lg-start">
            <div className="d-flex justify-content-center justify-content-lg-start align-items-end">
              <p
                className="ms-3"
                style={{
                  height: "300px",
                  width: "473px",
                  borderRadius: "50%",
                  overflow: "hidden",
                }}
              ></p>
            </div>

            <div
              className=" text-white fz-20 fw-400 d-flex justify-content-center align-items-center mt-4 mt-lg-0 item mb-15 wow fadeInUp"
              style={{
                width: "100%",
                alignItems: "center",
                textAlign: "justify",
              }}
            >
              RD Brothers is more than just a production house; it’s a visionary
              studio that brings stories to life on the silver screen. With a
              passion for filmmaking and a deep understanding of the art of
              storytelling, RD Brothers has carved out a niche in the
              entertainment industry. Specializing in creating captivating movie
              content, RD Brothers seamlessly blends creativity with technical
              expertise to produce films that resonate with audiences across the
              globe.
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start align-items-lg-start mb-4 mb-lg-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
