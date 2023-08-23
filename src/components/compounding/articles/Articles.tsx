import Observer from '@/components/utility/observer/Observer';
import { ReactNode } from 'react';

export interface articles {
  image: string;
  title: string;
  body: string;
  link?: string;
}

export default function Articles({ articles }: { articles: articles[] }) {
  const arr = [1, 2, 3, 4, 5];
  console.log(articles[0].image);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 p-4 w-full">
      {articles.map((x, i) => {
        return (
          <div key={`article${i}`}>
            <Article article={x} delayFade={Boolean(i % 2 == 1)} />
          </div>
        );
      })}
    </div>
  );
}

const Article = ({
  className = '',
  delayFade = false,
  article,
  key = '',
}: {
  className?: string;
  delayFade?: boolean;
  key?: string;
  article: articles;
}): ReactNode => {
  return (
    <Observer
      key={key}
      className={`${className} overflow-y-clip justify-center items-center`}
    >
      <div
        className={`flex w-full justify-center items-center opacity-0 group-[.inview]:animate-fade-in-${
          delayFade ? '600' : '400'
        }`}
      >
        <div className="w-full">
          <div className="card w-full lg:card-side bg-base-100 shadow-xl p-4">
            <figure className="">
              <img
                loading="lazy"
                className="rounded-2xl"
                src={article.image}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{article.title}</h2>
              <p>{article.body}</p>
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
