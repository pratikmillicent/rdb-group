import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  fontSize = "fs-1",
  isSpace,
}) => {

  const firstLetter = headTitle.charAt(0);
  const restTitle = headTitle.slice(1)

  return (
    <h2
      className={`${fontSize} fw-700 ${isSpace && "mb-80"}`}
      style={{ width: "fit-content " }}
    >
      <span className="text-golden">{firstLetter}</span>
      <span className="text-grey">{restTitle}</span>
    </h2>
    // <div className="position-re">
    // </div>
  );
};

export default Heading;
