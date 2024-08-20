import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
  isColor?: boolean;
  width?: string;
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  fontSize = "fs-2",
  isSpace,
  isColor,
  width,
}) => {
  return (
    <div style={{ textAlign: "center" }} className="w-100">
      <h2
        className={`${fontSize} mt-60 ${isSpace && "mb-80"} ${
          isColor && "text-white"
        }`}
        // style={{
        //   color: "var(--navy)",
        //   textDecoration: "underline",
        //   textDecorationColor: "var(--golden)",
        //   textUnderlineOffset: "20px",
        //   letterSpacing: "-1px",
        // }}
      >
        {headTitle}
      </h2>
      <div
        className="border-line"
        style={{ width: width ? width : "50px" }}
      ></div>
    </div>
  );
};

export default Heading;
