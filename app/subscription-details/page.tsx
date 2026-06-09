"use client";

import Link from "next/link";
import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { SubscriptionGatewayContent } from "@/components/subscribe/SubscriptionGatewayContent";
import { ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function SubscriptionDetailsPage() {
  return (
    <>
      <PageHero title="Subscription Details" subheader="Choose the Gateway That Fits Your Business" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            After completing your Initial Business Score, your next step is selecting the subscription level that best supports your business.
          </p>
          <p className="mt-4">
            Each gateway provides a different level of readiness support, ranging from foundational education to full enterprise-level packaging.
          </p>
          <p className="mt-4">
            Opportunity access is not automatic. Businesses must first complete their readiness services and receive approval from a Misconi USA representative before opportunity access is activated.
          </p>
        </AnimateIn>
        <div className="mt-8">
          <SubscriptionGatewayContent />
        </div>
        <p className="mt-8">
          <Link href={ROUTES.subscribe} className="text-sm font-medium text-[#0F172A] hover:text-[color:var(--color-gold)]">
            ← Back to Subscription Gateway
          </Link>
        </p>
      </ContentBody>
    </>
  );
}
