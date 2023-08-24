'use client';
import { useEffect, useRef, useState } from 'react';

export default function NewsFeed2() {
  const [loader, setLoader] = useState<boolean>(true);
  const [reset, setReset] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (containerRef?.current && !reset) {
      let val = containerRef.current.clientWidth;

      let counter = val;
      let timer = setInterval(() => {
        containerRef?.current?.scrollTo({ left: counter, behavior: 'smooth' });
        counter = counter + val;
        if (counter > val * 4) {
          counter = 0;
        }
      }, 4000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [loader, reset]);

  return (
    <>
      <div className="relative flex flex-1 min-h-[85vh] max-h-[85vh] max-w-[100vw] p-4">
        {loader ? (
          <div className="flex-1 flex justify-center items-center">
            {' '}
            <div className="loading loading-lg loading-ring"></div>
          </div>
        ) : (
          <div
            className="carousel w-full rounded-2xl shadow-2xl"
            ref={containerRef}
            onPointerEnter={() => setReset(true)}
            onPointerLeave={() => setReset(false)}
            tabIndex={0}
            onFocus={() => setReset(true)}
            onBlur={() => setReset(false)}
            onClick={() => setReset(true)}
          >
            <div
              id="slide1"
              className="carousel-item relative w-full bg-red-500"
            >
              <div
                className="hero min-h-[80dvh]"
                style={{
                  backgroundImage:
                    'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut
                      assumenda excepturi exercitationem quasi. In deleniti
                      eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 opacity-30 hover:opacity-100">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full bg-blue-500"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full bg-yellow-500"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide4"
              className="carousel-item relative w-full bg-lime-500"
            >
              <img
                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
