import type { Pathway } from "@/lib/types";

interface PathwayCardProps {
  pathway: Pathway;
}

export function PathwayCard({ pathway }: PathwayCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
      <h3 className="font-semibold text-slate-900 dark:text-white">{pathway.name}</h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{pathway.description}</p>
    </article>
  );
}
