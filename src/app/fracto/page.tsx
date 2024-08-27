"use client";
// import Heading from "@/components/heading/Heading";
// import Image from "next/image";
import React from "react";
import SectionImage from "../(home)/components/SectionImage";
import Cre from "./Cre";
import HowItWorks from "./HowItWorks";
import Ourbrand from "./Ourbrand";
import Contact from "./Contact";
import About from "./About";

const page = () => {
  return (
    <>
      <About />
      <SectionImage />
      <Cre />
      <HowItWorks />
      <Ourbrand />
      <Contact />
    </>
  );
};

export default page;
