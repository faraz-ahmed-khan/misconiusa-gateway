"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import type { OpportunityCard as OpportunityCardType } from "@/lib/types";

interface OpportunityCardsSectionProps {
  cards: OpportunityCardType[];
}

export function OpportunityCardsSection({ cards }: OpportunityCardsSectionProps) {
  return (
    <Section id="opportunities" className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ECOSYSTEM OF OPPORTUNITIES</p>
        <h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Opportunity Pathways</h2>
      </AnimateIn>
      <AnimateIn delay={0.1} variant="fadeUp">
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600">
          Customer, Product, and Supplier opportunity lanes are presented as governed, readiness-driven cards. Each card routes to its own operational view.
        </p>
      </AnimateIn>
      <StaggerGroup className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.14}>
        {cards.map((card) => (
          <StaggerItem key={card.id}>
            <OpportunityCard card={card} />
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
