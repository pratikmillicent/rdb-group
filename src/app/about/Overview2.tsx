//@ts-nocheck

import Heading from "@/components/heading/Heading";
import React, { useEffect } from "react";

function Intro() {
  // function openAccordion(event: any) {
  //   console.log("🚀 ~ openAccordion ~ event:", event);
  //   document.querySelectorAll(".accordion-info").forEach((element) => {
  //     let htmlElement = element as HTMLElement;
  //     element.classList.remove("active");

  //     // Ensure that the element exists before assigning a value
  //     if (htmlElement) {
  //       htmlElement.style.maxHeight = "0";
  //       if (htmlElement.parentElement) {
  //         htmlElement.parentElement.classList.remove("active");
  //       }
  //     }
  //   });

  //   const currentTarget = event.currentTarget as HTMLElement;

  //   // Ensure that the parent element and next sibling exist before assigning values
  //   if (currentTarget.parentElement) {
  //     currentTarget.parentElement.classList.add("active");
  //   }

  //   const nextElementSibling = currentTarget.nextElementSibling as HTMLElement;

  //   if (nextElementSibling) {
  //     nextElementSibling.style.maxHeight = "300px";
  //     nextElementSibling.classList.add("active");
  //   }
  // }
  useEffect(() => {
    // Open the first accordion item by default
    const firstItem = document.querySelector(
      ".accordion .item:first-child .accordion-info"
    );
    if (firstItem) {
      firstItem.style.maxHeight = "300px";
      firstItem.classList.add("active");
      firstItem.parentElement.classList.add("active");
    }
  }, []);

  const openAccordion = (event) => {
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
  };

  return (
    <section className="intro-corp section-padding">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-lg-5 valign md-mb50">
            <div className="imgs mb-80">
              <div className="img1 wow fadeInUp">
                <img
                  src="/assets/images2/vision.jpg"
                  alt=""
                  className="radius-10"
                />
              </div>
              <div className="img2 wow fadeInLeft">
                <img
                  src="/assets/images2/mission.jfif"
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
                  <span className="sideup-text py-2">
                    {/* <Heading headTitle="Overview" fontSize="fs-1" /> */}
                    <div className="fz-50 fw-600"> Overview</div>
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
                      To deliver professionalism and add a touch of Indian
                      warmth to the way property is managed across India and
                      overseas.
                    </p>
                  </div>
                </div>
                <div className="item wow fadeInUp" data-wow-delay=".3s">
                  <div className="title" onClick={openAccordion}>
                    <h6 className="fz-18">Our Vision</h6>
                    <span className="ico"></span>
                  </div>
                  <div className="accordion-info">
                    <p className="fz-14">
                      Making Real Estate simple and effective through the use of
                      defined processes and technology.
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
