import React from "react";

const director = [
  {
    id: 1,
    name: "Bonas THAKKAR - ",
    title: "FOUNDER & CEO",
    image: "/assets/images2/Bonas_Thakkar.jpg",
    desc: "Bonas Thakkar has 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 2,
    name: "Bonas THAKKAR - ",
    title: "FOUNDER & CEO",
    image: "/assets/images2/Bonas_Thakkar.jpg",
    desc: "Bonas Thakkar has 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
  {
    id: 3,
    name: "Bonas THAKKAR - ",
    title: "FOUNDER & CEO",
    image: "/assets/images2/Bonas_Thakkar.jpg",
    desc: "Bonas Thakkar has 10 YEARS OF EXPERIENCE IN HIS FAMILY'S REAL ESTATE BUSINESS, RAJ HAS LENT HIS FOCUS TO RESIDENTIAL REAL ESTATE IN MUMBAI",
  },
];

const Director = () => {
  return (
    <div className="row">
      {director.map((data, key) => (
        <div className="col-12 col-md-4 pb-4" key={data.id}>
          <div>
            <div className="w-75">
              <img src={data.image} alt="" />
            </div>
            <div className="info d-flex align-items-center">
              <div className="">
                <div className="fs-5 py-2 link-danger fw-bold">{data.name}</div>

                <div className="fz-12 fw-bold pb-2">{data.title}</div>
                <p
                  className="fz-12"
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    width: "300px",
                  }}
                >
                  {data.desc}
                </p>
              </div>
            </div>
            <div className="arrow mt-5 cursor-pointer">
              <span className="fz-12 text-danger mr-10 text-decoration-underline">
                Read More
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Director;
