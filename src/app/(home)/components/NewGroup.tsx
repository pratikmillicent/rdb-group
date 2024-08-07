import { useEffect } from "react";
import Link from "next/link";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import isInView from "@/common/isInView";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

interface DataItem {
  id: number;
  image: string;
  number: string;
  type: string;
  title: string;
  text: string;
}

const data: DataItem[] = [
  {
    id: 1,
    image: "assets/images/home/properties.webp",
    number: "01.",
    type: "Properties",
    title: "Aspect Global Ventures Pvt.Ltd.",
    text: "We craft premium designs for agencies and global brands around the globe.",
  },
  {
    id: 2,
    image: "assets/images/home/img2.jpg",
    number: "02.",
    type: "Reality",
    title: "Aspect Bullion & Refinery",
    text: "We craft premium designs for agencies and global brands around the globe.",
  },
  {
    id: 3,
    image: "assets/images/home/Fractal.jpg",
    number: "03.",
    type: "Fracto",
    title: "Aspect Infrastructure",
    text: "We craft premium designs for agencies and global brands around the globe.",
  },

  {
    id: 4,
    image: "assets/images/home/movie.webp",
    number: "04.",
    type: "Movies",
    title: "Aspect Infrastructure",
    text: "We craft premium designs for agencies and global brands around the globe.",
  },
  {
    id: 5,
    image: "assets/images/home/business.jpg",
    number: "05.",
    type: "Business",
    title: "Luxury Glassware",
    text: "We craft premium designs for agencies and global brands around the globe.",
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
    <section className="portfolio">
      <div className="">
        <div className="sec-lg-head mb-10">
          <div className="row">
            <div className="col-lg-12">
              <div className="position-re">
                <div className="fz-50 fw-600 ">
                  {/* <span className="text-golden">G</span>roups Websites */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Heading headTitle="Group Websites" />
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
                      style={{ objectFit: "cover" }}
                      data-background={`${item.image}`}
                      key={index}
                    />
                  ))}
                </div>
              </div>
              <div className="col-lg-6 sub-bg right">
                {data?.map((item, index) => (
                  <div
                    className={`cont ${index === 0 ? "active" : ""}`}
                    data-tab={`tab-${index + 1}`}
                    key={index}
                  >
                    <div className="img-hiden">
                      <Image
                        src={item.image}
                        alt="Landscape picture"
                        width={800}
                        height={500}
                      />
                    </div>
                    <span className="sub-title mb-15 fz-24 fw-600 text-grey">
                      {item.number} {item.type}
                    </span>
                    {/* <h2 className="mb-15 text-grey">{item.title}.</h2> */}
                    <div className="row">
                      <div className="col-md-9">
                        <p>{item.text}.</p>
                        <div className="vew-all mt-50 ml-25">
                          <Link href="#">
                            <span className="sub-title">
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

export default NewGroupGrid;