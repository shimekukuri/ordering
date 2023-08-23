import Observer from '@/components/utility/observer/Observer';
import { ReactNode } from 'react';

export default function Articles() {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 p-4">
      {arr.map((_, i) => {
        return (
          <div>
            <Article key={`Article-${i}`} delayFade={Boolean(i % 2 == 1)} />
          </div>
        );
      })}
    </div>
  );
}

const Article = ({
  className = '',
  delayFade = false,
  key = '',
}: {
  className?: string;
  delayFade?: boolean;
  key?: string;
}): ReactNode => {
  return (
    <Observer key={key} className={`${className} overflow-y-clip`}>
      <div
        className={`flex justify-center items-center opacity-0 group-[.inview]:animate-fade-in-${
          delayFade ? '600' : '400'
        }`}
      >
        <div className="">
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Observer>
  );
};
