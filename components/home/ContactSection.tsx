"use client";

import AnimateIn from "@/components/ui/AnimateIn";
import { Section } from "@/components/shared/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT } from "@/lib/site-content";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-[rgba(212,168,87,0.25)] bg-[color:var(--color-navy)]">
      <AnimateIn delay={0} variant="fadeUp">
        <h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">Contact Us</h2>
      </AnimateIn>
      <AnimateIn delay={0.18} variant="fadeUp">
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
          Questions about readiness, partnerships, or affiliate opportunities? Send us a message.
        </p>
      </AnimateIn>
      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <AnimateIn variant="fadeLeft" delay={0.1}>
          <div className="rounded-[18px] border border-[color:var(--color-border-mid)] bg-[color:var(--color-surface-dark)]/90 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.75)]">
            <ContactForm />
          </div>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.1}>
          <div className="rounded-[18px] border border-[color:var(--color-border-mid)] bg-[color:var(--color-surface-dark)]/90 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.75)]">
            <h3 className="text-lg font-medium text-[color:var(--color-text-primary)]">{CONTACT.company}</h3>
            <div className="mt-4 space-y-2 text-sm text-[color:var(--color-text-body)]">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.city}</p>
              <a href={`mailto:${CONTACT.email}`} className="block font-medium text-[color:var(--color-gold-light)] hover:underline">
                {CONTACT.email}
              </a>
              <p>{CONTACT.phone}</p>
            </div>
          </div>
        </AnimateIn>
      </div>
    </Section>
  );
}
