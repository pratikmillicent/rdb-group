import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container">
      <Heading headTitle="About" />
      <div className="section-padding d-flex flex-column flex-lg-row justify-content-center text-lg-start ">
        <div className="movie-about-text ">
          RD Brothers is more than just a production house; it’s a visionary
          studio that brings stories to life on the silver screen. With a
          passion for filmmaking and a deep understanding of the art of
          storytelling, RD Brothers has carved out a niche in the entertainment
          industry. Specializing in creating captivating movie content, RD
          Brothers seamlessly blends creativity with technical expertise to
          produce films that resonate with audiences across the globe.
        </div>
        <div
          className="d-flex flex-column justify-content-center  align-items-start align-items-lg-start mb-4 mb-lg-0"
          style={{ paddingRight: "80px" }}
        >
          <div className="d-flex justify-content-center justify-content-lg-start align-items-center">
            {/* <p className="fz-38 movie-about mb-0">About</p> */}
            <p className="ms-3">
              <Image
                src={"/assets/images/movie/movies-about.jpg"}
                alt="film clap"
                width={800}
                height={500}
                style={{
                  height: "300px",
                  width: "300px",
                  borderRadius: "50%",

                  filter: "brightness(0.5)",
                }}
              />
            </p>
          </div>
          {/* <div className="studio-text">RD Brothers Studio</div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
