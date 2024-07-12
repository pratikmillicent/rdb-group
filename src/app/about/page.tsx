import CoreValuesImage from "./core-value";
import CoreValue from "./core-value";
import Director from "./director";
import Overview from "./overview";

function About() {
  return (
    <main className="mw-100">
      <div>
        <video
          className="mw-100"
          src="https://www.aspect.global/video/aspect_global_apr24.mp4"
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          poster="https://www.aspect.global/video/aspect_video.webp"
        ></video>
        <Overview />

        <div className="p-3 px-5 h-100">
          <h4 className="d-flex align-items-center justify-content-center p-2">
            GROUP EXECUTIVE DIRECTORS/HEADS
          </h4>

          <Director />
        </div>
        <div className="p-3 px-5 h-100">
          <h4 className="d-flex align-items-center justify-content-center p-2">
            - - - BUSSINESS HEADS
          </h4>

          <Director />
        </div>
        <div>
          {" "}
          <div>
            <CoreValuesImage />
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
