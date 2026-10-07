import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/links";

export default function robots(): MetadataRoute.Robots {
  const isPreview =
    process.env.VERCEL_ENV === "preview" || process.env.VERCEL_ENV === "development";

  if (isPreview) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL.replace(/\/$/, "")}/sitemap.xml`,
  };
}
