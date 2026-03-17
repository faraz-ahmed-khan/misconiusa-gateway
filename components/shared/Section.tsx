import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  as?: "section" | "div";
}

export function Section({ id, className, children, as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={cn("mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)}>
      {children}
    </Tag>
  );
}
