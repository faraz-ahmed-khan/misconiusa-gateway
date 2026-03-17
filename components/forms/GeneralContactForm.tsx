"use client";

import { useState, FormEvent } from "react";

const INITIAL = { name: "", email: "", message: "", phone: "", company: "" };

export function GeneralContactForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact/general", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone || undefined,
          company: form.company || undefined,
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="general-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="general-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="general-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="general-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="general-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Phone <span className="text-slate-400">(optional)</span>
        </label>
        <input
          id="general-phone"
          type="tel"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="general-company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Company <span className="text-slate-400">(optional)</span>
        </label>
        <input
          id="general-company"
          type="text"
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="general-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="general-message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-green-700 dark:text-green-400" role="status">
          Your message has been received. We will respond as soon as possible.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-700 dark:text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
