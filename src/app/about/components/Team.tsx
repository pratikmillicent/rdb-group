"use client";

import { useState, useEffect } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const swiperOptions = {
  modules: [Navigation, Autoplay],
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 4,
  loop: true,
  spaceBetween: 60,
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
};

function Team() {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);

  function handleStickyScroll() {
    const sticky_item = document.getElementById("sticky_item");
    if (!sticky_item) return;
    const width = sticky_item.getBoundingClientRect().width;
    const height = sticky_item.getBoundingClientRect().height;
    const parent = document
      .querySelector(".team-crev")
      ?.getBoundingClientRect();

    if (!parent) return;

    if (parent.top < -30 && parent.height / 2 < parent.bottom) {
      sticky_item.style.position = "fixed";
      sticky_item.style.top = "0px";
      sticky_item.style.width = `${width}px`;
      sticky_item.classList.add("is_stuck");

      if (sticky_item.nextElementSibling?.id !== "placeholder") {
        const placeholderElement = document.createElement("div");
        placeholderElement.id = "placeholder";
        placeholderElement.style.height = `${height}px`;
        placeholderElement.style.width = `${width}px`;
        sticky_item.after(placeholderElement);
      }
    } else if (parent.height / 2 > parent.bottom) {
      sticky_item.style.position = "absolute";
      sticky_item.style.top = "auto";
      sticky_item.style.bottom = "0";
      sticky_item.style.width = `${width}px`;
    } else {
      sticky_item.style.position = "unset";
      sticky_item.style.top = "unset";
      sticky_item.style.bottom = "unset";
      sticky_item.style.width = "auto";
      sticky_item.classList.remove("is_stuck");

      if (sticky_item.nextElementSibling?.id === "placeholder")
        sticky_item.nextElementSibling.remove();
    }
  }

  return (
    <section
      className="team-crev pb-0 bord-thin-bottom px-2"
      style={{ marginBottom: "10px" }}
    >
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12" style={{ position: "relative" }}>
            <div
              className="team-container sec-head-lg text-center text-u mb-80 text-golden"
              id="sticky_item"
            >
              <h2>Team</h2>
            </div>
            <div className="swiper4">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  className="swiper-container team-profile-container"
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="item">
                        <div className="img" style={{ height: "" }}>
                          <Image
                            src={item.image}
                            className="img-fluid"
                            alt="Landscape picture"
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="info">
                          <div className="main-marq team-position">
                            <div className="slide-har st1 non-strok">
                              <div className="box">
                                {new Array(5).fill("").map((_, i) => (
                                  <div className="item" key={i}>
                                    <h4>{item.position}</h4>
                                  </div>
                                ))}
                              </div>
                              <div className="box">
                                {new Array(5).fill("").map((_, i) => (
                                  <div className="item" key={i}>
                                    <h4>{item.position}</h4>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="main-marq team-name">
                            <div className="slide-har st1 non-strok">
                              <div className="box">
                                {new Array(5)?.fill("").map((_, i) => (
                                  <div className="item" key={i}>
                                    <h4>{item.name}</h4>
                                  </div>
                                ))}
                              </div>
                              <div className="box">
                                {new Array(5).fill("").map((_, i) => (
                                  <div className="item" key={i}>
                                    <h4>{item.name}</h4>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

const data = [
  {
    id: 1,
    image: "/assets/images/about/team-4.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
  {
    id: 2,
    image: "/assets/images/about/team-0.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
  {
    id: 3,
    image: "/assets/images/about/team-3.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
  {
    id: 4,
    image: "/assets/images/about/team-2.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
  {
    id: 5,
    image: "/assets/images/about/team-1.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
  {
    id: 6,
    image: "/assets/images/about/team-5.jpg",
    name: "adrian parody",
    position: "Co-Founder",
  },
];
