"use client";
import Intro from "./Overview2";
import Team from "./Team";
import CoreValue2 from "./CoreValue2";
import CallToAction from "./CallToAction";
import Director2 from "./Director2";
import TeamSection from "./TeamSection";
import NewSideImage from "./NewSideImage";

function About() {
  return (
    <>
      <main className="mw-100 ">
        <div>
          <video
            className="mw-100 w-100"
            style={{ height: "calc(100dvh - 80px)", objectFit: "initial" }}
            src="/assets/video/AboutHero.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            // poster="https://www.aspect.global/video/aspect_video.webp"
          ></video>
        </div>

        
          {/* <Intro /> */}
          <NewSideImage />
        

        <Director2 />
        <Team />
        <TeamSection />
        <CoreValue2 />
        <CallToAction />
      </main>
    </>
  );
}

export default About;

const director = [
  {
    id: 1,
    name: "Arjun Mehta",
    title: "Managing Director - Aspect Hospitality",
    image: "/assets/images2/person/person2nd.jfif",
    desc: "ARJUN METHA has 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 2,
    name: "Tejas Thakkar",
    title: "Managing Director - Aspect Bullion",
    image: "/assets/images2/person/person3.jfif",
    desc: "TEJAS THAKKAR HAS 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 3,
    name: "Ravi Shah",
    title: "Managing Director - Ecomix Concrete",
    image: "/assets/images2/person/person4.jfif",
    desc: "RAVI SHAH HAS 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
];

const businessHead = [
  {
    id: 1,
    name: "Anil Kumar",
    title: " Director & President Finance",
    image: "/assets/images2/person/person5.jfif",
    desc: "Anil Kumar has 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 2,
    name: "Harsh Yadav",
    title: "Director & President Liasoning",
    image: "/assets/images2/person/person6.jfif",
    desc: "HARSH YADAV HAS 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 3,
    name: "Sunil Patel",
    title: "Managing Director - President Operations",
    image: "/assets/images2/person/person1.jfif",
    desc: "SUNIL PATEL HAS 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
];

{
  /* <main className="mw-100">
      <div>
        <video
          className="mw-100"
          src="https://www.aspect.global/video/aspect_global_apr24.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="https://www.aspect.global/video/aspect_video.webp"
        ></video>
        <Overview />

        <div className="container section-padding">
          {/* <h4 className="main-color3 d-flex align-items-center justify-content-start">
            GROUP EXECUTIVE DIRECTORS/HEADS
          </h4> */
}
// <Heading
//   headTitle="GROUP EXECUTIVE DIRECTORS/HEADS"
//   fontSize="fs-1"
//   isSpace
// />

// <Director Data={director} />
// </div>
// <div className="container section-padding">
//   {/* <h4 className="main-color3 d-flex align-items-center justify-content-start p-2">
//     - - - BUSSINESS HEADS
//   </h4> */}
//   <Heading headTitle="BUSSINESS HEADS" fontSize="fs-1" isSpace />

//   <Director Data={businessHead} />
// </div>
// <div>
//   {" "}
//   <div className="pt-4 mt-1">
//     <CoreValuesImage />
//   </div>
// </div>
//   </div>
// </main>
