import React from "react";
import "./howtowork2.css";
import Heading from "@/components/heading/Heading";

const mediaItems = [
  {
    id: 1,
    name: "Discover",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
  {
    id: 2,
    name: "Choose",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
  {
    id: 3,
    name: "Customize",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
  {
    id: 4,
    name: "Order",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
  {
    id: 5,
    name: "Enjoy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
  {
    id: 6,
    name: "Customize",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  },
];

const HowItWorks2 = () => {
  return (
    <div className="container">
      <Heading headTitle="How It Works" />
      <div className="row mb-4">
        {/* First row with col-6 */}

        <div className="col-6 d-flex justify-content-center align-items-center flex-col">
          <h3
            className="d-flex justify-content-center"
            style={{ color: "var(--navy)" }}
          >
            {/* Works */}
          </h3>
          <p
            className="d-flex justify-content-center text-center px-5"
            style={{
              color: "var(--navy)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            beatae voluptatibus minima sed nobis non at! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Explicabo beatae voluptatibus
            minima sed nobis non at!
          </p>
        </div>
        <div className="col-6 d-flex">
          {/* Mapping the first two items */}
          {mediaItems.slice(0, 2).map(item => (
            <div
              key={item.id}
              className="col-6 "
              style={{
                marginRight: "15px",
              }}
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex justify-content-center align-items-center">
                    <div className="">
                      <h6 style={{ color: "var(--golden)" }}>{item.name}d</h6>
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

      {/* Next rows with two boxes each */}
      <div className="row">
        {/* Mapping the rest of items */}
        {mediaItems.slice(2).map(item => (
          <div key={item.id} className="col-3 mb-4">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front d-flex justify-content-center align-items-center">
                  <div className="">
                    <h6 style={{ color: "var(--golden)" }}>{item.name}d</h6>
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

export default HowItWorks2;
