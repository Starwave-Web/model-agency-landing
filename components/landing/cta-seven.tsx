import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import FadeInAnimation from "../common/fade-in-animation";

const CTASeven = () => {
  return (
    <section id={SECTIONS.CTASEVEN} className="w-full bg-primary-black">
      <div className="container mx-auto px-6  py-[8rem] md:py-[16.125rem] flex flex-col items-center">
        <div className="flex flex-col items-start gap-8 md:gap-16">
          <FadeInAnimation>
          <h4 className="text-white text-h4-mobile md:text-h4">
            Are you <span className="primary-gradient-text">truly</span>{" "}
            satisfied with your current management?
          </h4>
          </FadeInAnimation>
          <div className="flex flex-col items-start gap-5 md:gap-8">
            <FadeInAnimation>
            <h4 className="text-white text-h4-mobile md:text-h4">
              <span className="underline">Trust your instincts</span> and
              schedule a call with us.
            </h4>
            </FadeInAnimation>
            <FadeInAnimation>
            <p className="text-white text-services-menu-mobile md:text-services-menu">
              It’s just a few minutes, but it could{" "}
              <span className="primary-gradient-text">change everything.</span>
            </p>
            </FadeInAnimation>
          </div>
          <FadeInAnimation>
          <Link href="/apply-now"><Button variant="default">Apply Now</Button></Link>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
};

export default CTASeven;
