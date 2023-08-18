import CompoundingHero from '@/components/compounding/hero/CompoundingHero';
import Observer from '@/components/utility/observer/Observer';

export default function page() {
  return (
    <>
      <CompoundingHero />

      <div
        className="bg-fixed bg-cover p-4 flex min-h-[25vh]"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/1217974135/photo/close-up-of-unrecognizable-scientist-pouring-purple-paint-into-a-beaker.jpg?s=612x612&w=0&k=20&c=DQcuunwho9Jh1yxJsdx32a4y2x6dooF31sp1W0QybNk=)',
        }}
      >
        <Observer className="flex-1 justify-center items-center">
          <div className="h-full flex items-center">
            <div className="card w-96 glass animate-fade-in-600 opacity-0">
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
