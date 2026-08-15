import CommercialCleaningContent from "@/components/CommercialCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Commercial Cleaning Services in Sanford, NC",
  description:
    "Commercial cleaning in Sanford: office cleaning, janitorial services, retail and shared areas with flexible schedules.",
  path: "/commercial-cleaning",
  ogImage: "/og/commercial-cleaning.jpg",
  keywords: [
    "commercial cleaning sanford",
    "office cleaning sanford",
    "janitorial services sanford",
    "business cleaning",
    "commercial janitorial",
    "post-build turnover",
  ],
});

const servicesSchedules: { icon: IconName; text: string }[] = [
  { icon: "clock", text: "Custom schedules: daily, weekly, bi-weekly" },
  { icon: "check", text: "Restrooms, floors, breakrooms, glass & touchpoints" },
  { icon: "home", text: "Lobbies, conference rooms, shared areas" },
  { icon: "sparkles", text: "Move-in/out and post-build turnover available" },
];

const faqs = [
  { q: "Do you offer after-hours cleaning?", a: "Yes. We align with your operating hours and security requirements." },
  { q: "Are supplies and equipment provided?", a: "Yes. We bring professional-grade supplies and equipment." },
  { q: "Can you handle large office suites?", a: "Yes. We service small offices, large suites, and shared areas." },
  { q: "Do you provide one-time or recurring service?", a: "Both. Daily, weekly, bi-weekly, and as‑needed options." },
];

export default function Commercial() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Commercial Cleaning Services"
        description="Professional commercial cleaning for offices and businesses in Sanford."
        path="/commercial-cleaning"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Commercial Cleaning Services in Sanford, NC</h1>
              <p className="text-slate-700">Office suites, retail, and shared areas—consistent janitorial service on your schedule.</p>
              <div className="pt-4">
                <Link href="#booking" className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]">Get a fast quote</Link>
              </div>
              <ServiceHeroImage image="office" caption="Professional office and commercial cleaning for Lee County businesses" />
            </header>

            <div className="pt-8 bg-[#1a7a78]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Services & Schedules</h2>
              <p className="mt-2 max-w-2xl text-slate-700">Reliable daily, weekly, or as‑needed service with attention to high‑traffic zones and touchpoints.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {servicesSchedules.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Our Process</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">1</div><p className="mt-3 text-sm text-slate-700">Walkthrough and scope confirmation.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">2</div><p className="mt-3 text-sm text-slate-700">Schedule alignment and access coordination.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">3</div><p className="mt-3 text-sm text-slate-700">Ongoing cleaning with quality checks.</p></li>
              </ol>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Commercial Cleaning in Sanford</h2>
              <p className="mt-3 text-slate-700">We provide dependable <strong>commercial cleaning in Sanford</strong> for offices, retail, and shared spaces. See <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">commercial pricing</Link> or our <Link href="/post-construction-cleaning" className="font-medium text-[#0f5c5b] hover:underline">post-construction cleaning</Link> for new builds.</p>
            </div>
            <div className="pt-8">
              <CommercialCleaningContent />
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
            <h3 className="text-xl font-semibold text-white">Ready for a spotless space?</h3>
            <Link href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] shadow-sm hover:bg-[#1a7a78]/10">Get a quote</Link>
          </div>
        </div>
      </section>

      <ServiceBookingSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Commercial Cleaning", path: "/commercial-cleaning" }])) }} />
    </main>
  );
}
