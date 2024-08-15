import { useEffect, useState } from "react";
import parallaxie from "@/utils/parallax";
import { FaHandshake, FaMedal, FaUsers } from "react-icons/fa6";

function CallToAction({}) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    parallaxie(`.sec-bg-img.parallaxie`, 0.4);
  }, [active]);

  return (
    <section className="call-action-img">
      <div className="">
        <div
          className="sec-bg-img bg-img parallaxie"
          data-background={
            active === 0
              ? "/assets/images/about/professionalism.webp"
              : active === 1
              ? "assets/images/about/trust.webp"
              : "assets/images/about/experties.webp"
          }
        >
          <div
            style={{
              bottom: 0,
              position: "absolute",
              width: "100vw",
              background: "var(--navy)",
              opacity: 0.8,
              display: "flex",
              alignItems: "stretch",
              justifyContent: "space-evenly",
              color: "white",
              textAlign: "center",
            }}
          >
            <div
              className="fz-50"
              style={{ padding: "20px 0" }}
              onMouseEnter={() => setActive(0)}
            >
              <FaMedal className={active == 0 ? "animate-bounce" : ""} />
              <h1 className="fz-20">Professionalism</h1>
              <p style={{ color: "inherit" }}>
                is not just what you do, but how you do it.
              </p>
            </div>
            <div style={{ width: "2px", background: "white" }}></div>
            <div
              className="fz-50"
              style={{ padding: "20px 0" }}
              onMouseEnter={() => setActive(1)}
            >
              <FaHandshake className={active == 1 ? "animate-bounce" : ""} />
              <h1 className="fz-20">Trust & Transparency</h1>
              <p style={{ color: "inherit" }}>
                is a currency more valuable than money.
              </p>
            </div>
            <div style={{ width: "2px", background: "white" }}></div>
            <div
              className="fz-50"
              style={{ padding: "20px 0" }}
              onMouseEnter={() => setActive(2)}
            >
              <FaUsers className={active == 2 ? "animate-bounce" : ""} />
              <h1 className="fz-20">Experties</h1>
              <p style={{ color: "inherit" }}>
                is knowing that learning never stops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
