import React, { useState } from "react";
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
        <div className="w-100 mb-5 pb-5">
          <div className="d-flex justify-content-center  align-items-start">
            <h1
              className="pb-5"
              style={{
                flex: 1,
                fontSize: "56px",
                fontWeight: 300,
                lineHeight: "67px",

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
                {" "}
                Real Estate
              </span>
            </h1>
            <h6
              style={{
                paddingLeft: "5%",
                flex: 1,
                fontSize: "18px",
                fontWeight: 400,
                paddingRight: "5%",
              }}
            >
              Rd brothers provides a wide selection of financing options for
              commercial real estate businesses of all sizes
            </h6>
          </div>
        </div>
        <div className="col-md-5">
          <img
            src="https://www.jpmorgan.com/content/dam/jpmorgan/images/cb/commercial-real-estate/cb-cre-banner-commercial-property-financing-solutions-490x870-vertical.jpg"
            alt="Commercial Property Financing Solutions"
            className="img-fluid"
          />
        </div>
        {/* <div
          className="position-absolute"
          style={{
            left: "50%",
            top: "5%",
            fontSize: "56px",
            fontWeight: 300,
            lineHeight: "67px",
          }}
        >
          Commercial <br /> Real Estate
        </div> */}
        <div
          className="col-md-8 d-flex flex-wrap position-absolute "
          style={{
            right: "5%",
            top: "20%",
          }}
        >
          <div className="col-md-4 text-navy p-3 bg-transparent">
            <div
              className=" p-4 h-100 bg-white"
              style={{
                borderBottom: "5px solid var(--golden)",
              }}
            >
              <h5>Term loans</h5>
              <p>
                Experience a straightforward process and exceptional customer
                service when financing multifamily and other commercial
              </p>
            </div>
          </div>
          <div className="col-md-4  text-navy p-3 bg-transparent">
            <div
              className=" p-4 h-100 bg-white"
              style={{
                borderBottom: "5px solid var(--golden)",
              }}
            >
              <h5>Subscription lending</h5>
              <p>
                JPMorgan Chase commercial real estate and subscription finance
                specialists work side-by-side with our clients to provide credit
              </p>
            </div>
          </div>
          <div className="col-md-4  text-navy p-3 bg-transparent">
            <div
              className=" p-4 h-100 bg-white"
              style={{
                borderBottom: "5px solid var(--golden)",
              }}
            >
              <h5>Refinancing</h5>
              <p>
                Whether it’s industrial, mixed-use, multifamily, office, or
                retail property, we offer refinancing options through fixed- and
              </p>
            </div>
          </div>
          <div className="col-md-4  text-navy p-3 bg-transparent">
            <div
              className=" p-4 h-100 bg-white"
              style={{
                borderBottom: "5px solid var(--golden)",
              }}
            >
              <h5>Syndicated financing</h5>
              <p>
                Our team has extensive knowledge and experience providing
                syndicated loans for commercial real estate, including
              </p>
            </div>
          </div>
          <div className="col-md-4  text-navy p-3 bg-transparent">
            <div
              className=" p-4 h-100 bg-white"
              style={{
                borderBottom: "5px solid var(--golden)",
              }}
            >
              <h5>Construction loans</h5>
              <p>
                We have short-term construction loans, construction-to-permanent
                loans, and other commercial property financing available to fit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cre;
