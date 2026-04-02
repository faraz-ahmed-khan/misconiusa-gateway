"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";

export function WhoWeAreSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <AnimateIn variant="fadeLeft" className="space-y-4">
          <div className="inline-flex items-center border-l-4 border-[color:var(--color-gold)] pl-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ABOUT THE PRIME AGENT</span>
          </div>
          <AnimateIn delay={0.1} variant="fadeUp">
            <h2 className="mt-4 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Who We Are</h2>
          </AnimateIn>
          <AnimateIn delay={0.2} variant="fadeUp">
            <p className="mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#334155]">
              Misconi USA is the Prime Agent responsible for operating the national Readiness and Opportunity Gateway. We manage readiness, procurement, and opportunity routing for customers, products, and suppliers. Our role is to ensure every participant enters the correct pathway and receives the correct opportunities based on readiness and procurement validation.
            </p>
          </AnimateIn>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.15}>
          <aside className="rounded-[20px] bg-[#0A1A2F] p-10 text-[color:var(--color-text-primary)] shadow-[0_32px_96px_rgba(15,23,42,0.75)]">
            <StaggerGroup stagger={0.12} delay={0.15} className="space-y-6">
              <StaggerItem>
                <div>
                  <p className="text-[48px] font-black leading-none text-[color:var(--color-gold)]">3</p>
                  <p className="mt-1 text-[14px] text-[color:var(--color-text-body)]">Readiness Lanes</p>
                </div>
              </StaggerItem>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <StaggerItem>
                <div>
                  <p className="text-[48px] font-black leading-none text-[color:var(--color-gold)]">6</p>
                  <p className="mt-1 text-[14px] text-[color:var(--color-text-body)]">Readiness Pathways</p>
                </div>
              </StaggerItem>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <StaggerItem>
                <div>
                  <p className="text-[48px] font-black leading-none text-[color:var(--color-gold)]">3</p>
                  <p className="mt-1 text-[14px] text-[color:var(--color-text-body)]">Subscription Tiers</p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </aside>
        </AnimateIn>
      </div>
    </Section>
  );
}
