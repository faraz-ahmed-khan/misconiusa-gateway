import { cn } from "@/lib/utils";

type GybsLinkVariant = "primary" | "secondary" | "outline";

interface GybsLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: GybsLinkVariant;
  external?: boolean;
}

const variantClasses: Record<GybsLinkVariant, string> = {
  primary:
    "bg-[color:var(--color-gold)] text-[color:var(--color-text-dark)] hover:bg-[color:var(--color-gold-light)] shadow-[0_8px_32px_rgba(0,0,0,0.45)]",
  secondary:
    "border border-[rgba(245,245,242,0.48)] bg-[rgba(245,245,242,0.04)] text-[color:var(--color-text-primary)] hover:border-[rgba(245,245,242,0.72)] hover:bg-[rgba(245,245,242,0.08)]",
  outline:
    "border border-[color:var(--color-gold)] text-[color:var(--color-gold)] hover:bg-[rgba(212,168,87,0.12)]",
};

export function GybsLink({
  href,
  children,
  className,
  variant = "primary",
  external = true,
}: GybsLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-[14px] font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </a>
  );
}
