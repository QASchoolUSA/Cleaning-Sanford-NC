"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICE_OPTIONS = [
  { value: "house-cleaning", label: "House Cleaning" },
  { value: "residential-cleaning", label: "Residential / Maintenance" },
  { value: "move-out-cleaning", label: "Move-Out Cleaning" },
  { value: "move-in-cleaning", label: "Move-In Cleaning" },
  { value: "airbnb-cleaning", label: "Airbnb / Turnover" },
  { value: "commercial-cleaning", label: "Commercial Cleaning" },
  { value: "post-construction-cleaning", label: "Post-Construction" },
  { value: "other", label: "Other / General Inquiry" },
];

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("house-cleaning");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const serviceLabel =
      SERVICE_OPTIONS.find((o) => o.value === service)?.label ?? service;

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          address: address.trim() || undefined,
          service_type: `Contact form — ${serviceLabel}`,
          notes: message.trim() || undefined,
          intent: "quote",
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ??
            "Unable to send your request. Please email us."
        );
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-[#0f5c5b]/20 bg-[#0f5c5b]/5 p-8">
        <h2 className="text-xl font-semibold text-slate-900">Request received</h2>
        <p className="mt-2 text-slate-600">
          Thanks — we&apos;ll follow up within one business day. You can also request an instant
          estimate on the homepage.
        </p>
        <Link href="/#booking" className="btn-primary mt-6 inline-flex">
          Get an instant quote
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-[#d9d0c3]/80 bg-[#fffcf7] p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-slate-700">
            First name
          </label>
          <input
            id="firstName"
            required
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-slate-700">
            Last name
          </label>
          <input
            id="lastName"
            required
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone (optional)
          </label>
          <input
            id="phone"
            type="tel"
            className="input-field"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
          Service
        </label>
        <select
          id="service"
          className="select-field"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-slate-700">
          Service address (optional)
        </label>
        <input
          id="address"
          className="input-field"
          placeholder="Sanford, NC"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="input-field"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={submitting}>
        {submitting ? "Sending…" : "Send quote request"}
      </button>
    </form>
  );
}
