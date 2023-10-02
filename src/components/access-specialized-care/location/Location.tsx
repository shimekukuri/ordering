import { BellIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Location = () => {
  return (
    <section className="my-24 pb-12">
        <div className="wrapper">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold tracking-tighter mb-24 text-slate-800">Conveniently Located in <span className="block lg:inline">Hixson, TN</span></h2>
            <div className="flex flex-col lg:flex-row justify-center items-center">
                <div className="left-side md:flex md:justify-center md:items-center lg:flex-col mb-20 lg:mb-0 lg:mr-8">
                    {/* Address */}
                    <div className="address-wrapper flex leading-relaxed text-xl text-slate-800 shadow-lg md:mr-4 lg:mr-0 p-4 rounded border-l-4 border-green-700">
                        <MapPinIcon className="w-6 h-6 mt-1 text-slate-300" />
                        <div className="address ml-2">
                        <p className="flex text-slate-800 font-light tracking-wide">4062 Hixson Pike</p>
                        <p className="font-light tracking-wider">Chattanooga, TN 37415</p>
                        <p className="font-bold pt-2">(423)877-3568</p>
                        </div>
                    </div>
                    {/* Hours of Operation */}
                    <div className="hours flex mt-16 md:mt-0 md:ml-4 lg:mt-24 lg:ml-0 p-4 shadow-lg text-xl rounded border-l-4 border-green-700 text-slate-800">
                        <BellIcon className="w-6 h-6 mt-1 text-slate-300" />
                        <div className="leading-relaxed ml-2">
                        <p className="flex font-light pb-2">Hours of Operation</p>
                        <p className="text-gray-900 font-medium">Mon - Fri |<span className="text-gray-600 font-normal"> 9am - 5:30pm</span></p>
                        <p className="text-gray-900 font-med">Sat | <span className="text-gray-600 font-normal"> 9am - 2pm</span></p>
                        </div>
                    </div>
                </div>

                {/* Map */}
                {/* Small size for mobile - hidden on tablet & desktop */}
                <div className="right-side shadow-lg md:hidden hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900265178!2d-85.26017658872813!3d35.11392917266213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695651453337!5m2!1sen!2sus" width="400" height="300" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Large size for tablet & desktop screen - hidden on mobile */}
                <div className="right-side hidden shadow-lg md:block lg:block lg:ml-8 lg:hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-2 duration-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.710900260631!2d-85.26017122428732!3d35.113929172775656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8860601a33a5dc03%3A0x1b637109a7b8c80a!2sAccess%20Family%20Pharmacy!5e0!3m2!1sen!2sus!4v1695228982036!5m2!1sen!2sus" width="600" height="450" style={{ border: "0"}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Location
