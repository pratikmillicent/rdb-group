import Heading from "@/components/heading/Heading";
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

const Overview = () => {
  return (
    <section className="sideimg-numbers section-padding sub-bg">
      <div className="container">
        <div className="row bord-thin-bottom p-3">
          <div className="col-12 col-md-6">
            <div>
              {/* <h5 className="main-color3 fw-bold">--- Our vision</h5> */}
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
              <div className="item d-flex align-items-center justify-content-center pb-20">
                <div className="imago wow">
                  <div className="inner wow">
                    <img
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      alt=""
                    />
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
                {/* <div>
                  <div className="icon-img-200 mr-60"> */}
                <div className="imago wow">
                  <div className="inner wow">
                    <img
                      src={
                        "data:image/jpeg;base64,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"
                      }
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 py-2">
            {/* <h5 className="main-color3 fw-bold">--- Our mission</h5> */}
            <Heading headTitle="Our mission" fontSize="fs-2" />
            <p className="main-color3">
              To embrance our roots while propelling forward, delevering value
              through ethical sustainable and pioneering solutions, and ensuring
              Aspect Global Ventures remains a symbol of trust quality , and
              progress for generations
            </p>
          </div>
        </div>

        {/* overview part 2  */}
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
                    {/* <div className="icon-img-200 mr-60">
                      <img src={data.image} alt="dhaval-img" />
                    </div> */}
                    <div className="imago wow">
                      <div className="inner wow">
                        <img src={data.image} alt="image" />
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
