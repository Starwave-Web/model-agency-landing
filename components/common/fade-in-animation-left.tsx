"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInAnimationLeftProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

const FadeInAnimationLeft: React.FC<FadeInAnimationLeftProps> = ({
  children,
  className,
  threshold,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates every time it enters/exits the viewport
    threshold: threshold ?? 1, // Visibility threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 2, ease: "easeOut" } },
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

export default FadeInAnimationLeft;
