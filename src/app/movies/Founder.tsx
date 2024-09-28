import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

function Founder() {
  return (
    <div style={{ background: "var(--background)", paddingTop: "20px" }}>
      <div
        style={{
          display: "flex",
          margin: "60px auto",
          gap: "40px",
        }}
        className="container founder-mobile"
      >
        <div style={{ flex: "1" }}>
          <Heading headTitle="Our Founder" />
          <p className="mobile-justify">
            Dhaval Thakkar, with 15 years of experience in commercial and retail
            real estate, is known for his attention to detail and passion for
            innovation. His leadership has driven the company’s growth,
            delivering over 1.5 million square feet of prime real estate across
            14 cities in India. Bold and forward-thinking, Dhaval focuses on
            diversification and embracing new technologies to create value.
          </p>
          <p className="mobile-justify">
            He inspires his team, fostering collaboration and creativity, and
            believes growth is about building a sustainable, innovative future.
            Dhaval’s vision has expanded the company’s reach and set new
            industry standards, keeping the business agile and competitive.
          </p>
        </div>
        <div style={{ flex: "", position: "relative" }}>
          <Image
            alt="Dhaval Thakkar"
            src="/assets/images2/Dhaval.png"
            style={{ zIndex: 1 }}
            width={100}
            height={100}
          />

          <div
            className="frame-mobile"
            style={{
              position: "absolute",
              inset: 0,
              border: "5px solid var(--golden)",
              left: "20px",
              top: "-20px",
              right: "-20px",
              bottom: "20px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
