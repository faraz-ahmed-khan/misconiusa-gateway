"use client";

import Link from "next/link";
import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { ROUTES } from "@/lib/constants";
import { TERMS_SECTIONS } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";

export default function TermsPage() {
  return (
    <>
      <PageHero title="Terms & Policies" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <div className="space-y-10">
            {TERMS_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-extrabold text-[#0F172A]">{section.title}</h2>
                <p className="mt-3">{section.body}</p>
              </div>
            ))}
          </div>
        </AnimateIn>
        <p className="mt-10">
          <Link href={ROUTES.home} className="text-sm font-medium text-[#0F172A] hover:text-[color:var(--color-gold)]">
            ← Back to home
          </Link>
        </p>
      </ContentBody>
    </>
  );
}
