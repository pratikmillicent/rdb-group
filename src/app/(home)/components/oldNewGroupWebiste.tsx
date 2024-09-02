"use client";
import { useEffect } from "react";
import Link from "next/link";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import isInView from "@/common/isInView";
import Heading from "@/components/heading/Heading";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";

interface DataItem {
  id: number;
  image: string;
  type: string;
  title: string;
  text: string;
}

const data: DataItem[] = [
  {
    id: 1,
    image: "assets/images/home/properties.webp",
    type: "Properties",
    title: "Aspect Global Ventures Pvt.Ltd.",
    text: "Our Property business is at the forefront of providing comprehensive services designed to guide clients through market entry strategies, location advisory, property sourcing, transaction management, and investment sales. Whether you're buying, selling, leasing, or investing in real estate assets, we specialize in a wide range of sectors including residential, commercial, retail, educational, healthcare, banking, hospitality, and warehousing facilities. Our solution-oriented approach ensures that we create value at every stage of the property lifecycle. Our deep expertise and dedication to outstanding service make us a distinguished leader in the real estate industry.",
  },
  {
    id: 2,
    image: "assets/images/home/img2.jpg",
    type: "Realty",
    title: "Aspect Bullion & Refinery",
    text: "In the real estate domain, we are recognized for our unmatched expertise and premium services, particularly in luxury property development and land acquisition. Our focus on quality and innovation sets us apart, ensuring that we not only meet but exceed the expectations of our clients. We pride ourselves on delivering projects that embody luxury, functionality, and long-term value..",
  },
  {
    id: 3,
    image: "assets/images/home/Fractal.jpg",
    type: "Fracto",
    title: "Aspect Infrastructure",
    text: "As pioneers in the Proptech sector, we integrate technology with real estate to deliver cutting-edge solutions that enhance the way we buy, sell, and manage properties. Our Proptech initiatives are designed to streamline processes, improve transparency, and provide our clients with innovative tools that redefine the real estate investment experience.",
  },

  {
    id: 4,
    image: "assets/images/home/movie.webp",
    type: "Movies",
    title: "Aspect Infrastructure",
    text: "Beyond our real estate endeavors, we have made a significant impact in the entertainment industry. Our movie production arm is known for producing blockbuster commercial films that seamlessly blend creativity with business acumen. We are passionate about storytelling and bringing unique cinematic experiences to audiences worldwide, ensuring that our films resonate both commercially and culturally.",
  },
  // {
  //   id: 5,
  //   image: "assets/images/home/business.jpg",
  //   type: "Business",
  //   title: "Luxury Glassware",
  //   text: "We craft premium designs for agencies and global brands around the globe.",
  // },
];

const OldGroupGrid: React.FC = () => {
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
    <section className="portfolio">
      <div className="overflow-hidden">
        <div
          style={{
            background: "var(--background)",
          }}
          className="sec-lg-head"
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="position-re">
                <div className="fz-50 fw-600 ">
                  {/* <span className="text-golden">G</span>roups Websites */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Heading headTitle="Our Business" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center"></div>
          </div>
        </div>
        <section className="portfolio-fixed">
          <div className="container-fluid rest">
            <div className="row">
              <div className="col-lg-6 rest" style={{ position: "relative" }}>
                <div className="left" id="sticky_item">
                  {data?.map((item, index) => (
                    <div
                      id={`tab-${index + 1}`}
                      className="img bg-img"
                      style={{
                        backgroundSize: "100% 100%",
                        filter: "brightness(0.5)",
                      }}
                      data-background={`${item.image}`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div
                className="col-lg-6  right overflow-hidden bg-grey py-2"
                style={{ padding: "0px 50px" }}
              >
                {data?.map((item, index) => (
                  <div
                    className={`cont ${index === 0 ? "active" : ""}`}
                    data-tab={`tab-${index + 1}`}
                    key={index}
                  >
                    <div className="img-hiden bg-danger">
                      <Image
                        src={item.image}
                        alt="Landscape picture"
                        width={800}
                        height={500}
                      />
                    </div>
                    <div className="d-flex justify-content-left align-items-left gap-3  pt-2">
                      <div>
                        <Heading
                          headTitle={`R.D.Brothers ${item.type}`}
                          isMargin=""
                          textAlign="center"
                        />
                      </div>

                      <div className="mt-5">
                        <FaBuilding fontSize={28} color="var(--golden)" />
                      </div>
                    </div>
                    {/* <h2 className="mb-15 text-grey">{item.title}.</h2> */}
                    <div className="row">
                      <div
                        className="col-md-12 pb-4"
                        style={{ lineHeight: "2.3" }}
                      >
                        <p
                          style={{
                            textAlign: "justify",
                          }}
                          className="text-black fz-16 fw-400"
                        >
                          {item.text}.
                        </p>
                        <div
                          className="vew-all mt-20 ml-25"
                          style={{ marginBottom: "16px" }}
                        >
                          <Link href="#">
                            <span className="text-black fz-17 fw-400">
                              Explore More
                              <span>
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
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default OldGroupGrid;
