// import Heading from "@/components/heading/Heading";
// import React from "react";

// const OurMission = () => {
//   return (
//     <div className="container">
// <Heading headTitle="Our Mission" />

//     </div>
//   );
// };

// export default OurMission;

import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

function About() {
  return (
    <>
      <Heading headTitle="Our Mission" />
      <section className="about">
        <div className="container">
          <div className="row md-marg">
            <div className="col-lg-6 valign">
              <div className="cont md-mb50">
                <h4 className="text wow fadeIn" data-wow-delay=".5s">
                  We connect FinTech with film, empowering everyday investors to
                  participate in and support cinematic projects. Our goal is to
                  democratize film financing and uplift producers through
                  innovation and collaboration.
                </h4>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img">
                <Image
                  height={800}
                  width={800}
                  style={{ height: "360px", width: "360px" }}
                  src="https://ohpag.org/wp-content/uploads/2019/11/our-mission-300x192.png"
                  alt=""
                />
                <div className="exp bg-golden">
                  <Image
                    src={"/assets/images/movie/film-clap.gif"}
                    alt="film clap"
                    width={800}
                    height={500}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
