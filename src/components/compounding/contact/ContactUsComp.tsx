import Observer from '@/components/utility/observer/Observer';
import { Josefin_Sans } from 'next/font/google';

const joSans = Josefin_Sans({ weight: '700', subsets: ['latin'] });

export default function ContactUsComp() {
  return (
    <div
      className="bg-fixed bg-cover hero overflow-clip p-4"
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/1387118000/photo/researcher-working-whit-fluids-in-flasks-in-the-chemical-laboratory.jpg?s=612x612&w=0&k=20&c=iUkZascDSRqB0yxdjI414DDBn2DGcFT4eoImMNbFBqE=',
      }}
    >
      <div className="hero-content flex-col backdrop-brightness-50 rounded-2xl shadow-2xl">
        <div className="hero-overlay"></div>
        <Observer className="">
          <div
            className={`text-3xl lg:text-6xl font-extrabold text-center text-white group-[.inview]:animate-fade-in-800 opacity-0`}
          >
            Are You Ready For Your {` `}
            <span className="text-sky-300 font-extrabold">P</span>
            <span className="text-[#E57DFC] font-extrabold">e</span>
            <span className="text-[#FCA57D] font-extrabold">r</span>
            <span className="text-[#94FC7D] font-extrabold">s</span>
            <span className="text-sky-300 font-extrabold">o</span>
            <span className="text-[#E57DFC] font-extrabold">n</span>
            <span className="text-[#FCA57D] font-extrabold ">a</span>
            <span className="text-[#94FC7D] font-extrabold ">l</span>
            <span className="text-sky-300 font-extrabold ">i</span>
            <span className="text-[#E57DFC] font-extrabold ">z</span>
            <span className="text-[#94FC7D] font-extrabold ">e</span>
            <span className="text-[#FCA57D] font-extrabold ">d</span>{' '}
            <span className="">Care?</span>
          </div>
        </Observer>
        <a href="tel:+123456890">
          <button className="btn btn-info">Call Today!</button>
        </a>
        <div className="divider text-3xl text-white font-extrabold">OR</div>
        <Observer className={``}>
          <div className="flex flex-1 flex-col items-center gap-4 p-4 min-h-[50vh]">
            <h2 className="w-full text-center text-6xl font-extrabold text-white">
              Contact Us
            </h2>
            <form className="max-w-5xl w-full min-h-[50%] flex flex-col items-center gap-2 glass p-4 rounded-2xl shadow-2xl overflow-clip">
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full max-w-xs group-[.inview]:animate-fade-in-200 opacity-0"
              />
              <label htmlFor="lastName" className="sr-only">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full max-w-xs group-[.inview]:animate-fade-in-300 opacity-0"
              />
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs group-[.inview]:animate-fade-in-400 opacity-0"
              />
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="text"
                placeholder="Phone Number"
                className="input input-bordered w-full max-w-xs group-[.inview]:animate-fade-in-500 opacity-0"
              />
              <button className="btn btn-neutral">Submit</button>
            </form>
          </div>
        </Observer>
      </div>
    </div>
  );
}
