import CompoundingHero from '@/components/compounding/hero/CompoundingHero';

export default function page() {
  return (
    <>
      <CompoundingHero />

      <div
        className="h-[50vh] bg-fixed bg-cover"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/1217974135/photo/close-up-of-unrecognizable-scientist-pouring-purple-paint-into-a-beaker.jpg?s=612x612&w=0&k=20&c=DQcuunwho9Jh1yxJsdx32a4y2x6dooF31sp1W0QybNk=)',
        }}
      >
        test
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
