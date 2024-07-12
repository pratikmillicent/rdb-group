import Link from "next/link";
import React from "react";

const director = [
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
  {
    name: "Hitest Keshwari",
    title: "Managing Director - Aspect Global & President Operation",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Temporibus unde eaque sunt minus tempore ea enim harum facilissimilique. Qui sequi, voluptas quasi sunt perspiciatis laborumrerum aut blanditiis, debitis labore corrupti itaque officiisbeatae nostrum. Suscipit voluptatum ipsam perferendis similiquealiquid? Nesciunt, quo!",
  },
];

const Director = () => {
  return (
    <div className="row">
      {director.map((data, key) => (
        <div className="col-12 col-md-4 pb-4" key={key}>
          <div>
            <div className="w-100">
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrm4eYJn6gJYcN_euL5UamqUmT52R7TmWXg&s"
                }
                alt=""
              />
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
