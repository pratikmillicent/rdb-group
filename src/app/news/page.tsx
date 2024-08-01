// "use client";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from 'swiper';
// import { Navigation } from "swiper";
// import { useEffect, useState } from "react";
// import ModalVideo from "@/components/modal-video/ModalVideo";
// import Carousel from "@/components/carousel/Carousel";
// import Heading from "@/components/heading/Heading";
// interface Video {
//   image: string;
//   title: string;
//   videoId: string;
//   channel: string;
// }
// const News = () => {
//   const [loadSwiper, setLoadSwiper] = useState(false);
//   const [isVideoOpen, setIsVideoOpen] = useState<Video | null>(null);

//   const swiperOptions = {
//     modules: [Navigation, Autoplay],
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     slidesPerView: 3,
//     loop: true,
//     spaceBetween: 17,
//     speed: 1000,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       640: {
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//       },
//     },
//     navigation: {
//       nextEl: ".blog-modern .swiper-button-next",
//       prevEl: ".blog-modern .swiper-button-prev",
//     },
//   };

//   function openVideo(
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     item: Video
//   ) {
//     event.preventDefault();
//     setIsVideoOpen(item);
//   }

//   useEffect(() => {
//     setLoadSwiper(true);
//   }, []);
//   return (
//     <>
//       <img src="/assets/images/news/banner.png" style={{ height: "100vh" }} />
//       <div className="container">
//         <section
//           className="blog-modern section-padding"
//           style={{ paddingBottom: "0" }}
//         >
//           <div className="container">
//             <div className="sec-lg-head mb-30">
//               <div className="row">
//                 <div className="col-lg-8">
//                   {/* <Heading headTitle="LATEST NEWS" fontSize="fs-1" /> */}
//                   <div className="fz-50 fw-600">LATEST NEWS</div>
//                 </div>
//               </div>
//             </div>
//             <div className="blog-carsouel">
//               {loadSwiper && (
//                 <Swiper
//                   {...swiperOptions}
//                   id="content-carousel-container-unq-blog"
//                   className="swiper-container"
//                 >
//                   {data.map((item) => (
//                     <SwiperSlide
//                       key={item.id}
//                       className="wow fadeInUp"
//                       data-wow-delay=".1s"
//                     >
//                       <div className="item p-0">
//                         <div className="img img-container">
//                           <img
//                             src={item.image}
//                             alt=""
//                             style={{
//                               height: "320px",
//                               objectFit: "cover",
//                             }}
//                             className=""
//                           />
//                         </div>
//                         <div className="cont mt-30 ">
//                           <h6 className="fw-600">
//                             {/* <Link href={item.link}> */}
//                             {item.description}
//                             {/* </Link> */}
//                           </h6>
//                           <Link
//                             href={item.link}
//                             className="mt-6 ls1 sub-title fw-500"
//                           >
//                             Read More{" "}
//                             <i className="ml-5">
//                               <svg
//                                 width="18"
//                                 height="18"
//                                 viewBox="0 0 18 18"
//                                 fill="none"
//                                 xmlns="http://www.w3.org/2000/svg"
//                               >
//                                 <path
//                                   d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
//                                   fill="currentColor"
//                                 ></path>
//                               </svg>
//                             </i>
//                           </Link>
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               )}
//             </div>
//           </div>
//         </section>
//         <section
//           className="blog-modern section-padding"
//           style={{ paddingBottom: "0px" }}
//         >
//           {/* <div className="container">
//             <div className="sec-lg-head mb-30">
//               <div className="row">
//                 <div className="col-lg-8">
//                   {/* <Heading headTitle="AWARDS" fontSize="fs-1" /> */}
//           <div className="fz-50 fw-600">AWARDS</div>
//       </div>
//     </div >
//             </div >
//   <div className="blog-carsouel">
//     {loadSwiper && (
//       <Swiper
//         {...swiperOptions}
//         id="content-carousel-container-unq-blog"
//         className="swiper-container"
//       >
//         {data1.map((item) => (
//           <SwiperSlide
//             key={item.id}
//             className="wow fadeInUp"
//             data-wow-delay=".1s"
//           >
//             <div className="item p-0">
//               <div className="img outset-border">
//                 <img
//                   src={item.image}
//                   alt=""
//                   style={{
//                     height: "320px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     )}
//   </div>
//           </div >
//   <div className="container">
//     <div className="sec-lg-head mb-30">
//       <div className="row">
//         <div className="col-lg-8">
//           <Heading headTitle="AWARDS" fontSize="fs-1" />
//         </div>
//       </div>
//     </div>
//     <div className="blog-carousel">
//       <Swiper {...swiperOptions} id="content-carousel-container-unq-blog" className="swiper-container">
//         {data1.map((item) => (
//           <SwiperSlide key={item.id} className="wow fadeInUp" data-wow-delay=".1s">
//             <div className="item p-0">
//               <div className="img outset-border">
//                 <img
//                   src={item.image}
//                   alt=""
//                   style={{
//                     height: '320px',
//                     objectFit: 'cover',
//                   }}
//                 />
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </div>
//         </section >

