import type { Pathway, PathwayColor } from "@/lib/types";
import { GYBS_SCORE_URL } from "@/lib/constants";

interface PathwayCardProps {
  pathway: Pathway;
  index: number;
}

const ACCENTS = [
  {
    border: "#1D4ED8",
    bg: "rgba(29,78,216,0.08)",
    text: "#1D4ED8",
  },
  {
    border: "#EA580C",
    bg: "rgba(234,88,12,0.08)",
    text: "#EA580C",
  },
  {
    border: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
    text: "#16A34A",
  },
  {
    border: "#7C3AED",
    bg: "rgba(124,58,237,0.08)",
    text: "#7C3AED",
  },
  {
    border: "#0EA5E9",
    bg: "rgba(14,165,233,0.08)",
    text: "#0EA5E9",
  },
  {
    border: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    text: "#D97706",
  },
  {
    border: "#059669",
    bg: "rgba(5,150,105,0.08)",
    text: "#059669",
  },
  {
    border: "#9333EA",
    bg: "rgba(147,51,234,0.08)",
    text: "#9333EA",
  },
];

const ACCENT_INDEX: Record<PathwayColor, number> = {
  blue: 0,
  orange: 1,
  green: 2,
  purple: 3,
};

export function PathwayCard({ pathway, index }: PathwayCardProps) {
  const accentIndex = pathway.color != null ? ACCENT_INDEX[pathway.color] : index % ACCENTS.length;
  const accent = ACCENTS[accentIndex % ACCENTS.length];
  return (
    <div
      className="group rounded-[14px] border border-[color:var(--color-card-border)] bg-[color:var(--color-card-bg)] p-6 shadow-[0_14px_32px_rgba(10,26,47,0.06)] transition-transform transition-shadow transition-colors duration-200 hover:-translate-y-1 hover:border-[color:var(--color-card-border-hover)] hover:shadow-[0_22px_60px_rgba(10,26,47,0.14)]"
      style={{ borderTopWidth: 4, borderTopColor: accent.border }}
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-11 w-11 items-center justify-center rounded-[12px] transition-transform duration-200 group-hover:scale-110"
          style={{ backgroundColor: accent.bg, color: accent.text }}
          aria-hidden
        >
          {index + 1}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[18px] font-semibold text-[color:var(--color-card-text)]">{pathway.name}</h3>
          <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{pathway.description}</p>
          <a
            href={GYBS_SCORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-[14px] font-semibold text-[color:var(--color-gold)] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-off-white)]"
          >
            Get Your Business Score
          </a>
        </div>
      </div>
    </div>
  );
}
