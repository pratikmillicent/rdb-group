import React, { useEffect, useRef, useState } from "react";

interface HeadingProps {
  headTitle: string;
  fontSize?: string;
  isSpace?: boolean;
  isColor?: boolean;
  isMargin?: string;
  textAlign?: "center" | "left" | "right";
}

const Heading: React.FC<HeadingProps> = ({
  headTitle,
  isSpace,
  isColor,
  isMargin = "mt-60",
  textAlign = "center",
}) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [borderWidth, setBorderWidth] = useState<string>("0px");

  useEffect(() => {
    if (spanRef.current) {
      const textWidth = spanRef.current.offsetWidth;
      setBorderWidth(`${textWidth * 0.75}px`);
    }
  }, [headTitle]);

  return (
    <div style={{ textAlign }} className="w-100">
      <h2
        className={`${isMargin} ${isSpace && "mb-80"} ${
          isColor && "text-white"
        } fs-2`}
      >
        <span style={{ color: "var(--navy)" }} ref={spanRef}>
          {headTitle}
        </span>
      </h2>
      <div
        className="border-line"
        style={{
          width: borderWidth,
          marginLeft: textAlign === "center" ? "auto" : "0",
        }}
      ></div>
    </div>
  );
};

export default Heading;
