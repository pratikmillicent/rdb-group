import Heading from "@/components/heading/Heading";
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title: "Best Documentary Film - Film Festival",
      year: 2024,
    },
    {
      id: "02",
      title: "Best Music Video - Paris Award",
      year: 2024,
    },
    {
      id: "03",
      title: "Short Movie Awards - Yearly Movies",
      year: 2023,
    },
    {
      id: "04",
      title: "Best Animated Short Film - Paris Award",
      year: 2023,
    },
    {
      id: "05",
      title: "Best Cinematography - Paris Award",
      year: 2023,
    },
  ];

  return (
    <div className="">
      <Heading headTitle="Awards" />
      <div className="row">
        <div className="col-5">
          <div className="fz-18 text-golden">Awards Winning</div>
          <div
            className=""
            style={{
              fontSize: "65px",
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
        <div className="col-7">
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
                className="award-year"
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
