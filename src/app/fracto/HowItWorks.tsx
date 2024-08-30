import React from "react";
import {
  FaSearch,
  FaList,
  FaCogs,
  FaShoppingCart,
  FaSmile,
} from "react-icons/fa";
import Heading from "@/components/heading/Heading";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discover",
    description:
      "Begin your journey by exploring our services. Understand how we can meet your needs by browsing through our offerings.",
  },
  {
    icon: <FaList />,
    title: "Choose",
    description:
      "Select the service that best fits your needs. We offer a variety of options tailored to different requirements and fatures.",
  },
  {
    icon: <FaCogs />,
    title: "Customize",
    description:
      "Tailor the service to suit your preferences. Personalize features to make it exactly what you need and importants.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Order",
    description:
      "Complete your order with our secure and easy-to-use system. Your satisfaction is our priority.",
  },
  {
    icon: <FaSmile />,
    title: "Enjoy",
    description:
      "Sit back and relax. Your product or service is on its way. Enjoy knowing you made the best choice!",
  },
  {
    icon: <FaCogs />,
    title: "Customize",
    description:
      "Tailor the service to suit your preferences. Personalize features to make it exactly what you need.",
  },
];

function HowItWorks() {
  return (
    <div className="how-it-works position-re">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <Heading headTitle="How It Works" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {steps.map((step, index) => (
                <div className="col-sm-6 col-md-4 col-12 mb-4" key={index}>
                  <div
                    className="card text-center box-bg card-hover"
                    style={{ borderColor: "var(--golden)" }}
                  >
                    <div className="card-body">
                      <div
                        className="icon-container text-golden"
                        style={{ fontSize: "2rem" }}
                      >
                        {step.icon}
                      </div>
                      <h4 className="text-grey mt-3">{step.title}</h4>
                      <p className="text-muted mt-2">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
