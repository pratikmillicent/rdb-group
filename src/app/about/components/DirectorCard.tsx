import Heading from "@/components/heading/Heading";
import React from "react";
import Image from "next/image";

const DirectorCard = () => {
  return (
    <>
      <div className="container">
        <Heading headTitle="Our Leaders" />

        <div className="row">
          {DirectorCardData.map((data, key) => (
            <div key={key} className="col-sm-12 col-lg-6 pb-4">
              <div>
                <div>
                  <div className="my-container">
                    <Image
                      src={data?.image}
                      alt={data.name}
                      width={800}
                      height={500}
                      style={{
                        // borderRadius: "50%", // Creates a circular
                        width: "100%",
                        height: "400px", // Maintains the aspect ratio
                        objectFit: "contain", // Scales the image to fill the container without distortion
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center flex-column">
                <h4 className="pt-3 pb-1 m-0">{data?.name}</h4>
                <div className="fs-5">{data?.role}</div>
                <hr
                  className="bg-golden"
                  style={{
                    border: "none",
                    height: "3px",
                    color: "var(--golden)",
                    backgroundColor: "var(--golden)",
                    opacity: 1,
                  }}
                />
                <p
                  className="fs-6 py-0 lh-lg text-wrap"
                  style={{ textAlign: "justify", fontWeight: "400" }}
                >
                  {data?.description}
                </p>
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
    image: "/assets/images2/Dhaval.jpg",
    name: "Dhaval Thakkar",
    role: "Founder & Ceo",
    description:
      "Dhaval Thakkar is a dynamic and detail-oriented leader who believes that innovation is th driving force behind growth and success. With 15 years of expertise in the commercial an retail real estate sectors, Dhaval has been instrumental in steering our company toward remarkable expansion. Under his leadership, we have successfully delivered over 1.5 million square feet of prime real estate across 14 cities in India, marking our presence in key market and setting new industry standards Dhaval's approach to leadership is bold and progressive, characterized by a relentless pursui of diversification and a deep commitment to integrating emerging technologies. He believe that every challenge presents a unique opportunity to create substantial value, and hi strategic decisions consistently reflect this philosophy. Dhaval’s focus on continuous growt and development has propelled our company into new, exciting directions, ensuring we sta ahead of the curve in an ever-evolving industry Beyond his professional achievements, Dhaval is known for his ability to inspire and motivat his team, fostering a culture of innovation, collaboration, and excellence. His leadership is no just about driving numbers; it's about building a sustainable future where creativity an technology intersect to create lasting impact. Dhaval’s vision and dedication continue to shape our company's journey as we explore new frontiers and redefine success in the globa marketplace.",
  },
  {
    id: 2,
    image: "/assets/images2/Raj.jpg",
    name: "Raj Thakkar",
    role: "Founder ",
    description:
      "Raj Thakkar is a visionary leader with a forward-thinking approach, dedicated to driving growth and innovation within our organization. With over 21 years of extensive experience, Raj has played a pivotal role in guiding our company to new heights, consistently fostering collaboration, and empowering his team to excel. His leadership style is both bold and compassionate, known for its focus on delivering high-impact results while nurturing a positive and inclusive work environment. Raj’s personable and approachable nature sets him apart, as he values building genuine, transparent relationships rooted in trust and mutual respect. He prioritizes long-term connections over mere transactions, believing that lasting success is built on a foundation of integrity and commitment. Under Raj’s strategic direction, the company has successfully delivered over 1.2 million square feet of transformative projects, each contributing to our reputation for excellence in the industry. His ability to anticipate market trends and implement innovative solutions has made him a key architect in our ongoing journey toward expansion and success. Raj’s commitment to excellence, combined with his strategic vision for growth, continues to drive our organization forward as we broaden our horizons and strive for new achievements in the global marketplace.",
  },
];
