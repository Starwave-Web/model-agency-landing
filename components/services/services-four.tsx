import { Button } from "@/components/ui/button";

const ServicesFour = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-32 md:py-[262px]">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col items-start justify-between">
            <h4 className="text-white text-h4-mobile md:text-h4 mb-8">
              Company <span className="primary-gradient-text">development</span>
            </h4>
            <Button className="hidden md:block" variant="outline">Apply Now</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-[2px] text-white">
              <h4 className="text-h4">01</h4>
              <p className="text-description">
                Elluxe
              </p>
            </div>
            <p className="text-white text-description leading-[22px] tracking-[2%] md:w-[495px]">
              We empower our models to take control of their financial futures.
              With expert guidance and support, we help them build independent
              careers, ensuring a sustainable income beyond social media. Our
              strategies are especially impactful for multimillionaire models,
              enabling significant wealth growth through a personalized and
              proven approach. No matter your current level of wealth or
              influence, we are committed to helping you achieve lasting
              financial success and stability.
            </p>
            <Button className="md:hidden w-fit mt-4" variant="outline">Apply Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesFour;
