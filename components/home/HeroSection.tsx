'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ROUTES,
  CTA_TEXT,
  GYBS_BASE_URL,
  GYBS_BUSINESS_INTAKE_URL,
  GYBS_PARTNER_URL,
  GYBS_SUPPLIER_INTAKE_URL,
} from "@/lib/constants";
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
                  Prime Agent Surface — Misconi USA
                </span>
              </div>
            </AnimateIn>

            <div className="mt-6">
              <AnimateIn delay={0.22} variant="fadeUp">
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-5xl lg:text-[3.2rem]">
                  <span>Your Readiness and Opportunity </span>
                </h1>
              </AnimateIn>
              <AnimateIn delay={0.34} variant="fadeUp">
                <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-[color:var(--color-text-primary)] sm:text-5xl lg:text-[3.2rem]">
                  <span className="text-[color:var(--color-gold)]">Gateway</span>
                </h1>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.54} variant="fadeUp">
              <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[color:var(--color-text-body)]">
                Choose your readiness pathway. Complete intake in GYBS, subscribe to activate routing, and access governed opportunities across customer, product, and supplier lanes.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.6} variant="fadeUp">
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
                Misconi USA is the Prime Agent operating the national Readiness and Opportunity Gateway. Begin your readiness journey, unlock your pathway, and access opportunities across customer, product, and supplier lanes.
              </p>
            </AnimateIn>

            <AnimateIn delay={0.68} variant="fadeUp">
              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] font-medium text-[color:var(--color-text-body)]">
                <span className="uppercase tracking-[0.12em] text-[color:var(--color-text-muted)]">This surface serves:</span>
                <StaggerGroup stagger={0.07} delay={0.18} className="flex flex-wrap gap-3">
                  <StaggerItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[color:var(--lane-buyer)]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--lane-buyer)] transition-colors hover:bg-[color:var(--lane-buyer)]/30"
                    >
                      Business
                    </a>
                  </StaggerItem>
                  <StaggerItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[color:var(--lane-supplier)]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--lane-supplier)] transition-colors hover:bg-[color:var(--lane-supplier)]/30"
                    >
                      Supplier
                    </a>
                  </StaggerItem>
                  <StaggerItem>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[color:var(--lane-partner)]/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--lane-partner)] transition-colors hover:bg-[color:var(--lane-partner)]/30"
                    >
                      Partner
                    </a>
                  </StaggerItem>
                  <StaggerItem>
                    <span className="rounded-full border border-[rgba(245,245,242,0.65)] bg-[rgba(245,245,242,0.08)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-text-primary)] shadow-[0_0_0_1px_rgba(10,26,47,0.2)]">
                      Agency
                    </span>
                  </StaggerItem>
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
                  <a
                    href={GYBS_BUSINESS_INTAKE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-6 py-3 text-[15px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_8px_32px_rgba(0,0,0,0.45)] transition-transform transition-shadow duration-200 hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.businessIntake}
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                  <a
                    href={GYBS_SUPPLIER_INTAKE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.48)] bg-[rgba(245,245,242,0.04)] px-6 py-3 text-[14px] font-medium text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.72)] hover:bg-[rgba(245,245,242,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.supplierIntake}
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2, borderColor: "rgba(245,245,242,0.60)" }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}>
                  <a
                    href={GYBS_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(0,200,83,0.45)] bg-[rgba(0,200,83,0.10)] px-5 py-2.5 text-[14px] font-semibold text-[#00C853] transition-colors duration-200 hover:bg-[rgba(0,200,83,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.getYourBusinessScore}
                  </a>
                </motion.div>

                <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={ROUTES.opportunities}
                    className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.28)] bg-[rgba(245,245,242,0.03)] px-5 py-2.5 text-[14px] font-medium text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.14)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.56)] hover:bg-[rgba(245,245,242,0.06)] hover:text-[color:var(--color-white)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
                  >
                    {CTA_TEXT.viewOpportunities}
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
                      Misconi USA — Prime Agent
                    </p>
                    <p className="mt-1 text-xs text-[color:var(--color-text-body)]">Readiness Routing Overview</p>
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
                    { label: "Supplier Lane", color: "var(--lane-supplier)", value: "Validated" },
                    { label: "Buyer Lane", color: "var(--lane-buyer)", value: "Active" },
                    { label: "Partner Lane", color: "var(--lane-partner)", value: "Aligning" },
                    { label: "Agency Lane", color: "var(--lane-agency)", value: "Governing" },
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
                                lane.label === "Supplier Lane"
                                  ? "82%"
                                  : lane.label === "Buyer Lane"
                                    ? "68%"
                                    : lane.label === "Partner Lane"
                                      ? "54%"
                                      : "73%",
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
                    Intake and scoring occur in GYBS. Misconi USA routes validated participants to governed pathways and
                    opportunities.
                  </p>
                  <a
                    href={GYBS_BUSINESS_INTAKE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[12px] font-semibold text-[color:var(--color-gold-light)] hover:underline"
                  >
                    Begin business intake →
                  </a>
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
