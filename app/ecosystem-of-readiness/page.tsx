"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, GYBS_SCORE_URL } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function EcosystemOfReadinessPage() {
  return (
    <>
      <PageHero title="Ecosystem of Readiness" subheader="Preparing Organizations for National Participation" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            The Ecosystem of Readiness is the foundational framework of Misconi USA. It ensures that every organization entering the national economic environment is structurally aligned, compliant, and prepared for institutional-level participation.
          </p>
          <p className="mt-6 font-semibold">Readiness is not optional — it is the entry point into the Misconi USA ecosystem.</p>

          <h2 className="mt-10 text-2xl">Purpose of the Ecosystem of Readiness</h2>
          <p className="mt-4">The Ecosystem of Readiness exists to:</p>
          <ul className="mt-4 list-disc pl-6">
            <li>Strengthen organizational structure</li>
            <li>Establish governance alignment</li>
            <li>Prepare organizations for opportunity environments</li>
            <li>Ensure compliance with institutional expectations</li>
            <li>Reduce risk across supply chains and procurement environments</li>
          </ul>

          <h2 className="mt-10 text-2xl">Core Components of Readiness</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Governance Alignment</li>
            <li>Education & Guidance</li>
            <li>Readiness Evaluation</li>
            <li>SBA Navigation Support</li>
          </ul>

          <h2 className="mt-10 text-2xl">Readiness as a Requirement</h2>
          <p className="mt-4">No organization can enter the Ecosystem of Opportunities without first completing readiness.</p>

          <div className="mt-10 rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#F8FAFC] p-8">
            <h2 className="text-xl font-extrabold text-[#0F172A]">Routing Block — Begin Readiness</h2>
            <p className="mt-4">All readiness begins at: <strong>GetYourBusinessScore.com</strong></p>
            <p className="mt-4">Subscription options are offered only after your Initial Business Score is completed.</p>
          </div>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.startReadinessEvaluation} href={GYBS_SCORE_URL} external />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
