import LabCoats from "@/components/the-uniform-shop/labcoatSection/Labcoats";
import MedicalShoes from "@/components/the-uniform-shop/medicalshoes/medicalShoesContainer/MedicalShoes";
import SafetyWare from "@/components/the-uniform-shop/safetyware/safetywareContainer/SafetyWare";
import ScrubCardContainer from "@/components/the-uniform-shop/scrubsSection/scrubCardContainer/ScrubCardContainer";
import TusHero from "@/components/the-uniform-shop/tusHero/TusHero";

export default function Page() {
  return (
    <div className="snap-y overflow-y-scroll max-h-screen">
      <TusHero />
      <ScrubCardContainer />
      <LabCoats />
      <SafetyWare />
      <MedicalShoes />
      <div className="lg:h-[90vh] min-h-[90vh]"></div>
    </div>
  );
}
