"use client";

import { GybsLink } from "@/components/shared/GybsLink";
import { NavLink } from "@/components/shared/NavLink";
import { Section } from "@/components/shared/Section";
import { PathwayCard } from "@/components/pathways/PathwayCard";
import type { Pathway } from "@/lib/types";
import { CTA_TEXT, GYBS_SCORE_URL } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { motion } from "framer-motion";

interface ReadinessPathwaysSectionProps {
  pathways: Pathway[];
}

export function ReadinessPathwaysSection({ pathways }: ReadinessPathwaysSectionProps) {
  return (
    <Section className="bg-[#F8FAFC]">
      
      <div className="text-center">
        <AnimateIn delay={0} variant="fadeUp"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0057B8]">PATHWAY SYSTEM</p></AnimateIn>
        <AnimateIn delay={0.1} variant="fadeUp"><h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Readiness Pathways</h2></AnimateIn>
        <AnimateIn delay={0.18} variant="fadeUp"><p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#64748B]">Your Business Score determines your readiness pathway. Each pathway prepares you for the opportunities available in your lane. After subscribing and completing GYBS, you will be routed into the correct readiness pathway based on your readiness level.</p></AnimateIn>
      </div>
      <AnimateIn delay={0.22} variant="scaleIn" className="mx-auto mt-8 max-w-3xl">
        <div className="mx-auto inline-flex w-full items-center justify-center rounded-[12px] border border-[#BFDBFE] bg-[#EFF6FF] px-6 py-3">
          <p className="text-[14px] font-medium text-[#0F172A]">Your Business Score determines your pathway →</p>
        </div>
      </AnimateIn>
      <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
        {pathways.map((pathway, index) => (
          <StaggerItem key={pathway.id}>
            <PathwayCard pathway={pathway} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <NavLink
          href={GYBS_SCORE_URL}
          className="text-[14px] font-semibold text-[#0057B8] hover:text-[#003D8F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2 rounded"
        >
          View all pathways →
        </NavLink>
        <GybsLink href={GYBS_SCORE_URL} variant="outline" className="!text-[#0057B8] !border-[#0057B8]">
          {CTA_TEXT.getYourBusinessScore}
        </GybsLink>
      </div>
    </Section>
  );
}
