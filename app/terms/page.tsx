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
      <PageHero title="Terms of Use" subheader="Misconi USA LLC" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <div className="space-y-10">
            {TERMS_SECTIONS.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-3">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.closing && <p className="mt-3">{section.closing}</p>}
              </section>
            ))}
          </div>
        </AnimateIn>
        <p className="mt-10">
          <Link href={ROUTES.home} className="text-sm font-medium hover:text-[color:var(--color-gold)]">
            ← Back to home
          </Link>
        </p>
      </ContentBody>
    </>
  );
}
