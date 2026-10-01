"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { BRAND, CONTACT } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { motion } from "framer-motion";

const FOOTER_LINKS = [
  { href: ROUTES.forBusinesses, label: "For Businesses" },
  { href: ROUTES.forPartners, label: "For Partners" },
  { href: ROUTES.aboutAnchor, label: "About" },
  { href: ROUTES.contactAnchor, label: "Contact" },
  { href: ROUTES.privacy, label: "Privacy Policy" },
  { href: ROUTES.terms, label: "Terms of Use" },
] as const;

export function Footer() {
  return (
    <AnimateIn variant="fadeIn">
      <footer className="border-t border-[rgba(212,168,87,0.15)] bg-[#050F1C]" role="contentinfo">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">Explore</h3>
              <StaggerGroup className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2" stagger={0.06}>
                {FOOTER_LINKS.map((item) => (
                  <StaggerItem key={item.label}>
                    <Link href={item.href} className="text-[color:var(--color-text-body)] hover:text-[color:var(--color-gold-light)]">
                      {item.label}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">Contact</h3>
              <div className="mt-4 space-y-2 text-sm text-[color:var(--color-text-body)]">
                <a href={`mailto:${CONTACT.email}`} className="block hover:text-[color:var(--color-gold-light)]">
                  {CONTACT.email}
                </a>
                <p>{CONTACT.phone}</p>
                <p>{CONTACT.location}</p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[14px] border border-[rgba(212,168,87,0.18)] bg-[rgba(255,255,255,0.03)] p-5">
            <p className="text-[13px] leading-relaxed text-[color:var(--color-text-body)]">
              A Business Score reflects business readiness only. Misconi USA prepares businesses for opportunities; it does not guarantee funding approval, contract awards, revenue, profit, or that any third party will provide or approve an opportunity.
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 border-t border-[rgba(212,168,87,0.12)] pt-8 text-center">
            <p className="text-[20px] font-extrabold tracking-tight text-[color:var(--color-text-primary)]">{BRAND.footerBaseline}</p>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="h-0.5 w-8 rounded-full bg-[color:var(--color-gold)]"
            />
            <p className="text-sm text-[color:var(--color-text-body)]">{BRAND.gatewayLine}</p>
            <p className="text-xs text-[color:var(--color-text-muted)]">© Misconi USA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </AnimateIn>
  );
}
