import styles from '../call-to-action/CTA.module.css'

const CTA = () => {
  return (
    <section className={`${styles.cta}`}>
      <div className={`${styles.overlay}`}>
        <h2 className="text-xl  lg:text-3xl  font-semibold tracking-tight  text-center mx-auto  text-white relative z-10 pt-24 w-3/4 md:w-1/2 lg:w-1/2 lg:leading lg:pt-24">Let Access Specialized Care take your medication management to the next level</h2>
          <button className="bg-black text-sm lg:text-base text-slate-200 mt-8 lg:mt-8 mx-auto px-4 lg:px-6 py-2 lg:py-3.5 relative z-10 rounded-full flex transition ease-in-out delay-150 hover:-translate-y-1 duration-300 ">
            <a className="flex items-center" href="tel:4238773568">Call Now
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
              </svg>
            </a>
          </button>
      </div>
    </section>
  )
}

export default CTA;
