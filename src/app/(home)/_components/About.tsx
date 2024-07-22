// import React from "react";
// import Link from "next/link";

// function About() {
//   return (
//     <section
//       className="intro-corp section-padding sub-bg"
//       style={{ paddingBottom: "60px" }}
//     >
//       <div className="container">
//         <div className="row md-marg">
//           <div className="col-lg-6 md-mb50 d-none d-lg-block">
//             <div className="imgs mb-80">
//               <div className="img1 main-color3">
//                 <img src="/assets/images/home/about1.jpg" alt="" />
//               </div>
//               <div className="img2">
//                 <img src="/assets/images/home/about3.jpg" alt="" />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6 valign">
//             <div className="cont">
//               <h6 className="sub-title mb-15">About Company</h6>
//               <h3 className="mb-15" style={{ color: "var(--navy)" }}>
//                 BUILDING ON OUR EXPERIENCE TO REACH FOR MORE
//               </h3>
//               <p>
//                 To deliver professionalism and add a touch of Indian warmth to
//                 the way property is managed across India and overseas.
//               </p>
//               <div className="mt-50 pt-30 bord-thin-top">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <ul className="rest list-arrow">
//                       <li className="mt-20">
//                         <span className="icon">
//                           <svg
//                             width="100%"
//                             height="100%"
//                             viewBox="0 0 9 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
//                               fill={"#000"}
//                             ></path>
//                           </svg>
//                         </span>
//                         <span>Marketing Strategy</span>
//                       </li>
//                       <li className="mt-20">
//                         <span className="icon">
//                           <svg
//                             width="100%"
//                             height="100%"
//                             viewBox="0 0 9 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
//                               fill={"#000"}
//                             ></path>
//                           </svg>
//                         </span>
//                         <span>Rebranding</span>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <ul className="rest list-arrow">
//                       <li className="mt-20">
//                         <span className="icon">
//                           <svg
//                             width="100%"
//                             height="100%"
//                             viewBox="0 0 9 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
//                               fill={"#000"}
//                             ></path>
//                           </svg>
//                         </span>
//                         <span>Unique Production</span>
//                       </li>
//                       <li className="mt-20">
//                         <span className="icon">
//                           <svg
//                             width="100%"
//                             height="100%"
//                             viewBox="0 0 9 8"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               clipRule="evenodd"
//                               d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
//                               fill={"#000"}
//                             ></path>
//                           </svg>
//                         </span>
//                         <span>Corporate Identity</span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <Link
//                 href="/dark/page-about"
//                 className="butn butn-md butn-bord radius-30 mt-50"
//               >
//                 <span>Explore More</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

// @ts-nocheck
"use client"
import React from 'react';
import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';

function About() {
  const parallax = useParallax({
    speed: 10,
    translateY: [40, -40]
  });

  return (
    <section className="intro-serv section-padding">
      <div className="container">
        <div className="row md-marg justify-content-center">
          <div className="col-lg-5">
            <div className="cont md-mb50">
              <div className="mb-50">
                <h6 className="sub-title mb-15">What we do ?</h6>
                <h3>We want to bring business & the digital world together.</h3>
              </div>
              <div className="item d-flex align-items-center pb-20 mb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    <img src={`/assets/images2/icon1.png`} alt="icon1" />
                  </div>
                </div>
                <div>
                  <h6>Marketing Strategy</h6>
                  <p>Praesent faucibus nisl sit amet nulla <br /> pretium a sed purus.</p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="item d-flex align-items-center pb-20 mb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    <img src={`/assets/images2/icon2.png`} alt="icon2" />
                  </div>
                </div>
                <div>
                  <h6>Product Design</h6>
                  <p>Praesent faucibus nisl sit amet nulla <br /> pretium a sed purus.</p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="item d-flex align-items-center pb-20 bord-thin-bottom">
                <div>
                  <div className="icon-img-50 mr-60">
                    <img src={`/assets/images2/icon3.png`} alt="icon3" />
                  </div>
                </div>
                <div>
                  <h6>E-Commerce</h6>
                  <p>Praesent faucibus nisl sit amet nulla <br /> pretium a sed purus.</p>
                  <Link href="/dark/page-services" className="arrow mt-20">
                    <span className="fz-13 mr-10">Read More</span>
                    <span className="circle">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                          fill="currentColor"></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div ref={parallax.ref}>
              <img src={`/assets/images2/about-img.jpg`} alt="person image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About