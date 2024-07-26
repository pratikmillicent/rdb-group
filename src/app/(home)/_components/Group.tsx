import React from "react";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: 1,
    image: "/assets/images/home/properties.webp",
    title: "Properties",
  },
  {
    id: 2,
    image: "/assets/images/home/proptech.jpg",
    title: "Proptech",
  },
  {
    id: 3,
    image: "/assets/images/home/realty.webp",
    title: "Realty",
  },
  {
    id: 4,
    image: "/assets/images/home/movie.webp",
    title: "Movies",
  },
  {
    id: 5,
    image: "/assets/images/home/movie.webp",
    title: "Business 5",
  },
  {
    id: 6,
    image: "/assets/images/home/movie.webp",
    title: "Business 6",
  },
];

function GroupGrid() {
  return (
    <section className="portfolio section-padding">
      <div className="container">
        <div className="sec-lg-head mb-10">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h2 className="fz-60 fw-700 underline">Group Websites</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>
                  Ventures spanning across diverse sectors, a global footprint
                  and a commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="row grid pr-0">
            {data.map((item) => (
              <div
                className={`col-lg-4 col-md-6 items info-overlay mb-30`}
                key={item.id}
              >
                <div className="item-img o-hidden">
                  <Link href="/" className="imago wow">
                    <div className="inner wow image-wrapper ">
                      <Image
                        width={1000}
                        height={1000}
                        src={item.image}
                        alt="image"                     
                      />
                    </div>
                    {/* <div className="upper-img">
                      <img src="/assets/images2/ribbon 2.svg" alt="ribbon" width={300} height={300}/>
                    </div>
                    <div className="lower-img">
                      <img src="/assets/images2/ribbon 2.svg" alt="ribbon" width={400} height={400}/>
                    </div> */}
                  </Link>
                  <div className="info">
                    <h5 className="border-bottom border-2 pb-1">
                      <Link href="/">{item.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupGrid;


// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const data = [
//   {
//     id: 1,
//     image: "/assets/images/home/properties.webp",
//     title: "Properties",
//   },
//   {
//     id: 2,
//     image: "/assets/images/home/proptech.jpg",
//     title: "Proptech",
//   },
//   {
//     id: 3,
//     image: "/assets/images/home/realty.webp",
//     title: "Realty",
//   },
//   {
//     id: 4,
//     image: "/assets/images/home/movie.webp",
//     title: "Movies",
//   },
//   {
//     id: 5,
//     image: "/assets/images/home/movie.webp",
//     title: "Business 5",
//   },
//   {
//     id: 6,
//     image: "/assets/images/home/movie.webp",
//     title: "Business 6",
//   },
// ];

// function GroupGrid() {
//   return (
//     <section className="portfolio section-padding">
//       <div className="container">
//         <div className="sec-lg-head mb-10">
//           <div className="row">
//             <div className="col-lg-8">
//               <div className="position-re">
//                 <h2 className="fz-60 fw-700 underline">Group Websites</h2>
//               </div>
//             </div>
//             <div className="col-lg-4 d-flex align-items-center">
//               <div className="text">
//                 <p>
//                   Ventures spanning across diverse sectors, a global footprint
//                   and a commitment to excellence.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="gallery">
//           <div className="row grid pr-0">
//             {data.map((item) => (
//               <div
//                 className={`col-lg-4 col-md-6 items info-overlay mb-30`}
//                 key={item.id}
//               >
//                 <div className="item-img o-hidden">
//                   <Link href="/" className="imago wow">
//                   <div className="border-img">
//                     <img src="/assets/images2/border2.jpg" alt="border" />
//                   </div>
//                     <div className="inner wow image-wrapper inside-img">
//                       <Image
//                         width={1000}
//                         height={1000}
//                         src={item.image}
//                         alt="image"                     
//                       />
//                     </div>
//                   </Link>
//                   <div className="info">
//                     <h5 className="border-bottom border-2 pb-1">
//                       <Link href="/">{item.title}</Link>
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default GroupGrid;
