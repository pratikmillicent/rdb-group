import React from "react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Heading from "@/components/heading/Heading";
import { useState } from "react";
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import SocialIcon from "@/components/social-icon/SocialIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="container mt-60">
      <div className="d-flex gap-3">
        <div className="col-12 col-md-11">
          <Heading headTitle="Contact Us!" />
          <section className="contact-crev mt-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-5" style={{ paddingLeft: 0 }}>
                  <div className="sec-lg-head mb-60">
                    {/* <h6 className="dot-titl-non mb-10">Get In Touch</h6> */}
                    <h2 className="fz-50">
                      Let's get in <br /> touch with us.
                    </h2>
                    <p className="fz-15 mt-10">
                      If you would like to work with us or just want to get in
                      touch, we’d love to hear from you!
                    </p>
                    <div className="phone fz-30 fw-600 mt-30 ">
                      <a href="#0">+91 9877737776</a>
                    </div>
                    <SocialIcon />
                  </div>
                </div>
                <div className="col-lg-6 offset-lg-1 valign">
                  <div className="full-width">
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div className="messages"></div>
                      <div className="controls row">
                        <div className="col-lg-6">
                          <div className="form-group mb-30">
                            <input
                              style={{ background: "white" }}
                              id="form_name"
                              type="text"
                              value={formData.name}
                              name="name"
                              onChange={handleChange}
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group mb-30">
                            <input
                              style={{ background: "white" }}
                              id="form_email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <input
                              style={{ background: "white" }}
                              id="form_subject"
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <textarea
                              style={{ background: "white" }}
                              id="form_message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="Message"
                            ></textarea>
                          </div>
                          <div className="mt-30 mb-20">
                            <button
                              type="submit"
                              className="butn butn-md butn-bord radius-30"
                            >
                              <span className="text">Let's Talk</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="gap-3 section-padding">
            <div className="mt-30">
              <Heading headTitle="Registered Offices:" />
              <div className="row text-light msg_box">
                <div className="col-12 col-md-4 mb-2">
                  <p className="text-grey fw-bold">
                    Aspect Global Ventures Pvt.Ltd.:
                  </p>
                  <p>50l, 5th Floor Dalamal House,</p>
                  <p>206 Jamnalal Bajal Marg,</p>
                  <p>Nariman Point,</p>
                  <p>Mumbai - 400021,</p>
                  <p>CIN no. U01100MH2917PTC301477</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">
                    Aspect Bullion & Refinery:
                  </p>
                  <p>Aspect House,2 Floor-3,Plot-66,</p>
                  <p>Shaikh Memon Sreet,</p>
                  <p>Zaveri Bazar,Klbadevi,</p>
                  <p>Mumbai - 400002.</p>
                  <p>CIN no U65999MH2011PTC217736</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">Aspect Infrastructure:</p>
                  <p>2nd Floor,Sayba Emaraid,</p>
                  <p>CTS no 318,Village Bandra,</p>
                  <p>CIN no.U74999MH2017PTC302872</p>
                </div>
              </div>
              <div className="row text-light msg_box">
                <div className="col-12 col-md-4 mb-2">
                  <p className="text-grey fw-bold">Aspect Reality</p>
                  <p>2nd Floor,Sayba Emaraid,</p>
                  <p>CTS no 1318,Village Bandra,</p>
                  <p>Bandra West, Mumbai - 400050</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">
                    Aspect Bullion & Refinery:
                  </p>
                  <p>4th Floor,12 A Nichani Kutir,</p>
                  <p>CTS no. 996.TPS - 11,</p>
                  <p>Juhu Tara Rd,Mumbai - 400049,</p>
                  <p>CIN no. U01100MH2013PTC249055</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">Ecomix Concrete:</p>
                  <p>Survey No.229(A), Off Eastern Freeway,</p>
                  <p>Before Bhakti Park Exit, Next to Apple</p>
                  <p>Cricket Ground, Wadala - 400074, </p>
                  <p>CIN no.ABD-0877</p>
                </div>
              </div>
              <div className="row text-light msg_box">
                <div className="col-12 col-md-4 mb-2">
                  <p className="text-grey fw-bold">Aspect Reality</p>
                  <p>Office No.7,Ground Floor,</p>
                  <p>Railway Road,</p>
                  <p>Near Chinpurni Mata Mandir,</p>
                  <p>Sec-05,Gurgaon,</p>
                  <p>Haryana-22001,</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">
                    Aspect Bullion & Refinery:
                  </p>
                  <p>501,5th Floor, Dalamal House,</p>
                  <p>206 Jamnalal Bajaj Marg,</p>
                  <p>Nariman Point,</p>
                  <p>Mumbai - 400021</p>
                </div>
                <div className="col-12 col-md-4  mb-2">
                  <p className="text-grey fw-bold">Email ID:</p>
                  <p>info@aspectglobal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
