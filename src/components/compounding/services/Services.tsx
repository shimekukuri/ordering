'use client';
import Observer from '@/components/utility/observer/Observer';

export default function Services() {
  return (
    <div className="flex p-4">
      <div className="flex flex-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex-col lg:flex-row rounded-3xl shadow-2xl">
        <div>
          <Observer className="p-8 ">
            <h2 className="text-3xl text-center lg:text-left lg:text-8xl font-extrabold flex-1 p-4 flex-col text-white group-[.inview]:animate-fade-in-800 opacity-0 relative">
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
              <img
                loading="lazy"
                src={'./jake_small.jpeg'}
                className="-z-10 w-72 absolute right-0 bottom- rounded-2xl shadow-2xl hidden lg:block"
              />
            </h2>
          </Observer>
        </div>

        <Observer className="flex-col flex">
          <div className="join join-vertical w-full glass shadow-2xl">
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
                {`Men's Health`}
              </div>
              <div className="collapse-content">
                <p>{`Compounded men's health medications encompass a range of personalized formulations tailored to address specific health concerns affecting men. These medications can include testosterone replacement therapy, aimed at addressing low testosterone levels and related symptoms such as fatigue, low libido, and reduced muscle mass. Additionally, compounded medications can target erectile dysfunction by combining various vasodilators like sildenafil or tadalafil with other supportive agents to enhance blood flow. Prostate health can also benefit from compounded formulations containing ingredients like saw palmetto, pygeum, and beta-sitosterol to manage urinary symptoms associated with benign prostatic hyperplasia. Compounded men's health medications offer a customizable approach, allowing healthcare providers to adjust dosages, ingredients, and delivery methods to suit individual needs. However, collaboration between patients and medical professionals is crucial to ensure proper dosing, efficacy, and safety. Regulatory oversight guarantees the quality and integrity of these personalized medications, making them a valuable option for addressing men's health concerns comprehensively.`}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
                {`Women's Health`}
              </div>
              <div className="collapse-content">
                <p>{`Compounded women's health medications offer personalized solutions to address a range of specific health concerns. These formulations can include hormone replacement therapy, customized to alleviate symptoms of menopause such as hot flashes, mood swings, and vaginal dryness through the use of bio-identical hormones like estradiol and progesterone. Compounded medications can also target conditions like polycystic ovary syndrome (PCOS), providing combinations of medications to regulate menstrual cycles and manage associated symptoms. Women struggling with sexual dysfunction may benefit from compounded medications containing vasodilators or other agents to enhance sexual arousal and satisfaction. Additionally, compounded medications can cater to individual allergies or sensitivities, creating allergen-free or preservative-free options. Close collaboration between healthcare providers and compounding pharmacists is essential to ensure accurate dosing, safety, and efficacy, and regulatory oversight ensures the quality and reliability of these personalized women's health medications, offering tailored solutions for diverse needs.`}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
                Eye Drops
              </div>
              <div className="collapse-content">
                <p>{`Compounded eye drop medications provide specialized solutions for various ocular conditions, offering tailored formulations that may not be available in standard commercially manufactured eye drops. These preparations can include medications to treat conditions such as glaucoma, where combinations of different ocular hypotensive agents can be compounded to enhance efficacy while minimizing side effects. Compounded eye drops can also target dry eye syndrome by incorporating lubricating agents, anti-inflammatories, and tear-stimulating components to provide relief and improve ocular comfort. In cases of inflammation or infections, compounded eye drops can contain antibiotics, corticosteroids, or antiviral agents, adjusted to the specific needs of the patient. Collaboration between ophthalmologists and compounding pharmacists is crucial to ensure appropriate ingredients, concentrations, and sterility, as well as to address patient preferences. Regulatory oversight ensures the quality and safety of these customized eye drop medications, offering patients an effective and tailored approach to managing a variety of eye-related conditions.`}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
                Weight Loss
              </div>
              <div className="collapse-content">
                <p>{`Compounded weight loss medications offer individualized approaches to assist individuals in their weight management efforts. These formulations can include combinations of FDA-approved medications, vitamins, amino acids, and other compounds tailored to a patient's specific needs and goals. Compounded weight loss medications may aim to suppress appetite, boost metabolism, or enhance fat breakdown. Common ingredients might include phentermine, topiramate, bupropion, or other medications that have shown potential for weight loss. Compounded weight loss medications can be prepared in various forms, such as capsules, tablets, or even sublingual drops, making adherence more convenient. Collaboration between patients and healthcare providers is essential to determine the most suitable approach, and close monitoring ensures safety and effectiveness. Regulatory oversight ensures the quality and consistency of these customized medications, offering a personalized strategy for those seeking to manage their weight with the guidance of healthcare professionals.`}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
                Cosmetic
              </div>
              <div className="collapse-content">
                <p>{`Compounded cosmetic medications encompass a range of personalized formulations designed to address various aesthetic concerns. These formulations often include topical creams, serums, and gels, tailored to individual needs and skin types. Compounded cosmetic medications may include ingredients such as retinoids, hyaluronic acid, peptides, and antioxidants, targeting concerns like wrinkles, hyperpigmentation, and acne. These customized formulations can be adjusted to meet specific preferences, such as incorporating allergen-free or preservative-free options. Compounded cosmetic medications also extend to hair care, where specialized shampoos, conditioners, and serums can be developed to promote hair growth, reduce hair loss, or improve scalp health. Collaboration between dermatologists or aesthetic professionals and compounding pharmacists ensures the selection of appropriate ingredients and concentrations, as well as personalized recommendations for application. Regulatory oversight ensures the quality and safety of these tailored cosmetic medications, offering individuals a unique approach to enhancing their appearance while working closely with healthcare experts.`}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium group-[.inview]:animate-fade-in-800 opacity-0">
                Other Speciality
              </div>
              <div className="collapse-content">
                <p>{`Specialty compounded medications encompass a diverse array of personalized formulations that cater to unique patient needs that cannot be met by standard commercial medications. These formulations cover a wide range of medical conditions and requirements, such as rare diseases, complex medication regimens, and specific patient sensitivities. Specialty compounded medications can include preparations for pain management, hormone replacement therapy, dermatological conditions, and even veterinary care. They might involve customized combinations of active pharmaceutical ingredients, unique dosage forms, and individualized strengths. Collaboration between healthcare providers, compounding pharmacists, and patients is paramount to ensuring that the formulations meet the precise requirements of the condition or situation at hand. Regulatory oversight guarantees the quality, safety, and effectiveness of these specialized medications, making them an invaluable resource for addressing complex medical scenarios that demand tailored solutions.`}</p>
              </div>
            </div>
          </div>
        </Observer>
      </div>
    </div>
  );
}
