import Observer from '@/components/utility/observer/Observer';
import Maps from '@/components/whitwell/maps/Maps';
import { Allison as Title } from 'next/font/google';
import { Oswald } from 'next/font/google';
import { Noto_Serif_Khitan_Small_Script } from 'next/font/google';

const title = Title({ weight: '400', subsets: ['latin'] });
const oswald = Oswald({ weight: '700', subsets: ['latin'] });
const noto = Noto_Serif_Khitan_Small_Script({
  weight: '400',
  subsets: ['latin'],
});

export default function Page() {
  return (
    <>
      <div className="max-w-[100vw] p-4 flex">
        <Observer className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
            <div className="h-[45vh] lg:col-span-2 bg-red-300 shadow-2xl rounded-2xl group-[.inview]:animate-fade-in-200 opacity-0 overflow-clip relative">
              <div className="absolute w-full h-full bg-black bg-opacity-20 flex flex-col justify-between p-4">
                <div
                  className={`text-9xl md:text-9xl ${title.className} text-white`}
                >
                  Whitwell
                </div>
                <div
                  className={`text-9xl md:text-9xl ${title.className} text-end text-white`}
                >
                  Pharmacy
                </div>
              </div>
              <img
                src="https://assets.ruralindexingproject.com/photos/public/rural-indexing-project-image-cuA8lgKk-1-500.jpg"
                alt="f"
                className="object-cover w-full h-full after:bg-fuchsia-300 after:absolute after:top-0 after:right-0 after:content-[''] after:mix-blend-multiply after:w-full after:h-[1500px] after:overflow-hidden"
              />
            </div>
            <div className="h-[45vh] grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex flex-col bg-yellow-300 glass rounded-tl-2xl shadow-2xl group-[.inview]:animate-fade-in-400 opacity-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <div
                  className={`w-full text-center ${oswald.className} font-bold pb-2`}
                >
                  Shopping
                </div>
              </div>
              <Maps />

              <div
                className={`bg-green-300 rounded-bl-2xl shadow-2xl group-[.inview]:animate-fade-in-800 opacity-0 ${noto.className} text-center text-7xl p-2 flex flex-col justify-between`}
              >
                <div>RX</div>
                <div className={`${oswald.className} font-bold text-base`}>
                  Refill Prescriptions
                </div>
              </div>
              <div className="bg-purple-300 rounded-br-2xl shadow-2xl group-[.inview]:animate-fade-in-1000 opacity-0"></div>
            </div>
          </div>
        </Observer>
      </div>
    </>
  );
}
