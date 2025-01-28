import AboutUs from "@/components/landing/about-us";
import CTAOne from "@/components/landing/cta-one";
import CTATwo from "@/components/landing/cta-two";
import Featured from "@/components/landing/featured";
import Hero from "@/components/landing/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <CTAOne />
      <AboutUs />
      <CTATwo/>
    </main>
  );
}
