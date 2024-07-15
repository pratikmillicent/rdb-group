import Heading from "@/components/heading/Heading";

const ContactUs = () => {
  return (
    <div className="container section-padding">
      <div className="d-flex gap-3">
        {/* <div className="col-12 col-md-1 contact_line mt-3"></div> */}
        <div className="col-12 col-md-11">
          {/* <p className="fs-4 fw-bold text-dark">
            Questions or concerns? Contact Us Now!
          </p> */}
          {/* <div className=""> */}
          <Heading headTitle="Contact Us Now!" />
          {/* </div> */}
          <div className="w-75 msg_box">
            {/* <div className="row text-light msg_box">
              <div className="col-12 col-md-4 text-center mb-2">
                <p className="text-light">Enter Full Name</p>
              </div>
              <div className="col-12 col-md-4 text-center mb-2">
                <p className="text-light">Enter Phone Number</p>
              </div>
              <div className="col-12 col-md-4 text-center mb-2">
                <p className="text-light">Enter Email Address</p>
              </div>
            </div> */}
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
          <div className="d-flex gap-3 section-padding">
            {/* <div className="col-12 col-md-1 contact_line mt-3"></div> */}
            <div className="">
              {/* <p className="fs-4 fw-bold text-dark">
                Reach out for assistance and support. We're here to listen and
                help you thrive
              </p> */}
              {/* <p className="fs-4 fw-bold text-dark">
                Registered Offices:
              </p> */}
              {/* <div className="d-flex justify-content-center w-100 mt-30"> */}
              <Heading headTitle="Registered Offices:" />
              {/* </div> */}
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
              <div className="section-padding" style={{ marginBottom: "60px" }}>
                <div className="col-12 ">
                  <div>
                    {/* ======= */}
                    {/* <p className="fz-30 fw-bold text-center text-dark">
                      Global Presence
                    </p> */}
                    <Heading headTitle="Global Presence" />
                    <div className="w-75" style={{ margin: "60px auto" }}>
                      <img
                        src="/assets/images2/map.png"
                        alt=""
                        className="w-100"
                      />
                      {/* >>>>>>> fc0e9628b16eeb6a40a7025e1bbc8ee40d8ce3ea */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
