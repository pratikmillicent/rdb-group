"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./blog.css";
import Heading from "@/components/heading/Heading";

const Blog = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const data = [
    {
      id: 1,
      // image: new URL("https://picsum.photos/1100/1100"),
      image: "/assets/images/blog/blog-banner.png",
      heading:
        " Housing Market Showed Signs of Life in January, as Buyers Began to Compete",
      description: "Zillow Market Reports",
      date: "17-August-2023",
    },
    {
      id: 2,
      image: "/assets/images/blog/blog2.jpeg",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-May-2024",
    },
    {
      id: 3,
      image: new URL("https://picsum.photos/1300/1300"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality - Reality Quaters 2023",
      date: "17-June-2024",
    },
    {
      id: 4,
      image: new URL("https://picsum.photos/1000/1000"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-July-2024",
    },
    {
      id: 5,
      image: new URL("https://picsum.photos/1400/1400"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-January-2024",
    },
    {
      id: 6,
      image: new URL("https://picsum.photos/1500/1500"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality - Reality Quaters 2023",
      date: "17-February-2024",
    },
    {
      id: 7,
      image: new URL("https://picsum.photos/1600/1600"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-May-2024",
    },
    {
      id: 8,
      image: new URL("https://picsum.photos/1700/1700"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-June-2024",
    },
    // {
    //   id: 9,
    //   image: new URL("https://picsum.photos/1800/1800"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Best Construction Quality - Reality Quaters 2023",
    //   date: "17-July-2024",
    // },
    {
      id: 10,
      image: new URL("https://picsum.photos/1900/1900"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-August-2023",
    },
    {
      id: 11,
      image: new URL("https://picsum.photos/1200/1200"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-May-2024",
    },
    {
      id: 12,
      image: new URL("https://picsum.photos/1300/1300"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality - Reality Quaters 2023",
      date: "17-June-2024",
    },
    {
      id: 13,
      image: new URL("https://picsum.photos/1000/1000"),
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-July-2024",
    },
    // {
    //   id: 14,
    //   image: new URL("https://picsum.photos/1400/1400"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Top Emerging Developer - Times Of India 2023",
    //   date: "17-January-2024",
    // },
    // {
    //   id: 15,
    //   image: new URL("https://picsum.photos/1500/1500"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Best Construction Quality - Reality Quaters 2023",
    //   date: "17-February-2024",
    // },
    // {
    //   id: 16,
    //   image: new URL("https://picsum.photos/1600/1600"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Top Emerging Developer - Times Of India 2023",
    //   date: "17-May-2024",
    // },
    // {
    //   id: 17,
    //   image: new URL("https://picsum.photos/1700/1700"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Top Emerging Developer - Times Of India 2023",
    //   date: "17-June-2024",
    // },
    // {
    //   id: 18,
    //   image: new URL("https://picsum.photos/1800/1800"),
    //   heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
    //   description: "Best Construction Quality - Reality Quaters 2023",
    //   date: "17-July-2024",
    // },
  ];

  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src="/assets/images/blog/blog-banner.png"
          className="circle-img blog-banner banner"
          alt="Landscape picture"
          // style={{ height: "100vh" }}
          width={800}
          height={500}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(117deg, rgba(23, 38, 57, 90%) 0%, rgba(1, 1, 1, 50%) 75%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            <h3 className="banner-heading">Blogs</h3>
            <div
              style={{
                width: "30px",
                height: "3px",
                borderTop: "solid 2px var(--golden) !important",
                borderLeft: "none",
                borderRight: "none",
                display: "block",
                margin: "0 auto",
                marginBottom: "30px",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="blog-modern" style={{ paddingBottom: "60px" }}>
          <div className="container">
            <div className="sec-lg-head">
              <div className="row">
                <div className="col-lg-12">
                  {/* <Heading headTitle="Blogs" fontSize="fs-1" /> */}
                  {/* <div className="fz-50 fw-600">Blogs</div> */}
                  <Heading headTitle="Blogs" />
                </div>
              </div>
            </div>
            <div className="blog-carsouel">
              {loadSwiper && (
                <div className="row">
                  {data.map((item) => (
                    <div
                      key={item.id}
                      className="col-lg-4 col-md-6 col-sm-6 mb-30"
                    >
                      <div
                        className="blog-card"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="blog-card-content">
                          <h6 className="blog-card-title flex-wrap text-black bg-golden">
                            {item.heading}
                          </h6>
                          <div className="blogcard-body mb-2">
                            {item.description}
                          </div>
                          <Link
                            href="/dark/blog-post"
                            className="btn main-colorbg3 text-light"
                          >
                            Read More
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-5"
                            >
                              <path
                                d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
