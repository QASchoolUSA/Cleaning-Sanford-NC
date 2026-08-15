import type { Metadata } from "next";
import Link from "next/link";
import {
  businessEmail,
  businessPhoneDisplay,
  hasPhone,
  siteName,
  siteUrl,
  telHref,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${siteName}`,
  description:
    "Learn how Cleaning Sanford works: local Lee County crews, licensed and insured service, clear scopes, and a mobile service-area model across Sanford, Jonesboro, Broadway, Cameron, and Lillington.",
  alternates: { canonical: "/about" },
};

const differentiators = [
  {
    title: "Local Lee County focus",
    text: "We schedule around Sanford routes—not a national call center. That means faster response for homes near Jonesboro, Broadway, Cameron, and Lillington.",
  },
  {
    title: "Insured, background-checked crews",
    text: "Every visit is handled by trained cleaners who are fully insured and background-checked. Your home and keys are treated as a professional worksite, not a gig marketplace job.",
  },
  {
    title: "Clear scopes by service type",
    text: "House cleaning, move-in/out, commercial, and post-construction each get their own checklist. You know what is included before we arrive.",
  },
  {
    title: "Satisfaction-backed work",
    text: "If something was missed, tell us. We stand behind the clean and will make it right—no runaround.",
  },
];

export default function AboutPage() {
  const phoneHref = telHref();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteName,
    url: siteUrl,
    email: businessEmail,
    ...(hasPhone && phoneHref ? { telephone: phoneHref.replace("tel:", "") } : {}),
    description:
      "Cleaning Sanford is a mobile, service-area business serving Sanford, Jonesboro, Broadway, Cameron, and Lillington, NC. We do not publish a public storefront address.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sanford",
      addressRegion: "NC",
      postalCode: "27330",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Sanford" },
      { "@type": "City", name: "Jonesboro" },
      { "@type": "City", name: "Broadway" },
      { "@type": "City", name: "Cameron" },
      { "@type": "City", name: "Lillington" },
    ],
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      <header className="max-w-3xl">
        <p className="section-eyebrow">Sanford, NC · About us</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          A local cleaning company built for Lee County homes and businesses
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Cleaning Sanford provides residential, commercial, move, and post-construction cleaning
          across Sanford and nearby communities. We are a mobile service-area team—licensed,
          insured, and focused on showing up on time with a clear scope.
        </p>
      </header>

      <section className="mt-12 max-w-3xl space-y-5 leading-relaxed text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">Who we are</h2>
        <p>
          We started as a practical answer to a common local problem: homeowners and property managers
          in Sanford needed reliable cleaners who would confirm the appointment, follow a real
          checklist, and communicate when plans change. National apps rotate anonymous workers.
          Big chains push scripts. We keep it local—one business, clear contact options, and crews who
          know Lee County neighborhoods.
        </p>
        <p>
          Day to day, that means recurring house cleaning for busy households, vacancy and move cleans
          for landlords and realtors, commercial upkeep for offices and shared spaces, and detailed
          post-construction cleanup when renovations leave dust behind. Each service type has its own
          standards so a “quick refresh” is never confused with a builder final clean.
        </p>
        <p>
          Contact us anytime at{" "}
          <a href={`mailto:${businessEmail}`} className="font-medium text-[#0f5c5b] hover:underline">
            {businessEmail}
          </a>
          {hasPhone && phoneHref ? (
            <>
              {" "}
              or{" "}
              <a href={phoneHref} className="font-medium text-[#0f5c5b] hover:underline">
                {businessPhoneDisplay}
              </a>
            </>
          ) : null}
          . Hours are Monday–Saturday, 8:00 AM–6:00 PM.
        </p>
      </section>

      <section className="mt-14 max-w-3xl space-y-5 leading-relaxed text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">How we work</h2>
        <ol className="list-decimal space-y-3 pl-5">
          <li>
            <strong className="text-slate-900">Request a quote.</strong> Tell us the service type,
            property size, and preferred timing. We confirm what is included before you book.
          </li>
          <li>
            <strong className="text-slate-900">Confirm access and priorities.</strong> Share entry
            instructions, pet notes, and any rooms that need extra attention.
          </li>
          <li>
            <strong className="text-slate-900">We clean to the checklist.</strong> Our insured,
            background-checked team arrives with supplies and works room by room.
          </li>
          <li>
            <strong className="text-slate-900">You review the result.</strong> If something needs a
            touch-up, say so—we will make it right under our satisfaction guarantee.
          </li>
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-slate-900">What makes us different</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 max-w-3xl space-y-4 leading-relaxed text-slate-700">
        <h2 className="text-2xl font-bold text-slate-900">Service-area policy</h2>
        <p>
          Cleaning Sanford is a mobile, service-area business serving Sanford, Jonesboro, Broadway,
          Cameron, and Lillington, NC. We do not publish a public storefront address. Crews travel to your home
          or workplace; quotes and scheduling happen by email or the online booking form on
          this site.
        </p>
        <p>If you are unsure whether we cover your street, ask when you request a quote.</p>
      </section>

      <section className="mt-16 rounded-2xl bg-[#0f5c5b] px-6 py-10 text-white sm:px-10">
        <h2 className="text-xl font-bold sm:text-2xl">Ready to book a cleaning?</h2>
        <p className="mt-2 max-w-xl text-sm text-white/90">
          Get a clear quote for house, move, commercial, or post-construction cleaning in Sanford, NC.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/#booking"
            className="inline-flex rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] transition hover:bg-slate-50"
          >
            Get a quote
          </Link>
          {hasPhone && phoneHref ? (
            <a
              href={phoneHref}
              className="inline-flex rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call {businessPhoneDisplay}
            </a>
          ) : (
            <a
              href={`mailto:${businessEmail}`}
              className="inline-flex rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Email us
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
