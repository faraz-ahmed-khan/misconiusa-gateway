import { Section } from "@/components/shared/Section";
import { PricingBlock } from "@/components/subscribe/PricingBlock";
import type { SubscriptionPack } from "@/lib/types";

interface SubscriptionGatewaySectionProps {
  pack: SubscriptionPack;
}

export function SubscriptionGatewaySection({ pack }: SubscriptionGatewaySectionProps) {
  return (
    <Section className="bg-slate-50/50 dark:bg-slate-900/20">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Subscription Gateway</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Your subscription activates your readiness routing, unlocks your pathway, and enables opportunity eligibility.
        Subscription is required for all customers entering the readiness system.
      </p>
      <div className="mt-8 max-w-xl">
        <PricingBlock pack={pack} />
      </div>
    </Section>
  );
}
