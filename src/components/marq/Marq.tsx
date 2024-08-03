import React from "react";

function Marq({ data }: { data: string[] }) {
  return (
    // <section className="serv-marq" style={{ backgroundColor: "#1F2D58" }}>
    //   <div className="container-fluid rest">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="main-marq" style={{ color: "#FFF" }}>
    //           <div className="slide-har st1" style={{ padding: "12px 0" }}>
    //             <div className="box non-strok">
    //               {data?.map((item: string) => (
    //                 <span
    //                   key={item}
    //                   style={{
    //                     fontSize: "16px",
    //                     textWrap: "nowrap",
    //                     marginLeft: "50px",
    //                   }}
    //                 >
    //                   {item}
    //                 </span>
    //               ))}
    //             </div>
    //             <div className="box non-strok">
    //               {data?.map((item: string) => (
    //                 <span
    //                   key={item}
    //                   style={{
    //                     fontSize: "16px",
    //                     textWrap: "nowrap",
    //                     marginLeft: "50px",
    //                   }}
    //                 >
    //                   {item}
    //                 </span>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section
      id="section-fun-facts"
      className="p-5"
      style={{ backgroundSize: "cover" }}
    >
      <div className="container" style={{ backgroundSize: "cover" }}>
        <div className="row text-center" style={{ backgroundSize: "cover" }}>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay="0s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "0s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3>
                <span
                  className="fz-40 main-color3"
                  data-to={4500}
                  data-speed={3000}
                >
                  4500
                </span>
              </h3>
              <div className="fs-7 text-golden">Home Protected</div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay=".25s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "0.25s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3 className="fz-40 main-color3">
                <span className="timer" data-to={16} data-speed={3000}>
                  16
                </span>
                k
              </h3>
              <div className="fs-7 text-golden">People Saved</div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay=".4s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "0.4s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3 className="fz-40 main-color3">
                <span className="timer" data-to={4} data-speed={3000}>
                  4
                </span>
                m
              </h3>
              <div className="fs-7 text-golden">Money Saved</div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay=".6s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "0.6s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3 className="fz-40 main-color3">
                <span className="timer" data-to={52} data-speed={3000}>
                  52
                </span>
                k
              </h3>
              <div className="fs-7 text-golden">Contract Signed</div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay=".8s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "0.8s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3 className="fz-40 main-color3">
                <span className="timer" data-to={100} data-speed={3000}>
                  100
                </span>
                +
              </h3>
              <div className="fs-7 text-golden">Countries</div>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-3 wow fadeInUp mb-sm-30 animated"
            data-wow-delay="1s"
            style={{
              backgroundSize: "cover",
              visibility: "visible",
              animationDelay: "1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="de_count" style={{ backgroundSize: "cover" }}>
              <h3 className="fz-40 main-color3">
                <span className="timer" data-to={2} data-speed={3000}>
                  2
                </span>
                k
              </h3>
              <div className="fs-7 text-golden">Staff Member</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
