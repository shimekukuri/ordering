import ScrubsCard from "../scrubsCard/ScrubsCard";
import { Abril_Fatface } from "next/font/google";

const abril_fatface = Abril_Fatface({ subsets: ["latin"], weight: "400" });

export default function ScrubCardContainer() {
  return (
    <div
      className="h-[90vh] min-h-[90vh] snap-start flex flex-col lg:flex-row max-w-[100vw]"
      style={{
        backgroundImage:
          "url(https://media.istockphoto.com/id/1425429803/photo/team-of-professional-medical-coworkers-against-wood-background-together-show-diversity-in.jpg?s=2048x2048&w=is&k=20&c=ezt9jqjmqA1-VbIe8anQvG_KcsFT_KGOFDUE5D2Al-s=)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1">
        <div
          className={`${abril_fatface.className} text-8xl flex justify-center items-center h-full text-blue-500 flex-col`}
        >
          <h2>Scrubs</h2>
          <button className="underline text-3xl text-white">Shop all</button>
        </div>
      </div>
      <div className="col-span-2 flex-[3] flex justify-center items-center p-4 lg:p-8">
        <div className="flex-1 full h-full max-w-full overflow-x-scroll snap-x flex flex-row gap-8">
          <ScrubsCard
            title="CHEROKEE"
            navigation={[
              { href: "./", title: "Mens" },
              { href: "./", title: "Womens" },
              { href: "./", title: "Unisex" },
            ]}
          />
          <ScrubsCard
            title="MADESKA"
            navigation={[
              { href: "./", title: "Mens" },
              { href: "./", title: "Womens" },
              { href: "./", title: "Unisex" },
            ]}
          />
          <ScrubsCard title="BARCO" />
          <ScrubsCard title="GREYS ANATOMY" />
          <ScrubsCard />
          <ScrubsCard />
          <ScrubsCard />
          <ScrubsCard />
          <ScrubsCard />
          <ScrubsCard />
          <ScrubsCard />
        </div>
      </div>
    </div>
  );
}
