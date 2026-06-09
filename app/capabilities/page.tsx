"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero title="Capabilities" subheader="Governance • Readiness • Opportunity • Supply Chain • Technology" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            Misconi USA delivers governed capabilities that strengthen businesses, suppliers, institutions, and national supply chains.
          </p>

          <h2 className="mt-10 text-2xl">Core Capability Areas</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Governance</li>
            <li>Education</li>
            <li>Readiness Evaluation</li>
            <li>SBA Navigation</li>
            <li>Supply & Distribution Capabilities</li>
            <li>Technology Pathways</li>
          </ul>

          <p className="mt-8">
            Capabilities ensure organizations are prepared, aligned, and supported at every stage.
          </p>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.exploreCapabilities} href={ROUTES.subscribe} />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
