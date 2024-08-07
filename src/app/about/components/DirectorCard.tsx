import Heading from "@/components/heading/Heading";
import React from "react";
import Image from "next/image";

const DirectorCard = () => {
  return (
    <>
      <div className="container">
        <Heading headTitle="Our Leaders"/>

        <div className="row">
          {DirectorCardData.map((data, key) => (
            <div key={key} className="col-sm-12 col-lg-6 pb-4">
              <div className="my-container">
                <Image
                  src={data?.image}
                  alt="Landscape picture"
                  width={800}
                  height={500}
                  style={{
                    borderRadius: "50px 0px 50px 0px",
                    height: "450px",                   
                    objectFit: "fill",
                  }}
                  className="w-100"
                />
              </div>

              <div>
                <h4 className="pt-3 pb-1 m-0 text-grey">{data?.name}</h4>
                <div className="fs-5">{data?.role}</div>
                <hr className="bg-golden" />
                <p className="fs-6 py-0 lh-lg text-wrap"
                style={{textAlign:"justify"}}
                >{data?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DirectorCard;

const DirectorCardData = [
  {
    id: 1,
    image:
      "https://anarock.com/_next/image?url=https%3A%2F%2Fwebsitemedia.anarock.com%2Fmedia%2FAnuj_93dcf74d9a.webp&w=1080&q=75",
    name: "Dhaval Thakkar",
    role: "Founder & Ceo",
    description:
      "With over 15 years of real estate experience, specialising in commercial and retail spaces across Mumbai and Gujarat, Dhaval has personally led project marketing initiatives for numerous commercial projects in and around Mumbai. He has also delivered over 1.5 million sq. ft. across 14 cities in India and has strived to bring an element of professionalism to the unorganized real estate sector. He has also been an ardent supporter for the adoption of technology for better business management, business expansion and social outreach, inspiring a sense of confidence and reassurance among his 700+ happy customers. He is also moving into newer facets of real estate as director of Fracrospace a new venture dealing in fractional ownership of properties.",
  },
  {
    id: 2,
    image:
      "https://anarock.com/_next/image?url=https%3A%2F%2Fwebsitemedia.anarock.com%2Fmedia%2FRobin_47b7a3e2f2.webp&w=1080&q=75",
    name: "Raj Thakkar",
    role: "Founder ",
    description:
      "With over 21 years of experience in his family’s real estate business, Raj has lent his focus to residential real estate in Mumbai. He has delivered more than 1.2 million sq. ft., exclusively leading several project marketing initiatives with some leading developers. Over the years, he has sought to add an element of transparency to all aspects of the business, prioritising relationships over deals. His charming and friendly nature add a certain warmth to the business, while his dedication and professionalism have earned him the trust of many satisfied customers.",
  },
];
