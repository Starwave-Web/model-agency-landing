"use client";
import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";

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
        <div className="hidden md:block rounded-[20px]">
          <CldVideoPlayer
            width="1920"
            height="1080"
            className="rounded-[20px] aspect-[2/3] object-none md:object-contain md:aspect-auto"
            src="elluxe_desktop"
            poster={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/e_loop:3,so_0,du_5,f_gif/elluxe_desktop.mp4`}
            logo={false}
          />
        </div>
        <div className="md:hidden rounded-[20px]">
          <CldVideoPlayer
            width="608"
            height="1080"
            className="rounded-[20px] aspect-[9/16] object-cover md:object-contain md:aspect-auto"
            src="elluxe_mobile"
            poster={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/video/upload/w_608,h_1080,e_loop:3,so_0,du_5,f_gif/elluxe_mobile.mp4`}
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
