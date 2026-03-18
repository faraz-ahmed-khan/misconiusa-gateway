import Link from "next/link";
import type { OpportunityCard as OpportunityCardType } from "@/lib/types";
import { ROUTES } from "@/lib/constants";

interface OpportunityCardProps {
  card: OpportunityCardType;
}

const SLUG_TO_HREF: Record<string, string> = {
  customer: ROUTES.opportunitiesCustomer,
  product: ROUTES.opportunitiesProduct,
  supplier: ROUTES.opportunitiesSupplier,
};

export function OpportunityCard({ card }: OpportunityCardProps) {
  const href = SLUG_TO_HREF[card.slug] ?? `${ROUTES.opportunities}/${card.slug}`;
  const topBorderColor = card.id === "customer" ? "#1D4ED8" : card.id === "product" ? "#EA580C" : "#16A34A";

  return (
    <article
      className="rounded-[12px] border border-[color:var(--color-card-border)] bg-[color:var(--color-card-bg)] p-9 shadow-[0_14px_40px_rgba(10,26,47,0.06)] transition-transform transition-shadow transition-colors duration-200 hover:-translate-y-1 hover:border-[color:var(--color-card-border-hover)] hover:shadow-[0_22px_60px_rgba(10,26,47,0.14)]"
      style={{ borderTopWidth: 4, borderTopColor: topBorderColor }}
    >
      <h3 className="text-[22px] font-semibold leading-snug text-[color:var(--color-card-text)]">{card.title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{card.description}</p>
      <Link
        href={href}
        className="mt-5 inline-block text-[14px] font-semibold text-[color:var(--color-card-text)] transition-colors duration-200 hover:text-[color:var(--color-card-border-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-off-white)]"
      >
        View opportunities →
      </Link>
    </article>
  );
}
