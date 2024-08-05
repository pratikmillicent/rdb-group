// @ts-nocheck
// "use client";

// import { FaMapMarkerAlt } from "react-icons/fa";
// import Heading from "@/components/heading/Heading";
// import { useEffect, useRef, useState } from "react";
// import "./map.css";

// const ContactUs = () => {
//   const mapRef = useRef<HTMLDivElement | null>(null);
//   // const [map, setMap] = useState<google.maps.Map | null>(null);
//   const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
//   // const [activeMarker, setActiveMarker] = useState<google.maps.Marker | null>(
//   //   null
//   // );
//   // console.log("activeMarker", activeMarker);

//   // Updated countries array to include multiple states within India
//   const states = [
//     { name: "Maharashtra", lat: 19.7515, lng: 75.7139 },
//     { name: "Karnataka", lat: 15.3173, lng: 75.7139 },
//     { name: "Tamil Nadu", lat: 11.1271, lng: 78.6569 },
//     { name: "Gujarat", lat: 22.2587, lng: 71.1924 },
//     { name: "Rajasthan", lat: 27.0238, lng: 74.2179 },
//   ];

//   useEffect(() => {
//     if (!mapRef.current) return;

//     const mapOptions: google.maps.MapOptions = {
//       zoom: 5,
//       center: new google.maps.LatLng(20.5937, 78.9629),
//       mapTypeControl: false,
//     };

//     const mapInstance = new google.maps.Map(mapRef.current, mapOptions);
//     // setMap(mapInstance);

//     const myIcon: any = (
//       <div>
//         <i className="fa-solid fa-location"></i>
//       </div>
//     );
//     const catIcon: google.maps.Icon = {
//       url: myIcon,
//       size: new google.maps.Size(80, 40),
//       scaledSize: new google.maps.Size(40, 30),
//       origin: new google.maps.Point(-15, 0),
//     };

//     const newMarkers = states?.map((state) => {
//       const marker = new google.maps.Marker({
//         position: new google.maps.LatLng(state.lat, state.lng),
//         map: mapInstance,
//         icon: catIcon,
//         optimized: false,
//       });
//       return marker;
//     });

//     setMarkers(newMarkers);

//     // Set the first state marker as the default active marker
//     // if (newMarkers.length > 0) {
//     //   setActiveMarker(newMarkers[0]);
//     // }

//     const overlay = new google.maps.OverlayView();
//     overlay.draw = function () {
//       const panes = this.getPanes && this.getPanes();
//       if (panes && panes.markerLayer) {
//         panes.markerLayer.id = "markerLayer";
//       }
//     };
//     overlay.setMap(mapInstance);
//   }, [mapRef]);

//   const handleMouseEnter = (index: number) => {
//     if (markers[index]) {
//       // setActiveMarker(markers[index]);
//       const markerLayer = document.getElementById("markerLayer");
//       if (markerLayer) {
//         const images = markerLayer.getElementsByTagName("img");
//         images[index].style.animation = "bounce 1s infinite alternate";
//       }
//     }
//   };

//   const handleMouseLeave = (index: number) => {
//     if (markers[index]) {
//       // setActiveMarker(null);
//       const markerLayer = document.getElementById("markerLayer");
//       if (markerLayer) {
//         const images = markerLayer.getElementsByTagName("img");
//         images[index].style.animation = "";
//       }
//     }
//   };

