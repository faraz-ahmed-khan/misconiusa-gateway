"use client";

import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";
import { CTA_TEXT, ROUTES } from "@/lib/constants";

export function AboutSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
        <AnimateIn variant="fadeLeft">
          <aside className="rounded-[20px] bg-[#0A1A2F] p-11 text-[color:var(--color-text-primary)] shadow-[0_32px_96px_rgba(15,23,42,0.8)]">
            <AnimateIn delay={0.2} variant="fadeUp">
              <div className="mt-4 border-l-[3px] border-[color:var(--color-gold)] pl-5">
                <p className="text-[22px] font-semibold leading-[1.5] text-[color:var(--color-text-primary)]">
                  Opportunity follows readiness — never the other way around.
                </p>
              </div>
            </AnimateIn>
            <StaggerGroup className="mt-6 flex flex-wrap gap-3" stagger={0.09} delay={0.35}>
              {[
                ["Readiness", "bg-[rgba(0,200,83,0.12)] text-[#00C853]"],
                ["Governance", "bg-[rgba(26,115,232,0.12)] text-[#1A73E8]"],
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
            <AnimateIn delay={0.15} variant="fadeUp">
              <div className="inline-flex items-center border-l-4 border-[color:var(--color-gold)] pl-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ABOUT MISCONI USA</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.22} variant="fadeUp">
              <h2 className="mt-4 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">National Readiness Authority™</h2>
            </AnimateIn>
            <AnimateIn delay={0.3} variant="fadeUp">
              <div className="mt-4 max-w-2xl space-y-4 text-[17px] leading-[1.8] text-[#334155]">
                <p>
                  Misconi USA is the nation&apos;s Readiness Authority™, providing governance, structure, and national-level alignment for businesses, suppliers, and institutions.
                </p>
                <p>
                  We maintain a federal-aligned governance posture, ensuring clarity, stability, and long-term operational integrity across all surfaces of the ecosystem.
                </p>
              </div>
            </AnimateIn>
            <StaggerGroup className="mt-6 space-y-3" stagger={0.12} delay={0.35}>
              {[
                "Strengthen businesses.",
                "Strengthen suppliers.",
                "Strengthen supply chains.",
                "Strengthen the nation.",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="border-l-[3px] border-[color:var(--color-gold)] pl-4 py-2">
                    <p className="text-[15px] font-semibold text-[#0F172A]">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Link
              href={ROUTES.about}
              className="mt-8 inline-flex items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-6 py-3 text-[14px] font-semibold text-[#0A1A2F] transition-colors hover:bg-[color:var(--color-gold-light)]"
            >
              {CTA_TEXT.learnMoreAboutReadiness}
            </Link>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
