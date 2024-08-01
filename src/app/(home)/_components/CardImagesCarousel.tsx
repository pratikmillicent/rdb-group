// @ts-nocheck
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import React from "react";

function DarkVariantExample() {
  const directionButtons = (direction) => {
    return (
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          width: "fit-content",
          height: "fit-content",
          display: "block",
          background: "red",
          padding: "10px",
          borderRadius: "10px",
          // left: "-100px",
          // margin: "30px 0px 0px",
        }}
        // className={direction === "Next" && "button-next"}
        className={direction === "Next" ? "button-next" : "button-prev"}
      >
        {direction}
      </span>
    );
  };

  return (
    <div className="container">
      <Carousel
        indicators={false}
        interval={null}
        controls={false}
        //
        nextIcon={directionButtons("Next")}
        prevIcon={directionButtons("Previous")}
      >
        {carouselData.map((item, index) => (
          <Carousel.Item>
            <div className="d-flex align-content-center gap-2">
              <div className="d-flex align-self-center gap-2">
                <div
                  className="bg-golden rounded fw-semibold fs-5 align-self-center py-2  "
                  style={{ height: "fit-content" }}
                >
                  {item.date.split(" ").map((part, index) => (
                    <>
                      <div class="date bg-golden px-1 px-3 text-center">
                        <div key={index} className=" d-block fs-4">
                          {" "}
                          {part}
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div
                  className="fw-semibold fs-6 align-self-center "
                  style={{
                    height: "fit-content",
                    width: "200px",
                    display: "block",
                  }}
                >
                  {item.title.split("<br />").map((line, index) => (
                    <React.Fragment key={index}>
                      <span className="fst-italic fw-bold fs-5"> {line}</span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Carousel controls={false} indicators={false} interval={2000}>
                {item.images.map((imgSrc, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center align-content-center gap-2">
                      {item.images.map((src, idx) => (
                        <div key={idx}>
                          <img
                            src={src}
                            alt=""
                            style={{ height: "180px", width: "100%" }}
                          />
                        </div>
                      ))}
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

const CarouselEvent = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <DarkVariantExample />
      <DarkVariantExample />
      <DarkVariantExample />
    </div>
  );
};
export default CarouselEvent;

const carouselData = [
  {
    date: "31 Oct 2022",
    title: "Atharv Lifestyle Empowers Agents with Free Maharera Training",
    images: [
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
    ],
  },
  {
    date: "1 Aug 2023",
    title: "Lorem, ipsum dolor sit loerm amet consectetur elit. Autem",
    images: [
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
      "assets/images2/contact.jpg",
    ],
  },
  // Add more items as needed
];
