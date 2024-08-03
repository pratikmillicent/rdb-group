import React from "react";

function Marq({ data }: { data: string[] }) {
  return (
    <section className="serv-marq" style={{ backgroundColor: "#1F2D58" }}>
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-12">
            <div className="main-marq" style={{ color: "#FFF" }}>
              <div className="slide-har st1" style={{ padding: "12px 0" }}>
                <div className="box non-strok">
                  {data?.map((item: string) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "16px",
                        textWrap: "nowrap",
                        marginLeft: "50px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="box non-strok">
                  {data?.map((item: string) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "16px",
                        textWrap: "nowrap",
                        marginLeft: "50px",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
