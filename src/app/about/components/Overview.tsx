import Heading from "@/components/heading/Heading";
import Image from "next/image";
import React from "react";

const OverviewData = [
  {
    id: 1,
    name: "Dhaval Thakkar",
    image: "/assets/images2/Dhaval.jpg",
    description:
      "WITH OVER 15 YEARS OF REAL ESTATE EXPERIENCE, SPECIALISING IN COMMERCIAL AND RETAIL SPACES ACROSS MUMBAI AND GUJARAT, DHAVAL HAS PERSONALLY LED PROJECT MARKETING INITIATIVES FOR NUMEROUCOMMERCIAL PROJECTS IN AND AROUND MUMBAI. HE HAS ALSO DELIVERED OVER 1.5 MILLION SQ. FT. ACROSS 14 CITIES IN INDIA AND HAS STRIVED TO BRING AN ELEMENT OF PROFESSIONALISM TO THE UNORGANIZED REAL ESTATE SECTOR. HE HAS ALSO BEEN AN ARDEN SUPPORTER FOR THE ADOPTION OF TECHNOLOGY FOR BETTER BUSINESS MANAGEMENT, BUSINESS EXPANSION AND SOCIAL OUTREACH, INSPIRING A SENSE OF CONFIDENCE AND REASSURANCE AMONG HIS 700+ HAPPY CUSTOMERS. HE IS ALSO MOVING INTO NEWER FACETS OF REAL ESTATE AS DIRECTOR OF FRACROSPACE A NEW VENTURE DEALING IN FRACTIONAL OWNERSHIP OF PROPERTIES.",
  },
  {
    id: 2,
    image: "/assets/images2/Raj.jpg",
    name: "Raj Thakkar",
    description:
      "WITH OVER 21 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI. HE HAS DELIVERED MORE THAN 1.2 MILLION SQ. FT. EXCLUSIVELY LEADING SEVERAL PROJECT MARKETING INITIATIVES WITH SOME LEADING DEVELOPERS. OVER THE YEARS, HE HAS SOUGHT TO ADD AN ELEMENT OF TRANSPARENCY TO ALL ASPECTS OF THE BUSINESS, PRIORITISING RELATIONSHIPS OVER DEALS. HIS CHARMING AND FRIENDLY NATURE ADD A CERTAIN WARMTH TO THE BUSINESS, WHILE HIS DEDICATION AND PROFESSIONALISM HAVE EARNED HIM THE TRUST OF MANY SATISFIED CUSTOMERS.",
  },
];

const overview = {
  vision: "/assets/images2/vision.jpg",
  mission: "/assets/images2/mission.jfif",
};

const Overview = () => {
  return (
    <section className="sideimg-numbers section-padding sub-bg">
      <div className="container">
        <div className="row bord-thin-bottom py-3">
          <div className="col-12 col-md-6">
            <div className="mt-2">
              <Heading headTitle="Our vision" fontSize="fs-2" />
              <p className="main-color3">
                To be global powerhouse where tradition and innovation unite,
                building a sustainble, impactful, and visionary future for all
                stakeholder
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="cont">
              <div className="item d-flex align-items-center justify-content-center pb-2">
                <div className="item-img o-hidden">
                  <div className="imago wow">
                    <div className="inner wow">
                      <Image
                        width={1000}
                        height={1000}
                        style={{
                          width: "100%",
                          height: "300px",
                          maxWidth: "700px",
                          objectFit: "cover",

                          overflow: "hidden",
                        }}
                        src={overview.vision}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row bord-thin-bottom p-3">
          <div className="col-12 col-md-6">
            <div className="cont">
              <div className="item d-flex align-items-center justify-content-center pb-20">
                <div className="item-img o-hidden">
                  <div className="imago wow">
                    <div className="inner wow">
                      <Image
                        width={1000}
                        height={1000}
                        src={overview.mission}
                        alt="image"
                        style={{
                          width: "100%",
                          height: "300px",
                          maxWidth: "700px",
                          objectFit: "cover",

                          overflow: "hidden",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 py-2">
            <Heading headTitle="Our mission" fontSize="fs-2" />
            <p className="main-color3">
              To embrance our roots while propelling forward, delevering value
              through ethical sustainable and pioneering solutions, and ensuring
              Aspect Global Ventures remains a symbol of trust quality , and
              progress for generations
            </p>
          </div>
        </div>

        {OverviewData.map((data, key) => (
          <div className="row  p-3 mb-5" key={data?.id}>
            <div className="col-12 col-md-8">
              <div className="">
                <p className="main-color3">{data.description}</p>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="cont h-100">
                <div className="item d-flex align-items-center justify-content-center pb-20">
                  <div>
                    <div className="item-img o-hidden">
                      <div className="imago wow">
                        <div className="inner wow">
                          <Image
                            width={1000}
                            height={1000}
                            src={data?.image}
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="fs-4 p-2 fw-bold  main-color3">
                      {data?.name}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Overview;
