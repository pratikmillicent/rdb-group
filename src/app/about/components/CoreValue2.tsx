import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { FaPuzzlePiece } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa6";

const coreValueImage = [
  {
    icon: <FaLightbulb />,
    name: "INNOVATION",
    description:
      "We strive to think outside the box and bring new ideas to life.",
    color: "#FFD700",
  },
  {
    icon: <FaPuzzlePiece />,

    name: "COMMITMENT",
    description: "Our dedication to our work and to our clients is unwavering.",
    color: "#FF5733",
  },
  {
    icon: <FaHandshake />,
    name: "INTEGRITY",
    description: "We conduct our business with honesty and transparency.",
    color: "#28A745",
  },
  {
    icon: <FaMedal />,
    name: "QUALITY",
    description: "We ensure the highest standards in everything we do.",
    color: "#C0C0C0",
  },

  {
    icon: <FaUsers />,
    name: "TEAMWORK",
    description: "Collaborating effectively to achieve common goals.",
    color: "#800080",
  },
  {
    icon: <FaBullseye />,
    name: "FOCUS",
    description: "Concentrating on delivering the best outcomes.",
    color: "#FF4500",
  },
];

function CoreValue2() {
  return (
    <div className="clients section-padding pb-60 position-re">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-6 text-center">
            <div className="text text-grey">
              <h3>There’s no such thing as too young to be experienced</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {coreValueImage.map((item: any, i: any) => (
                <div className="col-md-4 col-6 brand box-bg card-hover" key={i}>
                  <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                    <div className="fz-50 text-golden icon-container">
                      <div className="animate-bounce">{<>{item?.icon}</>}</div>
                    </div>
                    <h4 className="text-grey">{item?.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-pattern patrn1 bg-img opacity-5"
        data-background={`/assets/imgs/patterns/pattern.svg`}
      ></div>
    </div>
  );
}

export default CoreValue2;
