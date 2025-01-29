import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";

const CTASix = () => {
  return (
    <section id={SECTIONS.CTASIX} className="w-full bg-primary-black">
      <div className="container mx-auto px-6 py-[11.375rem] flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:gap-16">
          <h3 className="text-white text-h3-mobile md:text-h3">
            Elluxe<span className="text-description">©</span>
          </h3>
          <div className="flex flex-col items-start gap-5 md:gap-10">
            <h4 className="text-white text-h4-mobile md:text-h4">
              The more we help you earn, the more we grow together.
            </h4>
            <h4 className="text-white text-h4-mobile md:text-h4">
              Help us to help you, and we show you what true luxury feels like.
            </h4>
          </div>
          <Button className="mt-10" variant="default">Apply Now</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASix;
