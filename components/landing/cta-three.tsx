import ArrowButton from "@/components/ui/arrow-button";

const CTAThree = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-[7rem] py-32 md:pt-[6.25rem] md:pb-[12.0625rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 text-left md:text-center w-full md:w-2/4">
          We provide all-inclusive talent management,{" "}
          <span className="primary-gradient-text">24/7</span> support across all
          platforms and use proven marketing strategies to build fan loyalty and
          <span className="primary-gradient-text">maximize</span> your revenue.
        </h4>
        <div className="flex items-center gap-[0.875rem] md:gap-7 self-end">
          <p className="text-white text-services-link-mobile md:text-services-link">
            <span className="primary-gradient-text">See more</span> of our work
            and how it will<br/> increase your earnings
          </p>
          <ArrowButton carousel={false} />
        </div>
      </div>
    </section>
  );
};

export default CTAThree;
