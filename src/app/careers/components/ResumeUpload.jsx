import { useState } from "react";
import Heading from "@/components/heading/Heading";
import Image from "next/image";

const ResumeUpload = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected file:", file);
    setFormData((prevState) => ({
      ...prevState,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mt-60">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column align-items-start">
          <Heading headTitle="Join Our Team" width="90px" />
          <p>Work at the most dynamic and successful agency</p>

          <Image
            src="/assets/images2/resume-img.png"
            alt="Resume Illustration"
            className="img-fluid"
            style={{ maxHeight: "450px" }}
            width={800}
            height={500}
          />
        </div>
        <div className="col-lg-6">
          <section className="contact-crev mt-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="full-width border-0">
                    <form id="contact-form" onSubmit={handleSubmit}>
                      <div className="messages"></div>
                      <div className="controls row">
                        <div className="col-lg-6">
                          <label htmlFor="form_name">Name</label>
                          <div className="form-group mb-30 mt-5">
                            <input
                              style={{ background: "var(--white)" }}
                              id="form_name"
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="form_email">Email</label>
                          <div className="form-group mb-30 mt-5">
                            <input
                              style={{ background: "var(--white)" }}
                              id="form_email"
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="form_resume">Resume</label>
                          <div className="form-group mb-30 mt-5">
                            <input
                              style={{ background: "var(--white)" }}
                              id="form_resume"
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="form_coverLetter">Cover Letter</label>
                          <div className="form-group mt-5">
                            <textarea
                              style={{ background: "var(--white)" }}
                              id="form_coverLetter"
                              name="coverLetter"
                              value={formData.coverLetter}
                              onChange={handleChange}
                              placeholder="Cover Letter"
                              required
                            />
                          </div>
                          <div className="mt-30 mb-20">
                            <button
                              type="submit"
                              className="butn butn-md butn-bord radius-30"
                            >
                              Submit
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
    </div>
  );
};

export default ResumeUpload;
