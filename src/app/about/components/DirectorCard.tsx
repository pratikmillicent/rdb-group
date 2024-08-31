import Heading from "@/components/heading/Heading";
import React from "react";
import Image from "next/image";

const DirectorCard = () => {
  return (
    <>
      <div>
        <Heading headTitle="Our Leaders" />
        <div className="container">
          <div className="">
            <div
              className="d-flex flex-column flex-md-row main-director "
              style={{ height: "70vh", width: "100%" }}
            >
              <div className="d-flex  h-100 " style={{ width: "30%" }}>
                <Image
                  src="/assets/images2/Dhaval.jpg"
                  alt="Dhaval Thakkar"
                  width={800}
                  height={500}
                  className="img-fluid "
                  style={{
                    height: "80%",
                    width: "85%",
                    border: "4px solid var(--background)",
                  }}
                />
              </div>
              <div
                className=" d-flex flex-column  gap-2"
                style={{ width: "70%" }}
              >
                <div className="director-heading">
                  <h5 className="director-title">Founder & CEO</h5>
                  <h1 className="director-head">Dhaval Thakkar</h1>
                </div>
                <p className="director-p">
                  Dhaval Thakkar is a dynamic and detail-oriented leader who
                  believes that innovation is the driving force behind growth
                  and success. With 15 years of expertise in the commercial and
                  retail real estate sectors, Dhaval has been instrumental in
                  steering our company toward remarkable expansion. Under his
                  leadership, we have successfully delivered over 1.5 million
                  square feet of prime real estate across 14 cities in India,
                  marking our presence in key markets and setting new industry
                  standards. Dhaval's approach to leadership is bold and
                  progressive, characterized by a relentless pursuit of
                  diversification and a deep commitment to integrating emerging
                  technologies.
                </p>
              </div>
            </div>
            <div
              className="d-flex flex-column flex-md-row main-director dirctor-row director-info"
              style={{ height: "70vh", width: "100%" }}
            >
              <div
                className="w-100 w-md-50  d-flex flex-column  gap-2"
                style={{ width: "70%" }}
              >
                <div className="director-heading">
                  <h5 className="director-title">Founder</h5>
                  <h1 className="director-head">Raj Thakkar</h1>
                </div>
                <p className="director-p pe-5">
                  Raj Thakkar is a visionary leader with a forward-thinking
                  approach, dedicated to driving growth and innovation within
                  our organization. With over 21 years of extensive experience,
                  Raj has played a pivotal role in guiding our company to new
                  heights, consistently fostering collaboration, and empowering
                  his team to excel. His leadership style is both bold and
                  compassionate, known for its focus on delivering high-impact
                  results while nurturing a positive and inclusive work
                  environment. Raj’s personable and approachable nature sets him
                  apart, as he values building genuine, transparent
                  relationships rooted in trust and mutual respect.
                </p>
              </div>
              <div
                className="d-flex justify-content-center h-100 "
                style={{ width: "30%" }}
              >
                <Image
                  src="/assets/images2/Raj.jpg"
                  alt="Raj Thakkar"
                  width={800}
                  height={500}
                  className="img-fluid"
                  style={{
                    height: "80%",
                    width: "100%",
                    border: "4px solid var(--background)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorCard;
