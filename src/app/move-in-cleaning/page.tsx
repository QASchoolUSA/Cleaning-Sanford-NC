import Icon, { type IconName } from "@/components/Icon";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import Accordion from "@/components/Accordion";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Move In Cleaning Sanford, NC | New Home Deep Cleaning",
  description:
    "Professional move-in cleaning in Sanford. New home deep cleaning to ensure a fresh, sanitized start. Ideal for homeowners, tenants, and realtors.",
  path: "/move-in-cleaning",
  ogImage: "/og/move-in-cleaning.jpg",
  keywords: [
    "move in cleaning sanford",
    "new home cleaning sanford",
    "apartment move in cleaning",
    "deep cleaning sanford",
    "vacancy cleaning",
    "rental cleaning sanford",
  ],
});

const checklist: { icon: IconName; title: string; desc: string }[] = [
  { icon: "sparkles", title: "Sanitize Kitchens & Bathrooms", desc: "Disinfect counters, sinks, fixtures, and appliance fronts." },
  { icon: "check", title: "Inside Cabinets & Drawers", desc: "Wipe inside all kitchen and bathroom storage." },
  { icon: "check", title: "Appliances Inside & Out", desc: "Deep clean fridge, oven, and microwave interiors." },
  { icon: "check", title: "Dust & Detail Entire Home", desc: "Fans, vents, baseboards, window sills, and trim." },
  { icon: "home", title: "Floors Thoroughly Cleaned", desc: "Vacuum and mop hard floors; vacuum carpets." },
  { icon: "star", title: "Fresh, Move‑In Ready Finish", desc: "Leave your new home spotless and hygienic." },
];

const faqs = [
  { q: "What does a move‑in cleaning include?", a: "A deep clean of kitchens, bathrooms, living areas, bedrooms, inside cabinets and drawers, appliance interiors, dusting and detailing, and thorough floor care." },
  { q: "Do you clean inside the fridge and oven?", a: "Yes. Appliance interiors are part of our standard move‑in scope so your kitchen is fresh and ready to use." },
  { q: "How far in advance should I book?", a: "Book as early as possible. We can often accommodate next‑day service for Sanford and nearby areas." },
  { q: "Do you bring supplies and equipment?", a: "Yes. We provide professional supplies and equipment for a complete, move‑in ready finish." },
  { q: "Should utilities be on before the move-in clean?", a: "Yes. Working water and electricity are needed for bathrooms, appliances, vacuuming, and floor care. Confirm access before the appointment." },
  { q: "Can you clean a newly built home before move-in?", a: "Yes, but construction must be complete and major debris removed. Fine construction dust may require a post-construction scope rather than a standard move-in clean." },
];

export default function MoveInCleaning() {
  return (
    <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
      <ServiceJsonLd
        name="Move-In Cleaning Services"
        description="Professional move-in cleaning in Sanford. Deep cleaning for new homes, apartments, and rentals."
        path="/move-in-cleaning"
      />
      <section>
        <article className="rounded-2xl bg-white p-8">
          <div className="space-y-12 divide-y divide-slate-100">
            <header className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">Move-In Cleaning in Sanford, NC</h1>
              <p className="text-slate-700">Start fresh in your new home with a thorough, hygienic clean by local professionals — distinct from our <Link href="/move-out-cleaning" className="font-medium text-[#0f5c5b] hover:underline">move-out cleaning</Link> for deposit-ready vacancy cleans.</p>
              <div className="pt-4">
                <Link href="#booking" className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]">Book move‑in clean</Link>
              </div>
              <ServiceHeroImage image="moveIn" caption="Fresh, sanitized move-in cleaning for your new home" />
            </header>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">Why Move‑In Cleaning Matters</h2>
              <p className="mt-3 text-slate-700">Our team delivers detailed <strong>move in cleaning in Sanford</strong> so every surface feels new. We deep clean kitchens and bathrooms, dust and detail, and handle appliance interiors for a truly fresh start.</p>
            </div>

            <div className="pt-8 bg-[#1a7a78]/10 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-slate-900">Move‑In Deep Cleaning Checklist</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[28rem] border-collapse text-left text-sm text-slate-700">
                  <caption className="sr-only">Move-in cleaning checklist tasks and details</caption>
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th scope="col" className="py-3 pr-4 font-semibold text-slate-900">Task</th>
                      <th scope="col" className="py-3 font-semibold text-slate-900">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {checklist.map((item) => (
                      <tr key={item.title} className="border-b border-slate-100 align-top">
                        <th scope="row" className="py-3 pr-4 font-semibold text-slate-900">
                          <span className="inline-flex items-center gap-2">
                            <Icon name={item.icon} className="h-4 w-4 text-[#0f5c5b]" />
                            {item.title}
                          </span>
                        </th>
                        <td className="py-3">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">When Should You Schedule a Move-In Clean?</h2>
              <p className="mt-3 leading-relaxed text-slate-700">
                The best window is after the previous occupant, seller, or contractor has removed belongings and before your movers arrive. Empty cabinets, closets, and floors give the team access to surfaces that become difficult to reach once boxes and furniture are inside.
              </p>
              <p className="mt-3 leading-relaxed text-slate-700">
                Keep water and electricity active, confirm the key or gate handoff, and tell us whether the property is an apartment, established home, or new construction. Homes around Sanford, Jonesboro, Lillington, and Tramway may have gated access or newly settled construction dust that changes the plan.
              </p>
            </div>

            <div className="pt-8">
              <h2 className="text-xl font-semibold text-slate-900">What to Check Before You Unpack</h2>
              <ul className="mt-4 grid gap-3 text-slate-700 sm:grid-cols-2">
                <li className="rounded-xl border border-slate-200 p-4">Review cabinet and drawer interiors while they are empty.</li>
                <li className="rounded-xl border border-slate-200 p-4">Confirm appliance interiors are included in the requested scope.</li>
                <li className="rounded-xl border border-slate-200 p-4">Identify delicate stone, wood, or specialty floor finishes.</li>
                <li className="rounded-xl border border-slate-200 p-4">Photograph pre-existing damage separately from cleaning concerns.</li>
                <li className="rounded-xl border border-slate-200 p-4">Check that contractors have finished sanding, cutting, and touch-ups.</li>
                <li className="rounded-xl border border-slate-200 p-4">Plan carpet extraction, hauling, or pest work with the right specialist.</li>
              </ul>
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
            <h3 className="text-xl font-semibold text-white">Move into a spotless home</h3>
            <Link href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] shadow-sm hover:bg-[#1a7a78]/10">Get a quote</Link>
          </div>
        </div>
      </section>

      <ServiceBookingSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Move In Cleaning", path: "/move-in-cleaning" }])) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to prepare for move-in cleaning in Sanford",
            description: "Follow this move-in deep cleaning checklist so your new Sanford home is ready before unpacking.",
            step: checklist.map((item, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: item.title,
              text: item.desc,
            })),
          }),
        }}
      />
    </main>
  );
}
