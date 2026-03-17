import { Section } from "@/components/shared/Section";

const ITEMS = [
  "We operate the national readiness system for customers, products, and suppliers.",
  "We combine readiness governance with procurement governance to ensure quality and compliance.",
  "We route all opportunities through a single, unified gateway.",
  "We ensure every participant is validated before opportunities are released.",
  "We maintain a clean, structured, agency-aligned process for all users.",
];

export function WhatMakesUsDifferentSection() {
  return (
    <Section className="bg-slate-50/50 dark:bg-slate-900/20">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What Makes Us Different</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-1 md:grid-cols-2" role="list">
        {ITEMS.map((text, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-slate-600 dark:bg-slate-400" aria-hidden />
            <span className="text-slate-600 dark:text-slate-400">{text}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
