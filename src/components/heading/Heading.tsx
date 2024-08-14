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
  return (
    <h2
      className={`${fontSize} mt-60 ${isSpace && "mb-80"} mb-40`}
      style={{
        color: "var(--navy)",
        textDecoration: "underline",
        textDecorationColor: "var(--golden)",
        textUnderlineOffset: "20px",
        letterSpacing: "-1px",
      }}
    >
      {headTitle}
    </h2>
  );
};

export default Heading;
