"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";

const LANES = [
  "Level 1 → Foundational Lane",
  "Level 2 → Guided Lane",
  "Level 3 → Opportunity Lane",
];

const TIERS = [
  { tier: "Free", desc: "See your lane only" },
  { tier: "Basic", desc: "Foundational + Guided Lane features" },
  { tier: "Enterprise", desc: "All lane features + Opportunity Lane" },
];

export function ReadinessDoctrineSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp" delay={0.1}>
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">HOW READINESS WORKS</p>
        <h2 className="mt-3 max-w-4xl text-[44px] font-semibold leading-[1.15] text-[#0F172A]">
          Your Score is the Map. Your Subscription is the Vehicle.
        </h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">STEP 1</p>
            <h3 className="mt-2 text-[22px] font-semibold text-[#0F172A]">Your Score Unlocks Your Lane</h3>
            <p className="mt-3 text-[17px] leading-[1.8] text-[#334155]">
              Your Business Score (0–100) determines your readiness level and automatically places you into one of three lanes.
            </p>
            <StaggerGroup className="mt-5 flex flex-wrap gap-3" stagger={0.09} delay={0.05}>
              {LANES.map((label) => (
                <StaggerItem key={label}>
                  <span className="rounded-full border border-[rgba(212,168,87,0.35)] bg-[rgba(212,168,87,0.08)] px-3 py-1.5 text-[12px] font-semibold text-[#0F172A]">
                    {label}
                  </span>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">STEP 2</p>
            <h3 className="mt-2 text-[22px] font-semibold text-[#0F172A]">Your Subscription Unlocks Lane Features</h3>
            <p className="mt-3 text-[17px] leading-[1.8] text-[#334155]">
              Your lane shows where you are. Your subscription determines what you can do next.
            </p>
            <div className="mt-5 space-y-3">
              {TIERS.map((row) => (
                <div key={row.tier} className="flex flex-wrap items-baseline justify-between gap-2 rounded-[12px] border border-slate-200 bg-white px-4 py-3 text-[14px] text-[#334155] shadow-sm">
                  <span className="font-semibold text-[#0F172A]">{row.tier}</span>
                  <span className="text-[14px] leading-relaxed text-[#64748B]">→ {row.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-l-4 border-[color:var(--color-gold)] bg-[#0A1A2F] p-8 shadow-[0_32px_96px_rgba(15,23,42,0.75)]">
          <p className="text-[17px] font-medium leading-[1.8] text-[color:var(--color-text-primary)]">
            Your score is the map. Your subscription is the vehicle.
          </p>
        </div>
      </AnimateIn>
    </Section>
  );
}
