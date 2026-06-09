"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import type { SubscriptionTier } from "@/lib/types";

interface SubscriptionTierCardProps {
  tier: SubscriptionTier;
}

export function SubscriptionTierCard({ tier }: SubscriptionTierCardProps) {
  const isPrimary = tier.ctaVariant === "primary";
  const isExternal = tier.ctaHref.startsWith("http");
  const ctaClassName = isPrimary
    ? "mt-8 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-gold)] px-6 py-3.5 text-[14px] font-bold text-[#0A1A2F] transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071422]"
    : "mt-8 inline-flex w-full items-center justify-center rounded-full border border-[rgba(245,245,242,0.48)] bg-[rgba(245,245,242,0.04)] px-6 py-3.5 text-[14px] font-bold text-[color:var(--color-text-primary)] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-colors duration-200 hover:border-[rgba(245,245,242,0.72)] hover:bg-[rgba(245,245,242,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071422]";

  return (
    <div
      className={`rounded-[22px] border bg-[#071422] p-8 text-[color:var(--color-text-primary)] shadow-[0_28px_80px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_36px_96px_rgba(0,0,0,0.75)] ${
        tier.highlighted
          ? "border-[color:var(--color-gold)] ring-1 ring-[color:var(--color-gold)]/25"
          : "border-[rgba(212,168,87,0.18)]"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,200,83,0.14)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#00C853]">
          <span className="h-2 w-2 rounded-full bg-[#00C853]" /> {tier.badge}
        </div>
        {tier.tag && (
          <span className="rounded-full border border-[rgba(212,168,87,0.35)] bg-[rgba(212,168,87,0.08)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[color:var(--color-gold)]">
            {tier.tag}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-[32px] font-extrabold leading-tight text-[color:var(--color-text-primary)]">{tier.price}</span>
        {tier.period && <span className="text-[15px] text-[rgba(245,245,242,0.55)]">{tier.period}</span>}
      </div>
      <h3 className="mt-2 text-[22px] font-extrabold leading-tight text-[color:var(--color-text-primary)]">{tier.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[rgba(245,245,242,0.68)]">{tier.description}</p>
      <div className="mt-8 space-y-3">
        {tier.features.map((row) => (
          <div
            key={row.text}
            className="flex items-start gap-3 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-3 transition-colors duration-200 hover:border-[rgba(212,168,87,0.24)] hover:bg-[rgba(255,255,255,0.04)]"
          >
            <div
              className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                row.included ? "bg-[rgba(212,168,87,0.14)] text-[color:var(--color-gold)]" : "bg-[rgba(148,163,184,0.12)] text-[rgba(245,245,242,0.45)]"
              }`}
            >
              {row.included ? <Check className="h-4 w-4" aria-hidden /> : <X className="h-4 w-4" aria-hidden />}
            </div>
            <p className={`text-[14px] leading-relaxed ${row.included ? "text-[rgba(245,245,242,0.82)]" : "text-[rgba(245,245,242,0.45)]"}`}>{row.text}</p>
          </div>
        ))}
      </div>
      {isExternal ? (
        <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer" className={ctaClassName}>
          {tier.ctaText}
        </a>
      ) : (
        <Link href={tier.ctaHref || "#"} className={ctaClassName}>
          {tier.ctaText}
        </Link>
      )}
    </div>
  );
}
