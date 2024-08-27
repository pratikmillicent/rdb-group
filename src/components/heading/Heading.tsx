import React from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
  isColor?: boolean;
  width?: string;
  textAlign?: "center" | "left" | "right";
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  fontSize = "fs-1",
  isSpace,
  isColor,
  width = "50px",
  textAlign = "center",
}) => {
  return (
    <div style={{ textAlign }} className="w-100">
      <h2
        style={{ fontSize: "36px" }}
        className={`mt-60 ${isSpace && "mb-80"} ${isColor && "text-white"}`}
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
        style={{ width, marginLeft: textAlign === "center" ? "auto" : "0" }}
      ></div>
    </div>
  );
};

export default Heading;
