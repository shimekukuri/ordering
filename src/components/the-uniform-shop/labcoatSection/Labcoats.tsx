import { Abril_Fatface } from "next/font/google";

const abril_fatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function LabCoats() {
  return (
    <div
      className={`lg:h-[90vh] min-h-[90vh] snap-start relative flex justify-center items-center bg-slate-200`}
    >
      <div
        className={`absolute w-4/5 top-10 lg:left-10 lg:top-auto lg:w-1/4 lg:h-[80%] p-4 flex justify-center items-center text-6xl ${abril_fatface.className}`}
      >
        Labcoats
      </div>
      <video
        className="h-full overflow-clip object-cover object-center lg:w-full"
        src="./labcoats.mp4"
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <div className="absolute bottom-10 lg:right-10 lg:bottom-auto bg-opacity-40 bg-black lg:w-1/4 lg:h-[80%] shadow-2xl rounded-2xl p-4">
        Test
      </div>
    </div>
  );
}
