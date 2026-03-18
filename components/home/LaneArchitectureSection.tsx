import { Section } from "@/components/shared/Section";

const LANES: { id: string; name: string; colorVar: string; description: string }[] = [
  {
    id: "supplier",
    name: "Supplier Lane",
    colorVar: "--lane-supplier",
    description: "Qualifies and routes supplier entities into readiness, marketplace, and contracting programs.",
  },
  {
    id: "buyer",
    name: "Buyer Lane",
    colorVar: "--lane-buyer",
    description: "Aligns buyers with validated suppliers and products under governed readiness thresholds.",
  },
  {
    id: "partner",
    name: "Partner Lane",
    colorVar: "--lane-partner",
    description: "Coordinates partner organizations participating in shared readiness and opportunity programs.",
  },
  {
    id: "agency",
    name: "Agency Lane",
    colorVar: "--lane-agency",
    description: "Sits at the governing layer, enforcing policy, compliance, and routing discipline.",
  },
  {
    id: "readiness",
    name: "Readiness Lane",
    colorVar: "--lane-readiness",
    description: "Maintains readiness states, pathways, and activation flows across all business participants.",
  },
  {
    id: "marketplace",
    name: "Marketplace Lane",
    colorVar: "--lane-marketplace",
    description: "Controls marketplace visibility and listing access for validated products and suppliers.",
  },
];

export function LaneArchitectureSection() {
  return (
    <Section className="bg-[color:var(--color-surface-dark)]">
      <h2 className="text-2xl font-semibold text-[color:var(--color-text-primary)]">The Misconi Lane System</h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[color:var(--color-text-body)]">
        Supplier, Buyer, Partner, Agency, Readiness, and Marketplace lanes remain visually and functionally separated.
        Lane colors are non-negotiable system signals and must be preserved across every surface.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {LANES.map((lane) => (
          <article
            key={lane.id}
            className="rounded-r-[14px] border border-l-0 border-[color:var(--color-border)] bg-[color:var(--color-navy)] px-6 py-5 transition-colors duration-200 hover:bg-[rgba(255,255,255,0.04)]"
            style={{ borderLeft: `4px solid var(${lane.colorVar})` }}
          >
            <h3 className="text-[16px] font-semibold text-[color:var(--color-text-primary)]">{lane.name}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-[color:var(--color-text-body)]">
              {lane.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

