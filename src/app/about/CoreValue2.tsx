import React from "react";
function CoreValue2() {
  return (
    <div className="clients section-padding pb-100 position-re">
      <div className="container">
        <div className="row justify-content-center mb-80">
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

                      <h6>{item.name}</h6>
                      {/* {item.name} */}
                    </div>
                    <i className={` ${item.icon} fs-1 main-color4`}></i>
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
  { icon: "fas fa-lightbulb", name: "INNOVATION" },
  { icon: "fas fa-puzzle-piece", name: "COMMITMENT" },
  { icon: "fas fa-handshake", name: "INTEGRITY" },
  { icon: "fas fa-medal", name: "QUALITY" },
];
