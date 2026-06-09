"use client";

import AnimateIn from "@/components/ui/AnimateIn";

interface PageHeroProps {
  title: string;
  subheader?: string;
}

export function PageHero({ title, subheader }: PageHeroProps) {
  return (
    <section className="border-b border-[rgba(212,168,87,0.15)] bg-[linear-gradient(135deg,#0A1A2F_0%,#071422_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <AnimateIn variant="fadeUp">
          <h1 className="text-3xl font-extrabold tracking-tight text-[color:var(--color-text-primary)] sm:text-4xl">{title}</h1>
        </AnimateIn>
        {subheader && (
          <AnimateIn delay={0.1} variant="fadeUp">
            <p className="mt-3 text-[15px] font-medium uppercase tracking-[0.08em] text-[color:var(--color-gold)]">{subheader}</p>
          </AnimateIn>
        )}
      </div>
    </section>
  );
}
