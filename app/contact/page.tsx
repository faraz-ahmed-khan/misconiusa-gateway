"use client";

import { PageHero } from "@/components/content/PageHero";
import { ContentBody, CONTENT_LIGHT_PANEL } from "@/components/content/ContentBody";
import { CONTACT } from "@/lib/site-content";
import AnimateIn from "@/components/ui/AnimateIn";

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Misconi USA" />
      <ContentBody>
        <AnimateIn variant="fadeUp">
          <div className={CONTENT_LIGHT_PANEL}>
            <p className="text-[20px] font-extrabold">{CONTACT.company}</p>
            <p className="mt-4">{CONTACT.address}</p>
            <p>{CONTACT.city}</p>
            <p className="mt-4">
              <a href={`mailto:${CONTACT.email}`} className="font-semibold hover:underline">
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
