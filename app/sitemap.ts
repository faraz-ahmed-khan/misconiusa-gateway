import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/links";

/**
 * Production sitemap only — uses SITE_URL, never *.vercel.app.
 * Interior legacy routes are intentionally omitted until client confirms keep/remove.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/privacy"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms"), lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];
}
