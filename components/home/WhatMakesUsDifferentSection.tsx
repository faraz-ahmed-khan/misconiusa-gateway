"use client";

import { ShieldCheck, Network, Route, CheckCircle2, Layers, Star } from "lucide-react";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

const CARDS = [
  "We evaluate your business across the areas that matter most to lenders, partners, and buyers.",
  "We combine readiness and quality checks to keep standards consistent.",
  "We connect prepared businesses to the right next opportunity.",
  "We use governed readiness verification before qualified businesses are advanced for applicable opportunities.",
  "We follow a clear, repeatable process for every business we work with.",
  "We help businesses get discovered by the partners and programs that fit them.",
];

const ICONS = [ShieldCheck, Network, Route, CheckCircle2, Layers, Star];

export function WhatMakesUsDifferentSection() {
  return (
    <Section className="bg-[#0A1A2F]">
      {/* TODO(client): add verifiable proof points only when supplied */}
      <div className="mx-auto max-w-4xl">
        <AnimateIn delay={0} variant="fadeUp">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(212,168,87,0.85)]">WHY MISCONI USA</p>
        </AnimateIn>
        <AnimateIn delay={0.1} variant="fadeUp">
          <h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[color:var(--color-text-primary)]">What Makes Us Different</h2>
        </AnimateIn>
      </div>
      <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
        {CARDS.map((title, index) => {
          const Icon = ICONS[index];
          return (
            <StaggerItem key={title}>
              <article className="flex h-full flex-col rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-8 shadow-[0_26px_80px_rgba(0,0,0,0.6)] transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,87,0.25)] hover:bg-[rgba(255,255,255,0.05)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[rgba(212,168,87,0.10)]">
                  <Icon className="h-5 w-5 text-[color:var(--color-gold)]" aria-hidden />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[color:var(--color-text-primary)]">{title}</h3>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
