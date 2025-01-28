import Image from "next/image";
import MobilePhone from "@/assets/images/mobile_chat.png";

const CTATwo = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-32 flex flex-col gap-16 items-center">
        <h4 className="text-white text-h4-mobile md:text-h4 self-start w-2/3 md:w-1/2">
          No "leading OnlyFans management" fluff. Our agency is driven by
          results.
        </h4>
        <h4 className="text-white text-h4-mobile md:text-h4 text-right md:text-left self-end w-2/3 md:w-1/2">
          <span className="primary-gradient-text">We rank in the top 5</span>
          <br />
          <span className="primary-gradient-text">worldwide</span> in revenue
          earned by our models.
        </h4>
        <h4 className="text-white text-h4-mobile md:text-h4 self-start w-2/3 md:w-1/2">
          Focus on building wealth, not chasing likes.
        </h4>
        <h4 className="text-white text-h4-mobile md:text-h4 text-right md:text-left self-end w-2/3 md:w-1/2">
          We're not here{" "}
          <span className="primary-gradient-text">to boast about</span> how we
          generated <span className="primary-gradient-text">$millions</span> in
          earnings or taken clients from $5k to $280K+ monthly.
        </h4>
        <div className="mt-16 flex flex-col items-center gap-32">
          <h3 className="text-white text-h3-mobile md:text-h3 text-center">
            This is <span className="primary-gradient-text">about you.</span>
          </h3>
          <h3 className="text-white text-h3-mobile md:text-h3">
            Your life.
            <br /> Your future.
            <br /> Your choice.
          </h3>
            <Image
              className="max-w-[15.75rem] md:max-w-[42.25rem]"
              src={MobilePhone}
              alt="mobile_phone"
            />
        </div>
      </div>
    </section>
  );
};

export default CTATwo;
