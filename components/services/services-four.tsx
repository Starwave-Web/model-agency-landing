import { Button } from "@/components/ui/button";
import FadeInAnimation from "../common/fade-in-animation";
import { trackEvent } from "@/lib/analytics";
import { SECTIONS } from "@/lib/const";

const ServicesFour = () => {
  return (
    <section id={SECTIONS.COMPANYDEVELOPMENT} className="w-full bg-primary-black">
      <FadeInAnimation threshold={0.2}>
      <div className="container mx-auto px-6 py-32 md:py-[262px]">
        <div className="flex flex-col min-[1280px]:flex-row min-[1280px]:justify-between">
          <div className="flex flex-col items-start justify-between">
            <h4 className="text-white text-h4-mobile md:text-h4 mb-8">
              Company <span className="primary-gradient-text">development</span>
            </h4>
            <Button onClick={() => trackEvent("User Interaction", "Click", "Services4 Apply Now")} className="hidden min-[1280px]:block" variant="outline">Apply Now</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-[2px] text-white">
              <h4 className="text-h4">01</h4>
              <p className="text-description">
                Elluxe
              </p>
            </div>
            <p className="text-white text-description leading-[22px] tracking-[2%] min-[1280px]:w-[495px]">
              We empower our models to take control of their financial futures.
              With expert guidance and support, we help them build independent
              careers, ensuring a sustainable income beyond social media. Our
              strategies are especially impactful for multimillionaire models,
              enabling significant wealth growth through a personalized and
              proven approach. No matter your current level of wealth or
              influence, we are committed to helping you achieve lasting
              financial success and stability.
            </p>
            <Button onClick={() => trackEvent("User Interaction", "Click", "Services4 Apply Now")} className="min-[1280px]:hidden w-fit mt-4" variant="outline">Apply Now</Button>
          </div>
        </div>
      </div>
      </FadeInAnimation>
    </section>
  );
};

export default ServicesFour;
