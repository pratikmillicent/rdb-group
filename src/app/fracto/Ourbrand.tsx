import Image from "next/image";
import React from "react";
import ambience from "assetsimages\brandsambience.png";
import Heading from "@/components/heading/Heading";

const Ourbrand = () => {
  const clients = [
    {
      name: "EMAAR",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/emaar.png",
    },

    {
      name: "JINDAL REALTY",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/jindal-realty.png",
    },

    {
      name: "SKA",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/ska-orion.png",
    },

    {
      name: "PYRAMID",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/pyramid.png",
    },
    {
      name: "AIPL",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/aipl.png",
    },
    {
      name: "DN HOMES",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/dn-homes.png",
    },
    {
      name: "RAHEJA",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/raheja.png",
    },
    {
      name: "SHETH",
      logo: "https://gtftechnologies.com/real-estate-landing-page-mumbai/images/brands/sheth.png",
    },
  ];
  return (
    <div className="our-clients section-padding mb-2">
      <div className="container">
        <Heading headTitle="Our Clients" />
        <div className="row justify-content-center px-2 px-md-1">
          {clients.map((client, index) => (
            <div
              className="col-lg-1 col-md-4 col-sm-4 col-6 p-1" // Added padding to create gap
              key={index}
            >
              <div
                className="card h-100"
                style={{
                  border: "1px solid var(--golden)",
                  padding: "10px", // Inner padding for content
                }}
              >
                <div
                  className="client-logo d-flex align-items-center justify-content-center"
                  style={{
                    margin: "0", // Ensure no margin to avoid double border effect
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={500}
                    height={500}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "120px",
                      maxHeight: "110px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourbrand;
