import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center text-md-start py-5">
          <div className="col-md-4">
            <div
              className=" p-4 d-flex flex-col align-items-center justify-content-center"
              style={{ border: "2px solid #eaa636" }}
            >
              <h1 className="experience-font">20+</h1>
              <p className="year-exp">years of Experience</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-white d-flex flex-col justify-content-center ">
            <h6 className="h-letter pt-2">About Us</h6>
            <h4 className="exp-font">
              Transforming real estate development with a focus on customer
              excellence.
            </h4>
          </div>
          <div className="col-md-4 d-flex flex-col justify-content-center">
            <p
              style={{
                fontSize: "16px",
                color: "var(--navy)",
                textAlign: "justify",
              }}
            >
              In the real estate domain, we are renowned for our exceptional
              expertise and services, especially in luxury property development
              and strategic land acquisition. With a commitment to quality and
              innovation, we consistently strive to exceed our clients'
              expectations, delivering projects that epitomize sophistication
              and functionality. Our focus extends beyond mere construction; we
              create spaces that offer enduring value, blending aesthetic appeal
              with practical design. Each project is thoughtfully crafted to
              reflect our dedication to excellence, ensuring long-term
              satisfaction and a seamless blend of luxury living with modern
              convenience for discerning clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
