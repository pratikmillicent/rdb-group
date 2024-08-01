import React from "react";

const Card = ({icon, position, description}) => {
  return (
    <>
      <div
        className="col-md-4 relative d-flex flex-col align-items-center justify-content-center bg-primary"
      >
        <div className="absolute p-5 bg-success border-radius-full">
          {icon}
        </div>
        <div className="text-grey">{position}</div>
        <p className="text-grey">{description}</p>
        <button className="btn">Apply</button>
      </div>
    </>
  );
};

export default Card;
