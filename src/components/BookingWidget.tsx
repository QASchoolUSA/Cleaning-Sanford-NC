"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { createSoftLeadTracker } from "@/lib/soft-lead";
import PropertyDetailsStep from "@/components/PropertyDetailsStep";
import {
  ADDON_IDS,
  DEFAULT_PRICING_CONFIG,
  SERVICE_LABELS,
  addOnLabels,
  calculatePrice,
  estimateRange,
  frequencyLabels,
  propertySummary,
  selectedAddOnLines,
  sqftPresetLabel,
  type AddonId,
  type FrequencyId,
  type PricingConfig,
  type ServiceTypeId,
} from "@/lib/pricing";
import {
  businessEmail,
  businessPhoneDisplay,
  hasPhone,
  telHref,
} from "@/lib/site";

const SERVICE_OPTIONS: { value: ServiceTypeId; label: string; desc: string }[] = [
  { value: "house", label: "House Cleaning", desc: "Standard home clean" },
  { value: "apartment", label: "Apartment Cleaning", desc: "Flats & condos" },
  { value: "maintenance", label: "Maintenance Cleaning", desc: "Recurring upkeep" },
  { value: "deep", label: "Deep Cleaning", desc: "Detail-heavy reset" },
  { value: "move", label: "Move In / Move Out", desc: "Empty-unit turnover" },
  { value: "airbnb", label: "Airbnb Turnover", desc: "Guest-ready between stays" },
  { value: "post-construction", label: "Post‑Construction", desc: "Dust & debris cleanup" },
];

const STEPS = ["Service", "Home", "Options", "Schedule", "Contact", "Review"] as const;
const CONTACT_STEP = 4;

type ContactErrors = Partial<Record<"name" | "email" | "phone" | "address", string>>;

function validateContact(name: string, email: string, phone: string, address: string): ContactErrors {
  const errors: ContactErrors = {};
  if (!name.trim()) errors.name = "Please enter your full name.";
  if (!email.trim()) {
    errors.email = "Email is required so we can send your quote and confirmation.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phone.trim()) {
    errors.phone = "Phone is required so we can confirm your appointment.";
  } else if (phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!address.trim()) errors.address = "Service address is required so our team knows where to go.";
  return errors;
}

