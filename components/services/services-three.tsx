"use client";

import MobileChatServices from "@/assets/images/service_mobile_chat.png";
import { SECTIONS } from "@/lib/const";
import { scrollToSection } from "@/lib/utils";
import Image from "next/image";
import FadeInAnimation from "../common/fade-in-animation";

const ServicesThree = () => {
  return (
    <section className="w-full bg-primary-black">
      <FadeInAnimation threshold={0.2}>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-16 md:gap-20 py-32 md:py-[90px]">
          <div className="flex flex-col items-start gap-8 md:gap-[6.9375rem]">
            <h3 className="text-white text-h3-mobile md:text-h3">
              Our <span className="primary-gradient-text">services</span>
            </h3>
            <ul className="text-white text-services-menu-mobile md:text-services-menu flex flex-col items-start gap-4 md:gap-6 ">
              <li
                onClick={() => scrollToSection(SECTIONS.COMPANYDEVELOPMENT)}
                className="underline underline-offset-8 cursor-pointer leading-[44px]"
              >
                Company development
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.MANAGEMENTMARKETING)}
                className="underline underline-offset-8 cursor-pointer leading-[44px]"
              >
                Management & Marketing
              </li>
              <li
                onClick={() => scrollToSection(SECTIONS.STABILITYSECURITY)}
                className="underline underline-offset-8 cursor-pointer leading-[44px]"
              >
                Stability, Security & Friends
              </li>
            </ul>
          </div>
          <Image
            className="md:max-w-[549.41px] max-w-[252px]"
            src={MobileChatServices}
            alt="service_mobile_chat"
          />
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default ServicesThree;
