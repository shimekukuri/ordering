export default function CompoundingHero() {
  return (
    <div
      className="hero min-h-screen rounded-b-2xl shadow-2xl overflow-clip"
      style={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/624034258/photo/flask-in-scientist-hand-with-laboratory-background.jpg?s=612x612&w=0&k=20&c=7_ZB_rY1FZvXga5EvpvpbVzlLu7FlQJb1tS4OL7cV98=)',
      }}
    >
      <div className="hero-overlay bg-opacity-60  opacity-0 animate-fade-in-800 rounded-b-2xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl md:text-9xl font-bold opacity-0 animate-fade-in-400 text-white">
            Compound
            <span>{` `}</span>
            <span className="text-red-500 underline">Rx</span>
          </h1>
          <p className="mb-5 md:text-4xl opacity-0 animate-fade-in-600">
            The Science of Personalized
            <span>{` `}</span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-200">
              M
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-300">
              e
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-300">
              d
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-400">
              i
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-500">
              c
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-600">
              i
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-700">
              n
            </span>
            <span className="text-[#c4e1f2] font-extrabold animate-fade-in-800">
              e
            </span>
          </p>
          <button className="btn btn-info opacity-0 animate-fade-in-800">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
