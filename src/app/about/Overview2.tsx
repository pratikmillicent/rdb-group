import React from "react";

function Intro() {
  function openAccordion(event: any) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      let htmlElement = element as HTMLElement;
      element.classList.remove("active");

      // Ensure that the element exists before assigning a value
      if (htmlElement) {
        htmlElement.style.maxHeight = "0";
        if (htmlElement.parentElement) {
          htmlElement.parentElement.classList.remove("active");
        }
      }
    });

    const currentTarget = event.currentTarget as HTMLElement;

    // Ensure that the parent element and next sibling exist before assigning values
    if (currentTarget.parentElement) {
      currentTarget.parentElement.classList.add("active");
    }

    const nextElementSibling = currentTarget.nextElementSibling as HTMLElement;

    if (nextElementSibling) {
      nextElementSibling.style.maxHeight = "300px";
      nextElementSibling.classList.add("active");
    }
  }

  return (
    <section className="intro-corp section-padding pt-0">
      <div className="container">
        <div className="row justify-content-around">
          {/* <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img
                  src="/assets/images2/person/overview.jpg"
                  alt=""
                  className="radius-10"
                />
              </div>
              <div className="img2 wow fadeInLeft">
                <img
                  src="/assets/images2/person/overview1.jpg"
                  alt=""
                  className="radius-10"
                />
              </div>
            </div>
          </div> */}
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img
                  src="/assets/images2/person/overview.jpg"
                  alt=""
                  className="radius-10"
                />
              </div>
              <div className="img2 wow fadeInLeft">
                <img
                  src="/assets/images2/person/overview1.jpg"
                  alt=""
                  className="radius-10"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="cont">
              <div className="text">
                <h2 className="d-slideup wow">
                  <span className="sideup-text">
                    <span className="up-text">Overview</span>
                  </span>
                </h2>
              </div>
              <div className="accordion bord mt-40">
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Our Mission</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      To embrance our roots while propelling forward, delevering
                      value through ethical sustainable and pioneering
                      solutions, and ensuring Aspect Global Ventures remains a
                      symbol of trust quality , and progress for generations
                    </p>
                  </div>
                </div>
                <div className="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Our Vision</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      To be global powerhouse where tradition and innovation
                      unite, building a sustainble, impactful, and visionary
                      future for all stakeholder
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
