import Link from "next/link";
import Image from "next/image";
import { communities } from "@/lib/communities";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Sanford Neighborhoods We Clean",
  description:
    "Cleaning Sanford proudly serves Carrington Place, West Lake, Wedgewood, Riverbirch, Tramway, and Historic Downtown with house cleaning, housekeeping, and post-construction cleaning.",
  path: "/communities",
  ogImage: "/og/areas.jpg",
  keywords: [
    "Sanford neighborhood cleaning",
    "house cleaning Sanford communities",
    "Carrington Place cleaning",
    "West Lake cleaning",
    "Historic Downtown house cleaning",
  ],
});

export default function CommunitiesHubPage() {
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Communities", path: "/communities" },
  ]);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Lee County · Sanford, NC</p>
            <h1 className="section-title mt-2">
              Communities we proudly serve in Sanford
            </h1>
            <p className="section-subtitle max-w-3xl">
              From family cul-de-sacs to amenity-adjacent streets, Cleaning Sanford
              brings house cleaning, maintenance housekeeping, and post-construction
              cleaning to the neighborhoods where our neighbors actually live.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.localHome.src}
              alt="Sanford, NC homes and communities served by Cleaning Sanford"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">
            Local neighborhoods across Sanford, NC
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            Each community page covers how North Carolina humidity, pollen, hard water, and
            everyday living shape the checklist—plus how we handle access notes, recurring
            schedules, and construction dust when homes are new or freshly remodeled.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((community) => (
              <Link
                key={community.slug}
                href={`/communities/${community.slug}`}
                className="card card-hover flex flex-col p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#0f5c5b]">
                  {community.city}, {community.state}
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{community.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {community.shortBlurb}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#0f5c5b]">
                  Cleaning in {community.name} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">Services for every community</h2>
          <p className="mt-3 text-slate-600">
            Explore{" "}
            <Link href="/house-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
              house cleaning
            </Link>
            ,{" "}
            <Link
              href="/residential-cleaning"
              className="font-medium text-[#0f5c5b] hover:underline"
            >
              residential maintenance &amp; housekeeping
            </Link>
            ,{" "}
            <Link
              href="/post-construction-cleaning"
              className="font-medium text-[#0f5c5b] hover:underline"
            >
              post-construction cleaning
            </Link>
            , and{" "}
            <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">
              pricing
            </Link>
            —then tell us which Sanford community you call home.
          </p>
        </section>
      </div>

      <ServiceBookingSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </main>
  );
}
