import React from "react";
function CoreValue2() {
  return (
    <div className="clients section-padding pb-60 position-re">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-6 text-center">
            <div className="text">
              <h3>We create experiences and turn ideas into reality.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="row md-marg">
              {coreValueImage.map((item: any) => (
                <div
                  className="col-md-4 col-6 brand box-bg"
                  key={Math.floor(Math.random() * 10000)}
                >
                  <div className="item mb-30 wow fadeIn" data-wow-delay=".6s">
                    <div className="img">
                      {/* <img src={item.name} alt="" /> */}
                      <i className={` ${item.icon} fs-1 main-color4`}></i>
                      <h6>{item.name}</h6>

                      {/* {item.name} */}
                    </div>
                    {/* <h5>RD Brother</h5> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-pattern patrn1 bg-img opacity-5"
        data-background={`/assets/imgs/patterns/pattern.svg`}
      ></div>
    </div>
  );
}

export default CoreValue2;

const coreValueImage = [
  {
    icon: "fas fa-lightbulb",
    name: "INNOVATION",
    description:
      "We strive to think outside the box and bring new ideas to life.",
    color: "#FFD700",
  },
  {
    icon: "fas fa-puzzle-piece",
    name: "COMMITMENT",
    description: "Our dedication to our work and to our clients is unwavering.",
    color: "#FF5733",
  },
  {
    icon: "fas fa-handshake",
    name: "INTEGRITY",
    description: "We conduct our business with honesty and transparency.",
    color: "#28A745",
  },
  {
    icon: "fas fa-medal",
    name: "QUALITY",
    description: "We ensure the highest standards in everything we do.",
    color: "#C0C0C0",
  },

  {
    icon: "fas fa-users",
    name: "TEAMWORK",
    description: "Collaborating effectively to achieve common goals.",
    color: "#800080",
  },
  {
    icon: "fas fa-bullseye",
    name: "FOCUS",
    description: "Concentrating on delivering the best outcomes.",
    color: "#FF4500",
  },
  {
    icon: "fas fa-balance-scale",
    name: "FAIRNESS",
    description: "Treating everyone with respect and equality.",
    color: "#8B0000",
  },
];
