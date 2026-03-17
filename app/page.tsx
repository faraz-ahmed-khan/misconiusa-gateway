import {
  OPPORTUNITY_CARDS,
  PATHWAYS,
  SUBSCRIPTION_PACK,
} from "@/lib/mock-data";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatMakesUsDifferentSection } from "@/components/home/WhatMakesUsDifferentSection";
import { OpportunityCardsSection } from "@/components/home/OpportunityCardsSection";
import { SubscriptionGatewaySection } from "@/components/home/SubscriptionGatewaySection";
import { ReadinessPathwaysSection } from "@/components/home/ReadinessPathwaysSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";

/**
 * Homepage — exact section order per spec:
 * 1. Hero, 2. Who We Are, 3. What Makes Us Different, 4. Three Opportunity Cards,
 * 5. Subscription Gateway, 6. Readiness Pathways, 7. How It Works, 8. About Misconi USA, 9. Contact
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoWeAreSection />
      <WhatMakesUsDifferentSection />
      <OpportunityCardsSection cards={OPPORTUNITY_CARDS} />
      <SubscriptionGatewaySection pack={SUBSCRIPTION_PACK} />
      <ReadinessPathwaysSection pathways={PATHWAYS} />
      <HowItWorksSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
