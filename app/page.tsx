import AboutUs from "@/components/landing/about-us";
import Branches from "@/components/landing/branches";
import CTAEight from "@/components/landing/cta-eight";
import CTAFive from "@/components/landing/cta-five";
import CTAFour from "@/components/landing/cta-four";
import CTAOne from "@/components/landing/cta-one";
import CTASeven from "@/components/landing/cta-seven";
import CTASix from "@/components/landing/cta-six";
import CTAThree from "@/components/landing/cta-three";
import CTATwo from "@/components/landing/cta-two";
import Featured from "@/components/landing/featured";
import Hero from "@/components/landing/hero";
import Results from "@/components/landing/results";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <CTAOne />
      <AboutUs />
      <CTATwo/>
      <CTAThree/>
      <Results/>
      <CTAFour/>
      <CTAFive/>
      <Branches/>
      <CTASix/>
      <CTASeven/>
      <CTAEight/>
    </main>
  );
}
