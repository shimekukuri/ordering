import Link from "next/link";
import { Kaushan_Script } from "next/font/google";

interface navigationInterface  {
title: string;
href: string;
};

const titleFont = Kaushan_Script({subsets: ['latin'], weight: '400'});

export default function ScrubsCard({imgUrl, title, navigation}:{imgUrl?: string; title?: string; navigation?: navigationInterface[]}) {

  return (
    <div
      className={`snap-start min-w-[70%] lg:min-w-[50%] p-2 backdrop-blur-sm shadow-2xl rounded-xl bg-white bg-opacity-30 relative`}
      style={{
        backgroundImage:
          `url(${imgUrl ? imgUrl : 'https://media.istockphoto.com/id/1435012220/photo/portrait-of-mid-adult-nurse-outdoors.jpg?s=2048x2048&w=is&k=20&c=l5lA3BcVqLXuA5cPH8vMUkbDXp1wP6LgGSSQVLVj7hM=)'}`,
        backgroundPosition: 'center',
        backgroundSize: 'cover' 
      }}
    >
      <div className={`absolute bottom-16 left-0 right-0 text-5xl text-white text-center ${titleFont.className}`}>
        <h2>{`${title ? title : 'interesting title'}`}</h2>
        <div className="flex justify-around items-center ">
          {navigation ? navigation.map(({title, href}, i) => {
            return(<Link href={href} key={href + i} className="underline text-white hover:scale-105 text-2xl">{title}</Link>);
            }) : ''}
        </div>
      </div>
    </div>
  );
}

