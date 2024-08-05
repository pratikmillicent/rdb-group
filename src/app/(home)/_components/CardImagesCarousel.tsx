// @ts-nocheck
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "react-bootstrap";
import React from "react";
import Image from "next/image";

function DarkVariantExample({ spliti }) {
  console.log("innnn", { spliti });

  return (
    <div className="container">
      <div
        indicators={false}
        interval={null}
        controls={false}
        //
      >
        {spliti?.map((item, index) => (
          <div key={index}>
            <div className="d-flex align-content-center gap-2">
              <div className="d-flex align-self-center gap-2">
                <div
                  className="bg-navy rounded fw-semibold fs-5 align-self-center py-2  "
                  style={{ height: "fit-content" }}
                >
                  {item.date.split(" ")?.map((part, index) => (
                    <div
                      className="date bg-navy text-light px-1 px-3 py-1 text-center"
                      key={index}
                    >
                      <div className=" d-block fs-4"> {part}</div>
                    </div>
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
                  {item.title.split("<br />")?.map((line, index) => (
                    <React.Fragment key={index}>
                      <span className="fw-semibold ps-2 pe-4 fs-5">
                        {" "}
                        {line}
                      </span>
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <Carousel controls={false} indicators={false} interval={2000}>
                {item?.images?.map((imgSrc, index) => (
                  <Carousel.Item key={index}>
                    <div className="d-flex justify-content-center align-content-center gap-2">
                      {item?.images?.map((src, idx) => (
                        <div key={idx}>
                          <Image
                            src={src}
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
          </div>
        ))}
      </div>
    </div>
  );
}

function splitToNChunks(array, n) {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}

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
        paddingX: "40px",
        borderRadius: "10px",
      }}
      className={direction === "Next" ? "button-next" : "button-prev"}
    >
      {direction}
    </span>
  );
};

const CarouselEvent = () => {
  return (
    <Carousel
      interval={null}
      controls
      nextIcon={directionButtons("Next")}
      prevIcon={directionButtons("Previous")}
      className="d-flex flex-column gap-2 py-5"
    >
      {splitarr.map((spliti) => {
        console.log("out of ", spliti);
        return (
          <CarouselItem>
            <DarkVariantExample spliti={spliti} />
          </CarouselItem>
        );
      })}
    </Carousel>
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
];

const splitarr = splitToNChunks(carouselData, 3);
