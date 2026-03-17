import { Section } from "@/components/shared/Section";

const STEPS = [
  "Subscribe to activate your readiness routing.",
  "Complete GYBS to receive your Business Score.",
  "Enter your assigned readiness pathway.",
  "Complete your pathway readiness requirements.",
  "Unlock opportunities in your customer, product, or supplier lane.",
];

export function HowItWorksSection() {
  return (
    <Section className="bg-slate-50/50 dark:bg-slate-900/20">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How It Works</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        This is the complete readiness → pathway → opportunity flow.
      </p>
      <ol className="mt-6 space-y-4" role="list">
        {STEPS.map((step, i) => (
          <li key={i} className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white dark:bg-slate-100 dark:text-slate-900" aria-hidden>
              {i + 1}
            </span>
            <span className="pt-0.5 text-slate-600 dark:text-slate-400">{step}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
