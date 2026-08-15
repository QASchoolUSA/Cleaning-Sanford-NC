import Icon, { type IconName } from "@/components/Icon";
import AirbnbCleaningContent from "@/components/AirbnbCleaningContent";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Airbnb Cleaning Sanford, NC | Same-Day Turnover Service",
  description:
    "Same-day Airbnb and vacation rental turnover cleaning in Sanford, Jonesboro, and Lee County. Timed SLA cleans with linen reset, staging, and host QA.",
  path: "/airbnb-cleaning",
  ogImage: "/og/default.jpg",
  keywords: [
    "airbnb cleaning Sanford",
    "airbnb cleaning service Sanford NC",
    "vacation rental cleaning Jonesboro",
    "turnover cleaning Lee County",
    "short term rental cleaning Sanford",
  ],
});

const checklist: { icon: IconName; title: string; desc: string }[] = [
  { icon: "clock", title: "Timed Same-Day SLA", desc: "Door-to-door workflow sized to your booking gap." },
  { icon: "sparkles", title: "Linen & Bed Reset", desc: "Strip, start laundry, remake beds to listing standard." },
  { icon: "check", title: "Kitchen & Bath Sanitize", desc: "High-touch reset plus hard-water glass when needed." },
  { icon: "home", title: "Staging & Photo Parity", desc: "Living areas reset to match your listing photos." },
  { icon: "star", title: "12-Point QA Walk", desc: "Final checklist before we notify the host." },
  { icon: "shield", title: "Issue Flagging", desc: "Damage, odor, or missing items reported immediately." },
];

const faqs = [
  {
    q: "How long does an Airbnb turnover take near Sanford?",
    a: "A typical 2–3 bedroom vacation rental takes about 90–120 minutes with a two-person crew when checkout access is on time. Studios run faster; larger homes or heavy soil take longer.",
  },
  {
    q: "Is Airbnb cleaning the same as move-out cleaning?",
    a: "No. Airbnb turnover is a same-day SLA with linens, staging, and amenity restock. Move-out cleaning targets an empty unit and security-deposit walkthrough standards.",
  },
  {
    q: "Do you clean vacation rentals in Jonesboro and Broadway?",
    a: "Yes. We serve Sanford, Jonesboro, Broadway, Cameron, Lillington, and surrounding Lee County short-term rentals.",
  },
  {
    q: "Can property managers book recurring turnovers?",
    a: "Yes. Multi-unit hosts and property managers can set recurring or on-call turnover schedules with shared checklists and access instructions.",
  },
];

export default function AirbnbCleaning() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Airbnb & Turnover Cleaning Services"
        description="Same-day Airbnb and vacation rental turnover cleaning in Sanford, NC and Lee County."
        path="/airbnb-cleaning"
        type="ProfessionalService"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                Airbnb Cleaning in Sanford, NC
              </h1>
              <p className="text-slate-700">
                Same-day <strong>Airbnb turnover cleaning</strong> for vacation rentals in Cleaning Sanford
                City, Jonesboro, and Lee County—built for guest reviews, booking gaps, and host
                peace of mind.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Link
                  href="#booking"
                  className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]"
                >
                  Book turnover clean
                </Link>
                <Link
                  href="/blog/airbnb-turnover-time-sanford-nc"
                  className="inline-flex rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-[#0f5c5b] hover:text-[#0f5c5b]"
                >
                  See turnover timing guide
                </Link>
              </div>
              <ServiceHeroImage
                image="airbnbBedroom"
                caption="Guest-ready Airbnb turnover cleaning with fresh linens and staging"
              />
            </header>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">
                Guest-Ready Between Every Booking
              </h2>
              <p className="mt-3 text-slate-700">
                Our <strong>vacation rental cleaning</strong> service is an SLA product: minutes,
                linen logistics, amenity restock, and photo parity—not a generic house clean. For
                empty-unit deposit work, use{" "}
                <Link href="/move-out-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
                  move-out cleaning
                </Link>
                .
              </p>
            </div>

            <div className="rounded-2xl bg-[#1a7a78]/10 p-8 pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Turnover Checklist</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {checklist.map((item) => (
                  <div key={item.title} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-semibold text-slate-900">
                      <Icon name={item.icon} className="h-5 w-5 text-[#0f5c5b]" />
                      {item.title}
                    </div>
                    <p className="pl-7 text-sm text-slate-700">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">For Hosts &amp; Property Managers</h2>
              <p className="mt-3 text-slate-700">
                Share lockbox codes, linen rules, and amenity lists once. We run the same QA
                standard across your Sanford and Jonesboro portfolio so 5-star expectations stay
                consistent.
              </p>
            </div>

            <div className="pt-8">
              <AirbnbCleaningContent />
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">FAQs</h2>
              <div className="mt-4">
                {faqs.map((f) => (
                  <Accordion key={f.q} title={f.q}>
                    {f.a}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mt-16 bg-[#0f5c5b]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-white">Next guest checking in soon?</h3>
              <p className="mt-1 text-white/90">Book a same-day turnover before the booking gap closes.</p>
            </div>
            <Link
              href="#booking"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] shadow-sm hover:bg-[#1a7a78]/10"
            >
              Schedule now
            </Link>
          </div>
        </div>
      </section>

      <ServiceBookingSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Airbnb Cleaning", path: "/airbnb-cleaning" },
            ]),
          ),
        }}
      />
    </main>
  );
}
