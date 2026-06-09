"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { BRAND, CONTACT } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { motion } from "framer-motion";

const FOOTER_COLUMNS = [
  {
    title: "Corporate",
    links: [
      { href: ROUTES.about, label: "About" },
      { href: ROUTES.whatWeGovern, label: "What We Govern" },
      { href: ROUTES.capabilities, label: "Capabilities" },
    ],
  },
  {
    title: "Governance",
    links: [
      { href: ROUTES.investorRelations, label: "Investor Relations" },
      { href: ROUTES.subscribe, label: "Subscription Gateway" },
      { href: ROUTES.terms, label: "Terms & Policies" },
    ],
  },
] as const;

export function Footer() {
  return (
    <AnimateIn variant="fadeIn">
      <footer className="border-t border-[rgba(212,168,87,0.15)] bg-[#050F1C]" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title}>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">{column.title}</h3>
                <StaggerGroup className="mt-4 space-y-2 text-sm" stagger={0.08}>
                  {column.links.map((item) => (
                    <StaggerItem key={item.label}>
                      <Link href={item.href} className="text-[color:var(--color-text-body)] hover:text-[color:var(--color-gold-light)]">
                        {item.label}
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            ))}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-[color:var(--color-text-body)]">
                <a href={`mailto:${CONTACT.email}`} className="block hover:text-[color:var(--color-gold-light)]">{CONTACT.email}</a>
                <p>{CONTACT.phone}</p>
                <p>{CONTACT.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-[rgba(212,168,87,0.12)] pt-8 text-center">
            <p className="text-[20px] font-extrabold tracking-tight text-[color:var(--color-text-primary)]">Misconi USA</p>
            <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="h-0.5 w-8 rounded-full bg-[color:var(--color-gold)]" />
            <p className="text-sm text-[color:var(--color-text-body)]">{BRAND.footerBaseline}</p>
            <p className="text-xs text-[color:var(--color-text-muted)]">© Misconi USA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimateIn>
  );
}
