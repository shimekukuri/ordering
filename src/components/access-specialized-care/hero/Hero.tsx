import { PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';


const Hero = () => {
  return (
    <section className="hero-section hero-bg relative h-screen md:h-3/4 lg:h-screen w-full md:pb-24">
        <div className="overlay">
            <h1 className="text-5xl md:text-5xl textShadow tracking-tight text-white relative z-10 pt-64 md:pt-64 lg:pt-96 pl-4 md:pl-8 lg:pl-12 lg:text-6xl font-bold md:w-3/4 lg:w-2/3">Simplify your medication systems</h1>
            <p className="text-slate-200 lg:text-lg para-font lg:block z-20 relative w-3/4 lg:w-2/5 leading-relaxed pl-4 pt-4 md:pl-8 lg:pl-12 lg:pt-8 mb-12">We specialize in providing medication packaging needs for nursing homes, assisted living facilities, and special needs facilities</p>
            <button className="bg-black text-slate-100 ml-4 md:ml-8 lg:ml-12 px-6 py-3.5 relative z-10 rounded-full flex uppercase transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
              <a className="flex " href="tel:4238773568">Call Now
                <PhoneArrowUpRightIcon className="w-6 h-6 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-1 duration-300" />
              </a>
            </button>
        </div>
    </section>
  )
}

export default Hero
