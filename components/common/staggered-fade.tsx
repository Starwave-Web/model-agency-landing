'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import * as React from 'react';

type TextStaggeredFadeProps = {
  text: string;
  className?: string;
  delay: number;  // New prop to control the delay after mount
};

export const StaggeredFade: React.FC<TextStaggeredFadeProps> = ({
  text,
  className = '',
  delay = 0, // Default no delay
}) => {
  const variants = {
    hidden: { opacity: 0 },
    show: (i: number) => ({
      opacity: 1,
      transition: { delay: i * 0.07 },
    }),
  };

  const [isMounted, setIsMounted] = React.useState(false);  // State to track if component has mounted
  const letters = text.split('');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);  // Set to true after the specified delay
    }, delay);

    return () => clearTimeout(timer);  // Clean up the timeout on unmount
  }, [delay]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={isMounted && isInView ? 'show' : ''}
      variants={variants}
      viewport={{ once: true }}
      className={cn(
        'text-[36px] font-semibold md:text-h2 text-white',
        className
      )}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          variants={variants}
          custom={i}
          className={letter === ' ' ? 'inline-block' : ''} // To prevent space splitting
        >
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