//   return (
//     <>
//       <img
//         src="/assets/images/contact/banner.png"
//         style={{ height: "100vh" }}
//       />
//       <div className="container section-padding">
//         <div className="d-flex gap-3">
//           <div className="col-12 col-md-11 mt-30">
//             <Heading headTitle="Contact Us Now!" />
//             {/* <div className="w-75 msg_box">
//               <div className="">
//                 <div className="">
//                   <p className="text-dark">Enter Full Name</p>
//                   <input
//                     placeholder="ENTER YOUR NAME..."
//                     className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
//                   ></input>
//                   <p className="text-dark mt-20">Enter Phone Number</p>
//                   <input
//                     placeholder="ENTER YOUR NUMBER..."
//                     className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
//                   ></input>
//                   <p className="text-dark mt-20">Enter Email Address</p>
//                   <input
//                     placeholder="ENTER YOUR ADDRESS..."
//                     className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
//                   ></input>
//                 </div>
//                 <div className="mt-20">
//                   <button className="btn border-secondary cnt_btn1 p-2 text-white">
//                     Send
//                   </button>
//                 </div>
//               </div>
//             </div> */}
// <section className="contact-crev section-padding">
//   <div className="container">
//     <div className="row">
//       <div className="col-lg-5">
//         <div className="sec-lg-head mb-80">
//           <h6 className="dot-titl-non mb-10">Get In Touch</h6>
//           <h2 className="fz-50">Let's get in <br /> touch with us.</h2>
//           <p className="fz-15 mt-10">If you would like to work with us or just want to get in
//             touch, we’d love to hear from you!</p>
//           <div className="phone fz-30 fw-600 mt-30 ">
//             <a href="#0">+1 840 841 25 69</a>
//           </div>
//           <ul className="rest social-text d-flex mt-60">
//             <li className="mr-30">
//               <a href="#0">Facebook</a>
//             </li>
//             <li className="mr-30">
//               <a href="#0">Twitter</a>
//             </li>
//             <li className="mr-30">
//               <a href="#0">LinkedIn</a>
//             </li>
//             <li>
//               <a href="#0">Instagram</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="col-lg-6 offset-lg-1 valign">
//         <div className="full-width">
//           <form id="contact-form" method="post" action="contact.php">
//             <div className="messages"></div>
//             <div className="controls row">
//               <div className="col-lg-6">
//                 <div className="form-group mb-30">
//                   <input id="form_name" type="text" name="name" placeholder="Name"
//                     required="required" />
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="form-group mb-30">
//                   <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="form-group mb-30">
//                   <input id="form_subject" type="text" name="subject" placeholder="Subject" />
//                 </div>
//               </div>
//               <div className="col-12">
//                 <div className="form-group">
//                   <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
//                 </div>
//                 <div className="mt-30">
//                   <button type="submit" className="butn butn-md butn-bord radius-30">
//                     <span className="text">Let's Talk</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//             <div className="gap-3 section-padding">
//               <div className="">
//                 <Heading headTitle="Registered Offices:" />
//                 <div className="row text-light msg_box">
//                   <div className="col-12 col-md-4 mb-2">
//                     <p className="text-dark fw-bold">
//                       Aspect Global Ventures Pvt.Ltd.:
//                     </p>
//                     <p>50l, 5th Floor Dalamal House,</p>
//                     <p>206 Jamnalal Bajal Marg,</p>
//                     <p>Nariman Point,</p>
//                     <p>Mumbai - 400021,</p>
//                     <p>CIN no. U01100MH2917PTC301477</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">
//                       Aspect Bullion & Refinery:
//                     </p>
//                     <p>Aspect House,2 Floor-3,Plot-66,</p>
//                     <p>Shaikh Memon Sreet,</p>
//                     <p>Zaveri Bzar,Klbadevi,</p>
//                     <p>Mumbai - 400002.</p>
//                     <p>CIN no U65999MH2011PTC217736</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">Aspect Infrastructure:</p>
//                     <p>2nd Floor,Sayba Emaraid,</p>
//                     <p>CTS no 318,Village Bandra,</p>
//                     <p>CIN no.U74999MH2017PTC302872</p>
//                   </div>
//                 </div>
//                 <div className="row text-light msg_box">
//                   <div className="col-12 col-md-4 mb-2">
//                     <p className="text-dark fw-bold">Aspect Reality</p>
//                     <p>2nd Floor,Sayba Emaraid,</p>
//                     <p>CTS no 1318,Village Bandra,</p>
//                     <p>Bandra West, Mumbai - 400050</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">
//                       Aspect Bullion & Refinery:
//                     </p>
//                     <p>4th Floor,12 A Nichani Kutir,</p>
//                     <p>CTS no. 996.TPS - 11,</p>
//                     <p>Juhu Tara Rd,Mumbai - 400049,</p>
//                     <p>CIN no. U01100MH2013PTC249055</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">Ecomix Concrete:</p>
//                     <p>Survey No.229(A), Off Eastern Freeway,</p>
//                     <p>Before Bhakti Park Exit, Next to Apple</p>
//                     <p>Cricket Ground, Wadala - 400074, </p>
//                     <p>CIN no.ABD-0877</p>
//                   </div>
//                 </div>
//                 <div className="row text-light msg_box">
//                   <div className="col-12 col-md-4 mb-2">
//                     <p className="text-dark fw-bold">Aspect Reality</p>
//                     <p>Office No.7,Ground Floor,</p>
//                     <p>Railway Road,</p>
//                     <p>Near Chinpurni Mata Mandir,</p>
//                     <p>Sec-05,Gurgaon,</p>
//                     <p>Haryana-22001,</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">
//                       Aspect Bullion & Refinery:
//                     </p>
//                     <p>501,5th Floor, Dalamal House,</p>
//                     <p>206 Jamnalal Bajaj Marg,</p>
//                     <p>Nariman Point,</p>
//                     <p>Mumbai - 400021</p>
//                   </div>
//                   <div className="col-12 col-md-4  mb-2">
//                     <p className="text-dark fw-bold">Email ID:</p>
//                     <p>info@aspectglobal</p>
//                   </div>
//                 </div>
//                 <div
//                   className="section-padding"
//                   style={{ marginBottom: "60px" }}
//                 >
//                   <div className="col-12 ">
//                     <div>
//                       <Heading headTitle="Global Presence" />
//                       {/* <div className="w-75" style={{ margin: "60px auto" }}>
//                     <div className="w-75 position-relative" style={{ margin: "60px auto" }}>
//                       <img
//                         src="/assets/images2/map.png"
//                         alt=""
//                         className="w-100"
//                       />
//                     </div> */}
//                       <div
//                         className="map-container mt-2"
//                         style={{ display: "flex" }}
//                       >
//                         <div
//                           id="map"
//                           ref={mapRef}
//                           style={{ width: "100%", height: "100%" }}
//                         ></div>
//                         <div
//                           className="country-list p-3"
//                           style={{
//                             width: "30%",
//                             border: "1px solid #ddd",
//                             borderRadius: "5px",
//                             boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//                           }}
//                         >
//                           <ul className="list-group">
//                             {states.map((country, index) => (
//                               <li
//                                 key={country.name}
//                                 className="list-group-item"
//                                 onMouseOver={() => handleMouseEnter(index)}
//                                 onMouseOut={() => handleMouseLeave(index)}
//                                 style={{
//                                   cursor: "pointer",
//                                   transition: "background-color 0.3s",
//                                 }}
//                               >
//                                 {country.name}
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

