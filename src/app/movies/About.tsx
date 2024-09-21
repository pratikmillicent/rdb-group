import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "70px" }}>
        <Heading headTitle="About" />

        <div
          className="bg-opacity-50"
          style={{
            // backgroundImage: `url(/assets/images/movie/about-bg-4.jpeg)`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
            width: "100%",
            // minHeight: "55vh", // 01
            // minHeight: "80vh", // Ensures it takes full height
            // filter: "hue-rotate(45deg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 mb-4">
                <div className="mt-3">
                  <p
                    className="director-p"
                    style={{
                      padding: "72px 20px 72px 20px",
                      background: "var(--background) !important",
                      position: "relative",
                      top: "-89px",
                      zIndex: "-2",
                      borderRadius: "50px 0px 50px 0px",
                      height: "calc(100% - 300px)",
                      border: "3px solid var(--golden)",
                      borderTop: "none",
                      borderRight: "none",
                      fontSize: 'large'
                    }}
                  >
                    <strong style={{textAlign: 'center',fontStyle: 'italic'}}>
                      {" "}
                      Vision
                      <br />
                    </strong>{" "}
                    To promote meaningful filmmaking, delivering captivating
                    stories that connect with audiences on a cultural and
                    commercial level, while fostering innovation in film
                    production.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 mb-4">
                <div className="mt-3">
                  <p
                    className="director-p"
                    style={{
                      padding: "72px 20px 45px 20px",
                      background: "var(--background) !important",
                      position: "relative",
                      top: "-89px",
                      zIndex: "-2",
                      borderRadius: "0px 50px 0px 50px",
                      height: "calc(100% - 300px)",
                      border: "3px solid var(--golden)",
                      borderTop: "none",
                      borderLeft: "none",
                      fontSize:'large'
                    }}
                  >
                    <strong style={{fontStyle: 'italic'}}>
                      {" "}
                      Mission
                      <br />
                    </strong>{" "}
                    To create impactful cinematic experiences that blend
                    creativity with business acumen, ensuring our films
                    captivate audiences worldwide and contribute to the growth
                    of the entertainment industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
