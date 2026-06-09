"use client";

import Link from "next/link";
import { Section } from "@/components/shared/Section";
import { SubscriptionTierCard } from "@/components/subscribe/SubscriptionTierCard";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { SUBSCRIPTION_GATEWAY_INTRO, SUBSCRIPTION_TIERS } from "@/lib/mock-data";
import { ROUTES } from "@/lib/constants";

export function SubscriptionGatewaySection() {
  return (
    <Section
      id="subscriptions"
      className="border-y border-[rgba(212,168,87,0.12)] bg-[linear-gradient(135deg,#0A1A2F_0%,#071422_100%)]"
    >
      <div className="mx-auto max-w-5xl lg:max-w-6xl">
        <AnimateIn variant="fadeUp" className="text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">SUBSCRIPTION GATEWAY</p>
          <h2 className="mt-3 text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-text-primary)]">
            Activate Your Business Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[18px] leading-[1.8] text-[rgba(245,245,242,0.65)]">
            {SUBSCRIPTION_GATEWAY_INTRO}
          </p>
        </AnimateIn>
        <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2" stagger={0.12} delay={0.08}>
          {SUBSCRIPTION_TIERS.map((tier) => (
            <StaggerItem key={tier.id}>
              <SubscriptionTierCard tier={tier} />
            </StaggerItem>
          ))}
        </StaggerGroup>
        <p className="mt-8 text-center">
          <Link href={ROUTES.subscribe} className="text-sm font-semibold text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-light)]">
            View full Subscription Gateway →
          </Link>
        </p>
      </div>
    </Section>
  );
}
