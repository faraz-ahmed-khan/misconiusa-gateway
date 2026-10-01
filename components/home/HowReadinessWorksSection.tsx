"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";

const STEPS = [
  "Get Your Free Business Score",
  "See Your Gaps",
  "Get Ready",
  "Move Into Opportunity",
] as const;

export function HowReadinessWorksSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setVisible(true));
      },
      { threshold: 0.2 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section className="bg-[#0A1A2F]">
      <AnimateIn variant="fadeUp" className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(212,168,87,0.8)]">HOW READINESS WORKS</p>
      </AnimateIn>
      <div ref={containerRef} className="mt-10">
        <div className="hidden md:block">
          <div className="relative">
            <svg
              className="absolute left-0 top-[28px] h-[56px] w-full overflow-visible"
              viewBox="0 0 1200 56"
              fill="none"
              aria-hidden
              preserveAspectRatio="none"
            >
              <motion.path
                d="M56 28H1144"
                stroke="rgba(212,168,87,0.25)"
                strokeWidth="2"
                strokeDasharray="8 8"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
            <div className="relative grid grid-cols-4 gap-4">
              {STEPS.map((title, index) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <AnimateIn delay={0.1 + index * 0.15} variant="scaleUp">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 180, damping: 16 }}
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-gold)] text-[20px] font-black text-[color:var(--color-text-dark)] shadow-[0_12px_32px_rgba(0,0,0,0.55)]"
                      aria-hidden
                    >
                      {index + 1}
                    </motion.div>
                  </AnimateIn>
                  <AnimateIn delay={0.25 + index * 0.15} variant="fadeUp">
                    <div className="mt-4 max-w-[180px]">
                      <h3 className="text-[15px] font-bold text-[color:var(--color-text-primary)]">{title}</h3>
                    </div>
                  </AnimateIn>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 md:hidden">
          {STEPS.map((title, index) => (
            <div key={title} className="flex items-center">
              <div className="relative mr-4 flex flex-col items-center">
                <AnimateIn delay={0.1 + index * 0.15} variant="scaleUp">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 180, damping: 16 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-gold)] text-[18px] font-black text-[color:var(--color-text-dark)] shadow-[0_10px_26px_rgba(0,0,0,0.55)]"
                    aria-hidden
                  >
                    {index + 1}
                  </motion.div>
                </AnimateIn>
              </div>
              <div className="flex-1">
                <AnimateIn delay={0.25 + index * 0.15} variant="fadeUp">
                  <h3 className="text-[15px] font-bold text-[color:var(--color-text-primary)]">{title}</h3>
                </AnimateIn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
