"use client";

import Link from "next/link";
import type { SubscriptionPack } from "@/lib/types";
import { ROUTES, CTA_TEXT } from "@/lib/constants";

interface PricingBlockProps {
  pack: SubscriptionPack;
}

export function PricingBlock({ pack }: PricingBlockProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800/50">
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{pack.name}</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-400">{pack.description}</p>
      <p className="mt-4 text-sm font-medium text-slate-700 dark:text-slate-300">One subscription pack only</p>
      <Link
        href={ROUTES.subscribe}
        className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
      >
        {CTA_TEXT.subscribeAndBegin}
      </Link>
    </div>
  );
}
