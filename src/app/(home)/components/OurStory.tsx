import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div
      className="our-story-container"
      style={{ display: "flex", padding: "0 3rem", flexWrap: "wrap" }}
    >
      <div
        style={{ flex: "1 1 50%", display: "flex", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px 50px",
          }}
        >
          <Image
            src={`/assets/images2/Dhaval.jpg`}
            alt="Landscape picture"
            width={800}
            style={{
              height: "600px",
              width: "300px",
              borderRadius: "15px 0px 0px 15px",
            }}
            height={500}
          />
          <Image
            src={`/assets/images2/Raj.jpg`}
            alt="Landscape picture"
            width={800}
            style={{
              height: "600px",
              width: "300px",
              borderRadius: "15px 0px 0px 15px",
            }}
            height={500}
          />
        </div>
      </div>

      <div style={{ flex: "1 1 50%", maxHeight: "600px", overflowY: "auto" }}>
        <p className="fs-6">
          ANAROCK is first and foremost a people’s company, started by two
          friends who came together, and who grew to become veterans in Real
          Estate. Anuj Puri and Rohin Shah, the original “ANAROCKERS”, bonded
          over their shared passion of bringing order to the largely
          disorganised Real Estate sector way back in 1993. They wanted to
          re-imagine the Real Estate space with path-breaking innovations and
          new ways of working. They realized that they shared a passion towards
          making real estate more organized. Their shared work ethics and
          values, helped lay the foundation of ANAROCK’s robust, ethical, and
          value-oriented culture, focused firmly on bringing about transparency
          in the Real Estate sector. ANAROCK was born in 2017 with a passion to
          support the real estate industry and the desire to create a setup of
          professionals delivering not just properties, but solutions to
          customers. Their key objective was to make the communication between
          all stakeholders in the Real Estate industry transparent and easy to
          decode, leading to more informed decision making. ANAROCK has
          consistently been working towards this overarching objective since its
          inception. These two industry stalwarts had predicted the Residential
          Housing Boom that has now been in evidence in India over the last few
          years. They had the foresight to not only launch ANAROCK based on this
          belief, but also to scale it up and branch out across different value
          propositions in Real Estate. Since its inception, ANAROCK has grown
          from being a residential-focused company to operating in more than 15
          business verticals, covering the entire real estate value chain.
          ANAROCK has deployed cutting-edge technological interventions and
          bespoke tools across its business lines. Having grown into a
          formidable force in the sector, ANAROCK now offers a comprehensive
          suite of Real Estate solutions to all its customers.setup of
          professionals delivering not just properties, but solutions to
          customers. Their key objective was to make the communication between
          all stakeholders in the Real Estate industry transparent and easy to
          decode, leading to more informed decision making. ANAROCK has
          consistently been working towards this overarching objective since its
          inception. These two industry stalwarts had predicted the Residential
          Housing Boom that has now been in evidence in India over the last few
          years. They had the foresight to not only launch ANAROCK based on this
          belief, but also to scale it up and branch out across different value
          propositions in Real Estate. Since its inception, ANAROCK has grown
          from being a residential-focused company to operating in more than 15
          business verticals, covering the entire real estate value chain.
          ANAROCK has deployed cutting-edge technological interventions and
          bespoke tools across its business lines. Having grown into a
          formidable force in the sector, ANAROCK now offers a comprehensive
          suite of Real Estate solutions to all its customers
        </p>
      </div>
    </div>
  );
};

export default OurStory;
