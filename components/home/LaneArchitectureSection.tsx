import { Section } from "@/components/shared/Section";

const LANES: { id: string; name: string; colorVar: string; description: string }[] = [
  {
    id: "foundational",
    name: "Foundational Lane",
    colorVar: "--lane-supplier",
    description: "For businesses building their operational foundation.",
  },
  {
    id: "guided",
    name: "Guided Lane",
    colorVar: "--lane-buyer",
    description: "For businesses improving their readiness actively.",
  },
  {
    id: "opportunity",
    name: "Opportunity Lane",
    colorVar: "--lane-partner",
    description: "For businesses ready to pursue opportunities.",
  },
];

export function LaneArchitectureSection() {
  return (
    <Section className="bg-[color:var(--color-surface-dark)]">
      <h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">Readiness Lanes</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
        Foundational, Guided, and Opportunity lanes structure how businesses progress. Lane colors are system signals and remain consistent across surfaces.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {LANES.map((lane) => (
          <article
            key={lane.id}
            className="rounded-r-[14px] border border-l-0 border-[color:var(--color-border)] bg-[color:var(--color-navy)] px-6 py-5 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.04)]"
            style={{ borderLeft: `4px solid var(${lane.colorVar})` }}
          >
            <h3 className="text-[16px] font-semibold text-[color:var(--color-text-primary)]">{lane.name}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-text-body)]">{lane.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
