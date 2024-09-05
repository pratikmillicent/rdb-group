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
      title: "Best Cinematography - Paris Award",
      year: 2024,
    },
    {
      id: "03",
      title: "Short Movie Awards - Yearly Movies",
      year: 2023,
    },
    // {
    //   id: "04",
    //   title: "Best Animated Short Film - Paris Award",
    //   year: 2023,
    // },
    // {
    //   id: "05",
    //   title: "Best Cinematography - Paris Award",
    //   year: 2023,
    // },
  ];

  return (
    <div className="container-fluid">
      <Heading headTitle="Awards" />
      <div className="row">
        <div className="col-md-5 col-12 mb-4">
          <div className="fz-18 text-golden">Awards Winning</div>
          <div
            className="awards-heading"
            style={{
              fontSize: "clamp(40px, 5vw, 65px)",
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
        <div className="col-md-7 col-12">
          {awardsData.map((item, index) => (
            <div
              className="award-item d-flex align-items-start justify-content-between gap-3 p-3 border-bottom"
              key={index}
            >
              <div className="d-flex align-items-start gap-3">
                <div className="award-id text-golden fz-16">({item.id})</div>
                <div className="award-title text-uppercase fz-30 fw-500">
                  {item.title}
                </div>
              </div>
              <div
                className="award-year text-uppercase fz-30 fw-500"
                style={{
                  height: "100px",
                  width: "200px",
                }}
              >
                {/* {item.year} */}
                <img
                  src="https://silverscreen.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-2.png"
                  alt="award"
                  className="h-100 w-100"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardMovie;
