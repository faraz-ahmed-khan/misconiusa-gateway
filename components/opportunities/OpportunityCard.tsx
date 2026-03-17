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

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-800/50">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{card.description}</p>
      <Link
        href={href}
        className="mt-4 inline-block text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
      >
        View opportunities →
      </Link>
    </article>
  );
}
