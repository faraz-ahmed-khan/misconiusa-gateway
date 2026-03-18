"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { ROUTES, CTA_TEXT } from "@/lib/constants";
import { Section } from "@/components/shared/Section";
import { PricingBlock } from "@/components/subscribe/PricingBlock";
import AnimateIn from "@/components/ui/AnimateIn";
import StaggerGroup from "@/components/ui/StaggerGroup";
import StaggerItem from "@/components/ui/StaggerItem";
import { motion } from "framer-motion";
import type { SubscriptionPack } from "@/lib/types";

interface SubscriptionGatewaySectionProps {
  pack: SubscriptionPack;
}

export function SubscriptionGatewaySection({ pack }: SubscriptionGatewaySectionProps) {
  return (
    <Section className="border-y border-[rgba(212,168,87,0.12)] bg-[linear-gradient(135deg,#0A1A2F_0%,#071422_100%)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 lg:max-w-6xl lg:flex-row lg:items-start lg:gap-16">
        <AnimateIn variant="fadeLeft" className="flex-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">SUBSCRIPTION GATEWAY</p>
          <AnimateIn delay={0.1} variant="fadeUp">
            <h2 className="mt-3 text-[48px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[color:var(--color-text-primary)]">Activate Your Readiness Routing.</h2>
          </AnimateIn>
          <AnimateIn delay={0.18} variant="fadeUp">
            <p className="mt-4 max-w-xl text-[18px] leading-[1.8] text-[rgba(245,245,242,0.65)]">Your subscription activates your readiness routing, unlocks your pathway, and enables opportunity eligibility. Subscription is required for all customers entering the readiness system.</p>
          </AnimateIn>
          <StaggerGroup className="mt-8 space-y-4" stagger={0.12} delay={0.25}>
            {[
              "Activates your readiness routing immediately",
              "Unlocks your assigned pathway",
              "Enables full opportunity eligibility",
            ].map((text) => (
              <StaggerItem key={text} className="flex items-center gap-3">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 200, damping: 15 }} className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(0,200,83,0.15)]">
                  <Check className="h-3.5 w-3.5 text-[#00C853]" aria-hidden />
                </motion.div>
                <p className="text-[15px] font-medium text-[color:var(--color-text-primary)]">{text}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </AnimateIn>
        <AnimateIn variant="fadeRight" delay={0.15} className="flex-1 lg:max-w-md">
          <PricingBlock pack={pack} />
        </AnimateIn>
      </div>
    </Section>
  );
}
