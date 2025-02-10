"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInAnimationProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  children,
  className,
  threshold,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Animates every time it enters/exits the viewport
    threshold: threshold ?? 1, // Visibility threshold (20% visible)
  });
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
        lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
      }
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: scrollDirection === "up" ? 20 : -20, },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" }, },
  };


  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
