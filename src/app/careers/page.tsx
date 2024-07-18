import Heading from "@/components/heading/Heading";
import React from "react";

const page = () => {
  return (
    <>
      <img src="/assets/images/career/banner.png" style={{ height: "100vh" }} />
      <div className="container">
        <header className="work-header ">
          <div className="mt-60 ">
            <div>
              <div className="caption">
                <h6 className="sub-title">INTRODUCTION</h6>
                <h2>Working at Aspect</h2>
              </div>
            </div>
          </div>
        </header>
        <div className="d-flex gap-3 mb-80">
          <div className="">
            <p className="text-dark fz-20 fw-bold mb-3">
              Become part of a global conglomerate where opportunities are
              boundless, growth is accelerated, and excellence is a way of life.
            </p>
            <p className="text-dark mb-3">
              At Aspect, every day is a journey of discovery, innovation, and
              collaboration. Joining our team means becoming part of a diverse
              family that values everyone’s contributions and encourages
              continuous growth. Here, we don’t just offer jobs; we build
              careers, fostering an environment where aspirations meet
              opportunities and where passion meets purpose.
            </p>
            {/* <p className="text-dark fw-900 mb-4">Open Positions</p> */}
            <div style={{ paddingTop: "30px" }}>
              <Heading headTitle="Open Positions" />
            </div>
            <p className="mt-5 text-dark">
              Join us in shaping the future. Explore current openings across our
              global network.
            </p>
            <div className="w-100">
              {data.map((data, i) => (
                <div
                  key={i}
                  className="apply_part w-100 positions-item justify-content-around text-light p-4"
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
