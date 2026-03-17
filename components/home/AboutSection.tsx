import { Section } from "@/components/shared/Section";

export function AboutSection() {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">About Misconi USA</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Misconi USA is the national Prime Agent responsible for readiness governance, procurement governance, and
        opportunity routing. We ensure that customers, products, and suppliers enter the correct pathways and receive
        the correct opportunities based on readiness and procurement validation. Our mission is to maintain a clean,
        structured, and compliant national gateway for opportunity access.
      </p>
    </Section>
  );
}
