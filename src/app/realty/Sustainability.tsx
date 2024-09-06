import Heading from "@/components/heading/Heading";
import React, { useEffect } from "react";
import "./sustainability.css";
import parallaxie from "@/common/parallaxie";

const Sustainability = () => {
  useEffect(() => {
    parallaxie(".back-image.parallaxie", 0.35);
  }, []);
  return (
    <div className="bussines_banner" style={{ marginTop: 0 }}>
      <Heading headTitle="Sustainability" />

      {/* <div className="overlay_dlf"></div> */}
      <div
        className="banner_text sust_hght Sustainability_banner back-image bg-img parallaxie"
        style={{
          backgroundImage: `url(/assets/images/realty/Sustainability-Banner.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className="banner_content inherits pt-4 mt-4">
            <div>
              <span className="fz-20 text-golden">
                <span className="line"></span>Building for the future
              </span>
              <h4 className="text-white" style={{ fontSize: "45px" }}>
                Sustainability
              </h4>
              <p
                className="text-white mb-3 sustainability-para"
                style={{
                  fontSize: "15px",
                  letterSpacing: ".8px",
                  color: "#fff",
                  marginBottom: "0",
                  marginTop: "24px",
                  maxWidth: "890px",
                  textAlign: "justify",
                }}
              >
                At DLF, we embrace our unique position as industry pioneers to
                re-write the Indian real estate narrative. We take pride in
                enacting, exemplifying, and exceeding the highest environmental
                standards which address the most pressing challenges faced by
                our nation.{" "}
              </p>
              <p
                className="text-white sustainability-para"
                style={{
                  fontSize: "15px",
                  letterSpacing: ".8px",
                  color: "#fff",
                  marginBottom: "0",
                  marginTop: "24px",
                  maxWidth: "890px",
                  textAlign: "justify",
                }}
              >
                DLF is invested in driving sustainability across every vertical
                - from the pioneering waste water treatment systems in the DLF
                Golf and Country Club, to the responsible recycling of our
                construction materials. We endeavour to educate and empower all
                our stakeholders with respect to shared environmental
                obligations. We operate with the intention of placing Indian
                industry at the global forefront of green innovation.
              </p>

              {/* <div className="extra_sustain display">
                <h5>Our practices</h5>

                <p className="text-white fz-20 fw-400">
                  As the only company globally to have won 16 ‘Sword of Honor’
                  awards from the British Safety Council, DLF is deeply
                  committed to the health and prosperity of our customers,
                  partners, employees, and shareholders. We are proud to have
                  won LEED Platinum Certification from the US Green Building
                  Council for 33.18 mn sq m area, which is close to 80 percent
                  of our rental portfolio and we are determined to continuously
                  innovate to create safer workplaces, smarter cities, and
                  sustainable communities across India. Likewise, a number of
                  our residential communities have recently been awarded LEED
                  Gold certification.{" "}
                </p>
              </div> */}

              <a
                href="pdf/ESG-Report-2021.pdf"
                target="_blank"
                className="esg-btn hvr-sweep-to-right my-3 rounded"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
