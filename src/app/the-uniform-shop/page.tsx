import Script from "next/script";
import { Abril_Fatface } from "next/font/google";
import Image from "next/image";
import Category from "@/components/the-uniform-shop/category/Category";

const abril_fatface = Abril_Fatface({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="snap-y overflow-y-scroll max-h-screen">
      <div
        id="main"
        className="lg:h-screen min-h-screen  max-w-screen w-screen flex flex-col lg:flex-row snap-center snap-mandatory"
      >
        <div className="lg:flex-[2] min-h-full relative">
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
          <Category
            background="https://media.istockphoto.com/id/1392721264/photo/portrait-of-female-nurse-at-medical-clinic.jpg?s=2048x2048&w=is&k=20&c=45pSbbD5_7xqE5gJfPjFvTG-KA4PobWHWODMmRe3qrI="
            overlay_1_color="bg-cyan-50"
            title="Scrubs"
            fadeInTiming="200"
          />
          <Category
            background="https://media.istockphoto.com/id/1468678629/photo/portrait-healthcare-and-tablet-with-a-doctor-woman-at-work-in-a-hospital-for-research-or.jpg?s=2048x2048&w=is&k=20&c=E0OfEqQQDhA5sjY0YCCDnl50mOt4XXMNHlJo-1tXszE="
            title="Labcoats"
            overlay_1_color="bg-yellow-100"
            overlay_2_color="bg-cyan-200"
            fadeInTiming="400"
          />
          <Category
            background="https://media.istockphoto.com/id/1366345325/photo/african-american-man-working-in-plastics-factory.jpg?s=2048x2048&w=is&k=20&c=Whc3pls9JAovtrM5d386faUt2SySVIIaw2Iaa-XDwwk="
            title="Safety Wear"
            overlay_1_color="bg-fuchsia-300"
            overlay_2_color="bg-red-200"
            fadeInTiming="600"
          />
          <Category
            background="https://media.istockphoto.com/id/185105482/photo/nurses.jpg?s=2048x2048&w=is&k=20&c=NoSnghH0ZPvz4n5ARvdgSw1HMvSQtfaJn_Sa9TEbtK4="
            overlay_1_color="bg-purple-300"
            title="Medical Shoes"
            fadeInTiming="800"
          />
          <Category
            background="https://media.istockphoto.com/id/626996204/photo/embroidery-machine-stiching.jpg?s=2048x2048&w=is&k=20&c=qCDIkjgbIRHK1ymkqGTT88lFWI_nGxyC6_uJWdQSmII="
            overlay_1_color="bg-lime-500"
            title="Custom Embroidery"
            fadeInTiming="800"
          />
          <Category
            background="data:image/jpeg;base64,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"
            overlay_1_color="bg-lime-400"
            title="About Us"
            fadeInTiming="800"
          />
        </div>
      </div>
      <div className="lg:h-screen min-h-screen snap-center"></div>
      <div className="lg:h-screen min-h-screen snap-center bg-red-500"></div>
      <div className="lg:h-screen min-h-screen snap-center bg-blue-400"></div>
      <div className="lg:h-screen min-h-screen snap-center bg-lime-500"></div>
      <Script id="scroll_to_head">
        {`document.querySelector("#main").scrollIntoView()`}
      </Script>
    </div>
  );
}
