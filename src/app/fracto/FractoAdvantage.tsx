import React from "react";
import "./howtowork2.css";
import Heading from "@/components/heading/Heading";

// const mediaItems = [
//   {
//     id: 1,
//     name: "Discover",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
//   {
//     id: 2,
//     name: "Choose",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
//   {
//     id: 3,
//     name: "Customize",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
//   {
//     id: 4,
//     name: "Order",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
//   {
//     id: 5,
//     name: "Enjoy",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
//   {
//     id: 6,
//     name: "Customize",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
//   },
// ];

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
  // {
  //   id: 5,
  //   name: "Enjoy",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  // },
  // {
  //   id: 6,
  //   name: "Customize",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptatibus officiis corporis aut ipsa dolorem cupiditate magnam ea minima. Culpa.",
  // },
];

const FractoAdvantage = () => {
  return (
    <div className="container">
      <Heading headTitle="Fracto Advantage" />
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
            className="d-flex justify-content-center text-left px-5"
            style={{
              color: "var(--navy)",
            }}
          >
            At Fracto, we offer a unique advantage by combining innovation with
            deep market expertise. Here’s why investing with us is different:
          </p>
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

export default FractoAdvantage;
