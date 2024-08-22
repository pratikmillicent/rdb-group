import Heading from "@/components/heading/Heading";
import React from "react";
import Team from "../about/components/Team";

const Movieteam = () => {
  return (
    <div className="container">
      <div className="section-padding"></div>
      {/* <Heading headTitle="Our Team" width="70px" /> */}
      <Team />
    </div>
  );
};

export default Movieteam;
