"use client";

import { NavLink } from "@/components/shared/NavLink";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { GYBS_BUSINESS_INTAKE_URL, GYBS_PARTNER_URL, GYBS_SUPPLIER_INTAKE_URL, ROUTES } from "@/lib/constants";

const AUDIENCES = [
  {
    label: "Businesses",
    description:
      "Companies entering readiness, subscription, and customer opportunity lanes after completing GYBS business intake.",
    href: GYBS_BUSINESS_INTAKE_URL,
    cta: "Business intake →",
    laneClass: "bg-[color:var(--lane-buyer)]/20 text-[color:var(--lane-buyer)]",
  },
  {
    label: "Suppliers",
    description:
      "Supplier entities qualifying for readiness validation, procurement satisfaction, and supplier opportunity access.",
    href: GYBS_SUPPLIER_INTAKE_URL,
    cta: "Supplier intake →",
    laneClass: "bg-[color:var(--lane-supplier)]/20 text-[color:var(--lane-supplier)]",
  },
  {
    label: "Partners",
    description:
      "Partner organizations aligned to shared readiness programs and governed opportunity participation.",
    href: GYBS_PARTNER_URL,
    cta: "Begin via GYBS →",
    laneClass: "bg-[color:var(--lane-partner)]/20 text-[color:var(--lane-partner)]",
  },
  {
    label: "Agencies",
    description:
      "Agency-aligned participants operating within procurement governance, compliance, and national routing policy.",
    href: ROUTES.contactAnchor,
    cta: "Contact Prime Agent →",
    laneClass:
      "border border-[rgba(245,245,242,0.65)] bg-[rgba(245,245,242,0.08)] text-[color:var(--color-text-primary)]",
  },
] as const;

export function WhoWeServeSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0057B8]">PARTICIPANTS</p>
        <h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">Who We Serve</h2>
        <p className="mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#64748B]">
          Misconi USA governs readiness and opportunity routing for businesses, suppliers, partners, and agencies across
          the national gateway. Readiness intake is completed in GYBS — not on this site.
        </p>
      </AnimateIn>
      <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2" stagger={0.1}>
        {AUDIENCES.map((audience) => (
          <StaggerItem key={audience.label}>
            <article className="flex h-full flex-col rounded-[16px] border border-[#E2E8F0] bg-white p-8 shadow-[0_14px_40px_rgba(10,26,47,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <span
                className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${audience.laneClass}`}
              >
                {audience.label}
              </span>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#334155]">{audience.description}</p>
              <NavLink
                href={audience.href}
                className="mt-6 text-[14px] font-semibold text-[#0057B8] hover:text-[#003D8F] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0057B8] focus-visible:ring-offset-2 rounded"
              >
                {audience.cta}
              </NavLink>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
