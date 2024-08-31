"use client";
import Carousel from "@/components/carousel/Carousel";
import Heading from "@/components/heading/Heading";
import React, { useState } from "react";
import Image from "next/image";

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}
const data: Video[] = [
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];

function VideoGallary() {
  const [isVideoOpen, setIsVideoOpen] = useState<Video | null>(null);

  function openVideo(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Video
  ) {
    event?.preventDefault();
    setIsVideoOpen(item);
  }

  return (
    <div className="container">
      <div className="sec-lg-head">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-re">
              {/* <div className="fz-50 fw-600">Video Gallery</div> */}
              <Heading headTitle="Our Gallery" />
            </div>
          </div>
        </div>
      </div>
      <Carousel
        data={data}
        component={(item: Video) => (
          <div onClick={(e) => openVideo?.(e, item)}>
            <div style={{ position: "relative" }}>
              <svg
                style={{
                  position: "absolute",
                  width: "100px",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                className="video-overlay-play-button"
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  strokeWidth="15"
                  stroke="#fff"
                />
                <polygon points="70, 55 70, 145 145, 100" fill="#fff" />
              </svg>
              <Image
                src={item?.image}
                className="circle-img"
                alt="Landscape picture"
                width={800}
                height={500}
              />
            </div>
            <div
              style={{
                background: "#fff",
                padding: "16px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item?.title}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default VideoGallary;
