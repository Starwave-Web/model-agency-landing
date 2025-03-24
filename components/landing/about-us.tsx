"use client";
// import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { PlayButtonIcon } from "@/components/icons/common";
// import VideoCover from "@/assets/images/video-cover.png";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import 'next-cloudinary/dist/cld-video-player.css'

const AboutUs = () => {
  return (
    <section
      id={SECTIONS.ABOUTUS}
      className="w-full bg-marble-bg-big bg-cover py-32 md:py-[7.5rem]"
    >
      <div className="container mx-auto px-6 flex flex-col gap-16 ">
        <h4 className="text-white text-h4-mobile md:text-h4">
          Meet us - The Elluxe Experience
        </h4>
        <div className="hidden md:block">
          {/* <PlayButtonIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 md:h-auto md:w-auto" /> */}
          {/* <Image className="rounded-[2.3125rem] aspect-[2/3] object-none md:object-contain md:aspect-auto" src={VideoCover} alt="video_cover" /> */}
          <CldVideoPlayer
            width="1920"
            height="1080"
            className="aspect-[2/3] object-none md:object-contain md:aspect-auto"
            src="elluxe_desktop"
            logo={false}
          />
        </div>
        <div className="md:hidden">
          <CldVideoPlayer
            width="608"
            height="1080"
            className="aspect-[2/3] object-none md:object-contain md:aspect-auto"
            src="elluxe_mobile"
            logo={false}
          />
        </div>
        <Link className="self-center" href="/apply-now">
          <Button>Apply Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
