"use client";

import { useState, FormEvent } from "react";

const INITIAL = {
  name: "",
  email: "",
  company: "",
  interestArea: "",
  productLine: "",
  phone: "",
  country: "",
  state: "",
  city: "",
  shortDescription: "",
};

export function SupplierInterestForm() {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact/supplier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
        <label htmlFor="supplier-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Company <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-company"
          type="text"
          required
          value={form.company}
          onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-interestArea" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Interest Area (Supplier) <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-interestArea"
          type="text"
          required
          value={form.interestArea}
          onChange={(e) => setForm((p) => ({ ...p, interestArea: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-productLine" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Product Line <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-productLine"
          type="text"
          required
          value={form.productLine}
          onChange={(e) => setForm((p) => ({ ...p, productLine: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Phone <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-country" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Country <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-country"
          type="text"
          required
          value={form.country}
          onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-state" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          State <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-state"
          type="text"
          required
          value={form.state}
          onChange={(e) => setForm((p) => ({ ...p, state: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-city" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          City <span className="text-red-600">*</span>
        </label>
        <input
          id="supplier-city"
          type="text"
          required
          value={form.city}
          onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="supplier-shortDescription" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
          Short Description <span className="text-red-600">*</span>
        </label>
        <textarea
          id="supplier-shortDescription"
          required
          rows={3}
          value={form.shortDescription}
          onChange={(e) => setForm((p) => ({ ...p, shortDescription: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-slate-500 focus:ring-1 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-green-700 dark:text-green-400" role="status">
          Your supplier interest has been received. We will be in touch.
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
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
