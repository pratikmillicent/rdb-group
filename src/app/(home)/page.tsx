import About from "./_components/About";
import BusinessUpdate from "./_components/BusinessUpdate";
import GroupGrid from "./_components/Group";
import News from "./_components/News";

export default function Home() {
  return (
    <main className="mw-100">
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

      <BusinessUpdate />
      <About />
      <GroupGrid />
      <News />
    </main>
  );
}
