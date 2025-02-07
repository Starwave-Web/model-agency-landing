"use client";
import { trackEvent } from "@/lib/analytics";
import { SECTIONS } from "@/lib/const";
import { scrollToSection } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (section: string) => {
    console.log(pathname);
    if (pathname !== "/") {
      router.push(`/#${section}`);
    }
    trackEvent("User Interaction", "Click", `Navigation ${section}`)
    scrollToSection(section);
  };

  return (
    <section className="w-full bg-primary-black">
      <div className="container mx-auto py-8 md:pt-[53px] md:pb-[18px]">
        <div className="h-px w-full bg-white" />
        <ul className="text-white text-navigation gap-6 flex justify-center my-7 md:mt-4 md:mb-9 px-6">
          <li
            onClick={() => handleNavigation(SECTIONS.ABOUTUS)}
            className="cursor-pointer"
          >
            About Us
          </li>
          <Link href="/services">
            <li className="cursor-pointer">Services</li>
          </Link>
          <li
            onClick={() => handleNavigation(SECTIONS.RESULTS)}
            className="cursor-pointer"
          >
            Results
          </li>
          <li
            onClick={() => handleNavigation(SECTIONS.CONTACTUS)}
            className="cursor-pointer"
          >
            Contact
          </li>
        </ul>
        <div className="flex items-center justify-center gap-14 text-white px-6">
          <p>©2025 Elluxe Management. All rights reserved.</p>
          <Link href="/">
            <p className="underlined">Privacy Policy</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
