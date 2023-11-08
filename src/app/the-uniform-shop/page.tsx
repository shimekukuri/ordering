import Script from "next/script";
import { Abril_Fatface } from "next/font/google";

const abril_fatface = Abril_Fatface({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <div
        id="main"
        className="lg:h-screen min-h-screen  max-w-screen w-screen flex flex-col lg:flex-row"
      >
        <div className="lg:flex-[2] min-h-full bg-red-500 relative">
          <div
            className={`h-full w-full absolute text-center flex justify-center items-center`}
          >
            <h1
              className={`${abril_fatface.className} text-fuchsia-400 text-4xl lg:text-9xl text-center`}
            >
              The Uniform Shop
            </h1>
          </div>
          <video
            className="object-cover h-full overflow-clip w-full"
            src="https://media.istockphoto.com/id/1136584913/video/checking-everything-out-on-her-tablet.mp4?s=mp4-640x640-is&k=20&c=Q_ow2fEu7uhHaHWDytJ5YivGht5a3LU5ksO0aG-XQL4="
            autoPlay={true}
            muted={true}
            loop={true}
          />
        </div>
        <div className="flex-1 h-full bg-blue-500 grid grid-cols-2">
          <div className="bg-cyan-50 animate-fade-in-400 opacity-0 flex">
          <div className="flex-1 hover:animate-scale-200">test</div>
          </div>
          <div className="bg-rose-50 hover:animate-scale-200 animate-fade-in-600 opacity-0">1</div>
          <div className="bg-fuchsia-300 hover:animate-scale-200 animate-fade-in-800 opacity-0">1</div>
          <div className="bg-purple-300 hover:animate-scale-200 animate-fade-in-1000 opacity-0">1</div>
          <div className="bg-lime-400 hover:animate-scale-200 animate-fade-in-1200 opacity-0">1</div>
          <div className="bg-emerald-400 hover:animate-scale-200 animate-fade-in-1400 opacity-0">1</div>
        </div>
      </div>
      <div className="lg:h-screen min-h-screen"></div>
      <Script id="scroll_to_head">
        {`document.querySelector("#main").scrollIntoView()`}
      </Script>
    </>
  );
}
