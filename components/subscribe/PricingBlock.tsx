import { Check } from "lucide-react";
import type { SubscriptionPack } from "@/lib/types";

interface PricingBlockProps {
  pack: SubscriptionPack;
}

const DEFAULT_FEATURES = [
  "Activates your readiness routing immediately",
  "Unlocks your assigned pathway",
  "Enables full opportunity eligibility",
];

export function PricingBlock({ pack }: PricingBlockProps) {
  const features = pack.features ?? DEFAULT_FEATURES;
  const ctaHref = pack.ctaHref ?? "/subscribe";

  return (
    <div className="rounded-[22px] border border-[rgba(212,168,87,0.18)] bg-[#071422] p-8 text-[color:var(--color-text-primary)] shadow-[0_28px_80px_rgba(0,0,0,0.65)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_36px_96px_rgba(0,0,0,0.75)]">
      <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(0,200,83,0.14)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#00C853]">
        <span className="h-2 w-2 rounded-full bg-[#00C853]" /> One subscription pack only
      </div>
      <h3 className="mt-5 text-[32px] font-extrabold leading-tight text-[color:var(--color-text-primary)]">{pack.name}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-[rgba(245,245,242,0.68)]">{pack.description}</p>
      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3 rounded-[14px] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-4 transition-colors duration-200 hover:border-[rgba(212,168,87,0.24)] hover:bg-[rgba(255,255,255,0.04)]">
            <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(212,168,87,0.14)] text-[color:var(--color-gold)]">
              <Check className="h-4 w-4" aria-hidden />
            </div>
            <p className="text-[14px] leading-relaxed text-[rgba(245,245,242,0.82)]">{feature}</p>
          </div>
        ))}
      </div>
      <a
        href={ctaHref}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--color-gold)] px-6 py-3.5 text-[14px] font-bold text-[#0A1A2F] transition-transform duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071422]"
      >
        {pack.ctaText}
      </a>
    </div>
  );
}
