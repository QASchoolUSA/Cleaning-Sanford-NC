import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import {
  bathroomRate,
  bedroomRate,
  serviceRows,
} from "@/lib/pricing-display";
import { getPricingConfig } from "@/lib/pricing-config";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Cleaning Service Prices in Sanford, NC",
  description:
    "Transparent cleaning prices for Sanford homes and businesses. Per-square-foot rates with bedroom and bathroom add-ons — get an instant online quote.",
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
  const rows = serviceRows(config);
  const bed = bedroomRate(config);
  const bath = bathroomRate(config);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Transparent pricing</p>
            <h1 className="section-title mt-2">Cleaning Service Prices in Sanford, NC</h1>
            <p className="section-subtitle">
              Starting rates use square footage with a service minimum, plus ${bed} per bedroom and $
              {bath} per bathroom. Your final quote depends on size, frequency, and add-ons — get an
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

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <section className="card p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900">Service starting rates</h2>
            <p className="mt-2 text-sm text-slate-600">
              Floor price and per-square-foot rate for each service. Larger homes quote above the
              minimum when sq ft × rate exceeds the floor.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {rows.map((row) => (
                <li
                  key={row.label}
                  className="flex justify-between gap-4 border-b border-slate-100 pb-2"
                >
                  <span>
                    {row.label}
                    {row.detail ? (
                      <span className="mt-0.5 block text-xs text-slate-500">{row.detail}</span>
                    ) : null}
                  </span>
                  <span className="shrink-0 font-semibold text-[#0f5c5b]">from ${row.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Recurring frequency discounts apply (weekly, bi-weekly, monthly). Add-ons are priced
              separately in the quote wizard.
            </p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl bg-[#1a7a78]/10 p-8">
          <h2 className="text-xl font-bold text-slate-900">How quotes are built</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>
              Base = max(service minimum, round(square footage × per-sq-ft rate))
            </li>
            <li>
              Plus ${bed} per bedroom and ${bath} per bathroom
            </li>
            <li>Optional add-ons and frequency discount applied last</li>
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
