import { SECTIONS } from "@/lib/const";

const CTAFour = () => {
  return (
    <section id={SECTIONS.CTAFOUR} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center py-32 md:pt-[16.25rem] md:pb-[16.25rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 w-full md:w-2/3">
          We <span className="primary-gradient-text">empower</span> creators to
          build real wealth and achieve{" "}
          <span className="primary-gradient-text">financial independence.</span>
          Our multimillionaire models see substantial{" "}
          <span className="primary-gradient-text">wealth</span> growth.
        </h4>
      </div>
    </section>
  );
};

export default CTAFour;
