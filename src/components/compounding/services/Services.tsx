'use client';
import Observer from '@/components/utility/observer/Observer';

export default function Services() {
  return (
    <div className=" flex items-center justify-center p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex-col lg:flex-row">
      <Observer>
        <h2 className="card-title text-3xl text-center lg:text-8xl font-extrabold flex-1 p-4 flex-col text-white group-[.inview]:animate-fade-in-800 opacity-0">
          What we can
          <div>
            <span className="text-sky-300 font-extrabold animate-pulse-1000">
              C
            </span>
            <span className="text-[#E57DFC] font-extrabold animate-pulse-1200">
              o
            </span>
            <span className="text-[#FCA57D] font-extrabold animate-pulse-1400">
              m
            </span>
            <span className="text-[#94FC7D] font-extrabold animate-pulse-1600">
              p
            </span>
            <span className="text-sky-300 font-extrabold animate-pulse-1800">
              o
            </span>
            <span className="text-[#E57DFC] font-extrabold animate-pulse">
              u
            </span>
            <span className="text-[#FCA57D] font-extrabold animate-pulse-2200">
              n
            </span>
            <span className="text-[#94FC7D] font-extrabold animate-pulse-2400">
              d
            </span>
            {` `}
          </div>
          for you!
        </h2>
      </Observer>
      <div className="divider"></div>

      <Observer className="flex-col flex">
        <div className="join join-vertical w-full glass">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Bio-Identical Hormone Replacement
            </div>
            <div className="collapse-content">
              <p>
                {`Compounded Bio-Identical Hormone Replacement Therapy (BHRT)
                  involves the formulation of hormone medications tailored to an
                  individual's specific hormonal needs, typically through
                  compounding pharmacies. These medications are designed to
                  mimic the molecular structure of hormones naturally produced
                  by the body, such as estrogen, progesterone, and testosterone.
                  Advocates of compounded BHRT suggest that it can offer a more
                  personalized approach compared to traditional hormone
                  replacement therapy, allowing for adjustments in dosages and
                  combinations.`}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Sterile Compounding
            </div>
            <div className="collapse-content">
              <p>{`Sterile compounding is a critical practice within pharmacy and healthcare settings, involving the preparation of medications, solutions, and treatments in a sterile environment to ensure patient safety and prevent contamination. This meticulous process is employed for medications that are administered directly into the bloodstream, body cavities, or other sterile areas, where even the slightest impurity could lead to serious infections or adverse reactions. Sterile compounding requires specialized equipment, cleanrooms, and aseptic techniques to maintain a sterile environment. Pharmacists and trained professionals follow strict protocols, including wearing sterile garments, using sterile equipment, and adhering to rigorous quality control measures. This process is essential for creating intravenous medications, injectables, ophthalmic solutions, and other sterile preparations that are vital for patient care, particularly in hospitals, clinics, and surgical settings.`}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Verterinary
            </div>
            <div className="collapse-content">
              <p>{`Compounded veterinary medications refer to customized pharmaceutical products created by compounding pharmacists specifically for animals, addressing unique needs that may not be met by commercially available medications. This practice is commonly utilized in veterinary medicine when standard drug formulations or dosages aren't suitable for a particular species, size, or condition of the animal. Compounded veterinary medications can be tailored to various forms such as capsules, liquids, creams, or even flavored treats, making administration easier for pet owners. While these preparations can provide valuable solutions for treating animals, it's important to involve veterinarians in the process to ensure proper dosing, efficacy, and safety. Additionally, similar to human compounding, regulatory oversight and quality control are crucial to maintain the integrity of compounded veterinary medications and safeguard animal health.`}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Pediatric
            </div>
            <div className="collapse-content">
              <p>{`Compounded pediatric medications involve the specialized preparation of customized pharmaceuticals by compounding pharmacists to cater to the unique needs of children. Children often require specific formulations, dosages, and flavors that might not be available in commercially manufactured drugs. Compounded pediatric medications can be created in various forms such as suspensions, oral solutions, lozenges, or even transdermal gels, enhancing ease of administration and compliance for young patients. However, it's crucial to involve pediatricians or healthcare professionals in the process to ensure accurate dosing, appropriate ingredients, and safety. Regulatory oversight is essential to maintain the quality and efficacy of compounded pediatric medications, and communication between healthcare providers, parents, and pharmacists is vital to achieve optimal outcomes for children requiring individualized treatments.`}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Topical Pain Management
            </div>
            <div className="collapse-content">
              <p>{`Compounded topical pain management involves the creation of customized pain-relief formulations by compounding pharmacists to address specific pain issues and provide localized relief. These compounded medications can include a variety of active ingredients, such as analgesics, anti-inflammatories, and muscle relaxants, tailored to an individual's needs. Topical preparations, such as creams, gels, or patches, allow the medication to be applied directly to the site of pain, minimizing systemic side effects and offering a targeted approach. While compounded topical pain management can be effective for certain conditions, collaboration between patients and healthcare providers is essential to determine the appropriate ingredients, dosages, and potential interactions. Quality control measures and regulatory oversight ensure the safety and efficacy of these compounded formulations, making them a valuable option for individuals seeking personalized pain relief strategies.`}</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              {`Mens Health`}
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Men&aposs Health
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Womenes&apos Health
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Eye Drops
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Weight Loss
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Cosmetic
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
              Other Speciality
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </Observer>
    </div>
  );
}
