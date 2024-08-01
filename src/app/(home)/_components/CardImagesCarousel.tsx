// @ts-nocheck
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import React from "react";
import Image from "next/image";

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
          <Carousel.Item key={index}>
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
                          {/* <img
                            src={src}
                            alt=""
                            style={{ height: "180px", width: "100%" }}
                          /> */}
                          <Image
                            src={src}
                            // className="circle-img"
                            style={{ height: "180px", width: "100%" }}
                            alt="Landscape picture"
                            width={800}
                            height={500}
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
    <div className="d-flex flex-column gap-2 py-5">
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
    title: "RD Brother Lifestyle Empowers Agents with Free Maharera Training",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK92UVfWmKFimBK90JD7wPOjectFATDhpJ_g&s",

      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEVj7-_LPKXkdXvEH40UXbPcTr43lXAnPYQ&s",

      "data:image/jpeg;base64,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",
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
