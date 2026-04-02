"use client";

import { Section } from "@/components/shared/Section";
import { PathwayCard } from "@/components/pathways/PathwayCard";
import type { Pathway } from "@/lib/types";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

interface ReadinessPathwaysSectionProps {
  pathways: Pathway[];
}

export function ReadinessPathwaysSection({ pathways }: ReadinessPathwaysSectionProps) {
  return (
    <Section id="opportunities" className="bg-[#F8FAFC]">
      <div className="text-center">
        <AnimateIn delay={0} variant="fadeUp"><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0057B8]">PATHWAY SYSTEM</p></AnimateIn>
        <AnimateIn delay={0.1} variant="fadeUp"><h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Choose Your Readiness Pathway</h2></AnimateIn>
        <AnimateIn delay={0.18} variant="fadeUp"><p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#64748B]">Select the pathway that matches your business goal. Your Business Score determines your route.</p></AnimateIn>
      </div>
      <StaggerGroup className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
        {pathways.map((pathway, index) => (
          <StaggerItem key={pathway.id}>
            <PathwayCard pathway={pathway} index={index} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
