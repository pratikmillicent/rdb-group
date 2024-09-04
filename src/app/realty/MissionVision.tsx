import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const MissionVision = () => {
  return (
    <section className="container">
      <Heading headTitle="Vision and Mission" />

      <div className="row">
        <div className="col-12 col-lg-6 mb-4 text-center">
          <Image
            src="/assets/images2/our-mission-vision.jpg"
            alt="Dhaval Thakkar"
            width={400}
            height={400}
            style={{
              height: "427px",
              width: "507px",
              borderRadius: "8px",
            }}
          />
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="position-relative h-100 w-100">
            <div
              className="position-absolute text-center p-5"
              style={{
                height: "300px",
                width: "300px",
                // border: "1px solid var(--navy)",
                top: "70%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                borderRadius: "100%",
                background: "#eaa636B3",
                zIndex: 2,
                color: "var(--navy)",
                // color: "#fff",
              }}
            >
              <h5>Our Mission</h5>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
            <div
              className="position-absolute text-center p-5"
              style={{
                height: "300px",
                width: "300px",
                left: "71%",
                top: "30%",
                // border: "1px solid var(--golden)",
                transform: "translate(-50%, -50%)",
                borderRadius: "100%",
                background: "rgba(23, 38, 57,0.7)",
                color: "#fff",
                // overflow: "hidden",
              }}
            >
              <h5>Our Vision</h5>
              <div>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
