"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import GirlOne from "@/assets/images/girl-one.png";
import GirlTwo from "@/assets/images/girl-two.png";
import GirlThree from "@/assets/images/girl-three.png";
import GirlFour from "@/assets/images/girl-four.png";
import GirlFive from "@/assets/images/girl-five.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const Results = () => {
  return (
    <section id={SECTIONS.RESULTS} className="w-full bg-marble-bg-big bg-cover">
      <div className="container mx-auto px-6 flex flex-col items-center gap-16 md:gap-24 py-32 md:pt-[9.6875rem] md:pb-[10.6875rem]">
        <h4 className="text-white text-h4-mobile md:text-h4 self-start">
          Here’s what we can achieve{" "}
          <span className="primary-gradient-text">together</span>
        </h4>
        <Carousel
          className="px-8 w-full relative"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <div className="w-[95px] h-full absolute top-0 left-7 z-10 bg-result-carousel-fade rotate-180" />
          <div className="w-[95px] h-full absolute top-0 right-7 z-10 bg-result-carousel-fade" />
          {/* <div className="w-[96px] md:w-[230px] h-full absolute top-0 right-0 z-10 bg-gradient-to-l from-[#1C1D1F] from-0% via-[#1C1D1F]/95 via-5% md:via-19% to-[#1C1D1F]/0 to-100% " /> */}
          <CarouselContent className="flex">
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlOne}
                alt="client_one"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlTwo}
                alt="client_two"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlThree}
                alt="client_three"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlFour}
                alt="client_four"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlFive}
                alt="client_five"
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/3 sm:pl-16">
              <Image
                className="max-w-[209px] md:max-w-[237px]"
                src={GirlOne}
                alt="client_one"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-6" />
          <CarouselNext className="hidden md:flex -right-6" />
        </Carousel>
        <Link href="/apply-now"><Button>Apply Now</Button></Link>
      </div>
    </section>
  );
};

export default Results;
