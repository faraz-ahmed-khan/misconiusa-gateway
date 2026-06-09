import { cn } from "@/lib/utils";

interface ContentBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentBody({ children, className }: ContentBodyProps) {
  return (
    <div className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      <div className="prose prose-slate max-w-none text-[17px] leading-[1.8] text-[#334155] prose-headings:font-extrabold prose-headings:text-[#0F172A] prose-strong:text-[#0F172A] prose-li:marker:text-[color:var(--color-gold)]">
        {children}
      </div>
    </div>
  );
}
