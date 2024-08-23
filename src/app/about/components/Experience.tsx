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
              <h1 className="experience-font">20</h1>
              <p className="year-exp">years of Experience</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 text-white d-flex flex-col justify-content-center ">
            <h6 className="h-letter">WELCOME</h6>
            <h4 className="exp-font">
              Justica is Your Best Partner for Legal Solutions
            </h4>
          </div>
          <div className="col-md-4 d-flex flex-col justify-content-center">
            <p style={{ fontSize: "16px", color: "var(--navy)" }}>
              We take pride in the depth and breadth of experience that our team
              of lawyers brings to the table. With years of dedicated practice
              in various areas of law, our attorneys have honed their skills,
              developed specialized knowledge, and earned a reputation for
              excellence in their respective fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