//         <section
//           className="blog-modern section-padding"
//           style={{ paddingBottom: "0px" }}
//         >
//           <div className="container">
//             <div className="sec-lg-head mb-30">
//               <div className="row">
//                 <div className="col-lg-8">
//                   {/* <Heading headTitle="PHOTOS GALLERY" fontSize="fs-1" /> */}
//                   <div className="fz-50 fw-600">PHOTOS GALLERY</div>
//                 </div>
//               </div>
//             </div>
//             <div className="blog-carsouel">
//               {loadSwiper && (
//                 <Swiper
//                   {...swiperOptions}
//                   id="content-carousel-container-unq-blog"
//                   className="swiper-container"
//                 >
//                   {data2.map((item) => (
//                     <SwiperSlide
//                       key={item.id}
//                       className="wow fadeInUp"
//                       data-wow-delay=".1s"
//                     >
//                       <div className="item p-0">
//                         <div className="img outset-border">
//                           <img
//                             src={item.image}
//                             alt=""
//                             style={{
//                               height: "320px",
//                               objectFit: "cover",
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               )}
//             </div>
//           </div>
//         </section>

//         <div className="container section-padding">
//           <div className="sec-lg-head">
//             <div className="row">
//               <div className="col-lg-8">
//                 {/* <Heading headTitle="Video Gallery" fontSize="fs-1" /> */}
//                 <div className="fz-50 fw-600">Video Gallery</div>
//               </div>
//             </div>
//           </div>
//           <Carousel
//             data={videoData}
//             component={(item: Video) => (
//               <div onClick={(e) => openVideo(e, item)}>
//                 <div style={{ position: "relative" }}>
//                   <svg
//                     style={{
//                       position: "absolute",
//                       width: "100px",
//                       top: "50%",
//                       left: "50%",
//                       transform: "translate(-50%, -50%)",
//                     }}
//                     className="video-overlay-play-button"
//                     viewBox="0 0 200 200"
//                   >
//                     <circle
//                       cx="100"
//                       cy="100"
//                       r="90"
//                       fill="none"
//                       stroke-width="15"
//                       stroke="#fff"
//                     />
//                     <polygon points="70, 55 70, 145 145, 100" fill="#fff" />\
//                   </svg>
//                   <img src={item.image} />
//                 </div>
//                 <div
//                   style={{
//                     background: "#fff",
//                     padding: "16px",
//                     fontSize: "20px",
//                     fontWeight: "600",
//                   }}
//                 >
//                   {item.title}
//                 </div>
//               </div>
//             )}
//           />
//           <ModalVideo
//             isOpen={isVideoOpen}
//             onClose={() => setIsVideoOpen(null)}
//           />
//         </div>
//       </div >
//     </>
//   );
// };

// export default News;
// const data = [
//   {
//     id: 1,
//     image: "/assets/images2/news1.webp",
//     description: "Augmented Reality in Real Estate: Forecasting Market Trends in 2024",
//     link: "https://homecapital.in/augmented-reality-in-real-estate-forecasting-market-trends-in-2024/",
//   },
//   {
//     id: 2,
//     image: "/assets/images2/news2.jpg",
//     description: "Best Place for Real Estate Investment in Mumbai...",
//     link: "https://www.hiranandani.com/is-thane-the-best-real-estate-investment-destination.aspx",
//   },
//   {
//     id: 3,
//     image: "/assets/images2/news3.webp",
//     description: "Why Hire Real Estate Agent: Benefits & Reasons | Spiffy Spools",
//     link: "https://www.spiffyspools.com/spiffy-speak/why-hire-real-estate-agent/",
//   },
// ];

// const data1 = [
//   {
//     id: 1,
//     image: "/assets/images2/award1.jpg",
//   },
//   {
//     id: 2,
//     image: "/assets/images2/news-awards.jpg",
//   },
//   {
//     id: 3,
//     image: "/assets/images2/award3.avif",
//   },
//   {
//     id: 4,
//     image: "/assets/images2/news-awards.jpg",
//   },
// ];

// const data2 = [
//   {
//     id: 1,
//     image: "/assets/images2/proj1.jpg",
//   },
//   {
//     id: 2,
//     image: "/assets/images2/proj2.jpg",
//   },
//   {
//     id: 3,
//     image: "/assets/images2/proj3.jpg",
//   },
//   {
//     id: 4,
//     image: "/assets/images2/proj7.jpg",
//   },
//   {
//     id: 5,
//     image: "/assets/images2/proj8.jpg",
//   },
//   {
//     id: 6,
//     image: "/assets/images2/proj9.jpg",
//   },
//   {
//     id: 7,
//     image: "/assets/images2/proj10.jpg",
//   },
//   {
//     id: 8,
//     image: "/assets/images2/proj11.jpg",
//   },
//   {
//     id: 9,
//     image: "/assets/images2/proj12.jpg",
//   },
//   {
//     id: 4,
//     image: "/assets/images2/proj7.jpg",
//   },
//   {
//     id: 4,
//     image: "/assets/images2/proj7.jpg",
//   },
// ];

