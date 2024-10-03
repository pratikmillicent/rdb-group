import Heading from "@/components/heading/Heading";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const ProjectFracto = () => {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <div className="container">
      <Heading headTitle="Projects" />
      <div className="gallery " style={{ overflowX: "hidden" }}>
        <div className="row grid md-marg">
          <Swiper {...swiperOptions}>
            {Fractoproject.map((item) => (
              <div
                className={`col-lg-4 col-md-6 items ${item.filter} info-overlay mb-0 px-2`}
                key={item.id}
              >
                <SwiperSlide>
                  <div
                    className="item pb-5 mb-3"
                    style={{
                      background: "var(--background)",
                    }}
                  >
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        style={{
                          height: "320px",
                          objectFit: "cover",
                          width: "100%",
                        }}
                        width={800}
                        height={500}
                      />
                    </div>
                    <div
                      className="cont mt-10"
                      style={{
                        padding: "10px",
                      }}
                    >
                      {/* <h6 className="fw-600">{item.description}</h6> */}
                      <div
                        className="w-layout-grid grid-30 d-flex"
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          paddingBottom: "10px",
                          flexWrap: "wrap",
                        }}
                      >
                        <div
                          style={{
                            width: "50%",
                            paddingLeft: "20px",
                            paddingBottom: "10px",
                          }}
                          id="w-node-_9464ec8f-844b-84ac-117f-88e55f50cc08-4edefbb9"
                          className="div-block-103"
                        >
                          <div className="text-block-109 ">
                            Gross Entry Yield
                          </div>
                          <div id="entry-yield" className="text-golden">
                            8.1%
                          </div>
                        </div>
                        <div
                          style={{
                            width: "50%",
                            paddingLeft: "20px",
                            paddingBottom: "10px",
                          }}
                          id="w-node-_18c36b8a-daf7-0b23-dc5e-4dceeb9f9c1d-4edefbb9"
                          className="div-block-103"
                        >
                          <div className="text-block-109">Asset Value</div>
                          <div id="asset-value" className="text-golden">
                            ₹39,20,00,000
                          </div>
                        </div>
                        <div
                          style={{
                            width: "50%",
                            paddingLeft: "20px",
                            // paddingBottom: "10px",
                          }}
                          id="w-node-_3f2d2efa-a90b-f5e1-e6fb-00dd44e11071-4edefbb9"
                          className="div-block-103"
                        >
                          <div className="text-block-109">Target IRR</div>
                          <div id="target-irr" className="text-golden">
                            13%
                          </div>
                        </div>
                        <div
                          style={{
                            width: "50%",
                            paddingLeft: "20px",
                            // paddingBottom: "10px",
                          }}
                        >
                          <Link
                            href={item.image}
                            className="mt-6 ls1 sub-title fw-500"
                            style={{
                              color: "#333",
                              fontSize: "14px",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            Read More{" "}
                            <i
                              className="ml-5"
                              style={{
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.3s" }}
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectFracto;

const Fractoproject = [
  {
    id: 1,
    filter: "web",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 2,
    filter: "app",
    image:
      "https://media.istockphoto.com/id/1350424607/photo/seating-area-with-a-sofa-next-to-a-beige-living-room-wall.jpg?s=612x612&w=0&k=20&c=BynGhd6Gw6R1nfWn_JdGywwFoy1oHfZM0wARToOsPRE=",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 3,
    filter: "brand",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 4,
    filter: "web",
    image:
      "https://media.istockphoto.com/id/905480644/photo/modern-new-light-interior-of-kitchen-with-white-furniture-and-dining-table.jpg?s=612x612&w=0&k=20&c=kuhJgH_1Zw1fecpkZLbQRQTwRGf-T-RbNxqvBEUlP3w=",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 5,
    filter: "app",
    image:
      "https://static.squareyards.com/resources/images/mumbai/project-image/raiaskaran-tech-park-project-project-large-image1.jpg",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 6,
    filter: "brand",
    image:
      "https://www.adanirealty.com/-/media/Project/Realty/Residential/Pune/Atelier-Greens/Carousel-Images/3.jpg",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  // {
  //   id: 7,
  //   filter: "web",
  //   image:
  //     "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-40-Omkar-1973-Mumbai-5019920_345_1366_310_462.jpg",

  //   type: "Design ART",
  //   year: "2023",
  //   title: "Character Design",
  // },
  // {
  //   id: 8,
  //   filter: "app",
  //   image: "https://www.ghar.tv/projectimages/168/photo-518.jpg",
  //   type: "Design ART",
  //   year: "2023",
  //   title: "Character Design",
  // },
];
