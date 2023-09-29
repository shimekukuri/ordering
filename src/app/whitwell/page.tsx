import Observer from '@/components/utility/observer/Observer';
import { Oswald as Oswald } from 'next/font/google';

//Lora
//

const oswald = Oswald({ weight: '700', subsets: ['latin'] });

export default function Page() {
  return (
    <>
      <div className="max-w-[100vw] p-4 flex">
        <Observer className="">
          <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-4">
            <div className="h-[45vh] lg:col-span-2 bg-red-300 shadow-2xl rounded-2xl group-[.inview]:animate-fade-in-200 opacity-0"></div>
            <div className="h-[45vh] grid grid-cols-2 grid-rows-2 gap-4">
              <div className="flex flex-col bg-yellow-300 rounded-tl-2xl shadow-2xl group-[.inview]:animate-fade-in-400 opacity-0">
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
              </div>
              <div className="bg-blue-300 rounded-tr-2xl shadow-2xl group-[.inview]:animate-fade-in-600 opacity-0"></div>
              <div className="bg-green-300 rounded-bl-2xl shadow-2xl group-[.inview]:animate-fade-in-800 opacity-0"></div>
              <div className="bg-purple-300 rounded-br-2xl shadow-2xl group-[.inview]:animate-fade-in-1000 opacity-0"></div>
            </div>
          </div>
        </Observer>
      </div>
    </>
  );
}
