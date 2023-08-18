import CompoundingHero from '@/components/compounding/hero/CompoundingHero';
import Observer from '@/components/utility/observer/Observer';

export default function page() {
  return (
    <>
      <CompoundingHero />

      <div
        className="bg-fixed bg-cover p-4 flex min-h-[65vh] lg:min-h-[25vh]"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/1217974135/photo/close-up-of-unrecognizable-scientist-pouring-purple-paint-into-a-beaker.jpg?s=612x612&w=0&k=20&c=DQcuunwho9Jh1yxJsdx32a4y2x6dooF31sp1W0QybNk=)',
        }}
      >
        <Observer className="flex-1 justify-center items-center">
          <div className="h-full flex items-center flex-col lg:flex-row justify-around w-full gap-4 lg:gap-0">
            <div className="card min-w-96 lg:w-96 glass animate-fade-in-400 opacity-0 h-full">
              <div className="card-body">
                <h2 className="card-title font-extrabold">
                  What are Compounded Rx?
                </h2>
                <div className="divider"></div>
                <p className="">
                  Compounded Rx's are unique, specially made for every
                  individual. Unlike more standard offerings, Compounded
                  medications can be tailored to your specifc needs and are
                  cheaper than more traditional Rx's!
                </p>
              </div>
            </div>
            <div className="card min-w-96 lg:w-96 glass animate-fade-in-600 opacity-0 h-full">
              <div className="card-body">
                <h2 className="card-title font-extrabold">
                  Are Compounded Rx Safe?
                </h2>
                <div className="divider"></div>
                <p className="">
                  Skillfully formulated by our expert pharmacists we adhere to
                  the most rigorous quality and sterile protocols, and stand by
                  our effective and personalized options, underscoring their
                  intrinsic safety. As an accredited compounding pharmacy, we
                  prioritize the highest safety standards, ensuring
                  uncompromising quality and reliability.
                </p>
              </div>
            </div>
            <div className="card min-w-96 lg:w-96 glass animate-fade-in-800 opacity-0 h-full">
              <div className="card-body">
                <h2 className="card-title font-extrabold">
                  Are Compounded Rx New?
                </h2>
                <div className="divider"></div>
                <p className="">
                  Compounded prescriptions are not new; in fact, they have a
                  long history dating back centuries. Before the development of
                  mass-produced pharmaceuticals, pharmacists would custom mix
                  medications to suit individual patient needs. In recent years,
                  compounded prescriptions have gained renewed attention due to
                  their potential to provide personalized treatments.
                </p>
              </div>
            </div>
          </div>
        </Observer>
      </div>
      <div className="h-screen">test</div>
      <div
        className="h-[50vh] bg-fixed bg-cover"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/1387118000/photo/researcher-working-whit-fluids-in-flasks-in-the-chemical-laboratory.jpg?s=612x612&w=0&k=20&c=iUkZascDSRqB0yxdjI414DDBn2DGcFT4eoImMNbFBqE=',
        }}
      >
        test
      </div>
      <div className="p-4">
        <div className="card w-96 glass">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
      <div>test</div>
    </>
  );
}
