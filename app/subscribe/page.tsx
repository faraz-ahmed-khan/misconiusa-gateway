import Link from "next/link";
import { SUBSCRIPTION_PACK } from "@/lib/mock-data";
import { PricingBlock } from "@/components/subscribe/PricingBlock";
import { ROUTES } from "@/lib/constants";
import { Section } from "@/components/shared/Section";

export default function SubscribePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Subscription Gateway</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            One subscription pack only. Your subscription activates your readiness routing and enables opportunity
            eligibility.
          </p>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-xl">
          <PricingBlock pack={SUBSCRIPTION_PACK} />
        </div>
        <p className="mt-8 text-center">
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
