import Image from "next/image";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const OfficeAddress = () => {
  const branchOffice = [
    {
      branch: "Mumbai",
      address: "08 W 36th St, New York, NY 10001",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p1.jpg",
    },
    {
      branch: "Surat",
      address: "08 W 36th St, New York, NY 10001",
      phone: "+1 123-456-7890",
      email: "info@example.com",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p2.jpg",
    },
    {
      branch: "Vadodara",
      address: "08 W 36th St, New York, NY 10001",
      email: "info@example.com",
      phone: "+1 123-456-7890",
      image:
        "https://www.madebydesignesia.com/themes/justica/images/misc/p3.jpg",
    },
    // {
    //   branch: "Ahmedabad",
    //   address:
    //     "C 2/01,The First Commercial Complex,B/H Keshav Baug Party,Plot Near Shivalik High Street,Vastrapur, Ahmedabad - 380015",
    //   phone: "+1 123-456-7890",
    //   email: "info@example.com",
    //   image:
    //     "https://media.istockphoto.com/id/1424699305/photo/atal-bridge-at-the-sabarmati-riverfront-in-ahmedabad.jpg?s=1024x1024&w=is&k=20&c=EjMm973TK5V7COAOMum8WPRn68iZVGQo5phpHbEQDnw=",
    // },
    // {
    //   branch: "Dubai",
    //   address: "1102, Regal Towers,Business Bay",
    //   phone: "+1 123-456-7890",
    //   email: "info@example.com",
    //   image:
    //     "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    // },
  ];

  return (
    <div>
      <div className="row">
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
            className="col-md-4"
            style={{ backgroundSize: "cover" }}
          >
            <img
              src={item.image}
              alt=""
              className="img-fluid mb30"
              style={{ marginBottom: "30px" }}
            />
            <h3 className="fz-22" style={{ marginBottom: "25px" }}>
              {item.branch} Office
            </h3>
            <address className="s1 d-flex flex-col gap-2 fz-15">
              <span>
                <i className="id-color fa fa-map-marker-alt fa-lg fz-12 me-3 text-golden"></i>
                08 W 36th St, New York, NY 10001
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
