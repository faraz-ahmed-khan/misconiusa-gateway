import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { BRAND } from "@/lib/site-content";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  compact?: boolean;
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
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(245,245,242,0.2)] bg-[rgba(245,245,242,0.06)]"
        aria-hidden
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[color:var(--color-text-primary)]" fill="currentColor">
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="12" cy="9" r="1.5" />
          <circle cx="12" cy="13" r="1.5" />
          <circle cx="12" cy="17" r="1.5" />
          <circle cx="12" cy="21" r="1.5" />
        </svg>
      </span>
      <span className={cn("flex flex-col", compact && "hidden sm:flex")}>
        <span className="text-[17px] font-extrabold leading-none tracking-tight text-[color:var(--color-text-primary)]">
          Misconi USA
        </span>
        <span className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] text-[color:var(--color-text-body)]">
          {BRAND.tagline}
        </span>
      </span>
    </Link>
  );
}
