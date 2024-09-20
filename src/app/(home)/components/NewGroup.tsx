"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import isInView from "@/common/isInView";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import "./newgroup.css";

interface DataItem {
  id: number;
  image: string;
  type: string;
  title: string;
  text: string;
  logo: string;
}

const data: DataItem[] = [
  {
    id: 1,
    image: "assets/images/home/properties.webp",
    logo: "assets/images/home/rdb-property.png",
    type: "Properties",
    title: "Aspect Global Ventures Pvt.Ltd.",
    text: "Our property division offers a full spectrum of real estate services, helping clients navigate every step from market entry and location advisory to property sourcing, transaction management, and investment sales. Whether you're looking to buy, sell, lease, or invest, we cover diverse sectors including residential, commercial, retail, education, healthcare, banking, hospitality, and warehousing. With a solution-driven mindset, we deliver value at every stage of the property lifecycle. Our expertise and commitment to excellence have established us as a trusted leader in the real estate industry",
  },
  {
    id: 2,
    image: "assets/images/home/img2.jpg",
    logo: "assets/images/home/rdb-realty.png",
    type: "Realty",
    title: "Aspect Bullion & Refinery",
    text: "RD Brothers Realty is a premier real estate developer, dedicated to creating innovative and high-quality spaces that redefine modern living. With a focus on sustainable development and architectural excellence, we craft residential, commercial, and mixed-use properties that meet the evolving needs of our clients. Our projects are built on a foundation of trust, innovation, and precision, delivering exceptional value to homeowners, businesses, and investors alike. At RD Brothers Realty, we don't just build properties—we create thriving communities designed for a better tomorrow",
  },
  {
    id: 3,
    image: "assets/images/home/Fractal.jpg",
    logo: "assets/images/home/rdb-movie.png",
    type: "Fracto",
    title: "Aspect Infrastructure",
    text: "Fracto is a tech-enabled real estate investment platform that empowers investors to own and trade fractional shares of pre-leased, Grade-A commercial properties. Through our innovative platform, we provide access to premium real estate assets, allowing investors to diversify their portfolios and earn steady rental income from high-quality, professionally managed properties. With a seamless digital experience, transparent transactions, and expert insights, Fracto opens the door to a new era of real estate investing, where ownership is flexible, secure, and accessible to all",
  },

  {
    id: 4,
    image: "assets/images/home/movie.webp",
    logo: "assets/images/home/rdb-movie.png",
    type: "Movies",
    title: "Aspect Infrastructure",
    text: "RD Brothers Movies is a dynamic movie production company dedicated to bringing compelling stories to life on the big screen. With a passion for creativity and cinematic excellence, we produce a diverse range of films that captivate audiences and leave a lasting impact. From concept development to post-production, our team of visionary filmmakers, writers, and producers collaborates to craft engaging narratives across various genres. Whether it’s a thought-provoking drama, an inspiring biopic, or a light-hearted comedy, RD Brothers Movies is committed to delivering high-quality films that entertain, inspire, and resonate globally",
  },
];

const NewGroupGrid: React.FC = () => {
  useEffect(() => {
    loadBackgroudImages();
    window.addEventListener("scroll", handleShowTabs);
    return () => window.removeEventListener("scroll", handleShowTabs);
  }, []);

  const handleShowTabs = () => {
    isInView({
      selector: ".portfolio-fixed .cont",
      isElements: true,
      callback(element: Element) {
        element.classList.add("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          ?.classList.add("current");
      },
      whenOutOfView(element: Element) {
        element.classList.remove("current");
        document
          .querySelector("#" + element.getAttribute("data-tab"))
          ?.classList.remove("current");
      },
    });

    const leftSide = document.getElementById("sticky_item");
    if (!leftSide) return;
    const width = leftSide.getBoundingClientRect().width;
    const portfolio = document
      .querySelector(".portfolio-fixed")
      ?.getBoundingClientRect();

    if (!portfolio) return;

    if (
      portfolio.top < 75 &&
      portfolio.height / (data.length - 1) < portfolio.bottom
    ) {
      leftSide.style.position = "fixed";
      leftSide.style.top = "0px";
      leftSide.style.width = width + "px";
      leftSide.classList.remove("is_stuck");
    } else if (portfolio.height / (data.length - 1) > portfolio.bottom) {
      leftSide.style.position = "absolute";
      leftSide.style.top = "auto";
      leftSide.style.bottom = "0";
      leftSide.style.width = width + "px";
      leftSide.classList.add("is_stuck");
      document
        .querySelector(
          `#tab-${document?.querySelectorAll?.("[data-tab]")?.length}`
        )
        ?.classList.add("current");
    } else {
      leftSide.style.position = "relative";
      leftSide.style.top = "unset";
      leftSide.style.bottom = "unset";
      leftSide.style.width = "auto";
    }
  };

  return (
    <div className="portfolio">
      <div className="ourbusiness-mobile">
        <Heading headTitle="Our Business" />

        <section className="portfolio-fixed">
          <div className=" rest">
            <div className="row" style={{ width: "100vw" }}>
              <div className="col-lg-6 rest" style={{ position: "relative" }}>
                <div className="left" id="sticky_item">
                  {data?.map((item, index) => (
                    <div
                      id={`tab-${index + 1}`}
                      className="img bg-img"
                      style={{ objectFit: "cover" }}
                      data-background={`${item.image}`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6 sub-bg right">
                {data?.map((item, index) => {
                  const isLastTwo = index >= data.length - 2;
                  const marginStyle = isLastTwo
                    ? { marginTop: "100px", marginBottom: "100px" }
                    : { marginBottom: "150px" };

                  return (
                    <div
                      className={`cont ${index === 0 ? "active" : ""}`}
                      data-tab={`tab-${index + 1}`}
                      key={index}
                      style={marginStyle}
                    >
                      <div className="img-hiden">
                        <Image
                          src={item.image}
                          alt="Landscape picture"
                          width={800}
                          height={500}
                        />
                      </div>

                      <div className=" pt-2">
                        <div className="">
                          <div className="d-flex align-items-center justify-content-between w-100 gap-3 mb-4 ">
                            <div className="">
                              <h5 className="director-title mb-0 p-0">
                                R.D.Brothers
                              </h5>
                              <h1 className="director-head  m-0">
                                {item.type}
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 pb-4 ">
                          <p
                            style={{
                              textAlign: "justify",
                            }}
                            className="text-black fz-16 fw-400"
                          >
                            {item.text}.
                          </p>
                          <div
                            className=" mt-20"
                            style={{ marginBottom: "16px" }}
                          >
                            <Link href="#">
                              <span className="explore-more text-golden fz-17 fw-400">
                                <span>Explore More</span>
                                <span className="explore-arrow ms-1">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                      fill="currentColor"
                                    ></path>
                                  </svg>
                                </span>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NewGroupGrid;
