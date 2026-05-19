"use client";

import Link from "next/link";
import { NavLink } from "@/components/shared/NavLink";
import { GYBS_BUSINESS_INTAKE_URL, GYBS_SUPPLIER_INTAKE_URL, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <AnimateIn variant="fadeIn">
      <footer className="border-t border-[rgba(212,168,87,0.15)] bg-[#050F1C]" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center text-[color:var(--color-text-body)]">
            <div className="space-y-2">
              <p className="text-[20px] font-extrabold tracking-tight text-[color:var(--color-text-primary)]">Misconi USA</p>
              <motion.div initial={{ scaleX: 0, originX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }} className="mx-auto h-0.5 w-8 rounded-full bg-[color:var(--color-gold)]" />
              <p className="text-sm text-[color:var(--color-text-body)]">The Readiness Company™</p>
            </div>
            <a href="mailto:info@misconiusa.com" className="text-sm text-[color:var(--color-text-body)] hover:text-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050F1C] rounded">info@misconiusa.com</a>
            <StaggerGroup className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" stagger={0.12}>
              {[
                { href: ROUTES.opportunities, label: "Opportunities" },
                { href: ROUTES.pathways, label: "Pathways" },
                { href: GYBS_BUSINESS_INTAKE_URL, label: "Business Intake" },
                { href: GYBS_SUPPLIER_INTAKE_URL, label: "Supplier Intake" },
                { href: ROUTES.subscribe, label: "Subscribe" },
                { href: ROUTES.contactAnchor, label: "Contact" },
              ].map((item) => (
                <StaggerItem key={item.label}><NavLink href={item.href} className="text-[color:var(--color-text-body)] hover:text-[color:var(--color-gold-light)]">{item.label}</NavLink></StaggerItem>
              ))}
            </StaggerGroup>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[color:var(--color-text-muted)]">
              <Link href="/privacy" className="hover:text-[color:var(--color-gold-light)]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[color:var(--color-gold-light)]">Terms of Use</Link>
            </div>
            <p className="text-xs text-[color:var(--color-text-muted)]">© Misconi USA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimateIn>
  );
}
