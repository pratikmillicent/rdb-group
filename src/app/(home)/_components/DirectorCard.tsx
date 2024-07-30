import React from "react";

const DirectorCard = () => {
  return (
    <>
      <div className="px-5">
        <h3 className="d-flex justify-content-center pb-3">OUR LEADERS</h3>

        <div className="row">
          {DirectorCardData.map((data, key) => (
            <div className="col-sm-12 col-lg-6 pb-sm-4" key={data?.id}>
              <img
                src={data?.image}
                // src={`data:image/jpeg;base64,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`}
                style={{
                  borderRadius: "50px 0px 50px 0px",
                  height: "450px",
                  //   maxWidth: "100%",
                  objectFit: "fill",
                }}
                className="w-100"
                alt="icon2"
              />
              <div>
                <h4 className="pt-3 pb-1 m-0">{data?.name}</h4>
                <div className="fs-5">{data?.role}</div>
                <hr className="bg-golden" />
                <p className="fs-6 py-0">{data?.description}</p>
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
      "With over 15 years of real estate experience, specialising in commercial and retail spaces across Mumbai and Gujarat, Dhaval has personally led project marketing initiatives for numerous commercial projects in and around Mumbai. He has also delivered over 1.5 million sq. ft. across 14 cities in India and has strived to bring an element of professionalism to the unorganized real estate sector. He has also been an ardent supporter for the adoption of technology for better business management, business expansion and social outreach, inspiring a sense of confidence and reassurance among his 700+ happy customers. He is also moving into newer facets of real estate as director of Fracrospace a new venture dealing in fractional ownership of properties.",
  },
  {
    id: 2,
    image: "/assets/images2/Raj.jpg",
    name: "Raj Thakkar",
    role: "Founder ",
    description:
      "With over 21 years of experience in his family’s real estate business, Raj has lent his focus to residential real estate in Mumbai. He has delivered more than 1.2 million sq. ft., exclusively leading several project marketing initiatives with some leading developers. Over the years, he has sought to add an element of transparency to all aspects of the business, prioritising relationships over deals. His charming and friendly nature add a certain warmth to the business, while his dedication and professionalism have earned him the trust of many satisfied customers.",
  },
];
