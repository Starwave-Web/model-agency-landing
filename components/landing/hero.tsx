import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-hero-bg bg-cover -mt-[92px] flex items-center h-[100vh]">
      <div className="container mx-auto px-6">
        <div className="lg:max-w-1/2 md:max-w-2/3 max-w-full flex flex-col items-start gap-[2rem] md:gap-[2.75rem]">
          <div className="flex flex-col items-start gap-6">
            <h1 className="text-h1-mobile md:text-h1 text-white">
              <span className="primary-gradient-text">Your Profits.</span> More,{" "}
              <br /> Faster, Easier.
            </h1>
            <p className="text-white text-[1.375rem] md:text-[1.5rem] w-1/2">
              Maximize your earnings, save time, and focus only on what matters
            </p>
          </div>
          <Button variant="white">Apply Now</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
