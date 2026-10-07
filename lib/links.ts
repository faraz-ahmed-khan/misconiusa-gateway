/**
 * Central site URL + external link config for Misconi USA marketing CTAs.
 * All CTAs must reference these constants — do not hard-code URLs in components.
 */

// TODO(client): confirm final production domain (www vs non-www)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://misconiusa.com";

export const LINKS = {
  // TODO(client): confirm exact free-assessment URL
  gybsScore: "https://getyourbusinessscore.com",
  // GYBS packages / pricing section (kept for dedicated package CTA block only)
  gybsPackages: "https://getyourbusinessscore.com/#packages",
  howReadinessWorks: "#how-readiness-works",
  contact: "#contact",
  contactPartner: "/?interest=Partner#contact",
  contactAffiliate: "/?interest=Affiliate#contact",
} as const;

/** Resolves package CTA: GYBS packages URL, or #contact when unset. */
export function getGybsPackagesHref(): string {
  return LINKS.gybsPackages || LINKS.contact;
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

/** Absolute URL for metadata / sitemap / JSON-LD */
export function absoluteUrl(path = "/"): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
