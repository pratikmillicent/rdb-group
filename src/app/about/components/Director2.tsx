import loadBackgroudImages from "@/utils/loadBackground";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const Director2 = () => {
  const RajThakkar = (
    <>
      <h5>Raj Thakkar - Founder</h5>
      <p>
        With over 21 years of experience in his family’s real estate business,
        Raj has lent his focus to residential real estate in Mumbai. He has
        delivered more than 1.2 million sq. ft., exclusively leading several
        project marketing initiatives with some leading developers. Over the
        years, he has sought to add an element of transparency to all aspects of
        the business, prioritising relationships over deals. His charming and
        friendly nature add a certain warmth to the business, while his
        dedication and professionalism have earned him the trust of many
        satisfied customers.
      </p>
    </>
  );

  const DhavalThakkar = (
    <>
      <h3 className="text-center" style={{ color: "var(--navy)" }}>
        Our Story
      </h3>
      <p>
        With over 20 years’ experience, Raj and Dhaval Thakkar are the driving
        forces behind RD Group’s remarkable growth and industry leadership.
        Their forward-thinking approach and shared vision have transformed the
        company into a key player in commercial and retail real estate,
        delivering over 2.7 million square feet of prime real estate across 14
        cities in India.
        <br />
        Together, they bring a unique blend of strategic insight and innovation.
        Raj’s ability to anticipate market trends and build strong, long-term
        relationships based on trust and integrity has been instrumental in
        shaping the company’s trajectory. Meanwhile, Dhaval’s passion for
        integrating emerging technologies and embracing new opportunities has
        fueled RD Group’s expansion, setting new standards in diversified
        industries.
        <br />
        Their leadership is defined by a relentless pursuit of excellence, with
        a focus on creating value-driven solutions and fostering a
        collaborative, inclusive work culture. Raj and Dhaval’s visionary
        approach continues to propel RD Group forward, redefining industry
        benchmarks and positioning the company for sustained success in the
        global marketplace.
      </p>
    </>
  );

  const [info, setInfo] = useState("");

  const handleMouseEnter = (text: any) => {
    setInfo(text);
  };

  const handleMouseLeave = () => {
    setInfo("");
  };

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div>
      <section className="pg-about pb-60 pt-60 sub-bg">
        <div className="container">
          <Row
            className="flex-column flex-md-row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Col>
              <div style={{ paddingRight: "20px" }}>
                <Image
                  // src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstory-about.b32157e6.webp&w=750&q=75"
                  src="/assets/images/about/leaders.png"
                  // className="circle-img blog-banner"
                  style={{ height: "412px" }}
                  alt="Landscape picture"
                  width={800}
                  height={500}
                />
              </div>
            </Col>

            <Col className="d-flex justify-content-center align-items-baseline pt-4">
              {/* <div className="d-flex justify-content-center align-items-center"> */}
              <div>{DhavalThakkar}</div>
              {/* </div> */}
              {/* <div className="2xl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 2xl:pr-[20px] xl:pr-[20px] lg:pr-[20px] md:pr-[10px] sm:pr-[0px] pr-[0px]">
                <div className="2xl:pl-[30px] xl:pl-[20px] lg:pl-[20px] md:pl-[0px] sm:pl-[0px] pl-[0px] relative">
                  <h2 className="2xl:text-[50px] xl:text-[40px] lg:text-[32px] md:text-[28px] sm:text-[24px] text-[24px] 2xl:mb-[40px] xl:mb-[30px] lg:mb-[25px] md:mb-[25px] sm:mb-[25px] mb-[25px] font-bwgradualdemoBold text-[#000] text-center bg-[#fff] ">
                    Our Story
                  </h2>
                  <div className="2xl:h-[508px] xl:h-[500px] lg:h-[500px] md:h-full sm:h-full h-full overflow-auto about-brand-scroll 2xl:pr-[30px] xl:pr-[30px] lg:pr-[30px] md:pr-[0px] sm:pr-[0px] pr-[0px]">
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] mb-[25px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[26px] sm:leading-[26px] leading-[26px]">
                      Founded in 2017 by industry veterans Anuj Puri and Rohin
                      Shah, ANAROCK is a people-first company.
                    </p>
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] mb-[25px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[26px] sm:leading-[26px] leading-[26px]">
                      The roots of the company lie in the shared passion between
                      Anuj and Rohin for bringing order to a highly disorganised
                      Real Estate sector. The journey started in 1993 when they
                      discussed reimagining the Real Estate space with new ways
                      of working. Their shared ethics and values laid the
                      foundation of ANAROCK’s value-oriented culture with a
                      clear focus on bringing about transparency in the Real
                      Estate sector. The idea was to deliver more than just
                      properties, it was about delivering solutions. The roadmap
                      was to boost transparency and improve communication
                      between all stakeholders in the Real Estate industry. This
                      would eventually lead to more informed decision-making.
                      Since the early days, they have been working towards this
                      broader goal.
                    </p>
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] mb-[25px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[26px] sm:leading-[26px] leading-[26px]">
                      Having successfully predicted the real estate boom in
                      India that has been evident for the last few years, Anuj
                      and Rohin launched ANAROCK based on this belief and scaled
                      it up to branch across different value propositions in
                      Real Estate.
                    </p>
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] mb-[25px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[26px] sm:leading-[26px] leading-[26px]">
                      Over the years, we have grown from being a residential
                      property-focused company to operating in over 15 business
                      verticals. We have a marked presence across all segments
                      of the real estate value chain. We have also leveraged
                      technological advancements and deployed bespoke tools
                      across our business lines.
                    </p>
                    <p className="2xl:text-[20px] xl:text-[18px] lg:text-[16px] md:text-[16px] sm:text-[16px] text-[16px] mb-[25px] 2xl:leading-[32px] xl:leading-[28px] lg:leading-[26px] md:leading-[26px] sm:leading-[26px] leading-[26px]">
                      Having grown into a formidable force in the sector,
                      ANAROCK now offers a comprehensive suite of Real Estate
                      solutions to all its customers.
                    </p>
                  </div>
                </div>
              </div> */}
            </Col>
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Director2;
