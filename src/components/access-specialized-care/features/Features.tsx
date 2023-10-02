import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Features = () => {
  return (
    <section className="pb-44 lg:pb-64 w-full relative">
        <div className="p-8 bg-green-900/40 lg:h-96">
          <h2 className="text-3xl lg:text-4xl text-slate-800 font-bold text-center tracking-tighter py-8 z-30 max-w-5xl mx-auto">Features & Benefits</h2>
        </div>
        <div className="cards-container bg-green-900/40 lg:bg-transparent flex flex-col lg:flex-row lg:justify-center px-6 pb-8 lg:absolute top-36 z-40 para-font">
          {/* Card */}
          <div className="card bg-white w-full md:w-1/2 md:mx-auto lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded z-40 shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold mt-4 tracking-tight text-center text-slate-800">Medication Management</p>
            <ul className="mt-4 flex flex-col">
              <li className="flex my-4 text-sm justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                    <CheckCircleIcon className="w-5 h-5" />
                </span>
                3 different packing systems to choose from
              </li>
              <li className="flex my-4 text-sm justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                Extensive drug utilization review
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-white w-full md:w-1/2 md:mx-auto lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold tracking-tighter text-center text-slate-800 mt-4">Tamper Proof Packaging</p>
            <ul className="mt-4 flex flex-col">
              <li className="text-sm flex my-4 leading-relaxed justify-start text-slate-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  State of the art medication packing system
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Convenient to manage and dispense accurately
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Medication carts, E-Mar system, drug disposal, and more!
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-white w-full md:w-1/2 md:mx-auto lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="font-bold mt-4 tracking-tighter text-center text-slate-800">Easy Administration</p>
            <ul className="mt-4 flex flex-col">
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Ability to make immediate prescription changes + same day delivery
              </li>
              <li className="text-sm flex my-4 justify-start text-gray-700">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                  Acceptance of all major insurance plans
              </li>
            </ul>
          </div>

          {/* Card */}
          <div className="card bg-white w-full md:w-1/2 md:mx-auto lg:w-1/5 lg:mx-2 mb-8 lg:mb-0 px-4 py-6 rounded shadow-lg border-t-8 border-green-900 transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
            <p className="mt-4 font-bold tracking-tighter text-center text-slate-800">Utmost Convenience</p>
            <ul className="mt-4 flex flex-col">
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                Fast, local delivery. Licensed in TN & GA
              </li>
              <li className="text-sm flex mt-4 mb-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                On site diabetic fittings and screenings
              </li>
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                On site vaccinations
              </li>
              <li className="text-sm flex my-4 justify-start text-slate-800">
                <span className="text-green-800 mr-2">
                  <CheckCircleIcon className="w-5 h-5" />
                </span>
                6 pharmacists on call
              </li>
            </ul>
          </div>
        </div>
        {/* Stethescope Icon */}
        <div className="absolute -left-10 h-96 rotate-45 opacity-10 -mt-20 lg:mt-48 -z-10">
          <Image
            src="/specialized-care-images/stethoscope.svg"
            alt="Stethoscope"
            width={250}
            height={250}
          />
        </div>
      </section>
  )
}

export default Features
