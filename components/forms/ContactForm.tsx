"use client";

import { useEffect, useState, FormEvent, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CTA_TEXT } from "@/lib/constants";
import { INTEREST_CATEGORIES, type InterestCategory } from "@/lib/site-content";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  interestCategory: "" as InterestCategory | "",
  message: "",
};

function normalizeInterest(value: string | null): InterestCategory | "" {
  if (!value) return "";
  const match = INTEREST_CATEGORIES.find((c) => c.toLowerCase() === value.toLowerCase());
  return match ?? "";
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);

  useEffect(() => {
    const fromQuery = normalizeInterest(searchParams.get("interest"));
    if (fromQuery) {
      setForm((prev) => ({ ...prev, interestCategory: fromQuery }));
    }

    const applyHashInterest = () => {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      // Support /#contact?interest=Partner
      if (hash.includes("?")) {
        const qs = new URLSearchParams(hash.split("?")[1]);
        const fromHash = normalizeInterest(qs.get("interest"));
        if (fromHash) setForm((prev) => ({ ...prev, interestCategory: fromHash }));
      }
    };
    applyHashInterest();
    window.addEventListener("hashchange", applyHashInterest);
    return () => window.removeEventListener("hashchange", applyHashInterest);
  }, [searchParams]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldError(null);

    if (!form.name || !form.email || !form.company || !form.interestCategory || !form.message) {
      setFieldError("Please complete all required fields.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || undefined,
          company: form.company,
          interestCategory: form.interestCategory,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm(INITIAL);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not send. Please try again.");
    }
  }

  const inputClass =
    "mt-1 block w-full rounded-[10px] border border-[color:var(--color-border-mid)] bg-[rgba(15,23,42,0.85)] px-3 py-2 text-[color:var(--color-text-primary)] shadow-[0_10px_28px_rgba(0,0,0,0.6)] placeholder:text-[color:var(--color-text-muted)] focus:border-[color:var(--color-gold)] focus:ring-1 focus:ring-[color:var(--color-gold)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Name <span className="text-[color:var(--color-gold)]">*</span>
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Email <span className="text-[color:var(--color-gold)]">*</span>
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Phone <span className="text-[color:var(--color-text-muted)]">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-company" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Business/Organization <span className="text-[color:var(--color-gold)]">*</span>
        </label>
        <input
          id="contact-company"
          type="text"
          required
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contact-interest" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Interest category <span className="text-[color:var(--color-gold)]">*</span>
        </label>
        <select
          id="contact-interest"
          required
          value={form.interestCategory}
          onChange={(e) =>
            setForm((p) => ({ ...p, interestCategory: e.target.value as InterestCategory | "" }))
          }
          className={inputClass}
        >
          <option value="">Select one</option>
          {INTEREST_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
          Message <span className="text-[color:var(--color-gold)]">*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className={inputClass}
        />
      </div>
      {fieldError && (
        <p className="text-xs text-[#EF4444]" role="alert">
          {fieldError}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm font-medium text-[color:var(--color-ready)]" role="status">
          Your message has been received. We will respond as soon as possible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-[#EF4444]" role="alert">
          {errorMessage}
        </p>
      )}
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="mt-4 flex w-full items-center justify-center rounded-[10px] bg-[color:var(--color-gold)] px-4 py-4 text-[16px] font-bold text-[color:var(--color-text-dark)] shadow-[0_6px_24px_rgba(212,168,87,0.25)] transition-transform transition-shadow duration-150 hover:-translate-y-[1px] hover:bg-[color:var(--color-gold-light)] disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--color-navy)]"
      >
        {status === "sending" ? (
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-[color:var(--color-text-dark)] border-t-transparent" />
        ) : (
          CTA_TEXT.sendMessage
        )}
      </motion.button>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={<div className="min-h-[320px] animate-pulse rounded-[10px] bg-[rgba(255,255,255,0.04)]" />}>
      <ContactFormInner />
    </Suspense>
  );
}
