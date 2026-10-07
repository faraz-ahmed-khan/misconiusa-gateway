'use client';

import { motion } from "framer-motion";
import { CTA_TEXT } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import AnimateIn from "@/components/ui/AnimateIn";

export function HeroSection() {
  return (
    <section className="hero-shell border-b border-[color:var(--color-border-mid)]">
      <div className="hero-shell-inner mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateIn delay={0.22} variant="fadeUp">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-5xl lg:text-[3.2rem]">
              MISCONI USA — THE READINESS COMPANY
            </h1>
          </AnimateIn>

          <AnimateIn delay={0.4} variant="fadeUp">
            <p className="mt-5 text-[18px] font-medium text-[color:var(--color-gold)] sm:text-[20px]">
              Readiness is the Gateway to Opportunity.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.5} variant="fadeUp">
            <p className="mx-auto mt-5 max-w-2xl text-[20px] font-semibold leading-relaxed text-[color:var(--color-text-primary)] sm:text-[22px]">
              Only one company gets your business ready to compete, ready to grow, and ready to be seen.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.58} variant="fadeUp">
            <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-text-body)]">
              Your business communicates the gaps. We reveal them. We close them. We prepare you for opportunities.
            </p>
          </AnimateIn>

          <AnimateIn delay={0.72} variant="fadeUp">
            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mx-auto sm:max-w-xl sm:items-center md:max-w-none md:flex-row md:flex-wrap md:justify-center md:gap-4">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                animate={{
                  boxShadow: [
                    "0 4px 20px rgba(212,168,87,0.20)",
                    "0 4px 32px rgba(212,168,87,0.45)",
                    "0 4px 20px rgba(212,168,87,0.20)",
                  ],
                }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-full md:w-auto"
              >
                <a
                  href={LINKS.gybsScore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-6 py-3 text-[15px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform transition-shadow duration-200 hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)] md:w-auto"
                >
                  {CTA_TEXT.getYourFreeBusinessScore}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="w-full md:w-auto"
              >
                <a
                  href={LINKS.howReadinessWorks}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.48)] bg-[rgba(245,245,242,0.04)] px-6 py-3 text-[14px] font-medium text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.72)] hover:bg-[rgba(245,245,242,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)] md:w-auto"
                >
                  {CTA_TEXT.seeHowReadinessWorks}
                </a>
              </motion.div>

              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="w-full md:w-auto"
              >
                <a
                  href={LINKS.contact}
                  className="inline-flex min-h-[44px] w-full items-center justify-center px-4 py-3 text-[14px] font-medium text-[color:var(--color-gold-light)] underline-offset-4 transition-colors hover:text-[color:var(--color-gold)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)] md:w-auto"
                >
                  {CTA_TEXT.contactMisconiUSA}
                </a>
              </motion.div>
            </div>

            <p className="mx-auto mt-5 max-w-xl text-[14px] leading-relaxed text-[color:var(--color-text-body)] sm:text-[15px]">
              {CTA_TEXT.preliminaryScoreNote}
            </p>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
