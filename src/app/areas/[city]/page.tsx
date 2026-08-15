import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAreaBySlug, serviceAreas } from "@/lib/areas";
import { breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";
import { siteName } from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/residential-cleaning", label: "Residential Cleaning" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/move-out-cleaning", label: "Move-Out Cleaning" },
  { href: "/move-in-cleaning", label: "Move-In Cleaning" },
  { href: "/airbnb-cleaning", label: "Airbnb Cleaning" },
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
];

const areaExtras: Record<
  string,
  {
    county: string;
    neighborhoods: string[];
    intro: string;
    context: string;
    priorities: string[];
    faqs: { q: string; a: string }[];
  }
> = {
  jonesboro: {
    county: "Lee County",
    neighborhoods: ["Jonesboro proper", "Lemon Springs", "streets toward Sanford"],
    intro:
      "Jonesboro sits just south of Sanford with a mix of established homes, rural roads, and growing residential pockets. Cleaning needs range from family house maintenance to vacancy resets when rentals turn over.",
    context:
      "Homes here often track outdoor dust and spring pine pollen at entries. Kitchens and baths see daily humidity, while ceiling fans and returns collect AC dust between visits. Share driveway notes and preferred arrival windows when you book.",
    priorities: [
      "Entry floors after outdoor work or pets",
      "Kitchen and bath humidity film",
      "Ceiling fans, vents, and pollen on sills",
      "Parking and access notes for rural or shared drives",
    ],
    faqs: [
      {
        q: "Do you clean homes throughout Jonesboro?",
        a: "Yes. Cleaning Sanford serves Jonesboro addresses subject to route availability. Include the full address, preferred date, and parking notes when requesting a quote.",
      },
      {
        q: "Can I arrange recurring cleaning for a Jonesboro family home?",
        a: "Yes. Weekly service suits active homes with children or pets; biweekly service works well for lighter weekday use.",
      },
      {
        q: "Do you provide vacation-rental turnover cleaning?",
        a: "Turnover work may be available when the host provides checkout and check-in times, access, linen responsibilities, and a property-specific checklist.",
      },
    ],
  },
  broadway: {
    county: "Lee County",
    neighborhoods: ["In-town Broadway", "nearby rural roads", "routes toward Lillington"],
    intro:
      "Broadway homes range from in-town addresses to quieter rural properties. A useful local checklist accounts for humid bathrooms, entry dust, and the mix of everyday living with seasonal guests.",
    context:
      "Family neighborhoods prioritize kitchens, bathrooms, floors, and guest rooms. Lightly occupied homes need arrival or departure resets. Rotating fans, vents, baseboards, and window tracks keeps detail work manageable.",
    priorities: [
      "Bathroom moisture and soap-film control",
      "Guest-room preparation before visits",
      "Recurring kitchen and high-traffic floor care",
      "Pollen and entry-floor cleanup",
    ],
    faqs: [
      {
        q: "Which Broadway addresses can request cleaning?",
        a: "We serve Broadway and nearby Lee County communities based on the exact address and crew route.",
      },
      {
        q: "Is deep cleaning necessary before recurring service?",
        a: "It is useful when there is visible buildup on baseboards, fixtures, fans, kitchen surfaces, or bathrooms. A deep reset lets later weekly or biweekly visits focus on maintenance.",
      },
    ],
  },
  cameron: {
    county: "Lee County / Moore County edge",
    neighborhoods: ["Cameron proper", "US-1 corridor", "routes toward Carthage and Vass"],
    intro:
      "Cameron sits along the US-1 corridor with a mix of in-town homes and properties heading toward Southern Pines. Cleaning plans should reflect home size, baths, and how much outdoor dust tracks indoors.",
    context:
      "Corridor homes often see pollen and road dust at entries. Larger floor plans benefit from zone-based plans so kitchens, occupied bedrooms, bathrooms, and living areas stay consistent while detail work rotates.",
    priorities: [
      "Pollen and entry-floor cleanup",
      "Zone-based plans for larger homes",
      "Kitchen, bathroom, and pet-hair maintenance",
      "Clear access and parking instructions",
    ],
    faqs: [
      {
        q: "Do you serve Cameron along US-1?",
        a: "Yes. Cameron requests are scheduled based on the exact address and route availability. Submit the address with access and parking details for confirmation.",
      },
      {
        q: "What schedule works best for a busy Cameron household?",
        a: "Weekly visits help with pets, children, or frequent cooking. Biweekly cleaning often maintains smaller or lower-traffic homes effectively.",
      },
    ],
  },
  lillington: {
    county: "Harnett County (Lee County neighbor)",
    neighborhoods: ["Lillington proper", "Buies Creek routes", "streets toward Broadway"],
    intro:
      "Lillington and nearby Harnett County addresses often book Cleaning Sanford when they want a Sanford-based crew for house, move-out, or commercial cleaning.",
    context:
      "Expect a mix of family homes and rental turnovers. Move-outs should be timed to key return and landlord walkthroughs. Recurring house cleans keep kitchens and baths ahead of humidity and pollen.",
    priorities: [
      "Deposit-focused vacancy detail when moving",
      "Kitchen and bath maintenance",
      "Floors and high-traffic paths",
      "Access timing for rentals and offices",
    ],
    faqs: [
      {
        q: "Do you travel to Lillington from Sanford?",
        a: "Yes, subject to route availability. Include your full address and preferred date when requesting a quote.",
      },
      {
        q: "Can you handle move-out cleaning in Lillington?",
        a: "Yes. Share key-return timing, landlord checklist items, and whether appliances need interior cleaning.",
      },
    ],
  },
};

