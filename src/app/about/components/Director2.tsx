"use client";
import loadBackgroudImages from "@/utils/loadBackground";
import React, { useEffect, useState } from "react";

const Director2 = () => {
  const RajThakkar = (
    <>
      <h5>Raj Thakkar - Founder</h5>
      <p>
        With over 21 years of experience in his family’s real estate business,
        Raj has lent his focus to residential real estate in Mumbai. He has
        delivered more than 1.2 million sq. ft., exclusively leading several
        project marketing initiatives with some leading developers. Over the
        years, he has sought to add an element of transparency to all aspects of
        the business, prioritising relationships over deals. His charming and
        friendly nature add a certain warmth to the business, while his
        dedication and professionalism have earned him the trust of many
        satisfied customers.
      </p>
    </>
  );

  const DhavalThakkar = (
    <>
      <h5>Dhaval Thakkar - Founder & CEO</h5>
      <p>
        With over 15 years of real estate experience, specialising in commercial
        and retail spaces across Mumbai and Gujarat, Dhaval has personally led
        project marketing initiatives for numerous commercial projects in and
        around Mumbai. He has also delivered over 1.5 million sq. ft. across 14
        cities in India and has strived to bring an element of professionalism
        to the unorganized real estate sector. He has also been an ardent
        supporter for the adoption of technology for better business management,
        business expansion and social outreach, inspiring a sense of confidence
        and reassurance among his 700+ happy customers. He is also moving into
        newer facets of real estate as director of Fracrospace a new venture
        dealing in fractional ownership of properties.
      </p>
    </>
  );

  const [info, setInfo] = useState("");

  const handleMouseEnter = (text: any) => {
    setInfo(text);
  };

  const handleMouseLeave = () => {
    setInfo("");
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      <section className="pg-about pb-60 pt-60 sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div
                className="bg-img radius-10"
                data-background="/assets/images2/Raj.jpg"
                style={{ height: "700px" }}
                onMouseEnter={() => handleMouseEnter(RajThakkar)}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
            <div className="col-lg-4 d-block d-lg-none">
              <div className="">{RajThakkar}</div>
            </div>

            <div className="col-lg-4">
              <div
                className="bg-img radius-10 mb-3"
                data-background="/assets/images2/Dhaval.jpg"
                style={{ height: "700px" }}
                onMouseEnter={() => handleMouseEnter(DhavalThakkar)}
                onMouseLeave={handleMouseLeave}
              ></div>
            </div>
            <div className="col-lg-4 d-block d-lg-none">
              <div className="">{DhavalThakkar}</div>
            </div>

            <div className="col-lg-4 d-none d-lg-block">
              <div className={`mb-60 ${info ? "info-animation" : ""}`}>
                {info ? info : <div>{RajThakkar}</div>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Director2;
