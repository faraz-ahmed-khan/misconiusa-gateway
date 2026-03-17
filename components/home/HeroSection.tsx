import Link from "next/link";
import { ROUTES, CTA_TEXT, GYBS_INTAKE_URL } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="border-b border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          Your Readiness and Opportunity Gateway
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          Choose your readiness pathway. Your Business Score and subscription determine your route and opportunity
          eligibility. Get ready to ascend your business.
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          Misconi USA is the Prime Agent operating the national Readiness and Opportunity Gateway. Begin your readiness
          journey, unlock your pathway, and access opportunities across customer, product, and supplier lanes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={ROUTES.subscribe}
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
          >
            {CTA_TEXT.subscribeAndBegin}
          </Link>
          <a
            href={GYBS_INTAKE_URL}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
          >
            {CTA_TEXT.startIntake}
          </a>
          <Link
            href={ROUTES.opportunities}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
          >
            {CTA_TEXT.viewOpportunities}
          </Link>
        </div>
      </div>
    </section>
  );
}
