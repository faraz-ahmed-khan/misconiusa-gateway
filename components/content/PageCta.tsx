import Link from "next/link";
import { GybsLink } from "@/components/shared/GybsLink";

interface PageCtaProps {
  label: string;
  href: string;
  external?: boolean;
}

export function PageCta({ label, href, external }: PageCtaProps) {
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <GybsLink href={href} variant="primary" external={external ?? href.startsWith("http")}>
        {label}
      </GybsLink>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-6 py-3 text-[14px] font-semibold text-[#0A1A2F] transition-colors duration-200 hover:bg-[color:var(--color-gold-light)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}
