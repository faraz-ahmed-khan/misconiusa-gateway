"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import { Section } from "@/components/shared/Section";

export function WhoWeAreSection() {
  return (
    <Section id="about" className="scroll-mt-24 bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp" className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center border-l-4 border-[color:var(--color-gold)] pl-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ABOUT MISCONI USA</span>
        </div>
        <h2 className="mt-4 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Who We Are</h2>
        <p className="mt-5 text-[18px] leading-[1.8] text-[#334155]">
          Misconi USA is a full-service business readiness company. We don&apos;t offer a single service — we build a complete system that evaluates where a business stands today, closes the gaps holding it back, and prepares it for real opportunity.
        </p>
      </AnimateIn>
    </Section>
  );
}
