import CoreValuesImage from "./CoreValue";
import Grid from "./Director";
import Director from "./Director";
import Overview from "./Overview";

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

        <div className="container section-padding">
          <h4 className="main-color3 d-flex align-items-center justify-content-start">
            GROUP EXECUTIVE DIRECTORS/HEADS
          </h4>

          <Grid />
        </div>
        <div className="container section-padding">
          <h4 className="main-color3 d-flex align-items-center justify-content-start p-2">
            - - - BUSSINESS HEADS
          </h4>

          <Grid />
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
