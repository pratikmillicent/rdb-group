import React from "react";
import "./howtowork2.css";
import Heading from "@/components/heading/Heading";

const mediaItems = [
  {
    id: 1,
    name: "Transparency",
    description:
      "Every investment is backed by extensive market research and financial analysis, ensuring clarity at every step.",
  },
  {
    id: 2,
    name: "Accessibility",
    description:
      "We break down the barriers to CRE investing, allowing even first-time investors to participate in premium opportunities.",
  },
  {
    id: 3,
    name: "Technology-Driven",
    description:
      "Our platform offers a seamless, user-friendly experience that allows you to manage your investments effortlessly.",
  },
  {
    id: 4,
    name: "End to end management",
    description:
      "We manage the asset from acquisition to exit. Investors enjoy a hands-off investment experience.",
  },
];

const FractoAdvantageMobile = () => {
  return (
    <div className="container">
      <Heading headTitle="Fracto Advantage" />
      <div>
        <div>
          {/* Mapping the first two items */}
          {mediaItems.slice(0, 2).map((item) => (
            <div key={item.id}>
              <div className="flip-card w-100 mb-4">
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex justify-content-center align-items-center">
                    <div className="">
                      <h6 style={{ color: "var(--golden)", fontWeight: 600 }}>
                        {item.name}
                      </h6>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <p
                      style={{
                        color: "white",
                        textAlign: "left",
                        padding: "15px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <p
          className="d-flex justify-content-center text-left px-2 mb-4"
          style={{
            color: "var(--navy)",
            textAlign: "justify",
          }}
        >
          At Fracto, we offer a unique advantage by combining innovation with
          deep market expertise. Here’s why investing with us is different:
        </p>
      </div>

      {/* Next rows with two boxes each */}
      <div>
        {/* Mapping the rest of items */}
        {mediaItems.slice(2).map((item) => (
          <div key={item.id}>
            <div className="flip-card w-100 mb-4">
              <div className="flip-card-inner">
                <div className="flip-card-front d-flex justify-content-center align-items-center">
                  <div className="">
                    <h6 style={{ color: "var(--golden)", fontWeight: 600 }}>
                      {item.name}
                    </h6>
                  </div>
                </div>
                <div className="flip-card-back ">
                  <p
                    style={{
                      color: "white",
                      textAlign: "left",
                      padding: "15px",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FractoAdvantageMobile;
