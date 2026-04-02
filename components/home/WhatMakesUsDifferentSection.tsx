"use client";

import { ShieldCheck, Network, Route, CheckCircle2, Layers, Star } from "lucide-react";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

const CARDS = [
  {
    title: "We operate the national readiness system for customers, products, and suppliers.",
    body: "We operate the national readiness system for customers, products, and suppliers.",
  },
  {
    title: "We combine readiness governance with procurement governance to ensure quality and compliance.",
    body: "We combine readiness governance with procurement governance to ensure quality and compliance.",
  },
  {
    title: "We route all opportunities through a single, unified gateway.",
    body: "We route all opportunities through a single, unified gateway.",
  },
  {
    title: "We ensure every participant is validated before opportunities are released.",
    body: "We ensure every participant is validated before opportunities are released.",
  },
  {
    title: "We maintain a clean, structured, agency-aligned process for all users.",
    body: "We maintain a clean, structured, agency-aligned process for all users.",
  },
  {
    title: "We connect businesses to national opportunity pathways.",
    body: "Every readiness pathway leads to real opportunity access — from suppliers and marketplaces to contracts and SBA programs.",
  },
];

const ICONS = [ShieldCheck, Network, Route, CheckCircle2, Layers, Star];

export function WhatMakesUsDifferentSection() {
  return (
    <Section className="bg-[#0A1A2F]">
      <div className="mx-auto max-w-4xl">
        <AnimateIn delay={0} variant="fadeUp">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[rgba(212,168,87,0.85)]">WHY MISCONI USA</p>
        </AnimateIn>
        <AnimateIn delay={0.1} variant="fadeUp">
          <h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[color:var(--color-text-primary)]">What Makes Us Different</h2>
        </AnimateIn>
      </div>
      <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
        {CARDS.map((card, index) => {
          const Icon = ICONS[index];
          return (
            <StaggerItem key={card.title}>
              <article className="flex h-full flex-col rounded-[16px] border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] p-8 shadow-[0_26px_80px_rgba(0,0,0,0.6)] transition-transform transition-colors duration-200 hover:-translate-y-1 hover:border-[rgba(212,168,87,0.25)] hover:bg-[rgba(255,255,255,0.05)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-[rgba(212,168,87,0.10)]">
                  <Icon className="h-5 w-5 text-[color:var(--color-gold)]" aria-hidden />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold text-[color:var(--color-text-primary)]">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[rgba(245,245,242,0.58)]">{card.body}</p>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
