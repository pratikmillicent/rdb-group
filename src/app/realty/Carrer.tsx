import Heading from "@/components/heading/Heading";
import React from "react";
// import { CarrerData } from "../careers/page";

const CarrerData = [
  {
    title: "PMC",
    position: "Project Manager",
    description: "Manager various sites of projects",
    qualifications: "B.E-Civil with 3 to 4 years of similar experience",
  },
  {
    title: "Redevelopment Project",
    position: "Project Head",
    description: "Manager complete project of SRA/Redevelopment",
    qualifications:
      "20 - 25 years experience with BE Civil and similar experience with Developers",
  },
  {
    title: "Brunch & Cake - Aspect Hospitality",
    position: "Branch Manager",
    description: "Branch Manager(Food & Beverage)",
    qualifications:
      "20 - 25 years experience with BE Civil and similar experience with Developers",
  },
];

const Careers = ({ border, paddingTop = true }) => {
  return (
    <div className="container">
      <h1>
        <div style={{ paddingTop: paddingTop ? "60px" : "0" }}>
          <Heading headTitle="Open Positions" />
          {/* <div className="fz-35 fw-600">Open Positions</div> */}
        </div>
      </h1>
      <p className="text-dark">
        Join us in shaping the future. Explore current openings across our
        global network.
      </p>
      <div className="w-100">
        {CarrerData.map((data, i) => (
          <div
            key={i}
            style={{ border: border && "1px solid #fff" }}
            className="apply_part w-100 positions-item justify-content-around text-light p-4 box-3d"
          >
            <div className="w-100 align-items-center d-flex">
              <p className="fw-bolder  text-light">{data.title}</p>
              <div className="ms-auto apply-btn">
                <a className="mt-1 fw-bolder">APPLY NOW</a>
              </div>
            </div>
            <div className="mt-5">
              <strong>Positions </strong>- {data.position}
            </div>
            <div>
              <strong>Description </strong>- {data.description}
            </div>
            <div>
              <strong>Qualification and Experience required </strong>
              -&nbsp;{data.qualifications}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
