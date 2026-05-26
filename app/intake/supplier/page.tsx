import { IntakeGateway } from "@/components/intake/IntakeGateway";
import { GYBS_SUPPLIER_INTAKE_URL } from "@/lib/constants";

export const metadata = {
  title: "Supplier Intake — Misconi USA",
  description: "Begin supplier readiness intake via GYBS. MisconiUSA.com routes you to the governed scoring surface.",
};

const STEPS = [
  "Continue to GYBS to complete supplier readiness intake.",
  "Complete readiness and procurement validation requirements.",
  "Enter the Supplier Readiness Pathway through governed routing.",
  "Unlock supplier opportunities after validation and subscription requirements are met.",
];

export default function SupplierIntakePage() {
  return (
    <IntakeGateway
      title="Supplier Intake"
      description="Suppliers enter the national gateway through GYBS. Complete intake there to qualify for readiness validation, procurement satisfaction, and supplier opportunity access."
      gybsUrl={GYBS_SUPPLIER_INTAKE_URL}
      steps={STEPS}
    />
  );
}
