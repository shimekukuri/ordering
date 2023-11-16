import CategoryContainer from "../categoryContainer/CategoryContainer";
import TusHeader from "../tusHeader/TusHeader";

export default function TusHero() {
  return (
    <div
      id="main"
      className="lg:h-[90vh]  min-h-[90vh]  max-w-screen w-screen flex flex-col lg:flex-row snap-center snap-mandatory"
    >
      <TusHeader />
      <CategoryContainer />
    </div>
  );
}
