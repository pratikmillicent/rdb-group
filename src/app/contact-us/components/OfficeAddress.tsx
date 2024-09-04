import Image from "next/image";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Heading from "@/components/heading/Heading";

const OfficeAddress = () => {
  const branchOffice = [
    {
      branch: "Mumbai",
      address:
        "Office No. 1, 2nd floor,Esspee Tower,Opp. Oberoi Sky City,Datta Pada Road,Off W.E. Highway,Borivali (E) Mumbai - 400066",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p1.jpg",
      // image : "/assets/images/office/"
    },
    {
      branch: "Surat",
      address:
        "304, Eco Futurz,Opp. Samarth Aquastic,Near Om Terrace,New City light Road,Surat - 395007",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p2.jpg",
    },
    {
      branch: "Vadodara",
      address:
        "Office No. 420,Neptune Edge,Sarabhai Campus,Nr. Genda Circle, Vadiwadi,Vadodara - 390023",
      email: "info@example.com",
      phone: "+1 123-456-7890",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p3.jpg",
    },
    {
      branch: "Ahmedabad",
      address:
        "C 2/01,The First Commercial Complex,B/H Keshav Baug Party,Plot Near Shivalik High Street,Vastrapur, Ahmedabad - 380015",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p1.jpg",
    },
    {
      branch: "Dubai",
      address: "1102, Regal Towers,Business Bay",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p2.jpg",
    },
  ];

  return (
    <div>
      <div className="">
        {/* <div className=""> */}
        <Heading headTitle="Our Headquarter" textAlign="left" isMargin="0" />
        {/* <div style={{ textAlign: "left" }} className="w-100">
            <h2 className="fs-2">
              <span>Headquarter office</span>
            </h2>
            <div
              className="border-line"
              style={{
                width: "10%",
                marginLeft: "27px",
              }}
            ></div>
          </div> */}
        {/* </div> */}

        <div className="col-md-4" style={{ backgroundSize: "cover" }}>
          <img
            src={
              "https://www.madebydesignesia.com/themes/justica/images/misc/p1.jpg"
            }
            alt=""
            className="img-fluid"
            style={{ marginBottom: "15px" }}
          />
          <h3 className="fz-22" style={{ marginBottom: "15px" }}>
            Andheri
          </h3>
          <address className="s1 d-flex flex-col gap-2 fz-15">
            <span className="d-flex">
              <span>
                {" "}
                <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
              </span>
              <span>
                302/303, 3rd Floor, 72 Empire,WEH Metro Station, Gate No. 8,
                Near Western Express Highway, Andheri East. Mumbai - 400 099.
              </span>
            </span>
            <span>
              <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
              +1 333 9296
            </span>
            <span>
              <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
              <a href="mailto:contact@example.com">contact@example.com</a>
            </span>
            {/* <span>
                <i className="id-color fa fa-file-pdf-o fa-lg"></i>
                <a href="#">Download Brochure</a>
              </span> */}
          </address>
        </div>
      </div>

      <div className="row">
        {/* <div className=""> */}
        <Heading headTitle="Our Branch" textAlign="left" />
        {/* <div className="d-flex justify-content-start">
            <div style={{ textAlign: "left" }} className="w-100">
              <h2 className="fs-2">
                <span>Branch office</span>
              </h2>
              <div
                className="border-line"
                style={{
                  width: "5%",
                  marginLeft: "20px",
                }}
              ></div>
            </div>
          </div> */}
        {/* </div> */}
        {branchOffice.map((item, index) => (
          //   <div className="col-4" key={index}>
          //     <div
          //       className=""
          //       style={{
          //         height: "385px",
          //         marginBottom: "15px",
          //       }}
          //     >
          //       <div className="">
          //         <Image
          //           src={item.image}
          //           alt={item.branch}
          //           style={{
          //             height: "200px",
          //             objectFit: "cover",
          //           }}
          //           width={800}
          //           height={500}
          //         />
          //       </div>
          //       <div className="">
          //         <div
          //           className="fz-22"
          //           style={{
          //             fontWeight: 600,
          //             lineHeight: "26px",
          //             marginBottom: "25px",
          //           }}
          //         >
          //           {item.branch}
          //         </div>
          //         <div
          //           className="d-flex justify-content-start align-items-center gap-2"
          //           style={{ fontSize: "15px", marginBottom: "8px" }}
          //         >
          //           <span style={{ color: "var(--golden)" }}>
          //             <IoLocationSharp />
          //           </span>
          //           <span style={{ color: "var(--grey)" }}>{item.address}</span>
          //         </div>

          //         <div className="d-flex justify-content-start align-items-center gap-2">
          //           <span style={{ color: "var(--golden)", marginBottom: "8px" }}>
          //             <FaPhoneAlt />
          //           </span>
          //           <span style={{ color: "var(--grey)" }}>{item.phone}</span>
          //         </div>
          //         <div className="d-flex justify-content-start align-items-center gap-2">
          //           <span style={{ color: "var(--golden)" }}>
          //             <MdOutlineMailOutline />
          //           </span>
          //           <span style={{ color: "var(--grey)" }}> {item.email}</span>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          <div
            key={index}
            className="col-md-4 "
            style={{ backgroundSize: "cover", marginBottom: "20px" }}
          >
            <img
              src={item.image}
              alt=""
              className="img-fluid mb30"
              style={{ marginBottom: "15px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "15px" }}>
              {item.branch}
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span className="d-flex">
                <span>
                  <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                </span>

                <span>{item.address}</span>
              </span>
              <span>
                <i className="id-color fa fa-phone fa-lg fz-12 me-3 text-golden"></i>
                +1 333 9296
              </span>
              <span>
                <i className="id-color far fa-envelope fz-12 fa-lg me-3 text-golden"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </span>
              {/* <span>
                <i className="id-color fa fa-file-pdf-o fa-lg"></i>
                <a href="#">Download Brochure</a>
              </span> */}
            </address>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfficeAddress;
