
import { SECTIONS } from "@/lib/const";
import { ShieldIcon } from "../icons/common";
import Image from "next/image";
import FadeInButton from "../ui/fade-in-button";

const HeroMobile = () => {
  return (
    <section
      id={SECTIONS.HERO}
      className="w-full bg-hero-bg-mobile bg-cover bg-center -mt-[6.25rem] flex sm:hidden  items-center h-[110vh]"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-full flex flex-col items-center mt-48 gap-[42px]">
          <div className="flex gap-2 items-center justify-center">
            <ShieldIcon className="h-[40px] w-[40px]" />
            <div className="flex flex-col text-white">
              <p className="text-h4-mobile">24 million $</p>
              <p className="text-[18px/20px] font-thin tracking-wider">
                generated in 2024
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center text-[36px]/[38px] font-bold md:text-h2 text-white">
            <span className="primary-gradient-text text-center">
              <h1>Your Profits.</h1>
              <h1>More, Faster, Easier.</h1>
            </span>
          </div>
          <div>
            <p className="text-center text-white text-[20px]/[22px] font-thin tracking-wider">
              Maximize your earnings, save time, <br />
              and focus on what matters
            </p>
          </div>
          <FadeInButton/>
          <div>
            <Image width={280} height={318} className="w-[280px]" src="/images/hero-mobile-image.png" alt="hero-mobile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;
