"use client";

import { CorporateBanner } from "@/components/layout/CorporateBanner";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT } from "@/lib/constants";
import { CONTACT } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";

export default function InvestorRelationsPage() {
  return (
    <>
      <CorporateBanner />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">Investor Relations</h1>
          <p className="mt-3 text-[15px] font-medium uppercase tracking-[0.08em] text-[color:var(--color-gold)]">
            Governance • Stability • National Economic Alignment
          </p>
        </AnimateIn>
        <AnimateIn variant="fadeUp" delay={0.08}>
          <p>
            Misconi USA maintains a federal-aligned governance posture designed to support long-term stability, national economic development, and institutional confidence.
          </p>

          <h2 className="mt-10 text-2xl">Strategic Focus Areas</h2>
          <ul className="mt-4 list-disc pl-6">
            <li>Strengthening national supply chains</li>
            <li>Expanding supplier readiness</li>
            <li>Increasing business readiness</li>
            <li>Enhancing distribution capabilities</li>
            <li>Supporting institutional procurement</li>
            <li>Advancing technology pathways</li>
          </ul>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.investorRelationsContact} href={`mailto:${CONTACT.investorEmail}`} external />
          </div>

          <div className="mt-10 rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#F8FAFC] p-8">
            <h2 className="text-xl font-extrabold text-[#0F172A]">Investor Relations Office</h2>
            <p className="mt-4">
              <a href={`mailto:${CONTACT.investorEmail}`} className="font-semibold text-[color:var(--color-gold)] hover:underline">
                {CONTACT.investorEmail}
              </a>
            </p>
            <p className="mt-2">{CONTACT.phone}</p>
            <p className="mt-2">{CONTACT.location}</p>
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
