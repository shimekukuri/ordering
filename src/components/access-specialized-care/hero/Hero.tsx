import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles.heroSection} -z-20`}>
      <div className={`${styles.overlay} z-0`}>
        <h1 className="text-5xl md:text-5xl textShadow tracking-tight text-white relative z-10 pt-48 md:pt-64 lg:pt-96 pl-4 md:pl-8 lg:pl-12 lg:text-6xl font-bold md:w-3/4 lg:w-2/3">
          Simplify your medication systems
        </h1>
        <p className="text-slate-200 lg:text-lg para-font lg:block z-10 relative w-3/4 lg:w-2/5 leading-relaxed pl-4 pt-4 md:pl-8 lg:pl-12 lg:pt-8 mb-12">
          We specialize in providing medication packaging needs for nursing
          homes, assisted living facilities, and special needs facilities
        </p>
        <button className="bg-black text-slate-200 ml-4 mb-8 md:ml-8 lg:ml-12 px-6 py-3.5 relative z-10 rounded-full flex transition ease-in-out delay-150 hover:-translate-y-1 duration-300">
          <a className="flex " href="tel:4238773568">
            Call Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>
          </a>
        </button>
      </div>
    </section>
  );
};

export default Hero;
