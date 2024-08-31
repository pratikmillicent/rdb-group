import Heading from "@/components/heading/Heading";
import SocialIcon from "@/components/social-icon/SocialIcon";
import React, { useState } from "react";

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
    <div className="container">
      <div className="">
        <Heading headTitle="Contact Us" />
        <section className="contact-crev mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12" style={{ paddingLeft: 0 }}>
                <div className="sec-lg-head mb-60">
                  <h2 className="fz-50">
                    Let's get in <br /> touch with us.
                  </h2>
                  <p className="fz-15 mt-10">
                    If you would like to work with us or just want to get in
                    touch, we’d love to hear from you!
                  </p>
                  <div className="phone fz-30 fw-600 mt-30">
                    <a href="#0" className="text-decoration-none">
                      +91 9877737776
                    </a>
                  </div>

                  {/* <ul className="d-flex justify-content-center justify-content-lg-start align-items-center pt-3">
                    <li className="mx-2">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-decoration-none"
                        style={{ color: "white" }}
                      >
                        <i
                          className="fab fa-instagram fa-2x"
                          style={{
                            background:
                              "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        ></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-decoration-none"
                        style={{ color: "#3b5998" }}
                      >
                        <i className="fab fa-facebook fa-2x"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-decoration-none"
                        style={{ color: "#000000" }}
                      >
                        <i className="fab fa-x-twitter fa-2x"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-decoration-none"
                        style={{ color: "#0A66C2" }}
                      >
                        <i className="fab fa-linkedin fa-2x"></i>
                      </a>
                    </li>
                    <li className="mx-2">
                      <a
                        href="https://www.youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center text-decoration-none"
                        style={{ color: "#FF0000" }}
                      >
                        <i className="fab fa-youtube fa-2x"></i>
                      </a>
                    </li>
                  </ul> */}
                  <SocialIcon />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="full-width">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="messages"></div>
                    <div className="controls row">
                      <div className="col-md-6">
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
                      <div className="col-md-6">
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
      </div>
    </div>
  );
};

export default Contact;
