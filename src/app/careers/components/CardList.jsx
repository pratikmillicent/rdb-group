import React, { useEffect, useState } from "react";
import Card from "./Card";
import '../Animate.css'

const locations = [
  "All Location",
  "India",
  "China",
  "UAE",
  "USA",
  "Russia",
  "UK",
];

const CardList = ({ data }) => {
  const [selectedLocation, setSelectedLocation] = useState("All Location");
  const [animate, setAnimate] = useState(false);

  const handleLocationClick = (location) => {
    setAnimate(true);
    setSelectedLocation(location);
  };

  useEffect(()=>{
    if(animate){
      const timer = setTimeout (()=> setAnimate(false),500)
      return ()=> clearTimeout (timer)
    }
  }, [animate])

  const filteredCards =
    selectedLocation === "All Location"
      ? data
      : data.filter(card => card.location === selectedLocation);

  return (
    <div className="container mt-60">
      <div
        className="bg-golden p-5"
        style={{
          backgroundImage: `url(/assets/images/career/career-head-logo.png)`,
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <h2 className="text-light">Open Position</h2>
      </div>
      <div className="mt-30 d-flex flex-column align-items-center justify-content-center">
        <div className="fz-30" style={{ color: "#ffab5a" }}>
          We're Hiring!
        </div>
        <p className="p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          See our open positions below!
        </p>
      </div>
      <div
        className="d-flex align-items-center justify-content-center mb-20 text-grey fz-16 fw-600"
        style={{
          width: "fit-content",
          margin: "auto",
          borderBottom: "1px solid grey",
        }}
      >
        {locations.map((city, index) => (
          <div
            key={index}
            className={`mx-3 ${
              selectedLocation === city ? "text-golden fw-bold" : ""
            }`}
            style={{ cursor: "pointer" }}
            onClick={() => handleLocationClick(city)}
          >
            {city}
          </div>
        ))}
      </div>
      <div className="row justify-content-center">
        {filteredCards.map((item, index) => (
          <div className={`col-lg-4 col-md-6 col-sm-12 mt-30 mb-4 ${animate ? 'fade-in' : ""} `} key={index}>
            <Card
              icon={item.icon}
              position={item.position}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
