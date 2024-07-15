import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
}

const Heading: React.FC<HeadingProps> = ({ headTitle, fontSize = "fs-2" }) => {
  return (
    <h2
      className={`${fontSize} fw-700 underline`}
      style={{ width: "fit-content" }}
    >
      {headTitle}
    </h2>
    // <div className="position-re">
    // </div>
  );
};

export default Heading;