export default function BookingWidget({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) {
  const softLead = useRef<ReturnType<typeof createSoftLeadTracker> | null>(null);
  if (!softLead.current) {
    softLead.current = createSoftLeadTracker();
  }
  const [serviceType, setServiceType] = useState<ServiceTypeId>("house");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [sqft, setSqft] = useState(config.sqftPresets[2]?.value ?? 1600);
  const [frequency, setFrequency] = useState<FrequencyId>("one-time");
  const [addons, setAddons] = useState<AddonId[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [step, setStep] = useState(0);
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});

  const quote = useMemo(
    () =>
      calculatePrice(
        { serviceType, bedrooms, bathrooms, sqft, frequency, addons },
        config,
      ),
    [serviceType, bedrooms, bathrooms, sqft, frequency, addons, config],
  );
  const range = estimateRange(quote.total);

  const labels = useMemo(() => addOnLabels(config), [config]);
  const freqLabels = useMemo(() => frequencyLabels(config), [config]);
  const sizeLabel = propertySummary({ bedrooms, bathrooms, sqft }, config);
  const serviceLabel = SERVICE_LABELS[serviceType];
  const addOnLines = selectedAddOnLines(addons, config);
  const selectedAddOns = addOnLines.map((a) => a.label);

  function toggleAddon(id: AddonId) {
    setAddons((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function buildPayload(intent: "quote" | "book") {
    return {
      customer_name: name,
      email,
      phone,
      address,
      service_type: serviceLabel,
      preferred_date: date || undefined,
      preferred_time: time || undefined,
      intent,
      session_key: softLead.current?.sessionKey,
      property: {
        bedrooms,
        bathrooms,
        size_label: sqftPresetLabel(sqft, config),
        home_type: serviceLabel,
      },
      quote: {
        estimate: quote.total,
        estimate_low: range.low,
        estimate_high: range.high,
        currency: "USD",
        service_level: serviceLabel,
        frequency: freqLabels[frequency],
        add_ons: addOnLines,
        payment_terms: "Due after cleaning is complete",
      },
    };
  }

  useEffect(() => {
    const tracker = softLead.current;
    return () => tracker?.dispose();
  }, []);

  useEffect(() => {
    if (booked) return;
    softLead.current?.schedule({
      ...buildPayload("quote"),
      last_step: STEPS[step] ?? String(step),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    booked,
    step,
    name,
    email,
    phone,
    address,
    date,
    time,
    serviceType,
    bedrooms,
    bathrooms,
    sqft,
    frequency,
    addons,
    quote.total,
    range.low,
    range.high,
  ]);

  async function submitPayload(intent: "quote" | "book") {
    const errors = validateContact(name, email, phone, address);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      setStep(CONTACT_STEP);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildPayload(intent)),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Request failed");
      }

      setBooked(true);
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or call us.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function next() {
    if (step === CONTACT_STEP) {
      const errors = validateContact(name, email, phone, address);
      if (Object.keys(errors).length > 0) {
        setContactErrors(errors);
        return;
      }
      setContactErrors({});
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  if (booked) {
    return (
      <div className="card mx-auto w-full max-w-lg overflow-hidden p-0">
        <div className="bg-gradient-to-br from-[#0f5c5b] to-[#1a7a78] px-6 py-8 text-center text-white">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">Booking request sent!</h2>
          <p className="mt-2 text-sm text-white/90">We&apos;ll confirm your appointment shortly.</p>
        </div>
        <div className="space-y-4 p-6">
          <div className="rounded-xl bg-[#1a7a78]/10 p-4">
            <p className="text-sm font-medium text-slate-900">Pay when we&apos;re done</p>
            <p className="mt-1 text-sm text-slate-600">
              No upfront payment required. Your estimated total of <strong>${quote.total}</strong> is due after your cleaning is complete and you&apos;re satisfied.
            </p>
          </div>
          <p className="text-sm text-slate-600">
            Questions?{" "}
            {hasPhone && telHref() ? (
              <>
                Call us at{" "}
                <a href={telHref()} className="font-semibold text-[#0f5c5b] hover:underline">
                  {businessPhoneDisplay}
                </a>
                .
              </>
            ) : (
              <>
                Email us at{" "}
                <a href={`mailto:${businessEmail}`} className="font-semibold text-[#0f5c5b] hover:underline">
                  {businessEmail}
                </a>
                .
              </>
            )}
          </p>
          <button type="button" className="btn-ghost w-full" onClick={() => { setBooked(false); setStep(0); setSubmitError(null); }}>
            Book another cleaning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card mx-auto w-full max-w-lg overflow-hidden p-0 shadow-lg shadow-[#0f5c5b]/5">
      <div className="border-b border-slate-100 bg-gradient-to-r from-[#1a7a78]/10 to-white px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Book your cleaning</h2>
            <p className="mt-0.5 text-xs text-slate-500">Instant quote · No payment now</p>
          </div>
          <div className="shrink-0 rounded-xl bg-white px-3 py-2 text-right shadow-sm ring-1 ring-slate-100">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">Estimate</p>
            <p className="text-lg font-bold text-[#0f5c5b]">${quote.total}</p>
          </div>
        </div>
      </div>

      <div className="px-6 pt-5">
        <div className="flex items-center justify-between gap-1">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                    i <= step ? "bg-[#0f5c5b] text-white" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {i < step ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>
                <span className={`hidden text-[10px] font-medium sm:block ${i <= step ? "text-[#0f5c5b]" : "text-slate-400"}`}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`mx-1 mb-4 h-0.5 flex-1 rounded-full sm:mb-5 ${i < step ? "bg-[#0f5c5b]" : "bg-slate-100"}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-2 pt-4">
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">What type of cleaning?</p>
              <div className="grid gap-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setServiceType(opt.value)}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                      serviceType === opt.value
                        ? "border-[#0f5c5b] bg-[#1a7a78]/10 ring-1 ring-[#0f5c5b]/30"
                        : "border-slate-200 hover:border-[#1a7a78]/50 hover:bg-slate-50"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{opt.label}</p>
                      <p className="text-xs text-slate-500">{opt.desc}</p>
                    </div>
                    <div className={`h-4 w-4 shrink-0 rounded-full border-2 ${serviceType === opt.value ? "border-[#0f5c5b] bg-[#0f5c5b]" : "border-slate-300"}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <PropertyDetailsStep
            bedrooms={bedrooms}
            bathrooms={bathrooms}
            sqft={sqft}
            config={config}
            onBedroomsChange={setBedrooms}
            onBathroomsChange={setBathrooms}
            onSqftChange={setSqft}
          />
        )}

        {step === 2 && (
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">How often?</label>
              <select
                className="select-field"
                value={frequency}
                onChange={(e) => setFrequency(e.target.value as FrequencyId)}
              >
                {config.frequencyMultipliers.map((freq) => (
                  <option key={freq.key} value={freq.key}>
                    {freq.label}
                    {freq.multiplier < 1
                      ? ` (${Math.round((1 - freq.multiplier) * 100)}% off)`
                      : ""}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">Optional add‑ons</p>
              <div className="flex flex-wrap gap-2">
                {ADDON_IDS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleAddon(key)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      addons.includes(key)
                        ? "bg-[#0f5c5b] text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-[#1a7a78]/15"
                    }`}
                  >
                    {labels[key]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Preferred date</label>
              <input type="date" className="input-field" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Preferred time</label>
              <input type="time" className="input-field" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <p className="text-xs text-slate-500 sm:col-span-2">
              We&apos;ll confirm availability and send a reminder before your appointment.
            </p>
          </div>
        )}

        {step === CONTACT_STEP && (
          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-xs text-slate-500 sm:col-span-2">
              Fields marked with <span className="text-[#0f5c5b]">*</span> are required to send your quote or book a cleaning.
            </p>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full name <span className="text-[#0f5c5b]">*</span>
              </label>
              <input
                type="text"
                className={`input-field ${contactErrors.name ? "ring-2 ring-red-400" : ""}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setContactErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Jane Smith"
                required
                autoComplete="name"
              />
              {contactErrors.name && <p className="mt-1 text-xs text-red-600">{contactErrors.name}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email <span className="text-[#0f5c5b]">*</span>
              </label>
              <input
                type="email"
                className={`input-field ${contactErrors.email ? "ring-2 ring-red-400" : ""}`}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setContactErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
              {contactErrors.email && <p className="mt-1 text-xs text-red-600">{contactErrors.email}</p>}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone <span className="text-[#0f5c5b]">*</span>
              </label>
              <input
                type="tel"
                className={`input-field ${contactErrors.phone ? "ring-2 ring-red-400" : ""}`}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setContactErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="(919) 555-0123"
                required
                autoComplete="tel"
              />
              {contactErrors.phone && <p className="mt-1 text-xs text-red-600">{contactErrors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Service address <span className="text-[#0f5c5b]">*</span>
              </label>
              <input
                type="text"
                className={`input-field ${contactErrors.address ? "ring-2 ring-red-400" : ""}`}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setContactErrors((prev) => ({ ...prev, address: undefined }));
                }}
                placeholder="123 Main St, Sanford, NC"
                required
                autoComplete="street-address"
              />
              {contactErrors.address && <p className="mt-1 text-xs text-red-600">{contactErrors.address}</p>}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-sm">
              <dl className="space-y-2.5">
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Service</dt><dd className="font-medium text-slate-900">{serviceLabel}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Home</dt><dd className="text-right font-medium text-slate-900">{sizeLabel}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Frequency</dt><dd className="font-medium text-slate-900">{freqLabels[frequency]}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Add‑ons</dt><dd className="font-medium text-slate-900">{selectedAddOns.join(", ") || "None"}</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">When</dt><dd className="font-medium text-slate-900">{date || "Flexible"} {time && `at ${time}`}</dd></div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Contact</dt>
                  <dd className="text-right font-medium text-slate-900">
                    {name}<br />
                    <span className="text-xs font-normal text-slate-500">{email}<br />{phone}</span>
                  </dd>
                </div>
                <div className="flex justify-between gap-4"><dt className="text-slate-500">Address</dt><dd className="text-right font-medium text-slate-900">{address}</dd></div>
              </dl>
            </div>
            <div className="rounded-xl bg-[#1a7a78]/10 p-4">
              <p className="text-sm font-semibold text-slate-900">Estimated total: ${quote.total}</p>
              <p className="mt-0.5 text-xs text-slate-600">Range ${range.low}–${range.high} · Pay after completion</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Book now with zero upfront payment. We&apos;ll send your final invoice once the job is done and you&apos;re happy with the results.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 space-y-3 border-t border-slate-100 px-6 py-4">
        {submitError && (
          <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{submitError}</p>
        )}
        <div className="flex items-center justify-between gap-3">
          <button type="button" className="btn-ghost" onClick={prev} disabled={step === 0}>
            Back
          </button>
          {step < STEPS.length - 1 ? (
            <button type="button" className="btn-primary" onClick={next}>
              Continue
            </button>
          ) : (
            <div className="flex flex-wrap justify-end gap-2">
              <button
                type="button"
                className="btn-primary"
                disabled={submitting}
                onClick={() => submitPayload("quote")}
              >
                {submitting ? "Sending…" : "Request quote"}
              </button>
              <button
                type="button"
                className="btn-ghost"
                disabled={submitting}
                onClick={() => submitPayload("book")}
              >
                {submitting ? "Sending…" : "Book cleaning"}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-slate-100 bg-slate-50 px-6 py-3">
        <p className="text-center text-[11px] text-slate-500">
          No payment required to book · Pay when your clean is complete
        </p>
      </div>
    </div>
  );
}
