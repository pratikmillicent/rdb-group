import React from "react";
import Image from "next/image";

const ProjectDetail: React.FC = () => {
  return (
    <div className="project-detail-page">
      {/* Hero Section */}
      <section
        className="hero-section text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1460317442991-0ec209397118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D)",
          backgroundSize: "cover",
          height: "90dvh",
        }}
      ></section>

      {/* Overview Section */}
      <section className="overview-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Project Overview</h2>
          <div className="row">
            <div className="col-md-6">
              <p className="fz-16 fw-400">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, culpa quod. Earum aperiam dolorum ipsum saepe odio.
                Dolorum ducimus veniam consequatur, molestiae tempore atque
                iusto at magnam exercitationem magni voluptate obcaecati optio
                fugit! Nesciunt necessitatibus corrupti molestias distinctio
                nisi totam a sit saepe dicta ipsa voluptates sequi minus
                voluptatem assumenda nemo repellat, quos aliquam velit,
                inventore cumque consequuntur libero quidem.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Project Overview"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights Section */}
      <section className="features-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Key Features</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-lightbulb-fill display-4"></i>
                <h4>Innovative Design</h4>
                <p>Highlight the innovative design aspects of the project.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-gear-fill display-4"></i>
                <h4>Robust Performance</h4>
                <p>Showcase how well the project performs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="bi bi-shield-fill display-4"></i>
                <h4>Security Focused</h4>
                <p>Explain the security measures taken.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">Project Gallery</h2>
          <div className="row">
            <div className="col-md-4">
              <Image
                src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "8px",
                }}
                width={800}
                height={500}
              />
            </div>
            <div className="col-md-4">
              <Image
                src="https://www.ghar.tv/projectimages/168/photo-518.jpg"
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "8px",
                }}
                width={800}
                height={500}
              />
            </div>
            <div className="col-md-4">
              <Image
                src="https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-40-Omkar-1973-Mumbai-5019920_345_1366_310_462.jpg"
                alt="image"
                style={{
                  height: "250px",
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: "8px",
                }}
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="contact-section py-5 bg-dark text-white">
        <div className="container text-center">
          <h2 className="mb-4">Interested in this project?</h2>
          <p>Contact us for more information or to get involved.</p>
          <button className="btn btn-outline-light">Contact Us</button>
        </div>
      </section> */}
    </div>
  );
};

export default ProjectDetail;
