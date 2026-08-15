import type { Metadata } from "next";
import { businessEmail, businessPhoneDisplay, hasPhone, siteName, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${siteName} website and booking of residential and commercial cleaning services in Sanford, NC.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const phoneHref = telHref();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: August 14, 2026</p>

      <div className="mt-10 space-y-6 text-slate-600 leading-relaxed">
        <p>
          By using cleaningsanford.com or booking services with {siteName}, you agree to these
          terms. If you do not agree, please do not use our website or services.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Quotes and bookings</h2>
        <p>
          Online estimates are approximate and based on the details you provide. Final pricing may
          be adjusted after an on-site assessment if the home condition, size, or scope differs
          from what was described. Payment is due after cleaning is complete unless otherwise
          agreed in writing.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Scheduling and cancellations</h2>
        <p>
          Please provide at least 24 hours&apos; notice to reschedule or cancel whenever possible.
          Repeated no-shows or late cancellations may result in a fee or refusal of future
          bookings.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Access and safety</h2>
        <p>
          You are responsible for providing safe, reasonable access to the property and for
          securing valuables, pets, and fragile items. We reserve the right to decline or stop
          work if conditions are unsafe or unsanitary beyond a standard residential clean.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Satisfaction</h2>
        <p>
          If you are not satisfied with a completed service, contact us within 24 hours so we can
          make it right. Re-clean remedies apply to areas included in the original scope.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Website use</h2>
        <p>
          Content on this site is for general information. We may update services, pricing
          guidance, and these terms at any time. Continued use of the site after changes
          constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-bold text-slate-900">Contact</h2>
        <p>
          Questions about these terms:{" "}
          <a className="font-medium text-[#0f5c5b] hover:underline" href={`mailto:${businessEmail}`}>
            {businessEmail}
          </a>
          {hasPhone && phoneHref ? (
            <>
              {" "}
              or{" "}
              <a className="font-medium text-[#0f5c5b] hover:underline" href={phoneHref}>
                {businessPhoneDisplay}
              </a>
            </>
          ) : null}
          .
        </p>
      </div>
    </main>
  );
}
