import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';

const CTA = () => {
  return (
    <section className="call-to-action flex items-center h-72 lg:h-96 z-0">
        <div className="overlay h-72 lg:h-96 z-0">
            <div className="mt-6 lg:w-1/2 pt-16 px-4 lg:pl-12">
                <h2 className="text-xl lg:pt-8 lg:text-3xl textShadow font-semibold tracking-tight lg:leading text-center lg:text-left text-white z-0">Let Access Specialized Care take your medication management to the next level</h2>
                    <button className="bg-black text-sm lg:text-base text-white mt-4 lg:mt-8 mx-auto lg:mx-0 px-4 lg:px-6 py-2 lg:py-3.5 relative z-10 rounded-full flex uppercase transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
                        <a className="flex items-center" href="tel:4238773568">Call Now
                        <PhoneArrowUpRightIcon className="w-4 h-4 lg:w-6 lg:h-6 ml-2" />
                        </a>
                    </button>
            </div>
        </div>
    </section>
  )
}

export default CTA
