import Image from "next/image";
import React from "react";

interface DirectorData {
  id: number;
  name: string;
  title: string;
  image: string;
  desc: string;
}

interface DirectorProps {
  Data: DirectorData[];
}

const Director: React.FC<DirectorProps> = ({ Data }) => {
  return (
    <div className="row">
      {Data?.map((item) => (
        <div className="col-12 col-md-4 pb-4" key={item.id}>
          <div>
            <div className="item-img o-hidden">
              <div className="imago wow">
                <div className="inner wow">
                  <Image
                    width={1000}
                    height={1000}
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "200px",
                      objectFit: "cover",

                      overflow: "hidden",
                    }}
                    src={item.image}
                    alt="image"
                  />
                </div>
              </div>
            </div>
            <div className="info d-flex align-items-center">
              <div>
                <div className="fs-5 py-2 main-color3 fw-bold">{item.name}</div>

                <div className="fz-12 fw-bold pb-2 main-color3">
                  {item.title}
                </div>
                <div className="fz-12 main-color3">{item.desc}</div>
              </div>
            </div>
            <div className="arrow mt-5 cursor-pointer">
              <span className="fz-12 main-color3 mr-10 text-decoration-underline">
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
