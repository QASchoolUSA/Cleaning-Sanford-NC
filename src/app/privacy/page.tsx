import type { Metadata } from "next";
import { businessEmail, hasPhone, businessPhoneDisplay, siteName, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteName} collects, uses, and protects your personal information when you request a quote or book a cleaning.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const phoneHref = telHref();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: August 14, 2026</p>

      <div className="prose prose-slate mt-10 max-w-none prose-a:text-[#0f5c5b]">
        <p>
          {siteName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
          policy explains what information we collect when you use cleaningsanford.com or contact
          us for cleaning services, and how we use it.
        </p>

        <h2>Information we collect</h2>
        <p>When you request a quote, book a cleaning, or contact us, we may collect:</p>
        <ul>
          <li>Name, email address, phone number, and service address</li>
          <li>Service preferences, schedule details, and notes you provide</li>
          <li>Basic technical data such as browser type and pages visited (via standard server logs or analytics, if enabled)</li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To respond to quote and booking requests</li>
          <li>To schedule, confirm, and deliver cleaning services</li>
          <li>To communicate about appointments, invoices, and service updates</li>
          <li>To improve our website and customer experience</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We may share details with trusted service
          providers who help us operate bookings or communications, only as needed to fulfill your
          request, or when required by law.
        </p>

        <h2>Data retention</h2>
        <p>
          We keep booking and contact records only as long as needed for service delivery,
          business records, and legal obligations.
        </p>

        <h2>Your choices</h2>
        <p>
          To update or delete your contact information, or ask questions about this policy, email{" "}
          <a href={`mailto:${businessEmail}`}>{businessEmail}</a>
          {hasPhone && phoneHref ? (
            <>
              {" "}
              or call <a href={phoneHref}>{businessPhoneDisplay}</a>
            </>
          ) : null}
          .
        </p>
      </div>
    </main>
  );
}
