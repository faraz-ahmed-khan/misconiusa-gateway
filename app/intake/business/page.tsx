import { IntakeGateway } from "@/components/intake/IntakeGateway";
import { GYBS_BUSINESS_INTAKE_URL } from "@/lib/constants";

export const metadata = {
  title: "Business Intake — Misconi USA",
  description: "Begin business readiness intake via GYBS. MisconiUSA.com routes you to the governed scoring surface.",
};

const STEPS = [
  "Continue to GYBS to complete business readiness intake.",
  "Receive your Business Score and assigned readiness pathway.",
  "Subscribe to activate readiness routing through Misconi USA.",
  "Unlock governed opportunities in your customer, product, or supplier lane.",
];

export default function BusinessIntakePage() {
  return (
    <IntakeGateway
      title="Business Intake"
      description="Businesses enter the national Readiness and Opportunity Gateway through GYBS. Complete intake there to receive your score, pathway assignment, and eligibility routing."
      gybsUrl={GYBS_BUSINESS_INTAKE_URL}
      steps={STEPS}
    />
  );
}