type Props = { params: Promise<{ city: string }> };

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ city: area.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) return {};

  return createPageMetadata({
    title: `House Cleaning ${area.name}, NC`,
    description: `Professional cleaning services in ${area.name}, NC. Residential, commercial, move-in/out, and post-construction cleaning by ${siteName}.`,
    path: `/areas/${area.slug}`,
    ogImage: "/og/areas.jpg",
    keywords: [
      `house cleaning ${area.name.toLowerCase()} nc`,
      `cleaning services ${area.name.toLowerCase()}`,
      `maid service ${area.name.toLowerCase()}`,
    ],
  });
}

export default async function AreaPage({ params }: Props) {
  const { city } = await params;
  const area = getAreaBySlug(city);
  if (!area) notFound();

  const extras = areaExtras[area.slug];
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: `${area.name}, NC`, path: `/areas/${area.slug}` },
  ]);
  const faqJsonLd = extras
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: extras.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }
    : null;

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">{extras?.county ?? "Service area"}</p>
            <h1 className="section-title mt-2">Cleaning Services in {area.name}, NC</h1>
            <p className="section-subtitle max-w-3xl">{extras?.intro ?? area.description}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.localHome.src}
              alt={`Professional cleaning services available in ${area.name}, NC`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {extras && (
          <section className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">How local housing shapes the checklist</h2>
              <p className="mt-4 leading-relaxed text-slate-700">{extras.context}</p>
              <p className="mt-4 leading-relaxed text-slate-700">
                {siteName} serves homes in and around {extras.neighborhoods.join(", ")}. Exact coverage
                depends on the address and schedule. Quotes reflect home size, bathrooms, condition, service type,
                frequency, and agreed add-ons—not a one-size-fits-all city price.
              </p>
            </div>
            <aside className="rounded-2xl bg-[#1a7a78]/10 p-6">
              <h2 className="text-xl font-bold text-slate-900">Common local priorities</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                {extras.priorities.map((priority) => (
                  <li key={priority}>{priority}</li>
                ))}
              </ul>
            </aside>
          </section>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="card card-hover p-5 text-sm font-semibold text-slate-800 hover:text-[#0f5c5b]">
              {link.label} in {area.name} →
            </Link>
          ))}
        </div>

        {extras && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-6 space-y-4">
              {extras.faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl border border-slate-200 p-6">
                  <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                  <p className="mt-2 leading-relaxed text-slate-700">{faq.a}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">Nearby communities we serve</h2>
          <p className="mt-3 text-slate-600">
            {area.nearby.join(", ")}, and surrounding Lee County areas.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Also serving:{" "}
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .map((a, i, arr) => (
                <span key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="font-medium text-[#0f5c5b] hover:underline">
                    {a.name}
                  </Link>
                  {i < arr.length - 1 ? ", " : ""}
                </span>
              ))}
          </p>
        </div>
      </div>

      <ServiceBookingSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </main>
  );
}
