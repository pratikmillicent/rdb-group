import Heading from "@/components/heading/Heading";
import SocialIcon from "@/components/social-icon/SocialIcon";
import React, { useState } from "react";

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <Heading headTitle="Enquiry/Contact Us!" />
      <section className="contact-crev mt-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="sec-lg-head mb-60">
                {/* <h6 className="dot-titl-non mb-10">Get In Touch</h6> */}
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
                <div className="d-flex justify-content-start">
                  <SocialIcon />
                </div>
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
    </div>
  );
};

export default ContactComponent;
