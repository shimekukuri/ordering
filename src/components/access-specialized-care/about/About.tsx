import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col-reverse px-2 md:px-12 lg:px-8 lg:flex-row justify-center items-center my-32 mx-auto  max-w-7xl relative">
        <div className="hidden lg:block lg:ml-12 lg:w-1/2">
          <Image
            src="/specialized-care-images/medicine-green-bg.jpg"
            alt="pills on a green background"
            width={400}
            height={500}
            className="rounded shadow-lg mr-0"
          />
        </div>
        <div className=" w-full pb-12 lg:pr-8 lg:w-1/2 pl-2">
          <p className="font-bold text-2xl lg:text-3xl mb-8 tracking-tight leading para-font text-slate-800">
            Managing multiple medications for multiple patients in your care can
            be challenging
          </p>

          <p className="leading-loose tracking-wide mb-4 text-lg para-font font-light text-slate-700">
            Our unique, pre-packaged medication systems are designed to offer
            you time savings, while using technology dedicated to your patient
            {`'`}s saftey.
          </p>

          <p className="leading-loose tracking-wide text-lg para-font font-light text-slate-700">
            With medication packs clearly labeled with patient information and
            medication schedules, our systems help you keep track of when
            patients need to take a medication and at what time.
          </p>
        </div>
        <div className="opacity-20 absolute right-10 -bottom-20 md:-bottom-30">
          <Image
            src="/specialized-care-images/medicines.svg"
            alt="medicine svg"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
