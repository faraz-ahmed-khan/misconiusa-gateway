const BANNER_TAGLINE = "Readiness is the Gate to Opportunity";

export function CorporateBanner() {
  return (
    <section
      className="relative overflow-hidden border-b border-[rgba(212,168,87,0.12)] bg-[#000821]"
      aria-label={`Misconi USA™ — ${BANNER_TAGLINE}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-55"
        style={{
          backgroundImage:
            "linear-gradient(rgba(72,118,196,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(72,118,196,0.22) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 90% at 50% 45%, rgba(48,96,180,0.42), transparent 62%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[220px] max-w-[1920px] items-center justify-center px-6 py-14 sm:min-h-[260px] sm:px-10 sm:py-16 lg:min-h-[300px] lg:py-20">
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          className="pointer-events-none absolute right-5 top-5 h-14 w-14 sm:right-8 sm:top-8 sm:h-[4.5rem] sm:w-[4.5rem] lg:right-12 lg:top-10 lg:h-24 lg:w-24"
        >
          <circle cx="60" cy="60" r="56" stroke="white" strokeWidth="2.5" />
          <path d="M38 34C32 42 30 52 30 60C30 68 32 78 38 86" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M82 34C88 42 90 52 90 60C90 68 88 78 82 86" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="38" r="3.5" fill="white" />
          <circle cx="60" cy="48" r="3.5" fill="white" />
          <circle cx="60" cy="58" r="3.5" fill="white" />
          <circle cx="60" cy="68" r="3.5" fill="white" />
          <circle cx="60" cy="78" r="3.5" fill="white" />
          <text x="94" y="28" fill="white" fontSize="14" fontFamily="system-ui, sans-serif">
            ®
          </text>
        </svg>

        <div className="relative z-[1] max-w-3xl text-center">
          <h1 className="text-[clamp(2rem,5.5vw,3.75rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            <span className="border-b-[3px] border-white pb-1">Misconi</span> USA
            <sup className="ml-0.5 align-super text-[0.42em] font-normal tracking-normal">™</sup>
          </h1>
          <p className="mt-5 font-serif text-[clamp(1rem,2.4vw,1.5rem)] italic leading-snug text-white/95">
            {BANNER_TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
}
