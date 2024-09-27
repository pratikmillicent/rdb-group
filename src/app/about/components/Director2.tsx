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
      <h3 className="text-center">Our Story</h3>
      <p>
        With over 15 years of real estate experience, specialising in commercial
        and retail spaces across Mumbai and Gujarat, Dhaval has personally led
        project marketing initiatives for numerous commercial projects in and
        around Mumbai. He has also delivered over 1.5 million sq. ft. across 14
        cities in India and has strived to bring an element of professionalism
        to the unorganized real estate sector. He has also been an ardent
        supporter for the adoption of technology for better business management,
        business expansion and social outreach, inspiring a sense of confidence
        and reassurance among his 700+ happy customers. He is also moving into
        newer facets of real estate as director of Fracrospace a new venture
        dealing in fractional ownership of properties.
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
          <Row>
            <Col>
              <div style={{ paddingRight: "20px" }}>
                <Image
                  src="https://anarock.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstory-about.b32157e6.webp&w=750&q=75"
                  // className="circle-img blog-banner"
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
