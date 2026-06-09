"use client";

import Link from "next/link";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";
import { ROUTES } from "@/lib/constants";

export function WhoWeAreSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-start">
        <AnimateIn variant="fadeLeft" className="space-y-4">
          <div className="inline-flex items-center border-l-4 border-[color:var(--color-gold)] pl-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">ABOUT MISCONI USA</span>
          </div>
          <AnimateIn delay={0.1} variant="fadeUp">
            <h2 className="mt-4 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">The Readiness Authority™</h2>
          </AnimateIn>
          <AnimateIn delay={0.2} variant="fadeUp">
            <p className="mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#334155]">
              Misconi USA strengthens the national ecosystem through two core pillars: the Ecosystem of Readiness and the Ecosystem of Opportunities. We operate as a multinational supplier of products, services, and technology.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3} variant="fadeUp">
            <Link href={ROUTES.about} className="mt-4 inline-block text-[15px] font-semibold text-[#0057B8] hover:underline">
              Learn more about Misconi USA →
            </Link>
          </AnimateIn>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.15}>
          <aside className="rounded-[20px] bg-[#0A1A2F] p-10 text-[color:var(--color-text-primary)] shadow-[0_32px_96px_rgba(15,23,42,0.75)]">
            <StaggerGroup stagger={0.12} delay={0.15} className="space-y-6">
              <StaggerItem>
                <div>
                  <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-gold)]">Pillar 1</p>
                  <p className="mt-2 text-[20px] font-semibold">Ecosystem of Readiness</p>
                  <p className="mt-2 text-[14px] text-[color:var(--color-text-body)]">Structural alignment before opportunity</p>
                </div>
              </StaggerItem>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <StaggerItem>
                <div>
                  <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-gold)]">Pillar 2</p>
                  <p className="mt-2 text-[20px] font-semibold">Ecosystem of Opportunities</p>
                  <p className="mt-2 text-[14px] text-[color:var(--color-text-body)]">Governed activation after readiness</p>
                </div>
              </StaggerItem>
              <div className="h-px bg-[rgba(255,255,255,0.06)]" />
              <StaggerItem>
                <div>
                  <p className="text-[14px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-gold)]">Mission</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
                    Strengthen businesses. Strengthen suppliers. Strengthen supply chains. Strengthen the nation.
                  </p>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </aside>
        </AnimateIn>
      </div>
    </Section>
  );
}
