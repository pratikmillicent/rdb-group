"use client";
import loadBackgroudImages from "@/utils/loadBackground";
import React, { useEffect } from "react";

const Director2 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div>
      <section className="pg-about pb-60 pt-60 sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="bg-img radius-10 md-mb50"
                // data-background="/assets/images2/Dhaval.jpg"
                data-background="/assets/images2/person/overview.jpg"
                style={{
                  height: "700px",
                }}
              ></div>
            </div>
            <div className="col-lg-6">
              <div
                className="bg-img radius-10"
                // data-background="/assets/images2/Raj.jpg"
                data-background="/assets/images2/person/overview1.jpg"
                style={{
                  height: "700px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Director2;
