"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const Blog = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const data = [
    {
      id: 1,
      image: "https://picsum.photos/1100/1100",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-August-2023",
    },
    {
      id: 2,
      image: "https://picsum.photos/1200/1200",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-May-2024",
    },
    {
      id: 3,
      image: "https://picsum.photos/1300/1300",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-June-2024",
    },
    {
      id: 4,
      image: "https://picsum.photos/1000/1000",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-July-2024",
    },
    {
      id: 5,
      image: "https://picsum.photos/1400/1400",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-January-2024",
    },
    {
      id: 6,
      image: "https://picsum.photos/1500/1500",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-February-2024",
    },
    {
      id: 7,
      image: "https://picsum.photos/1600/1600",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-May-2024",
    },
    {
      id: 8,
      image: "https://picsum.photos/1700/1700",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-June-2024",
    },
    {
      id: 9,
      image: "https://picsum.photos/1800/1800",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-July-2024",
    },
    {
      id: 10,
      image: "https://picsum.photos/1900/1900",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-August-2023",
    },
    {
      id: 11,
      image: "https://picsum.photos/1200/1200",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-May-2024",
    },
    {
      id: 12,
      image: "https://picsum.photos/1300/1300",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-June-2024",
    },
    {
      id: 13,
      image: "https://picsum.photos/1000/1000",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-July-2024",
    },
    {
      id: 14,
      image: "https://picsum.photos/1400/1400",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-January-2024",
    },
    {
      id: 15,
      image: "https://picsum.photos/1500/1500",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-February-2024",
    },
    {
      id: 16,
      image: "https://picsum.photos/1600/1600",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "People Choice Awards - NAREDCO 2023",
      date: "17-May-2024",
    },
    {
      id: 17,
      image: "https://picsum.photos/1700/1700",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Top Emerging Developer - Times Of India 2023",
      date: "17-June-2024",
    },
    {
      id: 18,
      image: "https://picsum.photos/1800/1800",
      heading: "Reasons fueling the rising demand for luxury flats in Mumbai",
      description: "Best Construction Quality Award - Reality Quaters 2023",
      date: "17-July-2024",
    },
  ];

  return (
    <>
      <Image
        src="/assets/images/blog/banner.png"
        className="circle-img blog-banner"
        alt="Landscape picture"
        // style={{ height: "100vh" }}
        width={800}
        height={500}
      />
      <div className="container">
        <section
          className="blog-modern section-padding"
          style={{ paddingBottom: "60px" }}
        >
          <div className="container">
            <div className="sec-lg-head mb-80">
              <div className="row">
                <div className="col-lg-8">
                  <Heading headTitle="Blogs" fontSize="fs-1" />
                </div>
              </div>
            </div>
            <div className="blog-carsouel">
              {loadSwiper && (
                <div className="row">
                  {data.map(item => (
                    <div
                      key={item.id}
                      className="col-lg-4 col-md-6 col-sm-6 mb-30"
                    >
                      <div className="blog-item">
                        <div className="blog-img">
                          <Image
                            src={item.image}
                            className="circle-img"
                            alt={item.description}
                            width={800}
                            height={500}
                          />
                        </div>
                        <div className="blog-content">
                          <h5 className="blog-title fz-22 fw-medium text-white">
                            {item.heading}
                          </h5>
                          <p className="blog-date fz-14">{item.date}</p>
                          <h5 className="blog-title fz-16">
                            {item.description}
                          </h5>
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
