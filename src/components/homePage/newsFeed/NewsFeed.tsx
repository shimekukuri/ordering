'use client';
import { useEffect, useRef, useState } from 'react';
import NewsCard from '../newscard/NewsCard';

export default function NewsFeed() {
  const [loader, setLoader] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-1 max-w-[100vw]">
        {loader ? (
          <div className="loading loading-md loading-ring justify-self-center self-center flex-1"></div>
        ) : (
          <div className="flex flex-1 flex-row overflow-x-scroll snap-x">
            {[...Array(10)].map((x, i) => {
              return <NewsCard id={`newscard${i}`} key={i} reference={x} />;
            })}
            <div className="absolute left-0 bottom-0 top-0 flex items-center">
              Test
            </div>
            <div className="absolute right-0 bottom-0 top-0 flex items-center">
              Test
            </div>
            <div className="absolute bottom-0 right-0 left-0 w-[100%] flex justify-center items-center">
              Test
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// let nodes = document.querySelectorAll('.newsCards');
// console.log(nodes);
