import React, { useState } from "react";
import "../TeamSection2.css";
import Image from "next/image";
import Heading from "@/components/heading/Heading";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Link from "next/link";

const teamMembers1 = [
  {
    name: "Tom Knolltonns",
    title: "Consultant",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Juliet Alan",
    title: "PR Manager",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Bill Ewing",
    title: "Photographer",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Fiona Endley",
    title: "Consultant",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

const teamMembers2 = [
  {
    name: "Tom Knolltonns",
    title: "Consultant",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-1.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Juliet Alan",
    title: "PR Manager",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-2.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Bill Ewing",
    title: "Photographer",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-3.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    name: "Fiona Endley",
    title: "Consultant",
    description:
      "Lorem Ipsum aenean commodo dolig trium. Proin qual de suis erestopius.",
    imgSrc: "/assets/images2/Main-team-4.jpg",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

function TeamSection2() {
  const [grid1, setGrid1] = useState(2);
  const [grid2, setGrid2] = useState(3);

  return (
    <div className="container mb-80">
      <Heading headTitle="Team" />
      <div className={`team-section2 grid-${grid1}`}>
        {teamMembers1.map((member, i) => (
          <div
            key={i}
            className={`${grid1 === i + 1 && "grid-visible"}`}
            onMouseEnter={() => setGrid1(i + 1)}
          >
            <Image
              src={member.imgSrc}
              className="img-fluid"
              alt={member.name}
              width={500}
              height={800}
            />
            <div className="details">
              <h2 className="position">{member.title}</h2>
              <h3 className="name">{member.name}</h3>
              <p className="description">{member.description}</p>
              <div className="social-media-links">
                <Link href={member.social.facebook}>
                  <FaFacebook />
                </Link>
                <Link href={member.social.twitter}>
                  <FaTwitter />
                </Link>
                <Link href={member.social.instagram}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ lineHeight: "75%" }}>
        <br />
      </div>
      <div className={`team-section2 grid-${grid2}`}>
        {teamMembers2.map((member, i) => (
          <div
            key={i}
            className={`${grid2 === i + 1 && "grid-visible"}`}
            onMouseEnter={() => setGrid2(i + 1)}
          >
            <Image
              src={member.imgSrc}
              className="img-fluid"
              alt={member.name}
              width={500}
              height={800}
            />
            <div className="details">
              <h2 className="position">{member.title}</h2>
              <h3 className="name">{member.name}</h3>
              <p className="description">{member.description}</p>
              <div className="social-media-links">
                <Link href={member.social.facebook}>
                  <FaFacebook />
                </Link>
                <Link href={member.social.twitter}>
                  <FaTwitter />
                </Link>
                <Link href={member.social.instagram}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamSection2;
