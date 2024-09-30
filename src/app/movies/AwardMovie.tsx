import Heading from "@/components/heading/Heading";
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title: "Best Actress - Silver Lotus Award",
      year: 2024,
    },
    {
      id: "02",
      title: "Best Costume Design - Silver Lotus Award",
      year: 2024,
    },
    {
      id: "03",
      title:
        "Best feature film Promoting National, Social and Enviorment Values - Silver Lotus Award",
      year: 2024,
    },
  ];

  return (
    <div className="container">
      <div
        className="bg-navy"
        style={{
          background: "url(/assets/images/movie/bg-leaf2.svg)",
          backgroundRepeat: "no-repeat",
          height: "30vh",
          backgroundSize: "contain",
          display: "flex",
          alignItems: "center",
          // backgroundColor: "var(--navy)",
        }}
      >
        <Heading headTitle="Awards" isMargin="0" />
      </div>
      <div className="row">
        <div className=" col-lg-5 col-12">
          <div className="fz-18 text-golden pt-40">Awards Winning</div>
          <div
            className=""
            style={{
              fontSize: "48px",
              fontWeight: 500,
              lineHeight: "1.3em",
              letterSpacing: "0px",
              textTransform: "uppercase",
              color: "var(--navy)",
            }}
          >
            Our Awards and Recognitions
          </div>
        </div>
        <div className=" col-lg-7 col-12">
          {awardsData.map((item, index) => (
            <div
              className="award-item d-flex align-items-start justify-content-between gap-3 p-3 border-bottom"
              key={index}
            >
              <div className="d-flex align-items-start gap-3">
                <div
                  className="award-id"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    lineHeight: "1.7em",
                    color: "var(--golden)",
                  }}
                >
                  ({item.id})
                </div>
                <div
                  className="award-title"
                  style={{
                    fontSize: "30px",
                    fontWeight: 500,
                    lineHeight: "1.4em",
                    letterSpacing: "0px",
                    textTransform: "uppercase",
                  }}
                >
                  {item.title}
                </div>
              </div>
              <div
                className="award-year text-golden"
                style={{
                  fontSize: "30px",
                  fontWeight: 500,
                  lineHeight: "1.4em",
                  letterSpacing: "0px",
                  textTransform: "uppercase",
                }}
              >
                {item.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardMovie;
