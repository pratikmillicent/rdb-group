import { CountUp } from "countup.js";
import React, { useEffect, useRef } from "react";

interface DashboardData {
  value: number;
  suffix?: string;
  label: string;
}

interface DashboardCountProps {
  data: DashboardData[];
}

function DashboardCount({ data }: DashboardCountProps) {
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const options = {
      duration: 3,
    };

    countersRef.current.forEach((counter, index) => {
      if (counter) {
        const dataTo = counter.getAttribute("data-to");
        // console.log(`Element ${index}:`, counter, `data-to:`, dataTo); // Debugging line
        if (dataTo) {
          const countUp = new CountUp(counter, parseFloat(dataTo), options);
          if (!countUp.error) {
            countUp.start();
          } else {
            console.error(
              `Error initializing CountUp for element ${index}:`,
              countUp.error
            );
          }
        } else {
          console.warn(`data-to attribute missing for element ${index}`);
        }
      } else {
        console.warn(`Element ${index} is null`);
      }
    });
  }, [data]);

  return (
    <section
      id="section-fun-facts"
      className=""
      style={{ backgroundSize: "cover" }}
    >
      <div className="container" style={{ backgroundSize: "cover" }}>
        <div className="row text-center" style={{ backgroundSize: "cover" }}>
          {data.map((item, index) => (
            <div
              key={index}
              className="col-6 col-md-4 col-lg wow fadeInUp mb-sm-30 animated"
              data-wow-delay={`${index * 0.25}s`}
              style={{
                backgroundSize: "cover",
                visibility: "visible",
                animationDelay: `${index * 0.25}s`,
                animationName: "fadeInUp",
              }}
            >
              <div className="de_count" style={{ backgroundSize: "cover" }}>
                <h3 className="main-color3">
                  <span
                    className="fz-40"
                    ref={(el) => {
                      countersRef.current[index] = el;
                    }}
                    data-to={item.value}
                  >
                    {item.value}
                  </span>

                  {item.suffix && item.suffix}
                </h3>
                <div className="fs-7 text-golden">{item.label}ssssss</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardCount;
