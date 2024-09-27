import React from "react";
import "./Fracto.css"; // Ensure this CSS file is correctly imported
import Heading from "@/components/heading/Heading";

const Advantage = () => {
  return (
    <div className="">
      <Heading headTitle="How it works?" />

      <div
        className="row position-relative w-100 overflow-hidden p-0 m-0"
        style={{
          background: "var(--background)",
          paddingTop: "40px",
          paddingBottom: "40px",
          width: "100vw",
        }}
      >
        {/* <div className="col-12 mb-5 overflow-hidden">
          <div className="d-flex flex-wrap justify-content-center align-items-start">
            <h1
              className="col-md-6 col-12 pb-5"
              style={{
                fontSize: "clamp(2rem, 5vw, 56px)",
                fontWeight: 300,
                lineHeight: "clamp(2.5rem, 6vw, 67px)",
                marginBottom: "10px",
                paddingLeft: "5%",
                color: "var(--navy)",
              }}
            >
              Commercial <br />{" "}
              <span
                style={{
                  color: "var(--golden)",
                }}
              >
                Real Estate
              </span>
            </h1>
            <h6
              className="col-md-6 col-12"
              style={{
                paddingLeft: "5%",
                fontSize: "18px",
                fontWeight: 400,
                paddingRight: "5%",
                textAlign: "center",
              }}
            >
              Rd brothers provides a wide selection of financing options for
              commercial real estate businesses of all sizes
            </h6>
          </div>
        </div> */}

        <div className="col-md-5 col-12">
          <img
            src="assets/images/fracto/howitworks.png"
            alt="Commercial Property Financing Solutions"
            className="img-fluid"
            style={{
              borderBottom: "5px solid var(--golden)",
            }}
          />
        </div>

        <div
          className=" col-md-8 col-12 d-flex flex-wrap position-absolute cre-position overflow-hidden m-0"
          style={{
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {[
            {
              title: "Explore Opportunities",
              text: "Accurate valuation services to help you understand the true value of your property.",
            },
            {
              title: "Choose Your Investment",
              text: "Explore lucrative real estate investment opportunities with high.",
            },
            {
              title: "Invest Seamlessly",
              text: "Get expert legal advice to navigate the complexities of real estate transactions.",
            },
            {
              title: "Earn Returns",
              text: "Comprehensive property management services to maximize.",
            },
            // {
            //   title: "Construction loans",
            //   text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam.. ",
            // },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-md-6 col-sm-6 col-12 text-navy p-md-3 p-1"
              style={{
                height: "170px",
              }}
            >
              <div
                className="p-md-6 p-2 h-100 bg-white card-border"
                style={{
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
