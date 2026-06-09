"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Misconi USA" subheader="National Readiness Authority™ • Multinational Supplier" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            Misconi USA is the nation&apos;s Readiness Authority™, providing governance, structure, and national-level alignment for businesses, suppliers, and institutions. We operate as a multinational supplier of products, services, and technology, supporting organizations that participate in the national economic environment.
          </p>
          <p className="mt-6">Misconi USA strengthens the national ecosystem through two core pillars:</p>

          <h2 className="mt-10 text-2xl">1. The Ecosystem of Readiness</h2>
          <p className="mt-4">A governed framework that prepares organizations for national participation through:</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Structural alignment</li>
            <li>Readiness evaluation</li>
            <li>Governance education</li>
            <li>SBA category navigation</li>
            <li>Documentation alignment</li>
          </ul>
          <p className="mt-4">Readiness ensures organizations are structurally prepared before entering opportunity environments.</p>

          <h2 className="mt-10 text-2xl">2. The Ecosystem of Opportunities</h2>
          <p className="mt-4">A governed activation framework that connects ready organizations to:</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Supplier pathways</li>
            <li>Business pathways</li>
            <li>Distribution and sourcing pathways</li>
            <li>Technology pathways</li>
            <li>Institutional procurement environments</li>
          </ul>
          <p className="mt-4 font-semibold">Opportunity follows readiness — never the other way around.</p>

          <p className="mt-8">
            Misconi USA maintains a federal-aligned governance posture, ensuring clarity, stability, and long-term operational integrity across all surfaces of the ecosystem.
          </p>
          <p className="mt-4 font-semibold">
            Our mission is simple: Strengthen businesses. Strengthen suppliers. Strengthen supply chains. Strengthen the nation.
          </p>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.learnMoreAboutReadiness} href={ROUTES.ecosystemReadiness} />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
