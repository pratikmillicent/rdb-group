// check
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
import { useRef, useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

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
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);

  const memoizedStates = useMemo(
    () => [
      { name: "Maharashtra", lat: 19.7515, lng: 75.7139 },
      { name: "Karnataka", lat: 15.3173, lng: 75.7139 },
      { name: "Tamil Nadu", lat: 11.1271, lng: 78.6569 },
      { name: "Gujarat", lat: 22.2587, lng: 71.1924 },
      { name: "Rajasthan", lat: 27.0238, lng: 74.2179 },
    ],
    []
  );

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

    const newMarkers = memoizedStates?.map((state) => {
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
  }, [mapRef, memoizedStates]);

  const handleMouseEnter = (index: number) => {
    if (markers[index]) {
      const markerLayer = document.getElementById("markerLayer");
      if (markerLayer) {
        const images = markerLayer.getElementsByTagName("img");
        images[index].style.animation = "bounce 1s infinite alternate";
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    if (markers[index]) {
      const markerLayer = document.getElementById("markerLayer");
      if (markerLayer) {
        const images = markerLayer.getElementsByTagName("img");
        images[index].style.animation = "";
      }
    }
  };

  return (
    <>
      <Image
        src="/assets/images/contact/contact.jpg"
        className="circle-img contact-banner"
        alt="carrer page"
        // style={{ height: "100vh" }}
        width={800}
        height={500}
      />
      <div className="container mt-60">
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
            <div className="gap-3 section-padding">
              <div className="mt-30">
                <Heading headTitle="Registered Offices:" />
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
                <div style={{ marginBottom: "60px" }}>
                  <div className="col-12 ">
                    <div className="">
                      <Heading headTitle="Global Presence" />
                      {/* <div className="fz-35 fw-600">Global Presence</div> */}
                      <div
                        className="w-75 position-relative"
                        style={{ margin: "60px auto" }}
                      >
                        <Image
                          src="/assets/images/contact/map.png"
                          className="w-100"
                          alt="map"
                          style={{ height: "100vh" }}
                          width={800}
                          height={500}
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
