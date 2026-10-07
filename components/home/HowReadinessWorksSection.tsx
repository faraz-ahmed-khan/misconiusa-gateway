"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";

const STEPS = [
  {
    title: "Get Your Free Business Score",
    description: "Take the free assessment to see where your business stands today.",
    note: "Your initial score is preliminary. Verified readiness requires evidence review and governed verification.",
  },
  {
    title: "See Your Gaps",
    description: "Understand what is holding your business back from opportunity.",
  },
  {
    title: "Get Ready",
    description: "Close the gaps with the right support, tools, and preparation.",
  },
  {
    title: "Move Into Opportunity",
    description: "Step forward prepared for lenders, partners, and buyers.",
  },
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
    <Section id="how-readiness-works" className="scroll-mt-24 bg-[#0A1A2F]">
      <AnimateIn variant="fadeUp" className="text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(212,168,87,0.8)]">HOW READINESS WORKS</p>
        <h2 className="mt-3 text-[36px] font-semibold leading-[1.15] text-[color:var(--color-text-primary)] sm:text-[44px]">
          How Readiness Works
        </h2>
      </AnimateIn>

      <div ref={containerRef} className="mt-10">
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-0 top-[28px] hidden h-[56px] w-full overflow-visible md:block"
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

          <ol className="relative grid grid-cols-1 items-start gap-8 md:grid-cols-4 md:gap-5">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex flex-row items-start md:flex-col md:items-center md:text-center">
                <AnimateIn delay={0.1 + index * 0.15} variant="scaleUp">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={visible ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 180, damping: 16 }}
                    className="relative z-10 mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-gold)] text-[18px] font-black text-[color:var(--color-text-dark)] shadow-[0_10px_26px_rgba(0,0,0,0.55)] md:mr-0 md:h-14 md:w-14 md:text-[20px]"
                    aria-hidden
                  >
                    {index + 1}
                  </motion.div>
                </AnimateIn>
                <div className="min-w-0 flex-1 md:mt-4 md:w-full md:max-w-[220px]">
                  <AnimateIn delay={0.25 + index * 0.15} variant="fadeUp">
                    <h3 className="text-[15px] font-bold text-[color:var(--color-text-primary)]">{step.title}</h3>
                  </AnimateIn>
                  <AnimateIn delay={0.32 + index * 0.15} variant="fadeUp">
                    <p className="mt-2 text-[14px] leading-relaxed text-[rgba(245,245,242,0.65)]">{step.description}</p>
                  </AnimateIn>
                  {"note" in step && step.note ? (
                    <AnimateIn delay={0.38 + index * 0.15} variant="fadeUp">
                      <p className="mt-2 text-[13px] leading-relaxed text-[rgba(245,245,242,0.48)]">{step.note}</p>
                    </AnimateIn>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
