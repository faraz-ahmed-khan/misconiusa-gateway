"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { PageCta } from "@/components/content/PageCta";
import { CTA_TEXT, ROUTES } from "@/lib/constants";
import AnimateIn from "@/components/ui/AnimateIn";

const GROUPS = [
  {
    title: "1. Businesses",
    intro: "We support businesses that require:",
    items: ["Structural alignment", "Readiness evaluation", "SBA category navigation", "Opportunity pathways", "Technology-enabled scaling"],
    closing: "Businesses enter the ecosystem through readiness and advance through governed pathways.",
  },
  {
    title: "2. Suppliers",
    intro: "We support suppliers seeking:",
    items: ["Category placement", "Distribution access", "Institutional procurement alignment", "National supply chain participation"],
  },
  {
    title: "3. Institutions",
    intro: "We support institutions that require:",
    items: ["Stable suppliers", "Compliant partners", "Readiness-aligned vendors", "Transparent governance structures"],
  },
  {
    title: "4. Ecosystem Partners",
    intro: "We support partners who contribute to:",
    items: ["Business development", "Supplier development", "Workforce development", "Regional economic growth"],
  },
  {
    title: "5. Communities & Regions",
    intro: "We support communities and regions by:",
    items: ["Strengthening local businesses", "Strengthening local suppliers", "Increasing economic participation", "Supporting regional supply chain stability"],
  },
] as const;

export default function WhoWeServePage() {
  return (
    <>
      <PageHero title="Who We Serve" subheader="Businesses • Suppliers • Institutions • Ecosystem Partners • Communities" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <p>
            Misconi USA serves organizations and environments that participate in the national economic ecosystem. Our role is to strengthen the structural, operational, and supply-chain readiness of the entities that support national-level commerce and institutional procurement.
          </p>
          <p className="mt-6">We serve five primary groups:</p>

          {GROUPS.map((group) => (
            <div key={group.title} className="mt-10">
              <h2 className="text-2xl">{group.title}</h2>
              <p className="mt-4">{group.intro}</p>
              <ul className="mt-4 list-disc pl-6">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {"closing" in group && group.closing && <p className="mt-4">{group.closing}</p>}
            </div>
          ))}

          <p className="mt-10 font-semibold">
            Misconi USA serves organizations that strengthen the national economic environment. Every participant enters through readiness and advances through governed pathways that support long-term stability and opportunity.
          </p>

          <div className="mt-10">
            <PageCta label={CTA_TEXT.beginReadinessJourney} href={ROUTES.beginReadiness} />
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
