import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { PathwayCard } from "@/components/pathways/PathwayCard";
import type { Pathway } from "@/lib/types";
import { ROUTES } from "@/lib/constants";

interface ReadinessPathwaysSectionProps {
  pathways: Pathway[];
}

export function ReadinessPathwaysSection({ pathways }: ReadinessPathwaysSectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Readiness Pathways</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Your Business Score determines your readiness pathway. Each pathway prepares you for the opportunities available
        in your lane. After subscribing and completing GYBS, you will be routed into the correct readiness pathway based
        on your readiness level.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pathways.map((pathway) => (
          <PathwayCard key={pathway.id} pathway={pathway} />
        ))}
      </div>
      <p className="mt-6">
        <Link
          href={ROUTES.pathways}
          className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
        >
          View all pathways →
        </Link>
      </p>
    </Section>
  );
}
