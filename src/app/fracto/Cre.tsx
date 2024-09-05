import React from "react";
import "./Fracto.css"; // Ensure this CSS file is correctly imported
import Heading from "@/components/heading/Heading";

const Cre = () => {
  return (
    <div>
      <Heading headTitle="CRE" />

      <div
        className="row position-relative"
        style={{
          background: "var(--background)",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <div className="col-12 mb-5">
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
        </div>

        <div className="col-md-5 col-12">
          <img
            src="https://www.jpmorgan.com/content/dam/jpmorgan/images/cb/commercial-real-estate/cb-cre-banner-commercial-property-financing-solutions-490x870-vertical.jpg"
            alt="Commercial Property Financing Solutions"
            className="img-fluid"
            style={{
              borderBottom: "5px solid var(--golden)",
            }}
          />
        </div>

        <div
          className="col-md-8 col-12 d-flex flex-wrap position-absolute cre-position"
          style={{
            right: "5%",
            top: "27%",
          }}
        >
          {[
            {
              title: "Term loans",
              text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam..  ",
            },
            {
              title: "Subscription lending",
              text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam.. ",
            },
            {
              title: "Refinancing",
              text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam..  ",
            },
            {
              title: "Syndicated financing",
              text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam..  ",
            },
            {
              title: "Construction loans",
              text: "  Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur adipisicing elit.laudantium ut hic laboriosam.. ",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="col-md-4 col-sm-6 col-12 text-navy p-md-3 p-1"
            >
              <div
                className="p-md-4 p-2 h-100 bg-white card-border"
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

export default Cre;
