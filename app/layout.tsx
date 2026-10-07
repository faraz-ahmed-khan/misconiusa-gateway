import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/links";

const META_DESCRIPTION =
  "Misconi USA is the readiness company. Get your free Business Score through GYBS, see your gaps, and prepare your business for real opportunity.";

const isPreviewOrVercel =
  process.env.VERCEL_ENV === "preview" ||
  process.env.VERCEL_ENV === "development" ||
  (typeof process.env.VERCEL_URL === "string" &&
    process.env.VERCEL_URL.includes("vercel.app") &&
    process.env.VERCEL_ENV !== "production");

// Production stays indexable; preview / *.vercel.app deployments are noindex
const robotsDirective = isPreviewOrVercel
  ? { index: false, follow: false, nocache: true }
  : { index: true, follow: true };

// TODO(client): provide a 1200×630 og image; using brand logo until then
const ogImage = absoluteUrl("/images/logo.png");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Misconi USA | The Readiness Company",
    template: "%s | Misconi USA",
  },
  description: META_DESCRIPTION,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  robots: robotsDirective,
  openGraph: {
    title: "Misconi USA | The Readiness Company",
    description: META_DESCRIPTION,
    url: absoluteUrl("/"),
    siteName: "Misconi USA",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Misconi USA — The Readiness Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Misconi USA | The Readiness Company",
    description: META_DESCRIPTION,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        <ScrollProgress />
        <LenisProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
