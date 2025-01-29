"use client";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../icons/common";
import { Button } from "../ui/button";
import { Crown } from "lucide-react";
import { scrollToSection } from "@/lib/utils";
import { SECTIONS } from "@/lib/const";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMobileScroll = (section: string) => {
    setOpen(false)
    scrollToSection(section)
}

  return (
    <nav className="w-full min-h-[78px] sticky top-0 bg-transparent z-[100]">
      <div className="container px-6 py-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex gap-1 items-center">
            <Crown className="h-[23px] w-[23px] md:h-[36px] md:w-[36px] text-[#D0B48C]" />
            <p className="primary-gradient-text text-[1.5rem] md:text-[2.5rem] font-semibold">
              Elluxe
            </p>
          </Link>
          <ul className="text-white text-navigation gap-6 hidden md:flex">
            <li onClick={() => scrollToSection(SECTIONS.ABOUTUS)} className="cursor-pointer">About Us</li>
            <Link href="/services"><li className="cursor-pointer">Services</li></Link>
            <li onClick={() => scrollToSection(SECTIONS.RESULTS)} className="cursor-pointer">Results</li>
            <li onClick={() => scrollToSection(SECTIONS.CONTACTUS)} className="cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center gap-3">
            {open ? (
              <div className="p-2 block md:hidden" onClick={() => setOpen(false)}>
                <CloseIcon
                />
              </div>
            ) : (
              <div className="p-2 block md:hidden" onClick={() => setOpen(true)}>
                <HamburgerIcon
                />
              </div>
            )}
            <Button className="hidden sm:block" variant="default">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
      {open && (
        <div className="px-6 absolute w-full">
          <div className="rounded-[24px] bg-featured-card-bg w-full">
            <ul className="text-white text-navigation flex flex-col items-center gap-6 py-6">
              <li onClick={() => handleMobileScroll(SECTIONS.ABOUTUS)} className="cursor-pointer">About Us</li>
              <Link href="/services"><li className="cursor-pointer">Services</li></Link>
              <li onClick={() => handleMobileScroll(SECTIONS.RESULTS)} className="cursor-pointer">Results</li>
              <li onClick={() => handleMobileScroll(SECTIONS.CONTACTUS)} className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
