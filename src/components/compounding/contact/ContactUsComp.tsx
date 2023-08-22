import Observer from '@/components/utility/observer/Observer';
import { Pacifico } from 'next/font/google';

const Cursive = Pacifico({ weight: '400', subsets: ['latin'] });

export default function ContactUsComp() {
  return (
    <div className="flex flex-col p-4 lg:flex-row lg:justify-around items-center w-full">
      <div className="">
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 py-8 px-4">
              <div className="flex flex-col bg-red-400 w-full p-8">
                <div className={`text-8xl ${Cursive.className} text-center`}>
                  Call
                </div>
                <div className={`text-6xl ${Cursive.className} text-center`}>
                  Us
                </div>
                <div className={`text-6xl ${Cursive.className} text-center`}>
                  Today
                </div>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <button
                  className={`btn btn-primary ${Cursive.className} text-4xl`}
                >
                  Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Observer className="justify-center items-center">
          <form className="max-w-5xl w-full flex flex-col items-center gap-2 glass p-4 rounded-2xl shadow-2xl overflow-clip justify-around w-72">
            <h2 className="text-3xl">Contact Us</h2>
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
        </Observer>
      </div>
    </div>
  );
}
