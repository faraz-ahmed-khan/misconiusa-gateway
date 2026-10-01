/**
 * Central external link config for Misconi USA marketing CTAs.
 * All "Get Your Business Score" / package buttons must use these.
 */

export const LINKS = {
  // Free Business Score — GetYourBusinessScore.com
  // TODO(client): confirm exact free-score URL
  gybsScore: "https://getyourbusinessscore.com",
  // Readiness package / pricing section on GYBS homepage
  gybsPackages: "https://getyourbusinessscore.com/#packages",
} as const;

/** Resolves package CTA: GYBS packages URL, or #contact when unset. */
export function getGybsPackagesHref(): string {
  // Empty gybsPackages → fall back to #contact until client confirms GYBS package URL
  return LINKS.gybsPackages || "#contact";
}

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
