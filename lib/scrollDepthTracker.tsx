"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const ScrollDepthTracker = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollDepth = (window.scrollY / document.body.scrollHeight) * 100;
      if (scrollDepth > 50) {
        trackEvent("User Engagement", "Scroll Depth", "50% Scroll");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollDepthTracker;
