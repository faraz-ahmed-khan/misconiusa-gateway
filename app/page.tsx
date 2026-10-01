import { HeroSection } from "@/components/home/HeroSection";
import { HowReadinessWorksSection } from "@/components/home/HowReadinessWorksSection";
import { WhyReadinessMattersSection } from "@/components/home/WhyReadinessMattersSection";
import { WhoWeAreSection } from "@/components/home/WhoWeAreSection";
import { WhatMakesUsDifferentSection } from "@/components/home/WhatMakesUsDifferentSection";
import { ForBusinessesPartnersSection } from "@/components/home/ForBusinessesPartnersSection";
import { SelectPackageCtaSection } from "@/components/home/SelectPackageCtaSection";
import { BottomStatementSection } from "@/components/home/BottomStatementSection";
import { ContactSection } from "@/components/home/ContactSection";

/**
 * Homepage order (client Reference v2):
 * Hero → How Readiness Works → Why Readiness Matters → Who We Are →
 * What Makes Us Different → For Businesses/Partners → Package CTA →
 * Bottom statement → Contact
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowReadinessWorksSection />
      <WhyReadinessMattersSection />
      <WhoWeAreSection />
      <WhatMakesUsDifferentSection />
      <ForBusinessesPartnersSection />
      <SelectPackageCtaSection />
      <BottomStatementSection />
      <ContactSection />
    </>
  );
}
