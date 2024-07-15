import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
}

const Heading: React.FC<HeadingProps> = ({ headTitle, fontSize = "fs-2" }) => {
  return (
    <div className="position-re">
      <h2 className={`${fontSize} fw-700 underline`}>{headTitle}</h2>
    </div>
  );
};

export default Heading;
