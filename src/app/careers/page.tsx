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
            <h3 className="banner-heading">Careers</h3>
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
            ></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="work-header ">
          <div className="section-padding">
            <div>
              <div className="caption text-grey">
                <h6 className="sub-title">INTRODUCTION</h6>
                <h2>Working at R.D.Brothers property consultants LLP</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-60">
          <div className="text-grey">
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
              <Heading headTitle="Open Positions" />
              {/* <div className="fz-35 fw-600">Open Positions</div> */}
            </div>
            <p className="text-dark">
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
        {/* <CardList data={cardData} /> */}
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

const cardData = [
  {
    icon: "/assets/images/career/setting.svg",
    position: "Operations Manager",
    location: "India",
    description: "A talented Operations Manager to join our team.",
  },
  {
    icon: "/assets/images/career/mind.svg",
    position: "Creative Director",
    description: "A talented Creative Director to join our team.",
  },
  {
    icon: "/assets/images/career/project-manager.png",
    position: "Chief Strategy Officer",
    location: "China",
    description: "A talented Chief Strategy Officer to join our team.",
  },
  {
    icon: "/assets/images/career/radio.svg",
    position: "Sr. Software Engineer",
    location: "India",
    description: "A talented Sr. Software Engineer to join our team.",
  },
  {
    icon: "/assets/images/career/mind.svg",
    position: "Project Manager",
    location: "USA",
    description: "A talented Sr. Software Engineer to join our team.",
  },
  {
    icon: "/assets/images/career/entrepreneur.png",
    position: "Branch Manager",
    location: "UAE",
    description: "A talented Sr. Software Engineer to join our team.",
  },
  {
    icon: "/assets/images/career/mind.svg",
    position: "Project Manager",
    location: "Russia",
    description: "A talented Sr. Software Engineer to join our team.",
  },
  {
    icon: "/assets/images/career/entrepreneur.png",
    position: "Branch Manager",
    location: "UK",
    description: "A talented Sr. Software Engineer to join our team.",
  },
];
