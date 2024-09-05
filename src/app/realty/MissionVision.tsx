import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import OurMission from "../../../public/assets/images2/our-mission.svg";
import MissionVisonSvg from "./MissionVisonSvg";
const MissionVision = () => {
  return (
    <section className="">
      <Heading headTitle="Vision and Mission" />

      <div
        className="row"
        style={{
          background: "#eaa636B3",
        }}
      >
        <div className="col-12 col-lg-6 mb-4 text-center">
          {/* <Image
            src="/assets/images2/our-mission.svg"
            // src="https://megaone.acrothemes.com/agency-hotspot/images/slider-img.png"
            alt="Dhaval Thakkar"
            width={400}
            height={400}
            // style={{
            //   height: "427px",
            //   width: "507px",
            //   borderRadius: "8px",
            // }}
          /> */}
          <div className="">
            <MissionVisonSvg />
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="position-relative h-100 w-100">
            <div
              className="position-absolute text-center p-5"
              style={{
                height: "330px",
                width: "330px",
                // border: "1px solid var(--navy)",
                top: "68%",
                left: "28%",
                transform: "translate(-50%, -50%)",
                borderRadius: "100%",
                // background: "#fff",
                // background: "transparent",
                background: "#eaa636",

                border: "1px solid #eaa636",

                zIndex: 2,
                // color: "#eaa636",
                // color: "var(--navy)",
                fontSize: "16px",

                color: "#fff",
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
                height: "330px",
                width: "330px",
                left: "61%",
                top: "35%",
                // border: "1px solid var(--golden)",
                // border: "1px solid #fff",

                transform: "translate(-50%, -50%)",
                borderRadius: "100%",
                background: "rgba(23, 38, 57,0.7)",
                color: "#fff",
                // overflow: "hidden",
                fontSize: "16px",
                textAlign: "center",
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
