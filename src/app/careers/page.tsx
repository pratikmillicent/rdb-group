"use client";
import Heading from "@/components/heading/Heading";
import ResumeUpload from "./components/ResumeUpload";
import React from "react";
import Image from "next/image";
import TestimonialCareer from "./components/TestimonialCareer.jsx";
import { Col, Row } from "react-bootstrap";
import CarrerGallery from "./CarrerGallery";
import TestimonialVideo from "./components/TestimonialVideo";

const page = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/career/banner-2.png"
          className="circle-img career-banner banner"
          // className="circle-img career-banner"
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
              "linear-gradient(117deg, rgba(23, 38, 57, 100%) 0%, rgba(1, 1, 1, 10%) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              // marginTop: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              // padding: "0 20px 20px 20px ",
            }}
          >
            <p
              className=""
              style={{
                marginBottom: "20px",
                lineHeight: "56px",
                letterSpacing: "-1px",
                fontWeight: 600,
                fontSize: "48px",
                color: "#fff",
                transition: "all",
              }}
            >
              CAREERS
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <div className="work-header ">
          <div
            className="pt-3 section-padding"
            style={{ paddingTop: "30px !important" }}
          >
            <div>
              <div className="caption text-grey">
                <section
                  className=""
                  style={{ background: "var(--background)" }}
                >
                  <div className="container">
                    <div className="sec-lg-head">
                      <div
                        className="d-flex row justify-content-center"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          className="col-lg-6"
                          style={{ color: "var(--navy)" }}
                        >
                          <Heading
                            headTitle="Empower Your Career, Build with Purpose"
                            fontSize="40px"
                            textAlign="left"
                            isMargin="0"
                          />

                          <p>
                            We believe in nurturing talent and fostering growth.
                            Our employees are the heart of our success, and
                            their voices reflect the dynamism, inclusivity, and
                            forward-thinking culture we cultivate. Hear from our
                            team as they share their journeys, experiences, and
                            the impact they've made in reshaping a progressive
                            future with us.
                          </p>
                        </div>
                        <div className="col-lg-6">
                          <img
                            style={{ height: "80vh" }}
                            src="https://plus.unsplash.com/premium_vector-1682309052944-69df8e1ddc26?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="cre"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <Heading headTitle=" Beyond the Desk" />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3 mb-60">
          <div className="text-grey container">
            <CarrerGallery />
            {/* <p className="text-dark fw-900 mb-4">Open Positions</p> */}

            {/* <TestimonialCareer /> */}
            <TestimonialVideo />

            <div>
              <Heading headTitle="Current Openings" />

              {/* <div className="fz-35 fw-600">Open Positions</div> */}
            </div>
            <p className="text-black fz-16 fw-400">
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
                    <p className="fw-bolder text-golden">{data.title}</p>
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
