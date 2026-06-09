"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody } from "@/components/content/ContentBody";
import { CONTACT } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Misconi USA" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <div className="rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#F8FAFC] p-8">
            <p className="text-[20px] font-extrabold text-[#0F172A]">{CONTACT.company}</p>
            <p className="mt-4">{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
            <p className="mt-4">
              <a href={`mailto:${CONTACT.email}`} className="font-semibold text-[color:var(--color-gold)] hover:underline">
                {CONTACT.email}
              </a>
            </p>
            <p className="mt-2">{CONTACT.phone}</p>
          </div>
        </AnimateIn>
      </ContentBody>
    </>
  );
}
