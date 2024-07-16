import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  fontSize = "fs-2",
  isSpace,
}) => {
  return (
    <h2
      className={`${fontSize} fw-700 underline ${isSpace && "mb-80"}`}
      style={{ width: "fit-content" }}
    >
      {headTitle}
    </h2>
    // <div className="position-re">
    // </div>
  );
};

export default Heading;
