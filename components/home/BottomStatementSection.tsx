"use client";

import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";

export function BottomStatementSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp">
        <div className="mx-auto max-w-3xl rounded-[20px] bg-[#0A1A2F] p-10 text-center shadow-[0_32px_96px_rgba(15,23,42,0.55)]">
          <div className="border-l-[3px] border-[color:var(--color-gold)] pl-5 text-left sm:border-l-0 sm:pl-0 sm:text-center">
            <p className="text-[22px] font-semibold leading-[1.5] text-[color:var(--color-text-primary)]">
              Misconi USA is a business readiness company that helps businesses and partners prepare for opportunity.
            </p>
          </div>
        </div>
      </AnimateIn>
    </Section>
  );
}
