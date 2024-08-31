import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import SocialIcon from "../social-icon/SocialIcon";

function Footer() {
  return (
    <footer className="bg-navy light-text">
      <div className="footer-container">
        <div className="container pb-60 pt-60 ontop">
          <div className="row">
            <div className="col-lg-3">
              <div className="colum md-mb50">
                <div
                  className="tit mb-20"
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  <h6>Address</h6>
                </div>
                <div className="light-text">
                  <p
                    className="light-text"
                    style={{
                      fontSize: "15px",
                      lineHeight: "26px",
                      fontWeight: 400,
                    }}
                  >
                    Gate No 8, Metro Station, 302-303, 3rd floor, 72 Empire,
                    WEH, Near, Western Express Hwy, Andheri East, Mumbai,
                    Maharashtra 400099
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="colum md-mb50">
                <div className="tit mb-20">
                  <h6
                    style={{
                      fontSize: "16px",
                      lineHeight: "19px",
                      fontWeight: 600,
                    }}
                  >
                    Get in touch
                  </h6>
                </div>
                <div
                  className="text"
                  style={{
                    fontSize: "15px",
                    lineHeight: "26px",
                    fontWeight: 400,
                  }}
                >
                  <div className="mb-10">
                    <Link href="mailto:info@rdbrothers.com">
                      info@rdbrothers.com
                    </Link>
                  </div>
                  <div className="">
                    <li>
                      <Link href="tel:+91 9321711146">+91 9321711146</Link>
                    </li>
                    <li>
                      <Link href="tel:+91 9877737776">+91 9877737776</Link>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  Search
                </h6>
              </div>
              <ul
                className="rest social-text"
                style={{
                  fontSize: "15px",
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                <li>
                  <Link href="/properties">Properties</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/project-marketing">Project Marketing</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 md-mb50">
              <div className="tit mb-20">
                <h6
                  style={{
                    fontSize: "16px",
                    lineHeight: "19px",
                    fontWeight: 600,
                  }}
                >
                  Corporate
                </h6>
              </div>
              <ul
                className="rest social-text"
                style={{
                  fontSize: "15px",
                  lineHeight: "26px",
                  fontWeight: 400,
                }}
              >
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-footer pt-40 pb-40 bord-thin-top ontop">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center text-center text-lg-left">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="logo">
                  <Link href="#">
                    <Image
                      src="/rdb-group.svg"
                      className="w-100"
                      alt="rdb group"
                      width={800}
                      height={500}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 mb-4 mb-lg-0">
                <SocialIcon />
              </div>
              <div className="col-lg-4">
                <div className="copyright d-flex justify-content-center justify-content-lg-end">
                  <div className="fz-13">
                    Copyright © 2024 All rights reserved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
