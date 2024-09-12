import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import PrevNext from "@/utils/PrevNext";
import Link from "next/link";
import Heading from "@/components/heading/Heading";

const Project = () => {
  const [loadSwiper, setLoadSwiper] = useState(false);

  const latestPrevRef = useRef(null);
  const latestNextRef = useRef(null);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  const swiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 2.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      prevEl: latestPrevRef.current,
      nextEl: latestNextRef.current,
    },
    // breakpoints: {
    //   0: {
    //     slidesPerView: 1.1,
    //   },
    //   640: {
    //     slidesPerView: 1.3,
    //   },
    //   768: {
    //     slidesPerView: 1.5,
    //   },
    //   1024: {
    //     slidesPerView: 1.7,
    //   },
    // },
    onSwiper: (swiper: any) => {
      setTimeout(() => {
        swiper.navigation.init();
        swiper.navigation.update();
      }, 0);
    },
  };

  const [active, setActive] = useState(0);
  return (
    <div
      className="overflow-hidden"
      style={{
        marginTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <Heading headTitle="Project" />
      <div className="">
        <section className="">
          {/* <div
            style={{
              position: "relative",
              display: "flex",
              gap: "12px",
              fontSize: "20px",
              fontWeight: "500",
              color: "var(--navy)",
              marginBottom: "24px",
              marginTop: "12px",
              left: "41%",
            }}
          >
            <div
              onClick={() => setActive(0)}
              style={{
                cursor: "pointer",
              }}
            >
              RELEASED
            </div>
            <div
              onClick={() => setActive(1)}
              style={{
                cursor: "pointer",
              }}
            >
              UPCOMING
            </div>

            <div
              style={{
                position: "absolute",
                left: active === 0 ? "12px" : active === 1 ? "125px" : "208px",
                bottom: -4,
                height: "2px",
                width: "3.5em",
                background: "var(--golden)",
                transition: "all ease .5s",
              }}
            ></div>
          </div> */}
          {active == 0 && (
            <div
              style={{
                background: "var(--navy)",
                padding: "20px 0",
              }}
            >
              <div className="blog-carsouel">
                {loadSwiper && (
                  <Swiper
                    {...swiperOptions}
                    id="content-carousel-container-unq-blog"
                    className="swiper-container"
                    style={{ background: "inherit" }}
                  >
                    {release.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="item">
                          <div className="img image-container film">
                            {/* <div
                            style={{
                              position: "absolute",
                              top: "5%",
                              fontSize: "20px",
                              padding: "20px",
                              transition: "none",
                            }}
                          >
                            comming soon
                          </div> */}
                            <Image
                              // className="w-100"
                              style={
                                {
                                  // filter: "grayscale(90%)",
                                  // objectFit: "cover",
                                  // objectPosition: "center center",
                                }
                              }
                              src={item.image}
                              alt={item.description}
                              width={400}
                              height={400}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
          )}

          {active == 1 && (
            <div className="blog-carsouel">
              {loadSwiper && (
                <Swiper
                  {...swiperOptions}
                  id="content-carousel-container-unq-blog"
                  className="swiper-container"
                >
                  {upcoming.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="item pb-5 mb-3">
                        <div className="img image-container">
                          <Image
                            src={item.image}
                            alt={item.description}
                            width={800}
                            height={500}
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Project;

const release: IMovie[] = [
  {
    id: 1,
    image:
      "https://www.justwatch.com/images/backdrop/302387776/s640/kutch-express/kutch-express",
    description: "Luxury Apartments in South Mumbai - Completed in 2023",
  },
  {
    id: 2,
    image: "https://i.ytimg.com/vi/RiQJw0znUjw/maxresdefault.jpg",
    description: "Commercial Complex in Andheri - Completed in 2022",
  },
  {
    id: 3,
    image: "https://i.ytimg.com/vi/RiQJw0znUjw/maxresdefault.jpg",
    description: "Luxury Apartments in South Mumbai - Completed in 2023",
  },
  {
    id: 4,
    image:
      "https://www.justwatch.com/images/backdrop/302387776/s640/kutch-express/kutch-express",
    description: "Commercial Complex in Andheri - Completed in 2022",
  },

  {
    id: 5,
    image:
      "https://www.justwatch.com/images/backdrop/302387776/s640/kutch-express/kutch-express",
    description: "Commercial Complex in Andheri - Completed in 2022",
  },
  {
    id: 6,
    image: "https://i.ytimg.com/vi/RiQJw0znUjw/maxresdefault.jpg",
    description: "Luxury Apartments in South Mumbai - Completed in 2023",
  },
];

const upcoming: IMovie[] = [];

interface IMovie {
  id: number;
  image: string;
  description: string;
}

// import Image from "next/image";
// import React, { useRef, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper";
// import PrevNext from "@/utils/PrevNext";
// import Link from "next/link";
// import Heading from "@/components/heading/Heading";

// const Project = () => {
//   const [loadSwiper, setLoadSwiper] = useState(false);

//   const latestPrevRef = useRef(null);
//   const latestNextRef = useRef(null);

//   useEffect(() => {
//     setLoadSwiper(true);
//   }, []);

//   const swiperOptions = {
//     modules: [Navigation, Autoplay],
//     autoplay: {
//       delay: 1000,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: true,
//     },
//     slidesPerView: 3,
//     slidesPerGroup: 3,
//     loop: false,
//     spaceBetween: 17,
//     speed: 1000,
//     navigation: {
//       prevEl: latestPrevRef.current,
//       nextEl: latestNextRef.current,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//       },
//       640: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//       768: {
//         slidesPerView: 2,
//         slidesPerGroup: 2,
//       },
//       1024: {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//       },
//     },
//     onSwiper: swiper => {
//       setTimeout(() => {
//         swiper.navigation.init();
//         swiper.navigation.update();
//       }, 0);
//     },
//   };
//   const [active, setActive] = useState(0);
//   return (
//     <div
//       className="overflow-hidden"
//       style={{
//         marginTop: "40px",
//         paddingBottom: "40px",
//       }}
//     >
//       <Heading headTitle="Project" />
//       {/* <div
//         className="position-relative"
//         style={{
//           height: "90vh",
//           width: "100vw",
//         }}
//       >
//         <Image
//           src="https://www.edgehill.ac.uk/wp-content/uploads/2022/07/Creative-Arts.jpg"
//           alt="Our Mission"
//           layout="fill"
//           objectFit="cover"
//           className="position-absolute w-100 h-100"
//         />
//         <div
//           className="overlay position-absolute w-100 h-100"
//           style={{ opacity: 0.9, background: "var(--navy)" }}
//         ></div>
//         <div className="container text-center position-relative text-white d-flex flex-col justify-content-center align-item-center h-100">
//           <h1 className="mb-4 movie-mission">Our Mission</h1>
//           <p className="movie-mission-text">
//             At RD Brothers Studio, our mission is to inspire, entertain, and
//             connect people through the power of storytelling. We are committed
//             to producing high-quality films that not only captivate audiences
//             but also ignite emotions, provoke thought, and leave a lasting
//             impact.
//           </p>
//         </div>
//       </div> */}
//       {/* <section className="">
//         <div
//           style={{
//             height: "50px",
//             width: "100vw",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               height: "50px",
//               width: "200%",
//               backgroundImage: "url('/assets/images/movie/strip1.jpg')",
//               backgroundRepeat: "repeat",
//               backgroundSize: "contain",
//               animation: "scrolling 10s linear infinite",
//             }}
//           ></div>
//         </div>
//       </section> */}
//       <div className="">
//         <section className="container">
//           <div
//             style={{
//               position: "relative",
//               display: "flex",
//               gap: "12px",
//               fontSize: "18px",
//               fontWeight: "500",
//               color: "var(--navy)",
//               marginBottom: "12px",
//               marginTop: "12px",
//             }}
//           >
//             <div
//               onClick={() => setActive(0)}
//               style={{
//                 cursor: "pointer",
//               }}
//             >
//               RELEASED
//             </div>
//             <div
//               onClick={() => setActive(1)}
//               style={{
//                 cursor: "pointer",
//               }}
//             >
//               UPCOMING
//             </div>

//             <div
//               style={{
//                 position: "absolute",
//                 left: active === 0 ? "10px" : active === 1 ? "108px" : "208px",
//                 bottom: -4,
//                 height: "2px",
//                 width: "3.5em",
//                 background: "var(--golden)",
//                 transition: "all ease .5s",
//               }}
//             ></div>
//           </div>
//           {active == 0 && (
//             <div className="blog-carsouel">
//               {loadSwiper && (
//                 <Swiper
//                   {...swiperOptions}
//                   id="content-carousel-container-unq-blog"
//                   className="swiper-container"
//                 >
//                   {release.map(item => (
//                     <SwiperSlide
//                       key={item.id}
//                       className="wow fadeInUp"
//                       data-wow-delay=".100s"
//                     >
//                       <div className="item pb-5 mb-3">
//                         <div className="img image-container">
//                           <Image
//                             src={item.image}
//                             alt={item.description}
//                             width={800}
//                             height={500}
//                           />
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               )}
//               <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} />
//             </div>
//           )}

//           {active == 1 && (
//             <div className="blog-carsouel">
//               {loadSwiper && (
//                 <Swiper
//                   {...swiperOptions}
//                   id="content-carousel-container-unq-blog"
//                   className="swiper-container"
//                 >
//                   {upcoming.map(item => (
//                     <SwiperSlide
//                       key={item.id}
//                       className="wow fadeInUp"
//                       data-wow-delay=".100s"
//                     >
//                       <div className="item pb-5 mb-3">
//                         <div className="img image-container">
//                           <Image
//                             src={item.image}
//                             alt={item.description}
//                             width={800}
//                             height={500}
//                           />
//                         </div>
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               )}
//               <PrevNext prevRef={latestPrevRef} nextRef={latestNextRef} />
//             </div>
//           )}
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Project;

// const release: IMovie[] = [
//   {
//     id: 1,
//     image: "https://i.ytimg.com/vi/RiQJw0znUjw/maxresdefault.jpg",
//     description: "Luxury Apartments in South Mumbai - Completed in 2023",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.justwatch.com/images/backdrop/302387776/s640/kutch-express/kutch-express",
//     description: "Commercial Complex in Andheri - Completed in 2022",
//   },
// ];

// const upcoming: IMovie[] = [
//   // {
//   //   id: 1,
//   //   image: "https://theunbiasedguy.com/wp-content/uploads/2024/05/Jhamkudi.png",
//   //   description: "Skyline Tower in South Mumbai - Expected Completion in 2025",
//   // },
// ];

// interface IMovie {
//   id: number;
//   image: string;
//   description: string;
// }
