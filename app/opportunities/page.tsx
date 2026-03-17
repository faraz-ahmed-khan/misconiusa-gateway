import Link from "next/link";
import { OPPORTUNITY_CARDS } from "@/lib/mock-data";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import { ROUTES } from "@/lib/constants";
import { Section } from "@/components/shared/Section";

export default function OpportunitiesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Opportunities</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Each card links to its own subpage with the full list of opportunities.
          </p>
        </div>
      </section>
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OPPORTUNITY_CARDS.map((card) => (
            <OpportunityCard key={card.id} card={card} />
          ))}
        </div>
        <p className="mt-8">
          <Link
            href={ROUTES.home}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
          >
            ← Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
