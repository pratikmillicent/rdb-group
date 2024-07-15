const News = () => {
  const data = [
    {
      id: 1,
      image: "/assets/images2/img1.jpg",
      description: "People Choice Awards - NAREDCO 2023",
    },
    {
      id: 2,
      image: "/assets/images2/img4.jpg",
      description: "Top Emerging Developer - Times Of India 2023",
    },
    {
      id: 3,
      image: "/assets/images2/img3.jpg",
      description: "Best Construction Quality Award - Reality Quaters 2023",
    },
  ];
  const data1 = [
    {
      id: 1,
      image: "/assets/images2/img-aw.jpeg",
    },
    {
      id: 2,
      image: "/assets/images2/img-aw.jpeg",
    },
    {
      id: 3,
      image: "/assets/images2/img-aw.jpeg",
    },
    {
      id: 4,
      image: "/assets/images2/img-aw.jpeg",
    },
  ];
  const data2 = [
    {
      id: 1,
      image: "/assets/images2/img_fml.jpg",
    },
    {
      id: 2,
      image: "/assets/images2/img_fml.jpg",
    },
    {
      id: 3,
      image: "/assets/images2/img_fml.jpg",
    },
    {
      id: 4,
      image: "/assets/images2/img_fml.jpg",
    },
  ];
  const data3 = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/fUmSkEvet08?si=YIHahVn80b5_y-yo",
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/FeiiAvkAcnA?si=fXcp3EW3SacCe-hQ",
    },
  ];

  return (
    <>
      <div className="w-75 mx-auto">
        <div className="">
          <div className="news_line">
            <span></span>
          </div>
          <h1 className="fw-bold fs-1">NEWS UPDATES</h1>
        </div>
        <div className="row grid md-marg">
          {data.map((item) => (
            <div
              className={`col-lg-4 col-md-6 items  info-overlay mb-50`}
              key={item.id}
            >
              <div className="item-img o-hidden">
                <div className="inner wow">
                  <img src={item.image} alt="image" />
                </div>
                <div className="info text-center py-3 grid_description">
                  <p className="text-dark">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="fw-900">
          <div className="awd_line">
            <span></span>
          </div>
          <h1 className="fs-1 fw-900">AWARDS</h1>
        </div>
        <div className="row grid md-marg">
          {data1.map((item) => (
            <div
              className={`col-lg-3 col-md-6 items  info-overlay mb-50`}
              key={item.id}
            >
              <div className="item-img o-hidden">
                <div className="inner wow">
                  <img src={item.image} alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="photos_line">
            <span></span>
          </div>
          <h1 className="fs-1 font-bold">PHOTOS GALLERY</h1>
        </div>
        <div className="row grid md-marg">
          {data2.map((item) => (
            <div
              className={`col-lg-3 col-md-6 items  info-overlay mb-50`}
              key={item.id}
            >
              <div className="item-img o-hidden">
                <div className="inner wow">
                  <img src={item.image} alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="Line"></div>
          <p className="text-black-50 fs-5">VIDEO</p>
        </div>
        <div>
          <div className="gallery_line">
            <span></span>
          </div>
          <h1 className="fs-1 font-bold">Gallery</h1>
        </div>
        <div className="">
          <div className="row grid">
            {data3.map((item) => (
              <div
                className={`col-md-6 items info-overlay mb-80 d-flex justify-content-center`}
                key={item.id}
              >
                <div className="item-img o-hidden">
                  <div className="inner wow">
                    <iframe
                      width="560"
                      height="315"
                      src={item.url}
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
