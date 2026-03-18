"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface AnimateInProps {
  children: ReactNode;
  delay?: number;
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scaleIn" | "scaleUp";
  className?: string;
  once?: boolean;
}

const variantMap = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: (delay: number) => ({
      opacity: 1,
      transition: { duration: 0.55, delay, ease: "easeOut" },
    }),
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.75, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    }),
  },
} as const;

export default function AnimateIn({
  children,
  delay = 0,
  variant = "fadeUp",
  className,
  once = true,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once, margin: "-80px 0px" });
  const v = variantMap[variant];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: v.hidden,
        visible: v.visible(delay),
      } as any}
      className={className}
    >
      {children}
    </motion.div>
  );
}
