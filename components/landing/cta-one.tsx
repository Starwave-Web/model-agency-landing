import { Button } from "@/components/ui/button";

const CTAOne = () => {
  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-32  md:pt-[10.125rem] md:pb-[17.9375rem]">
        <div className="flex flex-col items-center gap-16">
          <h4 className="text-white text-h4-mobile md:text-h4 text-center">
            Be honest, did you really dream of spending your{" "}
            <span className="primary-gradient-text">youth</span> working until
            you are old and tired?
          </h4>
          <Button variant="default">Apply Now</Button>
          <h3 className="text-white text-h3-mobile md:text-h3 text-center">
            Take some{" "}
            <span className="primary-gradient-text">photos and retire.</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
