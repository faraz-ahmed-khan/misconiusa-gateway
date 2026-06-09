"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function WhatWeGovernPage() {
  return (
    <>
      <PageHero title="What We Govern" subheader="Standards • Structure • Alignment • Activation" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            Misconi USA governs the structural, operational, and readiness-based elements that determine whether an organization is prepared for national participation.
          </p>

          <h2 className="mt-10 text-2xl">Core Governance Areas</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Readiness Standards</li>
            <li>Structural Alignment</li>
            <li>Documentation Alignment</li>
            <li>Pathway Activation</li>
            <li>National Ecosystem Participation</li>
          </ul>

          <p className="mt-8">
            Governance ensures stability, compliance, structural integrity, and institutional compatibility.
          </p>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.viewGovernanceStandards} href={ROUTES.terms} />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
