"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, GYBS_SCORE_URL, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function EcosystemOfOpportunitiesPage() {
  return (
    <>
      <PageHero title="Ecosystem of Opportunities" subheader="Activating Organizations for National Participation" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            The Ecosystem of Opportunities is the activation framework of Misconi USA. It connects ready organizations to governed pathways that support national-level participation.
          </p>
          <p className="mt-6 font-semibold">Opportunity is never the first step — it is the result of readiness.</p>

          <h2 className="mt-10 text-2xl">Core Components of Opportunity Activation</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Supply & Distribution Pathways</li>
            <li>Supplier Pathways</li>
            <li>Business Pathways</li>
            <li>Technology Pathways</li>
          </ul>

          <h2 className="mt-10 text-2xl">Opportunity Follows Readiness</h2>
          <p className="mt-4">Organizations cannot enter the Ecosystem of Opportunities without completing readiness.</p>

          <div className="mt-10 rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#F8FAFC] p-8">
            <h2 className="text-xl font-extrabold text-[#0F172A]">Routing Note</h2>
            <p className="mt-4">
              Organizations seeking opportunity pathways must begin with readiness: <strong>GetYourBusinessScore.com</strong>
            </p>
            <p className="mt-4">Organizations must:</p>
            <ul className="mt-4 list-disc pl-6">
              <li>Complete their Initial Business Score</li>
              <li>Select a subscription tier</li>
              <li>Complete readiness services</li>
              <li>Receive approval from a Misconi USA representative</li>
            </ul>
            <p className="mt-4 font-semibold">Only then can opportunity access be activated.</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <PageCta label={CTA_TEXT.exploreOpportunityPathways} href={ROUTES.opportunities} />
            <PageCta label={CTA_TEXT.startReadinessEvaluation} href={GYBS_SCORE_URL} external />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
