import Heading from "@/components/heading/Heading";
import React from "react";

const ProjectFracto = () => {
  return (
    <div>
      <Heading headTitle="Project" />

      <div className=""></div>
      <div
        className=""
        style={{
          backgroundImage: "url(/assets/fracto/bg-fracto.jpg)",
          height: "100dvh",
          width: "100dvw",
        }}
      ></div>
      <div className="row">
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default ProjectFracto;
