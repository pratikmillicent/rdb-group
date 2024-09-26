import Heading from "@/components/heading/Heading";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const ProjectFracto = () => {
  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 80,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <div className="container">
      <Heading headTitle="Project" />
      <div className="gallery">
        <div className="row grid md-marg">
          <Swiper {...swiperOptions}>
            {Fractoproject.map((item) => (
              <div
                className={`col-lg-4 col-md-6 items ${item.filter} info-overlay mb-0 px-2`}
                key={item.id}
              >
                <SwiperSlide>
                  <div className="item-img o-hidden">
                    <Link href="fracto/FracProjDetail" className="imago wow">
                      <div className="inner wow">
                        <div className="img img-container">
                          <Image
                            src={item.image}
                            alt="image"
                            style={{
                              height: "300px",
                              objectFit: "cover",
                              width: "100%",
                              borderRadius: "8px",
                            }}
                            width={800}
                            height={500}
                          />
                        </div>
                        {/* <img src={item.image} alt="image" /> */}
                      </div>
                    </Link>
                    <div className="info">
                      <div className="effect-caption py-1">
                        <div className="text-left">
                          <h6 className="m-0">Monte South, Byculla (W)</h6>
                        </div>

                        <div className="effect-description text-left">
                          <p
                            style={{
                              fontSize: "12px",
                              fontStyle: "normal",
                              lineHeight: "22px",
                              color: "#000",
                              fontWeight: 500,
                            }}
                            className="description"
                          >
                            2, 2.5, 3 &amp; 3.5 BHK starting ₹3.41Cr Residential
                            | Ready &amp; Under-construction available
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectFracto;

const Fractoproject = [
  {
    id: 1,
    filter: "web",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWwlMjBlc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 2,
    filter: "app",
    image:
      "https://media.istockphoto.com/id/1350424607/photo/seating-area-with-a-sofa-next-to-a-beige-living-room-wall.jpg?s=612x612&w=0&k=20&c=BynGhd6Gw6R1nfWn_JdGywwFoy1oHfZM0wARToOsPRE=",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 3,
    filter: "brand",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 4,
    filter: "web",
    image:
      "https://media.istockphoto.com/id/905480644/photo/modern-new-light-interior-of-kitchen-with-white-furniture-and-dining-table.jpg?s=612x612&w=0&k=20&c=kuhJgH_1Zw1fecpkZLbQRQTwRGf-T-RbNxqvBEUlP3w=",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 5,
    filter: "app",
    image:
      "https://static.squareyards.com/resources/images/mumbai/project-image/raiaskaran-tech-park-project-project-large-image1.jpg",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  {
    id: 6,
    filter: "brand",
    image:
      "https://www.adanirealty.com/-/media/Project/Realty/Residential/Pune/Atelier-Greens/Carousel-Images/3.jpg",

    type: "Design ART",
    year: "2023",
    title: "Character Design",
  },
  // {
  //   id: 7,
  //   filter: "web",
  //   image:
  //     "https://img.staticmb.com/mbimages/project/Photo_h310_w462/Project-Photo-40-Omkar-1973-Mumbai-5019920_345_1366_310_462.jpg",

  //   type: "Design ART",
  //   year: "2023",
  //   title: "Character Design",
  // },
  // {
  //   id: 8,
  //   filter: "app",
  //   image: "https://www.ghar.tv/projectimages/168/photo-518.jpg",
  //   type: "Design ART",
  //   year: "2023",
  //   title: "Character Design",
  // },
];
