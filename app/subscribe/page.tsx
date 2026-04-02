"use client";

import Link from "next/link";
import { SUBSCRIPTION_TIERS } from "@/lib/mock-data";
import { SubscriptionTierCard } from "@/components/subscribe/SubscriptionTierCard";
import { ROUTES } from "@/lib/constants";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

export default function SubscribePage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <AnimateIn variant="fadeUp"><h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Subscription Gateway</h1></AnimateIn>
          <AnimateIn delay={0.1} variant="fadeUp"><p className="mt-2 text-slate-600 dark:text-slate-400">Choose Free, Basic, or Enterprise. Your lane shows where you are; your subscription determines how far you can go.</p></AnimateIn>
        </div>
      </section>
      <Section>
        <div className="mx-auto max-w-6xl">
          <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.12} delay={0.08}>
            {SUBSCRIPTION_TIERS.map((tier) => (
              <StaggerItem key={tier.id}>
                <SubscriptionTierCard tier={tier} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
        <p className="mt-8 text-center"><Link href={ROUTES.home} className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded">← Back to home</Link></p>
      </Section>
    </>
  );
}
