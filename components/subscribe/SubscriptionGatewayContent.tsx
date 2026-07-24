"use client";

import Link from "next/link";
import { CONTENT_LIGHT_PANEL } from "@/components/content/ContentBody";
import { SubscriptionTierCard } from "@/components/subscribe/SubscriptionTierCard";
import {
  SUBSCRIPTION_APPROVAL_NOTE,
  SUBSCRIPTION_GATEWAY_INTRO,
  SUBSCRIPTION_SUPPORT_NOTE,
  SUBSCRIPTION_TIERS,
} from "@/lib/mock-data";
import { GYBS_SCORE_URL, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";

interface SubscriptionGatewayContentProps {
  showDetailsLink?: boolean;
}

export function SubscriptionGatewayContent({ showDetailsLink }: SubscriptionGatewayContentProps) {
  return (
    <>
      <AnimateIn variant="fadeUp">
        <p className="text-[17px] leading-[1.8]">{SUBSCRIPTION_GATEWAY_INTRO}</p>
        <p className="mt-4 text-[17px] leading-[1.8]">
          Your score identifies your readiness level, strengths, and gaps — and determines which subscription tier best supports your business.
        </p>
        <p className="mt-4 text-[17px] leading-[1.8]">
          Opportunity access is not automatic. All opportunity access must be reviewed and approved by a Misconi USA representative before activation.
        </p>
        <p className="mt-4 text-[17px] leading-[1.8]">Choose the subscription option that best fits your business needs.</p>
      </AnimateIn>

      <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-2" stagger={0.12} delay={0.08}>
        {SUBSCRIPTION_TIERS.map((tier) => (
          <StaggerItem key={tier.id}>
            <SubscriptionTierCard tier={tier} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <AnimateIn variant="fadeUp" delay={0.15} className={`mt-12 space-y-6 ${CONTENT_LIGHT_PANEL}`}>
        <div>
          <h2 className="text-xl font-extrabold">Approval Requirement</h2>
          <p className="mt-3 text-[16px] leading-[1.8]">{SUBSCRIPTION_APPROVAL_NOTE}</p>
        </div>
        <div>
          <h2 className="text-xl font-extrabold">Support Information</h2>
          <p className="mt-3 text-[16px] leading-[1.8]">{SUBSCRIPTION_SUPPORT_NOTE}</p>
        </div>
        <p className="text-[15px]">
          Complete your Initial Business Score first at{" "}
          <a href={GYBS_SCORE_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
            GetYourBusinessScore.com
          </a>
          .
        </p>
        {showDetailsLink && (
          <p>
            <Link href={ROUTES.terms} className="text-sm font-medium hover:underline">
              Terms of Use →
            </Link>
          </p>
        )}
      </AnimateIn>
    </>
  );
}
