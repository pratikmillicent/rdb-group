"use client";
import Carousel from "@/components/common/Carousel";
import Link from "next/link";
import React from "react";

interface BusinessSlide {
  image: string;
  category: string;
  title: string;
}
const data: BusinessSlide[] = [
  {
    image: "/assets/images/home/business-update2.webp",
    category: "cat",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    category: "cat",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
  },
  {
    image: "/assets/images/home/business-update2.webp",
    category: "cat",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    category: "cat",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
  },
];

function BusinessUpdate() {
  return (
    <div className="container section-padding">
      <div className="sec-lg-head">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-re">
              <h6 className="dot-titl colorbg-3 mb-10">Updates</h6>
              <h2 className="fz-60 fw-700">Business Update</h2>
            </div>
          </div>
          {/* <div className="col-lg-4 d-flex align-items-center">
            <div className="text">
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed
                quia.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <Carousel
        data={data}
        component={(item: BusinessSlide) => (
          // <div className="item">
          //   <div className="img">
          //     <img src={item.image} alt="" />
          //     <div className="cont">
          //       <h6 className="fz-18">{item.title}</h6>
          //     </div>
          //     <Link href="/" className="plink"></Link>
          //   </div>
          // </div>
          <div>
            <img src={item.image} />
            <div
              style={{
                background: "#fff",
                padding: "16px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default BusinessUpdate;
