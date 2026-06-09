"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { ROUTES } from "@/lib/constants";

const AUDIENCES = [
  {
    label: "Businesses",
    description: "Structural alignment, readiness evaluation, SBA category navigation, opportunity pathways, and technology-enabled scaling.",
  },
  {
    label: "Suppliers",
    description: "Category placement, distribution access, institutional procurement alignment, and national supply chain participation.",
  },
  {
    label: "Institutions",
    description: "Stable suppliers, compliant partners, readiness-aligned vendors, and transparent governance structures.",
  },
  {
    label: "Ecosystem Partners",
    description: "Business development, supplier development, workforce development, and regional economic growth.",
  },
  {
    label: "Communities & Regions",
    description: "Strengthening local businesses and suppliers, increasing economic participation, and supporting regional supply chain stability.",
  },
] as const;

export function WhoWeServeSection() {
  return (
    <Section className="bg-[#F8FAFC]">
      <AnimateIn variant="fadeUp">
        <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0057B8]">WHO WE SERVE</p>
        <h2 className="mt-3 text-[44px] font-semibold leading-[1.15] text-[#0F172A]">National Economic Participants</h2>
        <p className="mt-4 max-w-2xl text-[18px] leading-[1.8] text-[#64748B]">
          Misconi USA serves organizations that strengthen the national economic environment. Every participant enters through readiness and advances through governed pathways.
        </p>
      </AnimateIn>
      <StaggerGroup className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {AUDIENCES.map((audience) => (
          <StaggerItem key={audience.label}>
            <article className="flex h-full flex-col rounded-[16px] border border-[#E2E8F0] bg-white p-8 shadow-[0_14px_40px_rgba(10,26,47,0.06)] transition-transform duration-200 hover:-translate-y-1">
              <span className="inline-flex w-fit rounded-full bg-[rgba(212,168,87,0.12)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">
                {audience.label}
              </span>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-[#334155]">{audience.description}</p>
            </article>
          </StaggerItem>
        ))}
      </StaggerGroup>
      <p className="mt-8 text-center">
        <Link href={ROUTES.whoWeServe} className="text-[15px] font-semibold text-[#0057B8] hover:underline">
          View full Who We Serve page →
        </Link>
      </p>
    </Section>
  );
}
