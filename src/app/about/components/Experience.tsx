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
            <h6 className="h-letter pt-2">WELCOME</h6>
            <h4 className="exp-font">
              Transforming real estate development with a focus on customer
              excellence.
            </h4>
          </div>
          <div className="col-md-4 d-flex flex-col justify-content-center">
            <p style={{ fontSize: "16px", color: "var(--navy)" }}>
              Envisioning the future by thinking ahead. Welcome to Ispace – a
              company built on the principle of reimagining, transforming, and
              meeting the dynamic needs of modern construction. With our
              extensive experience and expertise in creating iconic life spaces
              across the MMR region, we are committed to delivering lasting
              value to our valued customers. Each landmark we develop reflects
              our dedication to creating spaces that embody positivity,
              functionality, and ample space. At Ispace, we see customer
              expectations as a guide to crafting success stories that leave a
              lasting mark on Mumbai’s skyline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
