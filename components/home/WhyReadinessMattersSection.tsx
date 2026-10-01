"use client";

import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";

export function WhyReadinessMattersSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp" className="mx-auto max-w-3xl text-center">
        <h2 className="text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Why Readiness Matters</h2>
        <p className="mt-5 text-[18px] leading-[1.8] text-[#334155]">
          Opportunity doesn&apos;t wait for businesses to catch up. Misconi USA exists to make sure your business is ready for it.
        </p>
      </AnimateIn>
    </Section>
  );
}
