import { cn } from "@/lib/utils";

interface ContentBodyProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Use on light/white panels inside ContentBody so copy stays dark
 * while surrounding prose uses light brand text on the navy page.
 * Important modifiers beat prose-* inheritance.
 */
export const CONTENT_LIGHT_PANEL = cn(
  "rounded-[18px] border border-[rgba(212,168,87,0.25)] bg-[#F8FAFC] p-8",
  "!text-[#334155]",
  "[&_h1]:!text-[#0F172A] [&_h2]:!text-[#0F172A] [&_h3]:!text-[#0F172A]",
  "[&_p]:!text-[#334155] [&_li]:!text-[#334155] [&_strong]:!text-[#0F172A]",
  "[&_a]:!text-[color:var(--color-gold)] hover:[&_a]:underline"
);

/** Matches footer visibility on dark surfaces — light brand text, no background change. */
export function ContentBody({ children, className }: ContentBodyProps) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      <div
        className={cn(
          "prose max-w-none text-[17px] leading-[1.8]",
          "text-[color:var(--color-text-body)]",
          "prose-headings:font-extrabold prose-headings:text-[color:var(--color-text-primary)]",
          "prose-p:text-[color:var(--color-text-body)]",
          "prose-li:text-[color:var(--color-text-body)]",
          "prose-strong:text-[color:var(--color-text-primary)]",
          "prose-a:text-[color:var(--color-gold-light)] prose-a:no-underline hover:prose-a:text-[color:var(--color-gold)]",
          "prose-li:marker:text-[color:var(--color-gold)]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
