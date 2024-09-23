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
    <>
      <div className="container">
        <Heading headTitle="How It Works" />
        
        {/* First section with heading and description */}
        <div className="row mb-4">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mb-4">
            {/* <h3 className="d-flex justify-content-center">Works</h3> */}
            <p className="text-center px-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae voluptatibus minima sed nobis non at!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo beatae voluptatibus minima sed nobis non at!
            </p>
          </div>
          
          <div className="col-12 col-md-6 d-flex gap-2">
            {/* Mapping the first two items */}
            {mediaItems.slice(0, 2).map((item) => (
              <div key={item.id} className="mb-3">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front d-flex justify-content-center align-items-center">
                      <h6>{item.name}</h6>
                    </div>
                    <div className="flip-card-back">
                      <p style={{ color: "white", textAlign: "left", padding: "15px" }}>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining rows with responsive boxes */}
        <div className="col-12 col-md-6 d-flex gap-2 flex-wrap flex-md-nowrap">
          {mediaItems.slice(2).map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front d-flex justify-content-center align-items-center">
                    <h6>{item.name}</h6>
                  </div>
                  <div className="flip-card-back">
                    <p style={{ color: "white", textAlign: "left", padding: "15px" }}>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowItWorks2;
