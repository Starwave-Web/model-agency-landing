import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import { StaggeredFade } from "../common/staggered-fade";

const Hero = () => {
  return (
    <section
      id={SECTIONS.HERO}
      className="w-full bg-hero-bg bg-cover bg-center -mt-[100px] flex items-center h-[100vh]"
    >
      <div className="container mx-auto px-6">
        <div className="lg:max-w-1/2 md:max-w-2/3 max-w-full flex flex-col items-start gap-[2rem] md:gap-[2.75rem]">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-0">
              <span className="secondary-gradient-text flex">
                <StaggeredFade
                  className="text-secondary-gradient-text"
                  text="Your Profits."
                  delay={0}
                />
                <StaggeredFade
                  className="text-white ml-2 "
                  text=" More,"
                  delay={1200}
                />
              </span>
              <span className="text-white">
                <StaggeredFade
                  className="text-white"
                  text="Faster, Easier."
                  delay={1600}
                />
              </span>
            </div>

            <p className="text-white text-[1.375rem] md:text-[1.5rem] w-3/4 md:w-1/2">
              Maximize your earnings, save time, and focus only on what matters
            </p>
          </div>
          <Link href="/apply-now">
            <Button variant="white">Apply Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
