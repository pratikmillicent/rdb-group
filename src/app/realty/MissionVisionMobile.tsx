import Heading from "@/components/heading/Heading";
import React from "react";
import MissionVisonSvg from "./MissionVisonSvg";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosEye } from "react-icons/io";

const MissionVisionMobile = () => {
  return (
    <>
      <section className="">
        <Heading headTitle="Vision and Mission" />

        <MissionVisonSvg />

        <div
          className="text-center p-4 mx-4 position-relative mb-4"
          style={{
            height: "300px",
            color: "var(--golden)",
            border: "2px solid var(--golden)",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          <h5
            style={{
              color: "#000",
            }}
          >
            Our Vision
          </h5>
          <div
            className=""
            style={{
              color: "#000",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>

          <IoIosEye
            style={{
              position: "absolute",
              left: "100%",
              transform: "translateX(-75%)",
              top: "259px",
              color: "var(--golden)",
              fontSize: "60px",
            }}
          />
        </div>

        <div
          className="text-center p-4 mx-4 x position-relative"
          style={{
            height: "300px",

            border: "2px solid var(--golden)",

            zIndex: 2,

            fontSize: "16px",

            color: "var(--golden)",
          }}
        >
          <h5
            style={{
              color: "#000",
            }}
          >
            Our Mission
          </h5>
          <div
            style={{
              color: "#000",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>

          <TbTargetArrow
            style={{
              position: "absolute",
              left: "100%",
              transform: "translateX(-59%)",
              top: "260px",
              color: "var(--golden)",
              fontSize: "60px",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default MissionVisionMobile;
