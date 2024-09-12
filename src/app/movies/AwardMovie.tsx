import Heading from "@/components/heading/Heading";
import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import "./award.css";

const AwardMovie = () => {
  const awardsData = [
    {
      id: "01",
      title: "Best Documentary Film - Film Festival",
      year: 2025,
      movie: "Jhamkudi",
    },
    {
      id: "02",
      title: "Best Cinematography - Paris Award",
      year: 2024,
      movie: "Jhamkudi",
    },
    {
      id: "03",
      title: "Short Movie Awards - Yearly Movies",
      year: 2023,
      movie: "Jhamkudi",
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
    <div className="">
      {/* <Heading headTitle="Awards" /> */}
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
      <div className="row p-5">
        <div className="col-md-5 col-12 mb-4">
          <div className="fz-18 text-golden">Awards Winning</div>
          <div
            className=""
            style={{
              fontSize: "clamp(20px, 3vw, 30px)",
              fontWeight: 500,
              lineHeight: "1.3em",
              letterSpacing: "0px",
              // textTransform: "uppercase",
              color: "var(--navy)",
            }}
          >
            {/* Our Awards and Recognitions */}
            Recognized with prestigious awards for outstanding contributions in
            film making.
          </div>
        </div>
        <div className="col-md-7 col-12">
          {awardsData.map((item, index) => (
            <div
              className="awards d-flex  align-items-center justify-content-start p-3 border-bottom"
              key={index}
            >
              {/* <div className="d-flex align-items-start gap-3">
                <div className="award-id text-golden fz-16">({item.id})</div>
                <div className="award-title text-uppercase fz-30 fw-500">
                  {item.title}
                </div>
              </div> */}
              <div
                className=" text-golden"
                style={{
                  fontSize: "32px",
                  marginRight: "12px",
                }}
              >
                {item.year}
              </div>
              <div className="award-item d-flex flex-col align-items-center text-uppercase fz-30 fw-500 gap-3">
                {/* {item.year} */}
                <img
                  src="https://silverscreen.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-2.png"
                  alt="award"
                  className="award-year"
                  style={{
                    objectFit: "contain",
                    height: "114px",
                    width: "150px",
                  }}
                />
                <div className="fz-15 pe-2">{item.movie}</div>
              </div>
              <div className="award-item d-flex flex-col align-items-center text-uppercase fz-30 fw-500 gap-3">
                {/* {item.year} */}
                <img
                  src="https://silverscreen.qodeinteractive.com/wp-content/uploads/2017/04/h1-img-2.png"
                  alt="award"
                  className="award-year"
                  style={{
                    objectFit: "contain",
                    height: "114px",
                    width: "150px",
                  }}
                />
                <div className="fz-15 pe-2">{item.movie}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardMovie;
