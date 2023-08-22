import ContactUsComp from '@/components/compounding/contact/ContactUsComp';
import CompoundingHero from '@/components/compounding/hero/CompoundingHero';
import Questions from '@/components/compounding/questions/Questions';
import Services from '@/components/compounding/services/Services';
import Observer from '@/components/utility/observer/Observer';

export default function page() {
  return (
    <>
      <div
        className="flex flex-col bg-fixed bg-repeat backdrop-blur-xl min-w-full items-center gap-4"
        style={{
          backgroundImage:
            'url(https://media.istockphoto.com/id/1196076225/vector/seamless-medical-healthcare-medicine-research-symbols-background.jpg?s=612x612&w=0&k=20&c=RLB6_bokubqdN5kGKbx_4m0bGhkp0HyHFHYdCUGKnXY=)',
        }}
      >
        <CompoundingHero />
        <Questions />
        <Services />
        <ContactUsComp />
      </div>
    </>
  );
}
