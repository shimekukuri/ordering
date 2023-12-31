import { Abril_Fatface } from "next/font/google";

const abril_fatface = Abril_Fatface({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function TusHeader() {
  return (
    <div className="lg:flex-[2] min-h-full relative">
      <div
        className={`h-full w-full absolute text-center flex justify-center items-center`}
      >
        <div
          className={`${abril_fatface.className} text-fuchsia-400 text-4xl lg:text-9xl text-center flex`}
        >
          <div className="opacity-0 animate-fade-in-600">The&nbsp;</div>
          <div className="opacity-0 animate-fade-in-800">Uniform&nbsp;</div>
          <div className="opacity-0 animate-fade-in-1000">Shop</div>
        </div>
      </div>
      <video
        className="object-cover h-full overflow-clip w-full"
        src="https://media.istockphoto.com/id/1136584913/video/checking-everything-out-on-her-tablet.mp4?s=mp4-640x640-is&k=20&c=Q_ow2fEu7uhHaHWDytJ5YivGht5a3LU5ksO0aG-XQL4="
        autoPlay={true}
        muted={true}
        loop={true}
      />
    </div>
  );
}
