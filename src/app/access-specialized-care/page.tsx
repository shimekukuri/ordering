

import Hero from '@/components/access-specialized-care/hero/Hero';
import About from '@/components/access-specialized-care/about/About';
import Features from '@/components/access-specialized-care/features/Features';
import Location from '@/components/access-specialized-care/location/Location';
import CTA from '@/components/access-specialized-care/call-to-action/CTA';


export default function Page() {
  return (
      <main>
        <Hero />
        <About />
        <Features />
        <Location />
        <CTA />
      </main>

    );
}
