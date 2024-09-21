import { useEffect, useState } from "react";
import parallaxie from "@/utils/parallax";
import { FaHandshake, FaMedal, FaUsers } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import "./callToAction.css";

function CallToAction({}) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    parallaxie(`.sec-bg-img.parallaxie`, 0.4);
  }, [active]);

  return (
    <section
      className="call-action-img"
      style={{ maxWidth: "100dvw", overflow: "hidden" }}
    >
      <div>
        <div
          className="w-100 sec-bg-img bg-img parallaxie"
          data-background={
            active === 0
              ? "/assets/images/about/Core.jpg"
              : active === 1
              ? "assets/images/about/trust.webp"
              : "assets/images/about/experties.webp"
          }
        >
          {/* <div
            className="call-to-action-content"
            style={{
              bottom: 0,
              position: "absolute",
              width: "100vw",
              background: "var(--white)",
              opacity: 0.8,
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-evenly",
              color: "var(--navy)",
              textAlign: "center",
            }}
          >
            <div
              className="fz-50"
              style={{ padding: "20px 10px", width: "calc(100% - 6px)" }}
              // onMouseEnter={() => setActive(0)}
            >
              <FaMedal
              // className={active == 0 ? "animate-bounce" : ""}
              />
              <h1 className="fz-20">Professionalism</h1>
              <p style={{ color: "inherit" }}>
                We believe that excellence is defined not only by what you do
                but by how you do it.
              </p>
            </div>
            <div style={{ width: "2px", background: "white" }}></div>
            <div
              className="fz-50"
              style={{ padding: "20px 10px", width: "calc(100% - 6px)" }}
              // onMouseEnter={() => setActive(1)}
            >
              <FaHandshake
              // className={active == 1 ? "animate-bounce" : ""}
              />
              <h1 className="fz-20">Trust & Transparency</h1>
              <p style={{ color: "inherit" }}>
                Trust is the most valuable currency for us than money, built on
                the virtue of transparency.
              </p>
            </div>
            <div style={{ width: "2px", background: "white" }}></div>
            <div
              className="fz-50"
              style={{ padding: "20px 10px", width: "calc(100% - 6px)" }}
              // onMouseEnter={() => setActive(2)}
            >
              <FaUsers
              // className={active == 2 ? "animate-bounce" : ""}
              />
              <h1 className="fz-20">Expertise</h1>
              <p style={{ color: "inherit" }}>
                We believe continuous learning and adaptability are the key to
                deliver excellence.
              </p>
            </div>
            <div style={{ width: "2px", background: "white" }}></div>
            <div
              className="fz-50"
              style={{ padding: "20px 10px", width: "calc(100% - 6px)" }}
              // onMouseEnter={() => setActive(2)}
            >
              <FaUsers
              // className={active == 2 ? "animate-bounce" : ""}
              />
              <h1 className="fz-20">Innovation & Impact</h1>
              <p style={{ color: "inherit" }}>
                As a group, we are dedicated to leading with innovation and
                making a positive impact on society and the environment.
              </p>
            </div>
          </div> */}

          {/* <div className="">
            <div className=" h-100 ">
              <div
                className="row text-center"
                style={{
                  color: "var(--golden)",
                }}
              >
                <div
                  className="col-4"
                  style={{
                    fontSize: "45px",
                    fontWeight: 500,
                    lineHeight: "54px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  Our <br /> Core <br /> Values
                </div>
                <div className="col-4 p-0">
                  <div className="border cor-col px-5">
                    <FaMedal className="core-icon" />
                    <h1 className="core-head">Professionalism</h1>
                    <p style={{ color: "inherit" }}>
                      We believe that excellence is defined not only by what you
                      do but by how you do sit.
                    </p>
                  </div>
                  <div className="border cor-col px-5">
                    <FaHandshake className="core-icon " />
                    <h1 className="core-head">Trust & Transparency</h1>
                    <p style={{ color: "inherit" }}>
                      Trust is the most valuable currency for us than money,
                      built on the virtue of transparency.
                    </p>
                  </div>
                </div>
                <div className="col-4 p-0">
                  <div className="border cor-col px-5">
                    <FaUsers className="core-icon" />
                    <h1 className="core-head">Expertise</h1>
                    <p style={{ color: "inherit" }}>
                      We believe continuous learning and adaptability are the
                      key to deliver excellence.
                    </p>
                  </div>
                  <div className="border cor-col px-5">
                    <TbBulb className="core-icon" />
                    <h1 className="core-head">Innovation & Impact</h1>
                    <p style={{ color: "inherit" }}>
                      As a group, we are dedicated to leading with innovation
                      and making a positive impact on society and the
                      environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="">
            <div className="row text-center" style={{ color: "var(--golden)" }}>
              <div className="col-lg-4 col-md-6 col-12 p-0">
                <div className="border cor-col px-5">
                  <FaMedal className="core-icon" />
                  <h1 className="core-head">Professionalism</h1>
                  <p style={{ color: "inherit" }}>
                    We believe that excellence is defined not only by what you
                    do but by how you do sit.
                  </p>
                </div>
                <div className="border cor-col px-5">
                  <FaHandshake className="core-icon" />
                  <h1 className="core-head">Trust & Transparency</h1>
                  <p style={{ color: "inherit" }}>
                    Trust is the most valuable currency for us than money, built
                    on the virtue of transparency.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12 p-0">
                <div className="border cor-col px-5">
                  <FaUsers className="core-icon" />
                  <h1 className="core-head">Expertise</h1>
                  <p style={{ color: "inherit" }}>
                    We believe continuous learning and adaptability are the key
                    to deliver excellence.
                  </p>
                </div>
                <div className="border cor-col px-5">
                  <TbBulb className="core-icon" />
                  <h1 className="core-head">Innovation & Impact</h1>
                  <p style={{ color: "inherit" }}>
                    As a group, we are dedicated to leading with innovation and
                    making a positive impact on society and the environment.
                  </p>
                </div>
              </div>

              <div
                className="core-value-container col-lg-4 col-md-12 bg-dark bg-opacity-50 text-white"
                style={{
                  fontSize: "45px",
                  fontWeight: 500,
                  lineHeight: "54px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  // padding: "50px 0px",
                  maxWidth: "100dvw",
                  overflow: "hidden",
                }}
              >
                Our <br /> Core Values
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
