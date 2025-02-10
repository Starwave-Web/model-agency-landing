"use client"
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";

import Dubai from "@/assets/images/branches/with-text/dubai.webp";
import Miami from "@/assets/images/branches/with-text/miami.webp";
import LosAngeles from "@/assets/images/branches/with-text/la.webp";
import Sydney from "@/assets/images/branches/with-text/sydnes.webp";
import London from "@/assets/images/branches/with-text/london.webp";
import GoldCoast from "@/assets/images/branches/with-text/gold_coast.webp";
import Image from "next/image";

const branchesWithText = [
  { id: "Dubai", location: "Dubai", image: Dubai, alt: "Dubai" },
  { id: "Miami", location: "Miami", image: Miami, alt: "Miami" },
  {
    id: "LosAngeles",
    location: "LosAngeles",
    image: LosAngeles,
    alt: "LosAngeles",
  },
  { id: "Sydney", location: "Sydney", image: Sydney, alt: "Sydney" },
  { id: "London", location: "London", image: London, alt: "London" },
  {
    id: "GoldCoast",
    location: "GoldCoast",
    image: GoldCoast,
    alt: "GoldCoast",
  },
];

const BranchesCarousel = () => {
  return (
    <Carousel
    className="relative"
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
        <h1 className="text-white font-semibold text-[32px] min-[375px]:text-h1-mobile uppercase absolute -z-[0] -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Elluxe Agency
        </h1>
        <h1 className="outline-text-logo-mobile font-semibold text-[32px] min-[375px]:text-h1-mobile uppercase absolute z-[1] -top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          Elluxe Agency
        </h1>
      <CarouselContent className="-ml-24">
        {branchesWithText.map((branch) => (
          <CarouselItem key={branch.id} className="pl-1">
            <Image className="w-[8.2788rem] h-[350px] object-cover object-left rounded-[0.125rem]" src={branch.image} alt={branch.alt} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default BranchesCarousel;
