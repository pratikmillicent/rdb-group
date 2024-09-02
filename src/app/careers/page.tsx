"use client";
import Heading from "@/components/heading/Heading";
import ResumeUpload from "./components/ResumeUpload";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/career/career.jpg"
          className="circle-img career-banner banner"
          alt="carrer page"
          // style={{ height: "100vh" }}
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
            {/* <h3 className="banner-heading hero-heading">Careers</h3>
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
            ></div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="work-header ">
          <div className="section-padding">
            <div>
              <div className="caption text-grey">
                {/* <h6 className="sub-title">INTRODUCTION</h6> */}
                <h2>Become part of a team that strives for Excellence!</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-60">
          <div className="text-grey">
            {/* <p className="text-dark fz-20 fw-bold mb-3">
              FASCINATING WORK, ENDLESS OPPORTUNITY
            </p> */}
            <p className="text-dark mb-3">
              At RD Brothers, we believe that excellence is achieved through a
              great team. Our people are our biggest asset, fueling innovation
              and excellence with their passion, expertise, and dedication. Join
              us in a dynamic work environment where client exposure, skill
              enhancement, growth opportunities, and collaboration are at the
              forefront of our culture.
            </p>

            {/* <p className="text-dark fw-900 mb-4">Open Positions</p> */}
            <div style={{ paddingTop: "60px" }}>
              <Heading headTitle="Current Openings" />
              {/* <div className="fz-35 fw-600">Open Positions</div> */}
            </div>
            <p className="text-dark">
              At RD Brothers, the growth of your career is as important to us as
              the success of our business. We're committed to creating an
              empowering workplace where everyone can thrive and succeed.
            </p>
            <div className="w-100">
              {CarrerData.map((data, i) => (
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
        {/* <CardList data={cardData} /> */}
        <ResumeUpload />
      </div>
    </>
  );
};

export default page;

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
