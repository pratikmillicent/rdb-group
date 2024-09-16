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
          backgroundImage: `url(/assets/images/movie/about-bg-4.jpeg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
          minHeight: "55vh", // 01
          // minHeight: "80vh", // Ensures it takes full height
          filter: "hue-rotate(45deg)",
        }}
      >
        <div className="d-flex align-items-center">
          <div className="container d-flex flex-column flex-lg-row justify-content-center text-lg-start py-4">
            <div
              className="text-navy fz-18 fw-600 d-flex justify-content-center align-items-center  mt-lg-0 item wow fadeInUp"
              style={{
                width: "100%",
                alignItems: "center",
                textAlign: "justify",
                // fontFamily: "FontAwesome",
                fontStyle: "italic",
              }}
            >
              Welcome to Soul Sutra Studios, where the essence of storytelling
              meets the art of filmmaking. At Soul Sutra Studios, we believe
              that every story has a soul—a thread that weaves together its many
              facets into a harmonious whole. Our name reflects this philosophy:
              Soul signifies the spirit, and Sutra represents the narrative
              thread that connects all elements. Founded by the visionary trio
              Manasi Parekh, Parthiv Gohil, and Dhaval Thakkar, Soul Sutra
              Studios is a film production entity born from the art of
              storytelling and expertise. With over 45 years of cumulative
              experience spanning finance, production, and technology, we are
              dedicated to crafting cinematic experiences that captivate,
              inspire, and ignite the spirit. Our mission is to pioneer a
              revolution in filmmaking by delivering narratives that resonate
              deeply with audiences. We are committed to creating films that are
              not only visually stunning but also emotionally profound, ensuring
              that each project reflects our passion for storytelling and
              innovation. Join us on this journey as we explore new horizons and
              bring to life stories that touch the heart and elevate the soul.
            </div>
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
            <div className="d-flex flex-column justify-content-center align-items-start align-items-lg-start mb-4 mb-lg-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
