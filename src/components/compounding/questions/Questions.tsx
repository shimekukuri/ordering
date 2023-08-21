'use client';
import Observer from '@/components/utility/observer/Observer';

export default function Questions() {
  return (
    <div className="flex flex-1 justify-center items-center max-w-[100vw]">
      <div className="h-full flex items-center flex-col xl:flex-row justify-around w-full gap-4 lg:gap-0">
        <Observer className="flex-1 justify-center items-center h-full">
          <div className="card lg:w-96 glass group-[.inview]:animate-fade-in-400 opacity-0 h-full">
            <div className="card-body">
              <h2 className="card-title font-extrabold">
                What are Compounded Rx?
              </h2>
              <div className="divider"></div>
              <p className="">
                Compounded Rx&aposs are unique, specially made for every
                individual. Unlike more standard offerings, Compounded
                medications can be tailored to your specifc needs and are
                cheaper than more traditional Rx&aposs!
              </p>
            </div>
          </div>
        </Observer>
        <Observer className="flex-1 justify-center items-center h-full">
          <div className="card lg:w-96 glass group-[.inview]:animate-fade-in-600 opacity-0 h-full">
            <div className="card-body">
              <h2 className="card-title font-extrabold">
                Are Compounded Rx Safe?
              </h2>
              <div className="divider"></div>
              <p className="">
                Skillfully formulated by our expert pharmacists we adhere to the
                most rigorous quality and sterile protocols, and stand by our
                effective and personalized options, underscoring their intrinsic
                safety. As an accredited compounding pharmacy, we prioritize the
                highest safety standards, ensuring uncompromising quality and
                reliability.
              </p>
            </div>
          </div>
        </Observer>
        <Observer className="flex-1 justify-center items-center h-full">
          <div className="card lg:w-96 glass group-[.inview]:animate-fade-in-800 opacity-0 h-full">
            <div className="card-body">
              <h2 className="card-title">Are Compounded Rx New?</h2>
              <div className="divider"></div>
              <p className="">
                Compounded prescriptions are not new; in fact, they have a long
                history dating back centuries. Before the development of
                mass-produced pharmaceuticals, pharmacists would custom mix
                medications to suit individual patient needs. In recent years,
                compounded prescriptions have gained renewed attention due to
                their potential to provide personalized treatments.
              </p>
            </div>
          </div>
        </Observer>
      </div>
    </div>
  );
}
