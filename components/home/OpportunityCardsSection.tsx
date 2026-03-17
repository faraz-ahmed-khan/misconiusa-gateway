import { Section } from "@/components/shared/Section";
import { OpportunityCard } from "@/components/opportunities/OpportunityCard";
import type { OpportunityCard as OpportunityCardType } from "@/lib/types";

interface OpportunityCardsSectionProps {
  cards: OpportunityCardType[];
}

export function OpportunityCardsSection({ cards }: OpportunityCardsSectionProps) {
  return (
    <Section>
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Three Opportunity Cards</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <OpportunityCard key={card.id} card={card} />
        ))}
      </div>
    </Section>
  );
}
