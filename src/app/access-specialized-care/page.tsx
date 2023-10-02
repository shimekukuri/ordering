import Hero from '@/components/access-specialized-care/hero/Hero';
import About from '@/components/access-specialized-care/about/About';
import Features from '@/components/access-specialized-care/features/Features';
import Location from '@/components/access-specialized-care/location/Location';
import CTA from '@/components/access-specialized-care/call-to-action/CTA';
import { Allison } from 'next/font/google';

const allison = Allison({ weight: '400', subsets: ['latin'] });

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Features />
      <Location />
      <CTA />
      <div
        className={`aboslute bottom-0 right-0 ${allison.className} text-center`}
      >
        Created By: Rachel Dooley
      </div>
    </main>
  );
}
