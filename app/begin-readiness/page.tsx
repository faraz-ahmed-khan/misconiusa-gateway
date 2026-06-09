"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, GYBS_SCORE_URL } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

export default function BeginReadinessPage() {
  return (
    <>
      <PageHero title="Begin Your Readiness Journey" subheader="Required Before Subscription" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            All organizations must complete their Initial Business Score before selecting a subscription. This ensures your business begins in the correct place and receives the right level of support.
          </p>
          <p className="mt-6">
            Your initial readiness evaluation helps identify where your business currently stands and what steps may be needed to strengthen your structure, documentation, and alignment.
          </p>

          <div className="mt-10 rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#0A1A2F] p-8 text-center text-[color:var(--color-text-primary)]">
            <h2 className="text-2xl font-extrabold">Start Your Readiness Evaluation</h2>
            <p className="mt-4 text-[20px] font-semibold text-[color:var(--color-gold)]">GetYourBusinessScore.com</p>
            <p className="mt-4 text-[16px] leading-relaxed text-[rgba(245,245,242,0.75)]">
              This is the first step for every business entering the Misconi USA ecosystem.
            </p>
            <div className="mt-8 flex justify-center">
              <PageCta label={CTA_TEXT.startReadinessEvaluation} href={GYBS_SCORE_URL} external />
            </div>
          </div>

          <div className="mt-10 rounded-[18px] border border-[rgba(212,168,87,0.2)] bg-[#F8FAFC] p-8">
            <h2 className="text-xl font-extrabold text-[#0F172A]">Notes</h2>
            <ul className="mt-4 list-disc pl-6">
              <li>This page exists only to make routing clear.</li>
              <li>It prevents confusion between readiness and subscription.</li>
              <li>All businesses must begin with readiness before choosing a subscription gateway.</li>
            </ul>
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
