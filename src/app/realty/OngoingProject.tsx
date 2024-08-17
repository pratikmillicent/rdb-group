import React from "react";

const OngoingProject = () => {
  return (
    <div>
      <section className="works thecontainer">
        {data.map((item) => (
          <div className="panel mt-30" key={item.id}>
            <div className="item">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="cont d-flex align-items-end">
                <div>
                  <span>{item.tag}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="ml-auto">
                  <h6>{item.date}</h6>
                </div>
              </div>
              <a href="#0" className="link-overlay"></a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OngoingProject;

const data = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1699290680631-3c254efc9eb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Web Design",
    title: "Color Integration",
    date: 2023,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1589321084815-4e5f1740cbc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",

    tag: "Mobile Software",
    title: "Color Integration",
    date: 2023,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1578687047263-631a67f01e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",

    tag: "Web Design",
    title: "New Gadgets",
    date: 2023,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1578687047263-631a67f01e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWx0eXxlbnwwfHwwfHx8MA%3D%3D",
    tag: "Web Design",
    title: "Digital Platform",
    date: 2023,
  },
  {
    id: 5,
    image: "/dark/assets/imgs/portfolio/4/05.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023,
  },
  {
    id: 6,
    image: "/dark/assets/imgs/portfolio/4/06.jpg",
    tag: "Web Design",
    title: "Branding Process",
    date: 2023,
  },
];
