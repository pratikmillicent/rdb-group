import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <Image
          src="https://demo09.houzez.co/wp-content/uploads/revslider/54.jpg"
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
              "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
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
            <h3 className="banner-heading">Movies</h3>
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
        <div className="section-padding">
          <p>
            Luxury real estate refers to properties that have been designed and
            built with high standards of design, functionality, and aesthetics.
            These properties are often located in high-net-worth areas, such as
            wealthy individuals' homes, corporate office
          </p>
          <p>
            At RDB Group, we strive to create a welcoming, inclusive, and
            supportive space where people can express themselves freely, without
            fear of judgment or criticism. We believe that art, culture, and
            social issues are essential for promoting a healthy, prosperous, and
            thriving world.
          </p>
          <p>
            By working together, we aim to create a thriving and vibrant arts
            community that values diversity, inclusion, and empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
