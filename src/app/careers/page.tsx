"use client"
import ResumeUpload from "@/components/Resume-upload/ResumeUpload";
import React from "react";

const page = () => {
  return (
    <>
      <img src="/assets/images2/career.jpg" style={{ height: "100vh" }} />
      <div className="container">
        <div className="work-header ">
          <div className="mt-60 ">
            <div>
              <div className="caption">
                <h6 className="sub-title">INTRODUCTION</h6>
                <h2>Working at R.D.Brothers property consultants LLP</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-80">
          <div className="">
            <p className="text-dark fz-20 fw-bold mb-3">
              FASCINATING WORK, ENDLESS OPPORTUNITY
            </p>
            <p className="text-dark mb-3">
              We’re driven by technology and fueled by the multitude of
              opportunities. Develop your skills, and grow with a group that
              takes real challenges in real estate. Join these extraordinary
              women and men as they push boundaries in this new age with new
              ways.
            </p>
            {/* <p className="text-dark fw-900 mb-4">Open Positions</p> */}
            <div style={{ paddingTop: "60px" }}>
              {/* <Heading headTitle="Open Positions" /> */}
              <div className="fz-35 fw-600">Open Positions</div>
            </div>
            <p className="mt-30 text-dark">
              Join us in shaping the future. Explore current openings across our
              global network.
            </p>
            <div className="w-100">
              {data.map((data, i) => (
                <div
                  key={i}
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
        </div>
        <ResumeUpload />
      </div>
    </>
  );
};

export default page;

const data = [
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
