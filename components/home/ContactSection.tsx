import { Section } from "@/components/shared/Section";
import { GeneralContactForm } from "@/components/forms/GeneralContactForm";
import { SupplierInterestForm } from "@/components/forms/SupplierInterestForm";

export function ContactSection() {
  return (
    <Section id="contact" className="border-t border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Contact Misconi USA</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        For questions, support, or supplier interest, use the forms below to reach the Prime Agent.
      </p>
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">General Contact Form</h3>
          <div className="mt-4">
            <GeneralContactForm />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">Supplier Interest Form</h3>
          <div className="mt-4">
            <SupplierInterestForm />
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
        Footer contact:{" "}
        <a href="mailto:info@misconiusa.com" className="font-medium text-slate-900 hover:underline dark:text-white">
          info@misconiusa.com
        </a>
      </p>
    </Section>
  );
}
