// src/CoreValuesImage.js
import React from "react";

const CoreValuesImage = () => {
  return (
    <div className="position-relative text-center text-white">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKYByhHywsK2zHfiFQKcGtOYopqwW5uUeqCj-FohK6PKgfFSTJ64Jym0KFJpksK5hpfY&usqp=CAU"
        }
        alt="Core Values"
        className="img-fluid"
      />
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="position-absolute top-0 start-0 p-3">
          {/* <i className="fa-regular fa-lightbulb"></i> */}
          <h2>Our Core Values</h2>
        </div>
        <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-around p-3">
          <div className="text-center">
            <i className="fas fa-lightbulb fz-14 text-light"></i>
            <p>INNOVATION</p>
          </div>
          <div className="text-center">
            <i className="fas fa-puzzle-piece fz-14 text-light"></i>
            <p>COMMITMENT</p>
          </div>
          <div className="text-center">
            <i className="fas fa-handshake fz-14 text-light"></i>
            <p>INTEGRITY</p>
          </div>
          <div className="text-center">
            <i className="fas fa-medal fz-14 text-light"></i>
            <p>QUALITY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValuesImage;
