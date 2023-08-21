import ContactUsComp from '@/components/compounding/contact/ContactUsComp';
import CompoundingHero from '@/components/compounding/hero/CompoundingHero';
import Questions from '@/components/compounding/questions/Questions';
import Services from '@/components/compounding/services/Services';
import Observer from '@/components/utility/observer/Observer';

export default function page() {
  return (
    <>
      <CompoundingHero />
      <Questions />
      <Services />
      <ContactUsComp />
    </>
  );
}
