"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLink } from "@/components/shared/NavLink";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { CTA_TEXT, ROUTES } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Home", href: ROUTES.home },
  { label: "About", href: ROUTES.about },
  { label: "What We Govern", href: ROUTES.whatWeGovern },
  { label: "Capabilities", href: ROUTES.capabilities },
  { label: "Subscription Gateway", href: ROUTES.subscribe },
  { label: "Investor Relations", href: ROUTES.investorRelations },
  { label: "Contact", href: ROUTES.contact },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="sticky top-0 z-50 border-b border-[rgba(212,168,87,0.15)] bg-[rgba(10,26,47,0.92)] backdrop-blur-2xl"
      role="banner"
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.18, ease: "easeOut" }}>
          <SiteLogo />
        </motion.div>

        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="hidden min-w-0 items-center gap-3 xl:flex"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.label} whileHover={{ y: -1 }} transition={{ duration: 0.18 }} className="shrink-0">
              <NavLink
                href={item.href}
                className="whitespace-nowrap rounded-md text-[13px] text-[color:var(--color-text-body)] transition-colors duration-150 hover:text-[color:var(--color-text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
              >
                {item.label}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            animate={{
              boxShadow: [
                "0 4px 20px rgba(212,168,87,0.20)",
                "0 4px 32px rgba(212,168,87,0.45)",
                "0 4px 20px rgba(212,168,87,0.20)",
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            className="ml-1 shrink-0"
          >
            <Link
              href={ROUTES.beginReadiness}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-[color:var(--color-gold)] px-4 py-2 text-[13px] font-semibold text-[color:var(--color-gold)] transition-colors duration-200 hover:bg-[rgba(212,168,87,0.12)] hover:text-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
            >
              {CTA_TEXT.beginReadinessJourney}
            </Link>
          </motion.div>
        </motion.nav>

        <motion.button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[rgba(212,168,87,0.4)] text-[color:var(--color-gold)] outline-none transition-colors duration-150 hover:bg-[rgba(212,168,87,0.08)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)] xl:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="sr-only">Open navigation</span>
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" />
            <span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" />
            <span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" />
          </span>
        </motion.button>
      </div>

      {open && (
        <div className="xl:hidden">
          <div className="absolute left-0 right-0 top-full z-40 border-b border-[rgba(212,168,87,0.15)] bg-[rgba(10,26,47,0.98)] backdrop-blur-2xl">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6">
              <nav className="space-y-2 text-[16px]" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-2 py-2 text-[color:var(--color-text-primary)] transition-colors duration-150 hover:bg-[rgba(248,250,252,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,26,47,0.98)]"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={ROUTES.beginReadiness}
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-5 py-3 text-[15px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_10px_32px_rgba(0,0,0,0.65)] transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,26,47,0.98)]"
                >
                  {CTA_TEXT.beginReadinessJourney}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
