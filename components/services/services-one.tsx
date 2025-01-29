import { Button } from "@/components/ui/button";

const ServicesOne = () => {
  return (
    <section className="w-full bg-primary-black -mt-[92px]">
      <div className="container mx-auto px-6 py-36 md:pt-[240px] md:pb-[220px] flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-9">
          <h1 className="primary-gradient-text text-h1-mobile md:text-h1">
            Elluxe
          </h1>
          <h3 className="text-white text-h3-mobile md:text-h3 text-center">
            <span className="primary-gradient-text">Your Profits.</span> More,
            Faster, Easier.
          </h3>
        </div>
        <Button variant="default">Apply Now</Button>
      </div>
    </section>
  );
};

export default ServicesOne;
