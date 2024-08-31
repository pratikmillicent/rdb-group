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
              We are a global leader with a distinct vision to shape a
              sustainable future across the industries we serve. Our aim is to
              add value to your life through innovation, commitment to
              excellence and integrity. With 20 years of experience and a strong
              global presence, our diverse portfolio encompasses Properties,
              Realty, Proptech, and Movie Production businesses as part of RD
              Group. We're more than just a large company; we're a dynamic force
              for change, creativity, and meaningful impact where it matters
              most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
