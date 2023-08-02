import NewsCard from "../newscard/NewsCard";

export default function NewsFeed() {
  return (
    <div className="relative flex flex-1 min-h-[90dvh] max-w-[100vw]">
      <div className="flex flex-1 flex-row overflow-x-scroll snap-x">
        {[...Array(10)].map((_, i) => {
          return <NewsCard id={`${i}`} key={i} />;
        })}
      </div>

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
  );
}
