// @ts-nocheck
"use client";

import { FaMapMarkerAlt } from "react-icons/fa";
import Heading from "@/components/heading/Heading";
import { useEffect, useRef, useState } from "react";
import "./map.css";

const ContactUs = () => {
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
      <img
        src="/assets/images/contact/banner.png"
        style={{ height: "100vh" }}
      />

      <div className="container section-padding">
        <div className="d-flex gap-3">
          <div className="col-12 col-md-11">
            <Heading headTitle="Contact Us Now!" />
            <div className="w-75 msg_box">
              <div className="">
                <div className="">
                  <p className="text-dark">Enter Full Name</p>
                  <input
                    placeholder="ENTER YOUR NAME..."
                    className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
                  ></input>
                  <p className="text-dark mt-20">Enter Phone Number</p>
                  <input
                    placeholder="ENTER YOUR NUMBER..."
                    className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
                  ></input>
                  <p className="text-dark mt-20">Enter Email Address</p>
                  <input
                    placeholder="ENTER YOUR ADDRESS..."
                    className="w-100 mb-2 p-2 inpt_box rounded border border-secondary"
                  ></input>
                </div>
                <div className="mt-20">
                  <button className="btn border-secondary cnt_btn1 p-2 text-white">
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div className="gap-3 section-padding">
              <div className="">
                <Heading headTitle="Registered Offices:" />
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-dark fw-bold">
                      Aspect Global Ventures Pvt.Ltd.:
                    </p>
                    <p>50l, 5th Floor Dalamal House,</p>
                    <p>206 Jamnalal Bajal Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021,</p>
                    <p>CIN no. U01100MH2917PTC301477</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>Aspect House,2 Floor-3,Plot-66,</p>
                    <p>Shaikh Memon Sreet,</p>
                    <p>Zaveri Bzar,Klbadevi,</p>
                    <p>Mumbai - 400002.</p>
                    <p>CIN no U65999MH2011PTC217736</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">Aspect Infrastructure:</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 318,Village Bandra,</p>
                    <p>CIN no.U74999MH2017PTC302872</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-dark fw-bold">Aspect Reality</p>
                    <p>2nd Floor,Sayba Emaraid,</p>
                    <p>CTS no 1318,Village Bandra,</p>
                    <p>Bandra West, Mumbai - 400050</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>4th Floor,12 A Nichani Kutir,</p>
                    <p>CTS no. 996.TPS - 11,</p>
                    <p>Juhu Tara Rd,Mumbai - 400049,</p>
                    <p>CIN no. U01100MH2013PTC249055</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">Ecomix Concrete:</p>
                    <p>Survey No.229(A), Off Eastern Freeway,</p>
                    <p>Before Bhakti Park Exit, Next to Apple</p>
                    <p>Cricket Ground, Wadala - 400074, </p>
                    <p>CIN no.ABD-0877</p>
                  </div>
                </div>
                <div className="row text-light msg_box">
                  <div className="col-12 col-md-4 mb-2">
                    <p className="text-dark fw-bold">Aspect Reality</p>
                    <p>Office No.7,Ground Floor,</p>
                    <p>Railway Road,</p>
                    <p>Near Chinpurni Mata Mandir,</p>
                    <p>Sec-05,Gurgaon,</p>
                    <p>Haryana-22001,</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">
                      Aspect Bullion & Refinery:
                    </p>
                    <p>501,5th Floor, Dalamal House,</p>
                    <p>206 Jamnalal Bajaj Marg,</p>
                    <p>Nariman Point,</p>
                    <p>Mumbai - 400021</p>
                  </div>
                  <div className="col-12 col-md-4  mb-2">
                    <p className="text-dark fw-bold">Email ID:</p>
                    <p>info@aspectglobal</p>
                  </div>
                </div>
                <div
                  className="section-padding"
                  style={{ marginBottom: "60px" }}
                >
                  <div className="col-12 ">
                    <div>
                      <Heading headTitle="Global Presence" />
                      {/* <div className="w-75" style={{ margin: "60px auto" }}>
                    <div className="w-75 position-relative" style={{ margin: "60px auto" }}>
                      <img
                        src="/assets/images2/map.png"
                        alt=""
                        className="w-100"
                      />
                    </div> */}
                      <div
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
                      </div>
                    </div>
                  </div>
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
