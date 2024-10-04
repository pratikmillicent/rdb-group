import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Image
          src="https://img.freepik.com/premium-photo/two-real-estate-agents-shaking-hands-stunning-urban-backdrop-generative-ai_108146-5933.jpg?w=900"
          className="circle-img career-banner banner"
          alt="about page"
          width={800}
          height={500}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            <h3 className="banner-heading hero-heading">Fracto</h3>
            <div
              style={{
                width: "50px",
                height: "3px",
                borderTop: "solid 2px var(--golden) !important",
                borderLeft: "none",
                borderRight: "none",
                display: "block",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container">
        <p className=" my-4">
          Welcome to Fracto, where innovation meets real estate. Our mission is
          to revolutionize the way you buy, sell, and rent properties by
          leveraging cutting-edge technology and providing exceptional service.
          At Fracto, we understand that the real estate journey is not just
          about transactions, but about finding a place to call home or making a
          sound investment. That's why we are committed to offering a
          user-friendly platform, comprehensive market insights, and
          personalized support every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
