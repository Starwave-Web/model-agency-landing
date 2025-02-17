import { Button } from "@/components/ui/button";
import FadeInAnimation from "../common/fade-in-animation";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const ServiesSix = () => {
  return (
    <section
      id={SECTIONS.STABILITYSECURITY}
      className="w-full bg-primary-black"
    >
      <FadeInAnimation threshold={0.2}>
        <div className="container mx-auto px-6 py-32 md:py-[177px]">
          <div className="flex flex-col min-[1280px]:flex-row  md:gap-8 md:justify-between">
            <div className="flex flex-col  items-start ">
              <h4 className="text-white text-h4-mobile md:text-h4 mb-16 md:mb-8">
                Stability, Security &{" "}
                <span className="primary-gradient-text">Friends</span>
              </h4>
              <Link href="/apply-now">
                <Button className="hidden min-[1280px]:block" variant="outline">
                  Apply Now
                </Button>
              </Link>
            </div>
            <div className="flex flex-col min-[1280px]:flex-row gap-12 md:gap-8">
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-1 text-white">
                  <h4 className="text-h4">01</h4>
                  <p className="text-description-mobile md:text-description-title">
                    Custom Website Creation
                  </p>
                </div>
                <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[250px]">
                  We create personalized, professional websites for each model,
                  designed to reflect her unique brand and style. Our expert
                  designers and developers work closely with you to deliver a
                  high-quality website—not just another Linktree or Hoobe
                  alternative. With our custom websites, you can showcase your
                  content and connect with fans securely and effectively,
                  without the risk of being banned.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-1 text-white">
                  <h4 className="text-h4">02</h4>
                  <p className="text-description-mobile md:text-description-title">
                    Network of Models for Collaborations
                  </p>
                </div>
                <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[250px]">
                  Collaboration is essential for success in the adult
                  entertainment industry, and at Elluxe, we believe our models
                  thrive together. We provide access to a network of like-minded
                  professionals, allowing models to collaborate on content,
                  exchange tips and advice, and build lasting connections—even
                  lifelong friendships.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-1 text-white">
                  <h4 className="text-h4">03</h4>
                  <p className="text-description-mobile md:text-description-title">
                    Cybersecurity and Stalker Protection
                  </p>
                </div>
                <p className="text-white text-description-mobile md:text-description leading-[22px] tracking-[2%] min-[1280px]:w-[250px]">
                  At Elluxe, your safety and privacy are our top priorities. In
                  a world of growing cybercrime and online harassment, we
                  provide advanced cybersecurity and stalker protection services
                  to keep you secure. Our cybersecurity experts monitor your
                  online presence, preventing identity theft, hacking, and cyber
                  attacks.
                </p>
                <Link href="/apply-now">
                  <Button
                    className="min-[1280px]:hidden w-fit mt-4"
                    variant="outline"
                  >
                    Apply Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </section>
  );
};

export default ServiesSix;
