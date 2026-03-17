import Link from "next/link";
import { PRODUCT_OPPORTUNITIES } from "@/lib/mock-data";
import { ROUTES } from "@/lib/constants";
import { Section } from "@/components/shared/Section";

export default function ProductOpportunitiesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Product Opportunities</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Readiness Driven + Procurement Driven — Products unlock opportunities after readiness validation,
            procurement approval, and marketplace validation.
          </p>
        </div>
      </section>
      <Section>
        <ul className="space-y-4" role="list">
          {PRODUCT_OPPORTUNITIES.map((opp) => (
            <li
              key={opp.id}
              className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/50"
            >
              <h2 className="font-semibold text-slate-900 dark:text-white">{opp.title}</h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{opp.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href={ROUTES.opportunities}
            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
          >
            ← Back to Opportunities
          </Link>
        </p>
      </Section>
    </>
  );
}
