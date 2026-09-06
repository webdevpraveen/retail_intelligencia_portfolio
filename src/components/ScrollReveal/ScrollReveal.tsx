import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
  className?: string;
}

const directionOffsets = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
  none: {},
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-60px' });
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = directionOffsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
