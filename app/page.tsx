import { OPPORTUNITY_CARDS, PATHWAYS } from "@/lib/mock-data";
import { HeroSection } from "@/components/home/HeroSection";
import { ReadinessDoctrineSection } from "@/components/home/ReadinessDoctrineSection";
import { LaneArchitectureSection } from "@/components/home/LaneArchitectureSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatMakesUsDifferentSection } from "@/components/home/WhatMakesUsDifferentSection";
import { OpportunityCardsSection } from "@/components/home/OpportunityCardsSection";
import { SubscriptionGatewaySection } from "@/components/home/SubscriptionGatewaySection";
import { ReadinessPathwaysSection } from "@/components/home/ReadinessPathwaysSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

/**
 * Homepage — section order includes readiness doctrine and lanes after hero.
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ReadinessDoctrineSection />
      <LaneArchitectureSection />
      <WhoWeAreSection />
      <WhatMakesUsDifferentSection />
      <OpportunityCardsSection cards={OPPORTUNITY_CARDS} />
      <SubscriptionGatewaySection />
      <ReadinessPathwaysSection pathways={PATHWAYS} />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
