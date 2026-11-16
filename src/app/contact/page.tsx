import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  businessEmail,
  businessPhoneDisplay,
  hasPhone,
  siteAreas,
  siteCounty,
  siteName,
  telHref,
} from "@/lib/site";
import { serviceAreas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteName} for house, commercial, move-out, and Airbnb cleaning quotes in Sanford, NC and Lee County.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const phoneHref = telHref();
  const nearby = serviceAreas.map((area) => area.name).join(", ");

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="section-eyebrow">Sanford, North Carolina · {siteCounty}</p>
      <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Contact {siteName}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
        Request a quote for house, move-out, Airbnb, commercial, or post-construction cleaning across
        Sanford, Jonesboro, Broadway, Cameron, and Lillington.
      </p>

      <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
        <p>
          {siteName} is a mobile service-area business based around Sanford, <strong>NC</strong>—Lee County, not
          Seminole County, Florida. If you found us while searching “Sanford cleaning,” confirm you need North
          Carolina coverage; Florida Sanford is a different market and brand.
        </p>
        <p>
          Tell us the service type, bedrooms and bathrooms (or commercial square footage), preferred timing, and
          any gate, driveway, or pet notes. We reply with next steps and can point you to an{" "}
          <Link href="/#booking" className="font-semibold text-[#0f5c5b] hover:underline">
            instant online quote
          </Link>{" "}
          when that is faster. For planning reading first, browse our{" "}
          <Link href="/blog" className="font-semibold text-[#0f5c5b] hover:underline">
            Lee County cleaning guides
          </Link>
          .
        </p>
        <p>
          Primary coverage includes {siteAreas.join(", ")}. Nearby routes often include {nearby}. Community pages
          for Carrington Place, West Lake, Wedgewood, Riverbirch, Tramway, and similar neighborhoods add access and
          checklist context when you want street-level detail.
        </p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Email</h2>
            <a
              href={`mailto:${businessEmail}`}
              className="mt-2 block text-lg font-semibold text-[#0f5c5b] hover:underline"
            >
              {businessEmail}
            </a>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</h2>
            {hasPhone && phoneHref ? (
              <a href={phoneHref} className="mt-2 block text-lg font-semibold text-[#0f5c5b] hover:underline">
                {businessPhoneDisplay}
              </a>
            ) : (
              <p className="mt-2 text-slate-700">
                Phone coming soon — use the form or{" "}
                <Link href="/#booking" className="font-semibold text-[#0f5c5b] hover:underline">
                  get an instant quote
                </Link>
                .
              </p>
            )}
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Hours</h2>
            <p className="mt-2 text-slate-700">Monday–Saturday, 8:00 AM–6:00 PM</p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Service area</h2>
            <p className="mt-2 text-slate-700">
              Mobile crews across Sanford and {siteCounty}, North Carolina. Licensed &amp; insured. No public
              storefront—share your address when you request a quote so we can confirm route availability.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
