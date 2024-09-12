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
              className="position-absolute text-center p-4"
              style={{
                height: "300px",
                width: "300px",
                // border: "1px solid var(--navy)",
                top: "68%",
                left: "13%",
                transform: "translate(-50%, -50%)",
                // borderRadius: "100%",
                // background: "#fff",
                // background: "transparent",
                // background: "#eaa636",

                border: "2px solid var(--golden)",

                zIndex: 2,
                // color: "#eaa636",
                // color: "var(--navy)",
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              {/* <IoIosEye
                style={{
                  position: "absolute",
                  top: "77%",
                  right: "-15%",
                  // transform: "translate(-50%, -50%)",
                  fontSize: "30px",
                  color: "var(--golden)",
                  fontSize: "110px",
                }}
              /> */}
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
                left: "61%",
                top: "35%",
                // border: "1px solid var(--golden)",
                // border: "1px solid #fff",

                transform: "translate(-50%, -50%)",
                // borderRadius: "100%",
                // background: "#eaa636",
                // background: "rgba(23, 38, 57,0.7)",
                color: "var(--golden)",
                border: "2px solid var(--golden)",

                // overflow: "hidden",
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
              {/* <TbTargetArrow
                style={{
                  position: "absolute",
                  top: "80%",
                  right: "-15%",
                  // transform: "translate(-50%, -50%)",
                  fontSize: "30px",
                  color: "var(--golden)",
                  fontSize: "100px",
                }}
              /> */}
              <IoIosEye
                style={{
                  position: "absolute",
                  top: "77%",
                  right: "-14%",
                  // transform: "translate(-50%, -50%)",
                  // fontSize: "30px",
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
