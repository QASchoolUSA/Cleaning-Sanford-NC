import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import {
  bathRate,
  commercialRows,
  postRows,
  residentialRows,
} from "@/lib/pricing-display";
import { levelAdjustments } from "@/lib/pricing";
import { getPricingConfig } from "@/lib/pricing-config";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Cleaning Service Prices in Sanford, NC",
  description:
    "Transparent cleaning prices for Sanford homes and businesses. Residential, commercial, and post-construction rates with instant online quotes.",
  path: "/pricing",
  ogImage: "/og/pricing.jpg",
  keywords: [
    "house cleaning cost sanford",
    "cleaning prices sanford nc",
    "maid service prices",
    "commercial cleaning rates",
  ],
});

export default async function PricingPage() {
  const config = await getPricingConfig();
  const extraBath = bathRate(config);
  /** Post-construction is priced from its own table, so it is not an uplift row. */
  const upliftRows = levelAdjustments(config).filter(
    (level) => level.key !== "post"
  );

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Transparent pricing</p>
            <h1 className="section-title mt-2">Cleaning Service Prices in Sanford, NC</h1>
            <p className="section-subtitle">
              Starting rates for common jobs. Your final quote depends on size, level, and add-ons — get an
              instant estimate online.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.stagedLiving.src}
              alt={siteImages.stagedLiving.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Residential</h2>
            <p className="mt-2 text-sm text-slate-600">
              Standard home cleaning, one bathroom included.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {residentialRows(config).map((row) => (
                <li key={row.label} className="flex justify-between border-b border-slate-100 pb-2">
                  <span>{row.label}</span>
                  <span className="font-semibold text-[#0f5c5b]">from ${row.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Add ${extraBath} per extra bathroom. Homes over 1,500 sq ft are adjusted for size.
            </p>
            <Link
              href="/residential-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#0f5c5b] hover:underline"
            >
              Residential cleaning details →
            </Link>
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Commercial</h2>
            <p className="mt-2 text-sm text-slate-600">Office and business cleaning by square footage.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {commercialRows(config).map((row) => (
                <li key={row.label} className="flex justify-between border-b border-slate-100 pb-2">
                  <span>{row.label}</span>
                  <span className="font-semibold text-[#0f5c5b]">from ${row.price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/commercial-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#0f5c5b] hover:underline"
            >
              Commercial cleaning details →
            </Link>
          </section>

          <section className="card p-6">
            <h2 className="text-xl font-bold text-slate-900">Post-Construction</h2>
            <p className="mt-2 text-sm text-slate-600">Builder cleanup and renovation dust removal.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {postRows(config).map((row) => (
                <li key={row.label} className="flex justify-between border-b border-slate-100 pb-2">
                  <span>{row.label}</span>
                  <span className="font-semibold text-[#0f5c5b]">from ${row.price}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/post-construction-cleaning"
              className="mt-6 inline-flex text-sm font-semibold text-[#0f5c5b] hover:underline"
            >
              Post-construction details →
            </Link>
          </section>
        </div>

        <div className="mt-10 rounded-2xl bg-[#1a7a78]/10 p-8">
          <h2 className="text-lg font-semibold text-slate-900">Premiums &amp; add-ons</h2>
          <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
            <li>Extra bathrooms: +${extraBath} each</li>
            {upliftRows.map((row) => (
              <li key={row.label}>
                {row.label}: ~{row.uplift}% above standard
              </li>
            ))}
            <li>Airbnb / turnover: quote by size + same-day SLA</li>
            {config.addOns.map((addOn) => (
              <li key={addOn.key}>
                {addOn.label}: +${addOn.price}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-slate-600">
            Read our guides:{" "}
            <Link
              href="/blog/cost-of-house-cleaning-sanford-nc"
              className="font-medium text-[#0f5c5b] hover:underline"
            >
              house cleaning cost
            </Link>
            {" · "}
            <Link
              href="/blog/airbnb-turnover-time-sanford-nc"
              className="font-medium text-[#0f5c5b] hover:underline"
            >
              Airbnb turnover timing
            </Link>
            {" · "}
            <Link href="/airbnb-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
              Airbnb cleaning service
            </Link>
          </p>
        </div>
      </div>

      <ServiceBookingSection />
    </main>
  );
}
