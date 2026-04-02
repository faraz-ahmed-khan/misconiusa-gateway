"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { Section } from "@/components/shared/Section";
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { SupplierInterestForm } from "@/components/forms/SupplierInterestForm";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-[rgba(212,168,87,0.25)] bg-[color:var(--color-navy)]">
      <AnimateIn delay={0} variant="fadeUp"><h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">Contact Misconi USA</h2></AnimateIn>
      <AnimateIn delay={0.18} variant="fadeUp"><p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">For questions, support, or supplier interest, use the forms below to reach the Prime Agent.</p></AnimateIn>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <AnimateIn variant="fadeLeft" delay={0.1}><div className="rounded-[18px] border border-[color:var(--color-border-mid)] bg-[color:var(--color-surface-dark)]/90 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.75)]"><h3 className="text-lg font-medium text-[color:var(--color-text-primary)]">General Contact Form</h3><p className="mt-2 text-xs uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]">Routed to Prime Agent support</p><div className="mt-5"><GeneralContactForm /></div></div></AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.1}><div className="rounded-[18px] border border-[color:var(--color-border-mid)] bg-[color:var(--color-surface-dark)]/90 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.75)]"><h3 className="text-lg font-medium text-[color:var(--color-text-primary)]">Supplier Interest Form</h3><p className="mt-2 text-xs uppercase tracking-[0.14em] text-[color:var(--color-text-muted)]">Routed to Supplier Readiness</p><div className="mt-5"><SupplierInterestForm /></div></div></AnimateIn>
      </div>
    </Section>
  );
}
