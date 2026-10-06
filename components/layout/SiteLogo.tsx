"use client";

import { useId } from "react";
import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { BRAND } from "@/lib/site-content";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  compact?: boolean;
}

/** Misconi USA mark — gold ring, navy/red split, white M */
export function MisconiMark({ className }: { className?: string }) {
  const clipId = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <clipPath id={clipId}>
          <circle cx="32" cy="32" r="28" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <circle cx="32" cy="32" r="28" fill="#0A1A2F" />
        <rect x="32" y="4" width="28" height="56" fill="#C41E3A" />
      </g>
      <circle cx="32" cy="32" r="29.5" fill="none" stroke="#D4A857" strokeWidth="3" />
      <text
        x="32"
        y="34"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#FFFFFF"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="30"
        fontWeight="700"
      >
        M
      </text>
    </svg>
  );
}

export function SiteLogo({ className, compact }: SiteLogoProps) {
  return (
    <Link
      href={ROUTES.home}
      className={cn(
        "group flex shrink-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]",
        className
      )}
      aria-label="Misconi USA home"
    >
      <MisconiMark className="h-10 w-10 shrink-0" />
      <span className={cn("flex flex-col", compact && "hidden sm:flex")}>
        <span className="text-[17px] font-extrabold leading-none tracking-tight text-[color:var(--color-text-primary)]">
          Misconi USA
        </span>
        <span className="mt-1.5 h-px w-full bg-[color:var(--color-gold)]" aria-hidden />
        <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] text-[color:var(--color-text-body)]">
          {BRAND.tagline}
        </span>
      </span>
    </Link>
  );
}
