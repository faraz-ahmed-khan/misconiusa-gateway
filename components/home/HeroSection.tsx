'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ROUTES, CTA_TEXT, GYBS_SCORE_URL } from "@/lib/constants";
import { BRAND } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

export function HeroSection() {
  return (
    <section className="hero-shell border-b border-[color:var(--color-border-mid)]">
      <div className="hero-shell-inner mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <AnimateIn delay={0.1} variant="scaleIn">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border-gold)] bg-[color:var(--color-gold-tint)] px-3 py-1">
                <span className="hero-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">
                  Misconi USA — {BRAND.tagline}
                </span>
              </div>
            </AnimateIn>

            <div className="mt-6">
              <AnimateIn delay={0.22} variant="fadeUp">
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-5xl lg:text-[3.2rem]">
                  National Readiness Authority™
                </h1>
                <p className="mt-3 text-[15px] font-medium uppercase tracking-[0.08em] text-[color:var(--color-gold)]">
                  Multinational Supplier
                </p>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.54} variant="fadeUp">
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[color:var(--color-text-body)]">
                Misconi USA provides governance, structure, and national-level alignment for businesses, suppliers, and institutions participating in the national economic environment.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.6} variant="fadeUp">
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
                Strengthen businesses. Strengthen suppliers. Strengthen supply chains. Strengthen the nation. Opportunity follows readiness — never the other way around.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.68} variant="fadeUp">
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] font-medium text-[color:var(--color-text-body)]">
                <span className="uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">Who we serve:</span>
                <StaggerGroup stagger={0.07} delay={0.18} className="flex flex-wrap gap-3">
                  {["Businesses", "Suppliers", "Institutions", "Ecosystem Partners", "Communities"].map((label) => (
                    <StaggerItem key={label}>
                      <Link
                        href={ROUTES.whoWeServe}
                        className="rounded-full border border-[rgba(245,245,242,0.35)] bg-[rgba(245,245,242,0.06)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-primary)] transition-colors hover:border-[rgba(212,168,87,0.45)] hover:bg-[rgba(212,168,87,0.08)]"
                      >
                        {label}
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.78} variant="fadeUp">
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ y: -3, scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  animate={{
                    boxShadow: [
                      "0 4px 20px rgba(212,168,87,0.20)",
                      "0 4px 32px rgba(212,168,87,0.45)",
                      "0 4px 20px rgba(212,168,87,0.20)",
                    ],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Link
                    href={ROUTES.beginReadiness}
                    className="inline-flex items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-6 py-3 text-[15px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform transition-shadow duration-200 hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.beginReadinessJourney}
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={ROUTES.ecosystemReadiness}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.48)] bg-[rgba(245,245,242,0.04)] px-6 py-3 text-[14px] font-medium text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.72)] hover:bg-[rgba(245,245,242,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.learnMoreAboutReadiness}
                  </Link>
                </motion.div>

                <motion.div whileHover={{ y: -2, borderColor: "rgba(245,245,242,0.60)" }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <a
                    href={GYBS_SCORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(0,200,83,0.45)] bg-[rgba(0,200,83,0.10)] px-5 py-2.5 text-[14px] font-semibold text-[#00C853] transition-colors duration-200 hover:bg-[rgba(0,200,83,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.startReadinessEvaluation}
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={ROUTES.ecosystemOpportunities}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.28)] bg-[rgba(245,245,242,0.03)] px-5 py-2.5 text-[14px] font-medium text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.56)] hover:bg-[rgba(245,245,242,0.06)] hover:text-[color:var(--color-white)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.exploreOpportunityPathways}
                  </Link>
                </motion.div>
              </div>
            </AnimateIn>
          </div>

          <div className="hidden lg:block">
            <AnimateIn delay={0.35} variant="fadeRight" className="relative h-full w-full max-w-md translate-x-6">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl border border-[color:var(--color-border-gold)]/50 bg-[color:var(--color-surface-dark)]/95 p-5 shadow-[0_32px_96px_rgba(0,0,0,0.7)] backdrop-blur"
              >
                <div className="flex items-center justify-between border-b border-[color:var(--color-border)] pb-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">
                      Misconi USA — {BRAND.tagline}
                    </p>
                    <p className="mt-1 text-xs text-[color:var(--color-text-body)]">National Ecosystem Overview</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-[rgba(0,200,83,0.12)] px-3 py-1">
                    <motion.span
                      animate={{ opacity: [1, 0.25, 1], scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ready)]"
                    />
                    <span className="text-[11px] font-medium text-[color:var(--color-ready)]">System Ready</span>
                  </div>
                </div>

                <StaggerGroup stagger={0.1} delay={0.8} className="mt-4 grid gap-3 text-xs text-[color:var(--color-text-body)]">
                  {[
                    { label: "Ecosystem of Readiness", color: "var(--lane-buyer)", value: "Entry Point" },
                    { label: "Governance Alignment", color: "var(--lane-supplier)", value: "Required" },
                    { label: "Ecosystem of Opportunities", color: "var(--lane-partner)", value: "Activation" },
                  ].map((lane) => (
                    <StaggerItem key={lane.label}>
                      <div className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-card)] px-3 py-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: lane.color }} />
                            <span className="text-[11px] font-medium text-[color:var(--color-text-body)]">
                              {lane.label}
                            </span>
                          </div>
                          <span className="text-[11px] text-[color:var(--color-text-muted)]">{lane.value}</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-[rgba(148,163,184,0.25)]">
                          <div
                            className="h-1.5 rounded-full"
                            style={{
                              width:
                                lane.label === "Ecosystem of Readiness"
                                  ? "100%"
                                  : lane.label === "Governance Alignment"
                                    ? "78%"
                                    : "62%",
                              backgroundImage: `linear-gradient(90deg, rgba(212,168,87,0.5), ${lane.color})`,
                            }}
                          />
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerGroup>

                <div className="mt-5 border-t border-[color:var(--color-border)] pt-4">
                  <p className="text-[12px] leading-relaxed text-[color:var(--color-text-body)]">
                    All readiness begins at GetYourBusinessScore.com. Opportunity access requires readiness completion and approval by a Misconi USA representative.
                  </p>
                  <Link
                    href={ROUTES.beginReadiness}
                    className="mt-3 inline-block text-[12px] font-semibold text-[color:var(--color-gold-light)] hover:underline"
                  >
                    Begin your readiness journey →
                  </Link>
                </div>
              </motion.div>
              <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 rotate-[-6deg] rounded-2xl border border-[rgba(148,163,184,0.35)] bg-[rgba(15,23,42,0.9)]" />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
