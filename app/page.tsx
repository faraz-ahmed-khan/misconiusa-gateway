import { OPPORTUNITY_CARDS, PATHWAYS } from "@/lib/mock-data";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatWeOfferSection } from "@/components/home/WhatWeOfferSection";
import { WhoWeServeSection } from "@/components/home/WhoWeServeSection";
import { OpportunityCardsSection } from "@/components/home/OpportunityCardsSection";
import { SubscriptionGatewaySection } from "@/components/home/SubscriptionGatewaySection";
import { ReadinessPathwaysSection } from "@/components/home/ReadinessPathwaysSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

/**
 * Homepage — presentation gateway (no intake forms).
 * Who We Are → What We Offer → Who We Serve → Opportunities → Subscription → Pathways → How We Work → About → Contact
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeOfferSection />
      <WhoWeServeSection />
      <OpportunityCardsSection cards={OPPORTUNITY_CARDS} />
      <SubscriptionGatewaySection />
      <ReadinessPathwaysSection pathways={PATHWAYS} />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
