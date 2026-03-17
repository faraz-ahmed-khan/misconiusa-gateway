"use client";

import Link from "next/link";
import { ROUTES, CTA_TEXT } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Opportunities", href: ROUTES.opportunities },
  { label: "Pathways", href: ROUTES.pathways },
  { label: "Subscribe", href: ROUTES.subscribe },
  { label: "Contact", href: ROUTES.contactAnchor },
] as const;

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-800 dark:bg-slate-900/95"
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={ROUTES.home}
          className="text-lg font-semibold text-slate-900 dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
          aria-label="Misconi USA home"
        >
          Misconi USA
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ROUTES.subscribe}
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
          >
            {CTA_TEXT.subscribeAndBegin}
          </Link>
        </nav>
      </div>
    </header>
  );
}