"use client";
import MapComponent from "./components/MapComponent";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import Heading from "@/components/heading/Heading";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const ContactUs = () => {
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

  const mapRef = useRef<HTMLDivElement | null>(null);
  // const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  // const [activeMarker, setActiveMarker] = useState<google.maps.Marker | null>(
  //   null
  // );
  // console.log("activeMarker", activeMarker);

  // Updated countries array to include multiple states within India
  const states = [
    { name: "Maharashtra", lat: 19.7515, lng: 75.7139 },
    { name: "Karnataka", lat: 15.3173, lng: 75.7139 },
    { name: "Tamil Nadu", lat: 11.1271, lng: 78.6569 },
    { name: "Gujarat", lat: 22.2587, lng: 71.1924 },
    { name: "Rajasthan", lat: 27.0238, lng: 74.2179 },
  ];

  const locations = [
    { name: "Maharshtra", coords: [19.7515, 75.7139] },
    { name: "Karnatka", coords: [15.3173, 75.7139] },
    { name: "Tamilnadu", coords: [11.1271, 78.6569] },
  ];

  useEffect(() => {
    if (!mapRef.current) return;

    const mapOptions: google.maps.MapOptions = {
      zoom: 5,
      center: new google.maps.LatLng(20.5937, 78.9629),
      mapTypeControl: false,
    };

    const mapInstance = new google.maps.Map(mapRef.current, mapOptions);
    // setMap(mapInstance);

    // const myIcon: any = (
    //   <div>
    //     <i className="fa-solid fa-location-dot"></i>
    //   </div>
    // );
    const catIcon: google.maps.Icon = {
      url: "/assets/images/pin.png",
      size: new google.maps.Size(80, 40),
      scaledSize: new google.maps.Size(40, 30),
      origin: new google.maps.Point(-15, 0),
    };

    const newMarkers = states?.map((state) => {
      const marker = new google.maps.Marker({
        position: new google.maps.LatLng(state.lat, state.lng),
        map: mapInstance,
        icon: catIcon,
        optimized: false,
      });
      return marker;
    });

    setMarkers(newMarkers);

    const overlay = new google.maps.OverlayView();
    overlay.draw = function () {
      const panes = this.getPanes && this.getPanes();
      if (panes && panes.markerLayer) {
        panes.markerLayer.id = "markerLayer";
      }
    };
    overlay.setMap(mapInstance);
  }, [mapRef]);

  const handleMouseEnter = (index: number) => {
    if (markers[index]) {
      // setActiveMarker(markers[index]);
      const markerLayer = document.getElementById("markerLayer");
      if (markerLayer) {
        const images = markerLayer.getElementsByTagName("img");
        images[index].style.animation = "bounce 1s infinite alternate";
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    if (markers[index]) {
      // setActiveMarker(null);
      const markerLayer = document.getElementById("markerLayer");
      if (markerLayer) {
        const images = markerLayer.getElementsByTagName("img");
        images[index].style.animation = "";
      }
    }
  };

  return (
    <>
      <img src="/assets/images/contact/contact.jpg" style={{ height: "100vh" }} />
      <div className="container">
        <div className="d-flex gap-3">
          <div className="col-12 col-md-11">
            <Heading headTitle="Contact Us Now!" />
            <section className="contact-crev mt-30">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="sec-lg-head mb-60">
                      <h6 className="dot-titl-non mb-10">Get In Touch</h6>
                      <h2 className="fz-50">
                        Let's get in <br /> touch with us.
                      </h2>
                      <p className="fz-15 mt-10">
                        If you would like to work with us or just want to get in
                        touch, we’d love to hear from you!
                      </p>
                      <div className="phone fz-30 fw-600 mt-30 ">
                        <a href="#0">+91 9877737776</a>
                      </div>
                      <ul className="rest social-text d-flex mt-30 ml-10">
                        <li className="mr-40">
                          <Link href="https://www.facebook.com/">
                            <FaFacebook className="main-color3 fz-24 social-icon" />
                          </Link>
                        </li>
                        <li className="mr-40">
                          <Link href="https://x.com/">
                            <FaTwitter className="main-color3 fz-24 social-icon" />
                          </Link>
                        </li>
                        <li className="mr-40">
                          <Link href="https://www.linkedin.com/">
                            <FaLinkedin className="main-color3 fz-24 social-icon" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.instagram.com/">
                            <FaInstagramSquare className="main-color3 fz-24 social-icon" />
                          </Link>
                        </li>
                      </ul>
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
            <div className="gap-3">
              <div>
                <Heading headTitle="Registered Offices:" />
                {/* <div className="fz-35 fw-600">Registered Offices : </div> */}
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Global Ventures Pvt.Ltd.:
                    </p>
                    <p>50l, 5th Floor Dalamal House,</p>
                    <p>206 Jamnalal Bajal Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021,</p>
                    <p>CIN no. U01100MH2917PTC301477</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>Aspect House,2 Floor-3,Plot-66,</p>
                    <p>Shaikh Memon Sreet,</p>
                    <p>Zaveri Bazar,Klbadevi,</p>
                    <p>Mumbai - 400002.</p>
                    <p>CIN no U65999MH2011PTC217736</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Aspect Infrastructure:</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 318,Village Bandra,</p>
                    <p>CIN no.U74999MH2017PTC302872</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">Aspect Reality</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 1318,Village Bandra,</p>
                    <p>Bandra West, Mumbai - 400050</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>4th Floor,12 A Nichani Kutir,</p>
                    <p>CTS no. 996.TPS - 11,</p>
                    <p>Juhu Tara Rd,Mumbai - 400049,</p>
                    <p>CIN no. U01100MH2013PTC249055</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Ecomix Concrete:</p>
                    <p>Survey No.229(A), Off Eastern Freeway,</p>
                    <p>Before Bhakti Park Exit, Next to Apple</p>
                    <p>Cricket Ground, Wadala - 400074, </p>
                    <p>CIN no.ABD-0877</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-grey fw-bold">Aspect Reality</p>
                    <p>Office No.7,Ground Floor,</p>
                    <p>Railway Road,</p>
                    <p>Near Chinpurni Mata Mandir,</p>
                    <p>Sec-05,Gurgaon,</p>
                    <p>Haryana-22001,</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>501,5th Floor, Dalamal House,</p>
                    <p>206 Jamnalal Bajaj Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-grey fw-bold">Email ID:</p>
                    <p>info@aspectglobal</p>
                  </div>
                </div>
                <div
                  style={{ marginBottom: "60px" }}
                >
                  <div className="col-12 ">
                    <div className="">
                      <Heading headTitle="Global Presence" />
                      {/* <div className="fz-35 fw-600">Global Presence</div> */}
                      <div
                        className="w-75 position-relative"
                        style={{ margin: "60px auto" }}
                      >
                        <img
                          src="/assets/images/contact/map.png"
                          alt=""
                          className="w-100"
                        />
                        <div className="icon-container1">
                          <FaMapMarkerAlt className="main-color3 fz-24" />
                          <span className="tooltip-text">
                            501, Aspect Global Ventures Pvt.Ltd <br /> Dalamal
                            House, 206 Jamnalal Bajal Marg <br />
                            Nariman Point Mumbai{" "}
                          </span>
                        </div>
                        <div className="icon-container2">
                          <FaMapMarkerAlt className="main-color3 fz-24" />
                          <span className="tooltip-text">
                            1224, Aspect Global Ventures Pvt.Ltd <br /> Dalamal
                            House, 206 Jamnalal Bajal Marg <br />
                            China
                          </span>
                        </div>
                        <div className="icon-container3">
                          <FaMapMarkerAlt className="main-color3 fz-24" />
                          <span className="tooltip-text">
                            501, Aspect Global Ventures Pvt.Ltd <br /> Dalamal
                            House, 206 Jamnalal Bajal Marg <br />
                            UAE{" "}
                          </span>
                        </div>
                      </div>

                      {/* <div
                      className="map-container mt-2"
                      style={{ display: "flex" }}
                    >
                      <div
                        id="map"
                        ref={mapRef}
                        style={{ width: "100%", height: "100%" }}
                      ></div>
                      <div
                        className="country-list p-3"
                        style={{
                          width: "30%",
                          border: "1px solid #ddd",
                          borderRadius: "5px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <ul className="list-group">
                          {states.map((country, index) => (
                            <li
                              key={country.name}
                              className="list-group-item"
                              onMouseOver={() => handleMouseEnter(index)}
                              onMouseOut={() => handleMouseLeave(index)}
                              style={{
                                cursor: "pointer",
                                transition: "background-color 0.3s",
                              }}
                            >
                              {country.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
                <div>
                  <Heading headTitle="Global Presence" />
                  <MapComponent locations={locations} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon } from 'leaflet';
// import Heading from "@/components/heading/Heading";
// import 'leaflet/dist/leaflet.css';

// // Define the marker icon
// const markerIcon = new Icon({
//   iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
//   popupAnchor: [0, -41],
// });

// // Define an array of locations with coordinates and information
// const locations = [
//   {
//     name: 'Mumbai Office',
//     position: [19.076, 72.8777],
//     info: 'Aspect Global Ventures Pvt. Ltd.<br />Mumbai - 400021',
//   },
//   {
//     name: 'New York Office',
//     position: [40.7128, -74.0060],
//     info: 'Aspect Global Ventures Pvt. Ltd.<br />New York, NY 10001',
//   },
//   {
//     name: 'London Office',
//     position: [51.5074, -0.1278],
//     info: 'Aspect Global Ventures Pvt. Ltd.<br />London, UK SW1A 1AA',
//   },
//   // Add more locations as needed
// ];

// const ContactUs = () => {
//   // Coordinates for the map center
//   const position = [20.5937, 78.9629]; // Center of the map (approximate center of India)

//   return (
//     <div className="container section-padding">
//       <div className="d-flex gap-3">
//         <div className="col-12 col-md-11">
//           <Heading headTitle="Contact Us Now!" />
//           <div className="w-75 msg_box">
//             {/* Contact form */}
//             {/* ... your existing form code ... */}
//           </div>
//           <div className="gap-3 section-padding">
//             {/* Registered offices */}
//             {/* ... your existing office details code ... */}
//             <div className="section-padding" style={{ marginBottom: "60px" }}>
//               <div className="col-12">
//                 <div>
//                   <Heading headTitle="Global Presence" />
//                   <div style={{ height: "400px" }}>
//                     <MapContainer center={position} zoom={2} style={{ height: "100%", width: "100%" }}>
//                       <TileLayer
//                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                       />
//                       {locations.map((loc, index) => (
//                         <Marker key={index} position={loc.position} icon={markerIcon}>
//                           <Popup>
//                             {loc.info}
//                           </Popup>
//                         </Marker>
//                       ))}
//                     </MapContainer>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
