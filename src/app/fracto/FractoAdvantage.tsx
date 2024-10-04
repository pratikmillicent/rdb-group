import React from "react";
import "./howtowork2.css";
import Heading from "@/components/heading/Heading";

// const mediaItems = [
//   {
//     id: 1,
//     name: "Dis"cover"",
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

      <div className="row">
        <div
          className="col-md-3 wow fadeInRight animated"
          data-wow-delay=".2s"
          style={{
            backgroundSize: "cover",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInRight",
            height: "280px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundSize: "cover", height: "100%" }}
          >
            <div className="cover" style={{ backgroundSize: "cover" }}>
              <div className="c-inner" style={{ backgroundSize: "cover" }}>
                <h3 style={{ lineHeight: "20px" }}>
                  <i
                    style={{ fontSize: "20px" }}
                    className="fa-solid fa-magnifying-glass"
                  ></i>
                  <span style={{ marginLeft: ".5em" }}>Transparency</span>
                </h3>
                <p>
                  Every investment is backed by extensive market research and
                  financial analysis, ensuring clarity at every step.
                </p>
                <div
                  className="spacer20"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <img
              src="assets/images/fracto/transparency.png"
              alt=""
              className="img-responsive"
              height="100%"
            />
          </div>
        </div>
        <div
          className="col-md-3 wow fadeInRight animated"
          data-wow-delay=".2s"
          style={{
            backgroundSize: "cover",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInRight",
            height: "280px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundSize: "cover", height: "100%" }}
          >
            <div className="cover" style={{ backgroundSize: "cover" }}>
              <div className="c-inner" style={{ backgroundSize: "cover" }}>
                <h3>
                  <i
                    style={{ fontSize: "20px" }}
                    className="fa-solid fa-circle-info"
                  ></i>
                  <span style={{ marginLeft: ".5em" }}>Accessibility</span>
                </h3>
                <p>
                  We break down the barriers to CRE investing, allowing even
                  first-time investors to participate in premium opportunities.
                </p>
                <div
                  className="spacer20"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <img
              src="assets/images/fracto/accessibility.jpg"
              alt=""
              className="img-responsive"
              height="100%"
            />
          </div>
        </div>
        <div
          className="col-md-3 wow fadeInRight animated"
          data-wow-delay=".2s"
          style={{
            backgroundSize: "cover",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInRight",
            height: "280px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundSize: "cover", height: "100%" }}
          >
            <div className="cover" style={{ backgroundSize: "cover" }}>
              <div className="c-inner" style={{ backgroundSize: "cover" }}>
                <h3>
                  <i
                    style={{ fontSize: "20px" }}
                    className="fa-solid fa-microchip"
                  ></i>
                  <span style={{ marginLeft: ".5em" }}>Technology Driven</span>
                </h3>
                <p>
                  Our platform offers a seamless, user-friendly experience that
                  allows you to manage your investments effortlessly.
                </p>
                <div
                  className="spacer20"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <img
              src="assets/images/fracto/tech-driven.jpeg"
              alt=""
              className="img-responsive"
              height="100%"
            />
          </div>
        </div>
        <div
          className="col-md-3 wow fadeInRight animated"
          data-wow-delay=".2s"
          style={{
            backgroundSize: "cover",
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInRight",
            height: "280px",
          }}
        >
          <div
            className="mask"
            style={{ backgroundSize: "cover", height: "100%" }}
          >
            <div className="cover" style={{ backgroundSize: "cover" }}>
              <div className="c-inner" style={{ backgroundSize: "cover" }}>
                <h3>
                  <i
                    style={{ fontSize: "20px" }}
                    className="fa-solid fa-circle-nodes"
                  ></i>
                  <span style={{ marginLeft: ".5em" }}>End2End Management</span>
                </h3>
                <p>
                  We manage the asset from acquisition to exit. Investors enjoy
                  a hands-off investment experience.
                </p>
                <div
                  className="spacer20"
                  style={{ backgroundSize: "cover" }}
                ></div>
              </div>
            </div>
            <img
              src="assets/images/fracto/transparency2.jpg"
              alt=""
              className="img-responsive"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FractoAdvantage;
