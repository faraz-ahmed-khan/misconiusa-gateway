import { absoluteUrl, SITE_URL } from "@/lib/links";
import { CONTACT } from "@/lib/site-content";

/**
 * Single Organization + Service JSON-LD for the site.
 * Do not duplicate this block elsewhere.
 */
export function JsonLd() {
  const organizationId = `${SITE_URL.replace(/\/$/, "")}/#organization`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "Misconi USA",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/logo.png"),
    email: CONTACT.email,
    telephone: "+1-865-298-7731",
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.address,
      addressLocality: "Knoxville",
      addressRegion: "TN",
      postalCode: "37922",
      addressCountry: "US",
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Readiness",
    provider: { "@id": organizationId },
    description:
      "Misconi USA helps businesses evaluate readiness, close gaps, and prepare for real opportunity through the GYBS Business Score system.",
    areaServed: {
      "@type": "Country",
      name: "US",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Misconi USA",
    url: absoluteUrl("/"),
    publisher: { "@id": organizationId },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
