"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";

export function AboutSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
        <AnimateIn variant="fadeLeft">
          <aside className="rounded-[20px] bg-[#0A1A2F] p-11 text-[color:var(--color-text-primary)] shadow-[0_32px_96px_rgba(15,23,42,0.8)]">
            <AnimateIn delay={0.2} variant="fadeUp">
              <div className="mt-4 border-l-[3px] border-[color:var(--color-gold)] pl-5">
                <p className="text-[22px] font-semibold leading-[1.5] text-[color:var(--color-text-primary)]">Misconi USA is the national Prime Agent responsible for readiness governance, procurement governance, and opportunity routing.</p>
              </div>
            </AnimateIn>
            <StaggerGroup className="mt-6 flex flex-wrap gap-3" stagger={0.09} delay={0.35}>
              {[
                ["Readiness", "bg-[rgba(0,200,83,0.12)] text-[#00C853]"],
                ["Procurement", "bg-[rgba(26,115,232,0.12)] text-[#1A73E8]"],
                ["Opportunities", "bg-[rgba(212,168,87,0.12)] text-[color:var(--color-gold)]"],
              ].map(([label, cls]) => (
                <StaggerItem key={label} className="rounded-full px-4 py-1.5 text-[12px] font-semibold">
                  <span className={cls}>{label}</span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </aside>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.1}>
          <div>
            <AnimateIn delay={0.15} variant="fadeUp"><div className="inline-flex items-center border-l-4 border-[color:var(--color-gold)] pl-3"><span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ABOUT THE PRIME AGENT</span></div></AnimateIn>
            <AnimateIn delay={0.22} variant="fadeUp"><h2 className="mt-4 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">About Misconi USA</h2></AnimateIn>
            <AnimateIn delay={0.3} variant="fadeUp"><p className="mt-4 max-w-2xl text-[17px] leading-[1.8] text-[#334155]">Misconi USA is the national Prime Agent responsible for readiness governance, procurement governance, and opportunity routing. We ensure that customers, products, and suppliers enter the correct pathways and receive the correct opportunities based on readiness and procurement validation. Our mission is to maintain a clean, structured, and compliant national gateway for opportunity access.</p></AnimateIn>
            <StaggerGroup className="mt-6 space-y-3" stagger={0.12} delay={0.35}>
              {[
                "We ensure that customers, products, and suppliers enter the correct pathways.",
                "We route the correct opportunities based on readiness and procurement validation.",
                "We maintain a clean, structured, and compliant national gateway for opportunity access.",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="border-l-[3px] border-[color:var(--color-gold)] pl-4 py-2"><p className="text-[15px] font-semibold text-[#0F172A]">{item}</p></div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
