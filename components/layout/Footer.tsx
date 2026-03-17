import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">Misconi USA</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">The Readiness Company™</p>
          </div>
          <a
            href="mailto:info@misconiusa.com"
            className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2 rounded"
          >
            info@misconiusa.com
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm" aria-label="Footer navigation">
            <Link href={ROUTES.opportunities} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Opportunities
            </Link>
            <Link href={ROUTES.pathways} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Pathways
            </Link>
            <Link href={ROUTES.subscribe} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Subscribe
            </Link>
            <Link href={ROUTES.contactAnchor} className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">
              Contact
            </Link>
          </nav>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-500">
            <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-700 dark:hover:text-slate-300">
              Terms of Use
            </Link>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-500">© Misconi USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