// const data3 = [
//   {
//     id: 1,
//     url: "https://www.youtube.com/embed/fUmSkEvet08?si=YIHahVn80b5_y-yo",
//   },
//   {
//     id: 2,
//     url: "https://www.youtube.com/embed/FeiiAvkAcnA?si=fXcp3EW3SacCe-hQ",
//   },
// ];

// const videoData: Video[] = [
//   {
//     image: "/assets/images/home/business-update2.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update1.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update2.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
//   {
//     image: "/assets/images/home/business-update1.webp",
//     title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
//     videoId: "AzwC6umvd1s",
//     channel: "youtube",
//   },
// ];

"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import ModalVideo from "@/components/modal-video/ModalVideo";
import Carousel from "@/components/carousel/Carousel";

interface Video {
  image: string;
  title: string;
  videoId: string;
  channel: string;
}

const News = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState<Video | null>(null);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 17,
    speed: 1000,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".blog-modern .swiper-button-next",
      prevEl: ".blog-modern .swiper-button-prev",
    },
  };

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  function openVideo(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    item: Video
  ) {
    event.preventDefault();
    setIsVideoOpen(item);
  }

  return (
    <>
      <img src="/assets/images/news/banner.png" style={{ height: "100vh" }} alt="News Banner" />
      <div className="container">
        <section className="blog-modern section-padding" style={{ paddingBottom: "60px" }}>
          <div className="container">
            <div className="sec-lg-head mb-30">
              <div className="row">
                <div className="col-lg-8">
                  <div className="fz-50 fw-600">LATEST NEWS</div>
                </div>
              </div>
            </div>
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper {...swiperOptions} id="content-carousel-container-unq-blog" className="swiper-container">
                  {data.map((item) => (
                    <SwiperSlide key={item.id} className="wow fadeInUp" data-wow-delay=".1s">
                      <div className="item p-0">
                        <div className="img img-container">
                          <img
                            src={item.image}
                            alt={item.description}
                            style={{ height: "320px", objectFit: "cover" }}
                            className=""
                          />
                        </div>
                        <div className="cont mt-30 ">
                          <h6 className="fw-600">
                            {item.description}
                          </h6>
                          <Link href={item.link} className="mt-6 ls1 sub-title fw-500">
                            Read More{" "}
                            <i className="ml-5">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          </div>
        </section>

        {/* Repeat similar sections for Awards and Photo Gallery */}
        {/* Additional sections and components should be structured similarly */}
      </div>
      <ModalVideo isOpen={isVideoOpen} onClose={() => setIsVideoOpen(null)} />
    </>
  );
};

export default News;

const data = [
  {
    id: 1,
    image: "/assets/images2/news1.webp",
    description: "Augmented Reality in Real Estate: Forecasting Market Trends in 2024",
    link: "https://homecapital.in/augmented-reality-in-real-estate-forecasting-market-trends-in-2024/",
  },
  {
    id: 2,
    image: "/assets/images2/news2.jpg",
    description: "Best Place for Real Estate Investment in Mumbai...",
    link: "https://www.hiranandani.com/is-thane-the-best-real-estate-investment-destination.aspx",
  },
  {
    id: 3,
    image: "/assets/images2/news3.webp",
    description: "Why Hire Real Estate Agent: Benefits & Reasons | Spiffy Spools",
    link: "https://www.spiffyspools.com/spiffy-speak/why-hire-real-estate-agent/",
  },
];

const data1 = [
  {
    id: 1,
    image: "/assets/images2/award1.jpg",
  },
  {
    id: 2,
    image: "/assets/images2/news-awards.jpg",
  },
  {
    id: 3,
    image: "/assets/images2/award3.avif",
  },
  {
    id: 4,
    image: "/assets/images2/news-awards.jpg",
  },
];

const data2 = [
  {
    id: 1,
    image: "/assets/images2/proj1.jpg",
  },
  {
    id: 2,
    image: "/assets/images2/proj2.jpg",
  },
  {
    id: 3,
    image: "/assets/images2/proj3.jpg",
  },
  {
    id: 4,
    image: "/assets/images2/proj7.jpg",
  },
  {
    id: 5,
    image: "/assets/images2/proj8.jpg",
  },
  {
    id: 6,
    image: "/assets/images2/proj9.jpg",
  },
  {
    id: 7,
    image: "/assets/images2/proj10.jpg",
  },
  {
    id: 8,
    image: "/assets/images2/proj11.jpg",
  },
  {
    id: 9,
    image: "/assets/images2/proj12.jpg",
  },
];

const videoData: Video[] = [
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update2.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
  {
    image: "/assets/images/home/business-update1.webp",
    title: "Expanding Horizons with Strategic Acquisitions and Future Growth",
    videoId: "AzwC6umvd1s",
    channel: "youtube",
  },
];
