import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";
import OurMission from "../../../public/assets/images2/our-mission.svg";
import MissionVisonSvg from "./MissionVisonSvg";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa6";
import { IoIosEye } from "react-icons/io";
const MissionVision = () => {
  return (
    <section className="">
      <Heading headTitle="Vision and Mission" />

      <div
        className="row"
        style={{
          background: "var(--background)",
        }}
      >
        <div className="col-12 col-lg-6 mb-4 text-center">
          <div className="">
            <MissionVisonSvg />
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="position-relative h-100 w-100">
            <div
              className="position-absolute text-center p-4"
              style={{
                height: "300px",
                width: "300px",
                top: "68%",
                left: "61%",
                transform: "translate(-50%, -50%)",

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
                To be the leading force in real estate, known for excellence in
                property development, continuously innovating and enduring
                value.
              </div>

              <TbTargetArrow
                style={{
                  position: "absolute",
                  top: "80%",
                  right: "-15%",
                  // transform: "translate(-50%, -50%)",
                  // fontSize: "30px",
                  color: "var(--golden)",
                  fontSize: "100px",
                }}
              />
            </div>
            <div
              className="position-absolute text-center p-4"
              style={{
                height: "300px",
                width: "300px",
                left: "6%",
                top: "35%",

                transform: "translate(-50%, -50%)",

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
                Our mission is to deliver exceptional real estate solutions that
                embody luxury, innovation, and functionality by building a
                legacy of trust and excellence.
              </div>

              <IoIosEye
                style={{
                  position: "absolute",
                  top: "77%",
                  right: "-14%",

                  color: "var(--golden)",
                  fontSize: "110px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
