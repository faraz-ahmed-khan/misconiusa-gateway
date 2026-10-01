"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <AnimateIn variant="fadeUp">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
          </AnimateIn>
        </div>
      </section>
      <Section>
        {/* TODO(client): replace with approved privacy policy after client legal review */}
        <AnimateIn variant="fadeUp">
          <p className="text-slate-600 dark:text-slate-400">Content pending client legal review</p>
        </AnimateIn>
        <p className="mt-6">
          <Link href={ROUTES.home} className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            ← Back to home
          </Link>
        </p>
      </Section>
    </>
  );
}
