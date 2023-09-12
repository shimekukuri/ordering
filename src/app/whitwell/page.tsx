import { Oswald as Oswald } from 'next/font/google';

//Lora
//

const oswald = Oswald({ weight: '700', subsets: ['latin'] });

export default function Page() {
  return (
    <>
      <div className="max-w-[100vw] md:p-4">
        <div className="flex md:p-4">
          <h1
            className={`text-7xl text-center md:text-left md:text-9xl ${oswald.className} opacity-0 md:underline animate-fade-in-1200 relative flex`}
          >
            Whitwell Pharmacy
            <div className="absolute right-0 top-0 left-0 bottom-0 bg-orange-400 -z-10 rotate"></div>
          </h1>
        </div>
      </div>
    </>
  );
}
