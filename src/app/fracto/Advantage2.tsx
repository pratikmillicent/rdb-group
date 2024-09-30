import React from "react";
import "./Fracto.css";
import Heading from "@/components/heading/Heading";

const Advantage = () => {
  return (
    <div className="">
      <Heading headTitle="How it works?" />
      <div
        className="row position-relative w-100 overflow-hidden p-0 m-0"
        style={{
          background: "var(--navy)",
          paddingTop: "40px",
          paddingBottom: "40px",
          width: "100vw",
        }}
      >
        <div className="col-md-5 col-12 img-hide">
          <img
            src="assets/images/fracto/howitworks.png"
            alt="Commercial Property Financing Solutions"
            className="img-fluid "
            style={{
              borderBottom: "5px solid var(--golden)",
            }}
          />
        </div>

        <div
          className=" col-md-8 col-12 d-flex flex-wrap advantage-postion cre-position overflow-hidden m-0"
          style={{
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {[
            {
              title: "1. Explore Opportunities",
              text: "Accurate valuation services to help you understand the true value of your property.",
            },
            {
              title: "2. Choose Your Investment",
              text: "Explore lucrative real estate investment opportunities with high.",
            },
            {
              title: "3. Invest Seamlessly",
              text: "Get expert legal advice to navigate the complexities of real estate transactions.",
            },
            {
              title: "4. Earn Returns",
              text: "Comprehensive property management services to maximize.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-md-6 col-sm-6 col-12 text-navy p-md-3 p-1 adv-card-height"
            >
              <div
                className="p-md-6 p-3 h-100 card-border"
                style={{
                  backgroundColor: "var(--background)",
                  borderBottom: "5px solid var(--golden)",
                }}
              >
                <h5>{item.title}</h5>
                <p className="cre-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
