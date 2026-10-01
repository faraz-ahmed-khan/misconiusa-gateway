"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import { CTA_TEXT } from "@/lib/constants";
import { getGybsPackagesHref, isExternalHref } from "@/lib/links";

export function SelectPackageCtaSection() {
  const packageHref = getGybsPackagesHref();
  const packageExternal = isExternalHref(packageHref);

  return (
    <Section className="border-y border-[rgba(212,168,87,0.12)] bg-[linear-gradient(135deg,#0A1A2F_0%,#071422_100%)]">
      <AnimateIn variant="fadeUp" className="mx-auto max-w-3xl text-center">
        <h2 className="text-[40px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-text-primary)] sm:text-[48px]">
          Select Your Readiness Package
        </h2>
        <div className="mt-8 flex justify-center">
          <motion.a
            href={packageHref}
            {...(packageExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-8 py-4 text-[16px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] hover:bg-[color:var(--color-gold-light)]"
          >
            {CTA_TEXT.selectYourReadinessPackage}
          </motion.a>
        </div>
      </AnimateIn>
    </Section>
  );
}
