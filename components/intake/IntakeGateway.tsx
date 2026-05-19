import Link from "next/link";
import { GybsLink } from "@/components/shared/GybsLink";
import { Section } from "@/components/shared/Section";
import AnimateIn from "@/components/ui/AnimateIn";
import { CTA_TEXT, ROUTES } from "@/lib/constants";

interface IntakeGatewayProps {
  title: string;
  description: string;
  gybsUrl: string;
  steps: string[];
}

export function IntakeGateway({ title, description, gybsUrl, steps }: IntakeGatewayProps) {
  return (
    <>
      <section className="border-b border-[rgba(212,168,87,0.15)] bg-[color:var(--color-navy)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <AnimateIn variant="fadeUp">
            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-[color:var(--color-gold)]">
              READINESS INTAKE — EXTERNAL
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-[color:var(--color-text-primary)] sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-[color:var(--color-text-body)]">
              {description}
            </p>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[color:var(--color-text-muted)]">
              MisconiUSA.com does not collect intake data. You will continue to GYBS (Get Your Business Score) to begin
              your governed readiness process.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <GybsLink href={gybsUrl}>{CTA_TEXT.continueToGybs}</GybsLink>
              <Link
                href={ROUTES.home}
                className="inline-flex items-center justify-center rounded-[10px] border border-[rgba(245,245,242,0.28)] px-5 py-3 text-[14px] font-medium text-[color:var(--color-text-primary)] hover:bg-[rgba(245,245,242,0.06)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)]"
              >
                ← Back to gateway
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
      <Section>
        <AnimateIn variant="fadeUp">
          <h2 className="text-xl font-semibold text-[color:var(--color-text-dark)]">What happens next</h2>
          <ol className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 text-[15px] leading-relaxed text-slate-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-gold)] text-sm font-bold text-[color:var(--color-text-dark)]">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <GybsLink href={gybsUrl} variant="outline">
              {CTA_TEXT.getYourBusinessScore}
            </GybsLink>
          </div>
        </AnimateIn>
      </Section>
    </>
  );
}
