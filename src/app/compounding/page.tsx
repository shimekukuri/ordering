import CompoundingHero from '@/components/compounding/hero/CompoundingHero';
import Questions from '@/components/compounding/questions/Questions';
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
        <Questions />
      </div>
      <div className=" flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <div className="card min-w-96 lg:max-w-[50%] glass">
          <div className="card-body">
            <h2 className="card-title text-5xl font-extrabold">
              What we can Compound for you!
            </h2>
            <div className="divider"></div>

            <Observer className="text-2xl flex gap-2 flex-col">
              <div className="opacity-0 group-[.inview]:animate-fade-in-200">
                Bio-Identical Hormone Replacement
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-400">
                Sterile Compounding
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-600">
                Verterinary
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-800">
                Pediatric
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-1000">
                Topical Pain Management
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-1200">
                Men&aposs Health
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-1400">
                Womenes&apos Health
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-1600">
                Eye Drops
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-1800">
                Weight Loss
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-2000">
                Cosmetic
              </div>
              <div className="opacity-0 group-[.inview]:animate-fade-in-2200">
                Other Speciality
              </div>
            </Observer>
          </div>
        </div>
      </div>
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
