"use client";
import { useState } from "react";
import { CloseIcon, HamburgerIcon } from "../icons/common";
import { Button } from "../ui/button";
import { Crown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full min-h-[78px] sticky top-0 bg-transparent z-[100]">
      <div className="container px-6 py-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <Crown className="h-[23px] w-[23px] md:h-[36px] md:w-[36px] text-[#D0B48C]" />
            <p className="primary-gradient-text text-[1.5rem] md:text-[2.5rem] font-semibold">
              Elluxe
            </p>
          </div>
          <ul className="text-white text-navigation gap-6 hidden md:flex">
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Services</li>
            <li className="cursor-pointer">Results</li>
            <li className="cursor-pointer">Contact</li>
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
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Results</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
