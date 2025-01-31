"use client"
import Autoplay from "embla-carousel-autoplay";
import {
  ForbesLogo,
  NYTimesLogo,
  MediumLogo,
  ViceLogo,
  BloombergLogo,
  YahooLogo,
  LAWeeklyLogo,
} from "../icons/featured-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import FeaturedCarouselItem from "../ui/featured-carousel-item";
import { SECTIONS } from "@/lib/const";

const partnerLogos = [
  { id: "ForbesLogo", logo: <ForbesLogo /> },
  { id: "NYTimesLogo", logo: <NYTimesLogo /> },
  { id: "MediumLogo", logo: <MediumLogo /> },
  { id: "ViceLogo", logo: <ViceLogo /> },
  { id: "BloombergLogo", logo: <BloombergLogo /> },
  { id: "YahooLogo", logo: <YahooLogo /> },
  { id: "LAWeeklyLogo", logo: <LAWeeklyLogo /> },
  { id: "ForbesLogo", logo: <ForbesLogo /> },
  { id: "NYTimesLogo", logo: <NYTimesLogo /> },
  { id: "MediumLogo", logo: <MediumLogo /> },
  { id: "ViceLogo", logo: <ViceLogo /> },
  { id: "BloombergLogo", logo: <BloombergLogo /> },
  { id: "YahooLogo", logo: <YahooLogo /> },
  { id: "LAWeeklyLogo", logo: <LAWeeklyLogo /> },
];

const Featured = () => {
  return (
    <section id={SECTIONS.FEATURED} className="w-full bg-featured-marble-bg bg-cover relative">
        <div className="w-[96px] md:w-[230px] h-full absolute top-0 left-0 z-10 bg-gradient-to-r from-[#1C1D1F] from-0% via-[#1C1D1F]/95 via-5% md:via-19% to-[#1C1D1F]/0 to-100% "/>
        <div className="w-[96px] md:w-[230px] h-full absolute top-0 right-0 z-10 bg-gradient-to-l from-[#1C1D1F] from-0% via-[#1C1D1F]/95 via-5% md:via-19% to-[#1C1D1F]/0 to-100% "/>
      <div className="mx-auto py-[2.5625rem]">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            duration: 2000,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="flex justify-between gap-2 py-2">
            {partnerLogos.map((partnerLogo, __index) => (
              <CarouselItem
                className="w-fit"
                key={`${__index}_${partnerLogo.id}`}
              >
                <FeaturedCarouselItem logo={partnerLogo.logo} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Featured;
