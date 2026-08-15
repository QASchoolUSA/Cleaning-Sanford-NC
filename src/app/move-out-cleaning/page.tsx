import Icon, { type IconName } from "@/components/Icon";
import MoveOutCleaningContent from "@/components/MoveOutCleaningContent";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "Move Out Cleaning Sanford, NC | Deposit-Ready Vacancy Cleans",
    description:
        "Professional move-out cleaning in Sanford. Ensure you get your deposit back with our deep cleaning checklist. Ideal for tenants, landlords, and realtors.",
    path: "/move-out-cleaning",
    ogImage: "/og/move-out-cleaning.jpg",
    keywords: [
        "move out cleaning sanford",
        "vacancy cleaning",
        "end of tenancy cleaning",
        "apartment move out cleaning",
        "rental cleaning sanford",
    ],
});

const checklist: { icon: IconName; title: string; desc: string }[] = [
    { icon: "sparkles", title: "Inside Cabinets & Drawers", desc: "We wipe out all cupboards, drawers, and shelves." },
    { icon: "check", title: "Appliances Inside & Out", desc: "Fridge, oven, and microwave deep cleaned." },
    { icon: "check", title: "Baseboards & Door Frames", desc: "Dusting and scrubbing scuff marks." },
    { icon: "check", title: "Bathrooms Top to Bottom", desc: "Descaling faucets, sanitizing toilets and tubs." },
    { icon: "check", title: "Window Sills & Blinds", desc: "Removing built-up dust and grime." },
    { icon: "home", title: "Floors Deep Cleaned", desc: "Vacuuming and mopping to leave a streak-free shine." },
];

const faqs = [
    { q: "Do you help with getting the deposit back?", a: "Yes. Our checklist targets landlord standards, including appliance interiors, cabinets, baseboards, and bathrooms." },
    { q: "Is inside fridge and oven included?", a: "Yes. Appliance interiors are included in move‑out cleans." },
    { q: "Do you provide supplies?", a: "Yes. We bring all supplies and equipment." },
    { q: "Do you offer move‑in cleaning?", a: "Yes. See our dedicated Move In Cleaning page for details." },
];

export default function MoveOutCleaning() {
    return (
        <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
            <ServiceJsonLd
                name="Move-Out Cleaning Services"
                description="Sanford move-out cleaning experts. Get your deposit back with our vacancy cleaning checklist."
                path="/move-out-cleaning"
            />
            <section>
                <article className="rounded-2xl bg-white p-8">
                    <div className="space-y-12 divide-y divide-slate-100">
                        <header className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Move-Out Cleaning in Sanford, NC</h1>
                            <p className="text-slate-700">Moving is stressful enough. Let our professionals handle the <strong>move-out cleaning</strong> so you can focus on your new home. Perfect for tenants, landlords, and property managers.</p>
                            <div className="pt-4">
                                <Link href="#booking" className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]">Book move-out clean</Link>
                            </div>
                            <ServiceHeroImage image="moveOut" caption="Deposit-ready move-out cleaning for Sanford rentals" />
                        </header>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">Get Your Security Deposit Back</h2>
                            <p className="mt-3 text-slate-700">Our <strong>move-out cleaning service</strong> is designed to meet strict landlord and property management standards. For a fresh start in your new place, see <Link href="/move-in-cleaning" className="font-medium text-[#0f5c5b] hover:underline">move-in cleaning</Link>.</p>
                        </div>

                        <div className="pt-8 bg-[#1a7a78]/10 rounded-2xl p-8">
                            <h2 className="text-xl font-semibold text-slate-900">Our Move-Out Checklist</h2>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full min-w-[28rem] border-collapse text-left text-sm text-slate-700">
                                    <caption className="sr-only">Move-out cleaning checklist tasks and details</caption>
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
                            <h2 className="text-xl font-semibold text-slate-900">Deposit-Focused Vacancy Standards</h2>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                Landlords and property managers in Sanford, Jonesboro, and Lillington often inspect cabinets, appliance interiors, bathrooms, baseboards, and floors before releasing a deposit. Our vacancy checklist targets those high-scrutiny areas so the home reads as ready for the next showing or tenant.
                            </p>
                            <p className="mt-3 leading-relaxed text-slate-700">
                                Schedule after belongings are removed and utilities remain on. Share gate codes, parking notes, and any landlord punch-list items when you book so the crew can work efficiently on the first visit.
                            </p>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">For Landlords & Realtors</h2>
                            <p className="mt-3 text-slate-700">Need to get a property ready for the market? Our <strong>vacancy cleaning</strong> services ensure your rental or listing looks its absolute best for potential tenants or buyers.</p>
                        </div>

                        <div className="pt-8">
                            <MoveOutCleaningContent />
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
                            <h3 className="text-xl font-semibold text-white">Moving soon?</h3>
                            <p className="text-white/90 mt-1">Check cleaning off your to-do list today.</p>
                        </div>
                        <Link href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] shadow-sm hover:bg-[#1a7a78]/10">Schedule now</Link>
                    </div>
                </div>
            </section>

            <ServiceBookingSection />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Move Out Cleaning", path: "/move-out-cleaning" }])) }} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HowTo",
                        name: "Move-out cleaning checklist for Sanford rentals",
                        description: "Deposit-focused vacancy cleaning steps covering cabinets, appliances, bathrooms, and floors.",
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
