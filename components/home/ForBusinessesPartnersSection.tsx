"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import { CTA_TEXT } from "@/lib/constants";
import { LINKS } from "@/lib/links";

export function ForBusinessesPartnersSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <div className="grid gap-6 lg:grid-cols-2">
        <AnimateIn variant="fadeLeft">
          <article
            id="for-businesses"
            className="flex h-full scroll-mt-24 flex-col rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#0A1A2F] p-8 shadow-[0_26px_80px_rgba(15,23,42,0.35)]"
          >
            <h2 className="text-[28px] font-semibold text-[color:var(--color-text-primary)]">For Businesses</h2>
            <p className="mt-4 text-[18px] leading-relaxed text-[color:var(--color-text-body)]">
              Better Business. Better Profits. Better Opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href={LINKS.gybsScore}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-5 py-3 text-[14px] font-semibold text-[color:var(--color-text-dark)]"
              >
                {CTA_TEXT.getYourFreeBusinessScore}
              </motion.a>
              <motion.a
                href={LINKS.howReadinessWorks}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.48)] px-5 py-3 text-[14px] font-medium text-[color:var(--color-text-primary)]"
              >
                {CTA_TEXT.seeHowReadinessWorks}
              </motion.a>
            </div>
          </article>
        </AnimateIn>

        <AnimateIn variant="fadeRight" delay={0.1}>
          <article
            id="for-partners"
            className="flex h-full scroll-mt-24 flex-col rounded-[18px] border border-slate-200 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
          >
            <h2 className="text-[28px] font-semibold text-[#0F172A]">For Partners</h2>
            <p className="mt-4 text-[18px] leading-relaxed text-[#334155]">
              Better Leads. Better Data. Better Targeting.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href={LINKS.contactPartner}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-5 py-3 text-[14px] font-semibold text-[color:var(--color-text-dark)]"
              >
                {CTA_TEXT.becomeAPartner}
              </motion.a>
              <motion.a
                href={LINKS.contactAffiliate}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex min-h-[44px] items-center justify-center rounded-[10px] border border-slate-300 px-5 py-3 text-[14px] font-medium text-[#0F172A]"
              >
                {CTA_TEXT.becomeAnAffiliate}
              </motion.a>
            </div>
          </article>
        </AnimateIn>
      </div>
    </Section>
  );
}
