"use client";

import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";
import { NavLink } from "@/components/shared/NavLink";
import { CTA_TEXT, GYBS_BUSINESS_INTAKE_URL, GYBS_SUPPLIER_INTAKE_URL, ROUTES } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Opportunities", href: ROUTES.opportunities },
  { label: "Pathways", href: ROUTES.pathways },
  { label: "Business Intake", href: GYBS_BUSINESS_INTAKE_URL },
  { label: "Supplier Intake", href: GYBS_SUPPLIER_INTAKE_URL },
  { label: "Subscribe", href: ROUTES.subscribe },
  { label: "Contact", href: ROUTES.contactAnchor },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }} className="sticky top-0 z-50 border-b border-[rgba(212,168,87,0.15)] bg-[rgba(10,26,47,0.92)] backdrop-blur-2xl" role="banner">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.18, ease: "easeOut" }}>
          <Link href={ROUTES.home} className="group relative flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]" aria-label="Misconi USA home">
             <Image
              src="/images/logo.png" 
              alt=""
              width={240}                
              height={240}                        
             />
          </Link>
        </motion.div>
        <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }} className="hidden items-center gap-6 text-[15px] md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <motion.div key={item.href} whileHover={{ y: -1, color: "#F5F5F2" }} transition={{ duration: 0.18 }}>
              <NavLink href={item.href} className="rounded-md text-[color:var(--color-text-body)] transition-colors duration-150 hover:text-[color:var(--color-text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]">{item.label}</NavLink>
            </motion.div>
          ))}
          <motion.div whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.96 }} animate={{ boxShadow: ["0 4px 20px rgba(212,168,87,0.20)", "0 4px 32px rgba(212,168,87,0.45)", "0 4px 20px rgba(212,168,87,0.20)"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}>
            <Link href={ROUTES.subscribe} className="inline-flex items-center justify-center rounded-[10px] border border-[color:var(--color-gold)] px-5 py-2.5 text-[14px] font-semibold text-[color:var(--color-gold)] transition-colors duration-200 hover:bg-[rgba(212,168,87,0.12)] hover:text-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]">{CTA_TEXT.subscribeAndBegin}</Link>
          </motion.div>
        </motion.nav>
        <motion.button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[rgba(212,168,87,0.4)] text-[color:var(--color-gold)] outline-none transition-colors duration-150 hover:bg-[rgba(212,168,87,0.08)] focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)] md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((v) => !v)} whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}><span className="sr-only">Open navigation</span><span className="flex flex-col gap-1.5"><span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" /><span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" /><span className="h-0.5 w-4 rounded-full bg-[color:var(--color-gold)]" /></span></motion.button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="absolute left-0 right-0 top-full z-40 border-b border-[rgba(212,168,87,0.15)] bg-[rgba(10,26,47,0.98)] backdrop-blur-2xl">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6">
              <nav className="space-y-2 text-[16px]" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
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
                  href={ROUTES.subscribe}
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-5 py-3 text-[15px] font-semibold text-[color:var(--color-text-dark)] shadow-[0_10px_32px_rgba(0,0,0,0.65)] transition-transform duration-150 hover:-translate-y-[1px] hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(10,26,47,0.98)]"
                >
                  {CTA_TEXT.subscribeAndBegin}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
