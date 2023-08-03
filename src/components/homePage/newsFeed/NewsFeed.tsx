"use client";
import { useEffect, useRef, useState } from "react";
import NewsCard from "../newscard/NewsCard";

export default function NewsFeed() {
  let ref1 = useRef<HTMLDivElement>(null);
  let ref2 = useRef<HTMLDivElement>(null);
  let ref3 = useRef<HTMLDivElement>(null);
  let ref4 = useRef<HTMLDivElement>(null);
  let ref5 = useRef<HTMLDivElement>(null);
  let ref6 = useRef<HTMLDivElement>(null);
  let ref7 = useRef<HTMLDivElement>(null);
  let ref8 = useRef<HTMLDivElement>(null);
  let ref9 = useRef<HTMLDivElement>(null);
  let ref10 = useRef<HTMLDivElement>(null);
  let refArray = [ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10];

  const disable = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inView, setInView] = useState<boolean>(false);
  const observed = useRef(null);
  const [once, setOnce] = useState<boolean>(false);

  useEffect(() => {
    const reff = observed;
    const observer = new IntersectionObserver(
      (e) => {
        if (observed.current) {
          setInView(() => e[0].isIntersecting);
          if (e[0].isIntersecting) {
            setOnce(() => true);
          }
        }
      },
      { threshold: 0.99 }
    );

    if (reff.current) {
      observer.observe(reff.current);
    }

    return () => {
      if (reff.current) {
        observer.unobserve(reff.current);
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  });

  useEffect(() => {
    let timers = refArray.map((x, i) => {
      if (!x?.current) {
        return 999;
      }
      if (!inView) {
        return;
      }

      let timer = setTimeout(() => {
        x.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, (i + 1) * 3000);

      return timer;
    });

    return () => {
      timers.forEach((x) => {
        clearTimeout(x);
      });
    };
  }, [loader, inView]);

  return (
    <>
      <div
        className="relative flex flex-1 min-h-[90dvh] max-w-[100vw]"
        ref={observed}
      >
        {loader ? (
          <div className="loading loading-md loading-ring justify-self-center self-center flex-1"></div>
        ) : (
          <div className="flex flex-1 flex-row overflow-x-scroll snap-x">
            {refArray.map((x, i) => {
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
