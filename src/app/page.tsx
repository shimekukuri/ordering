import Links from '@/components/homePage/Links/Links';
import Hero from '@/components/homePage/hero/hero';
import NewsFeed from '@/components/homePage/newsFeed/NewsFeed';
import NewsFeed2 from '@/components/homePage/newsFeed/NewsFeed2';

export default function Page() {
  return (
    <>
      <Hero />
      <NewsFeed2 />
      <Links />
    </>
  );
}
