import PostConstructionCleaningContent from "@/components/PostConstructionCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Post-Construction Cleaning in Sanford, NC",
  description:
    "Post construction cleaning in Sanford: builder cleanup, renovation dust removal, final detailing for residential and commercial projects.",
  path: "/post-construction-cleaning",
  ogImage: "/og/post-construction-cleaning.jpg",
  keywords: [
    "post construction cleaning sanford",
    "construction cleanup sanford",
    "builder cleaning",
    "final cleaning",
    "renovation cleaning",
  ],
});

const scopeDetailing: { icon: IconName; text: string }[] = [
  { icon: "sparkles", text: "Dust removal and fine detailing" },
  { icon: "check", text: "Interior windows, fixtures, and surfaces" },
  { icon: "check", text: "Floor care and touchpoint cleaning" },
  { icon: "home", text: "Flexible scope for residential and commercial builds" },
];

const faqs = [
  { q: "Do you handle fine dust removal?", a: "Yes. We target fine dust on surfaces, fixtures, vents, and window sills." },
  { q: "Is interior window cleaning included?", a: "Yes. Interior glass, frames, and sills are included in our detailing scope." },
  { q: "Do you clean for both residential and commercial?", a: "Yes. We support both residential and commercial post‑builds." },
  { q: "Can you work on tight timelines?", a: "Yes. We align schedules to meet handover deadlines." },
];

export default function PostConstruction() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Post-Construction Cleaning Services"
        description="Detailed post-construction cleaning in Sanford. Dust removal and final detailing for homes and businesses."
        path="/post-construction-cleaning"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Post-Construction Cleaning in Sanford, NC</h1>
              <p className="text-slate-700">Final detailing for newly built or renovated spaces—handover ready.</p>
              <div className="pt-4">
                <Link href="#booking" className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]">Get a fast quote</Link>
              </div>
              <ServiceHeroImage image="postConstruction" caption="Post-construction cleanup after builds and renovations" />
            </header>

            <div className="pt-8 bg-[#1a7a78]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Scope & Detailing</h2>
              <p className="mt-2 max-w-2xl text-slate-700">We remove fine dust, debris, and residue, leaving pristine floors, fixtures, and surfaces.</p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                {scopeDetailing.map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">How We Deliver</h2>
              <ol className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">1</div><p className="mt-3 text-sm text-slate-700">Construction walkthrough and scope planning.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">2</div><p className="mt-3 text-sm text-slate-700">Dust removal, debris disposal, detailed surface cleaning.</p></li>
                <li className="rounded-xl border border-slate-100 p-6"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5b] text-white">3</div><p className="mt-3 text-sm text-slate-700">Final checks and handover-ready presentation.</p></li>
              </ol>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Post Construction Cleaning in Sanford</h2>
              <p className="mt-3 text-slate-700">Our team specializes in <strong>post construction cleaning in Sanford</strong>. See <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">post-construction pricing</Link> or <Link href="/commercial-cleaning" className="font-medium text-[#0f5c5b] hover:underline">commercial cleaning</Link> for ongoing maintenance.</p>
            </div>
            <div className="pt-8">
              <PostConstructionCleaningContent />
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Post-Construction Cleaning", path: "/post-construction-cleaning" }])) }} />
    </main>
  );
}
