"use client";

import Link from "next/link";
import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { SubscriptionGatewayContent } from "@/components/subscribe/SubscriptionGatewayContent";
import { ROUTES } from "@/lib/constants";

export default function SubscribePage() {
  return (
    <>
      <PageHero title="Subscription Gateway" subheader="Activate Your Business Services" />
      <ContentBody>
        <SubscriptionGatewayContent showDetailsLink />
        <p className="mt-8 text-center">
          <Link href={ROUTES.subscriptionDetails} className="text-sm font-medium text-[#0F172A] hover:text-[color:var(--color-gold)]">
            View full subscription details →
          </Link>
        </p>
      </ContentBody>
    </>
  );
}
