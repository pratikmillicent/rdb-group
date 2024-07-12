"use client";
import Carousel from "@/components/common/Carousel";
import ModalVideo from "@/components/common/ModalVideo";
import React, { useState } from "react";

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
    event.preventDefault();
    setIsVideoOpen(item);
  }

  return (
    <div className="container section-padding">
      <div className="sec-lg-head">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-re">
              <h2 className="fz-60 fw-700 underline">Video Gallery</h2>
            </div>
          </div>
        </div>
      </div>
      <Carousel
        data={data}
        component={(item: Video) => (
          <div onClick={(e) => openVideo(e, item)}>
            <img src={item.image} />
            <div
              style={{
                background: "#fff",
                padding: "16px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </div>
          </div>
        )}
      />
      <ModalVideo isOpen={isVideoOpen} onClose={() => setIsVideoOpen(null)} />
    </div>
  );
}

export default VideoGallary;
