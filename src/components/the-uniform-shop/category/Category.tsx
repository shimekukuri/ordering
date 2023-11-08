import { Abril_Fatface } from "next/font/google";

const abril_fatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function Category({
  background,
  title,
  overlay_1_color,
  overlay_2_color,
  fadeInTiming,
}: {
  background: string;
  title: string;
  overlay_1_color?: string;
  overlay_2_color?: string;
  fadeInTiming?: string;
}) {
  return (
    <div
      className={`flex-1 group overflow-clip flex relative opacity-0 animate-fade-in-${fadeInTiming ? fadeInTiming : '600'}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: "cover",
      }}
    >
      <div
        className={`absolute ${abril_fatface.className} bottom-0 text-orange-500 text-4xl lg:text-5xl z-50`}
      >
        {title}
      </div>
      <div
        className={`opacity-0 bg-opacity-50 group-hover:animate-fade-in-600 overflow-clip ${
          overlay_2_color ? overlay_2_color : `bg-emerald-400`
        } flex-1 flex`}
      >
        <div className="flex-1 flex justify-center p-4">
          <button className='text-4xl'>Shop Now</button>
        </div>
      </div>
    </div>
  );

}
