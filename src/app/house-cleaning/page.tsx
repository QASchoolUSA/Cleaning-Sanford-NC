import HouseCleaningContent from "@/components/HouseCleaningContent";
import Icon, { type IconName } from "@/components/Icon";
import Accordion from "@/components/Accordion";
import Link from "next/link";
import ServiceJsonLd from "@/components/ServiceJsonLd";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import ServiceHeroImage from "@/components/ServiceHeroImage";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
    title: "House Cleaning Services Sanford, NC | Best Maid Service",
    description:
        "Trusted house cleaning in Sanford, NC. Professional maid service for recurring maintenance, deep cleaning, and housekeeping. Vetted local cleaners.",
    path: "/house-cleaning",
    ogImage: "/og/house-cleaning.jpg",
    keywords: [
        "house cleaning sanford",
        "maid service sanford",
        "home cleaning services",
        "housekeeping sanford",
        "cleaning lady sanford",
        "weekly house cleaning",
    ],
});

const whatsIncluded: { icon: IconName; text: string }[] = [
    { icon: "sparkles", text: "Thorough dusting & surface polishing" },
    { icon: "check", text: "Vacuuming & mopping all floors" },
    { icon: "check", text: "Kitchen deep clean: counters, appliance exteriors" },
    { icon: "check", text: "Bathroom sanitization: toilets, showers, tubs" },
    { icon: "trash", text: "Trash removal & linen changing (on request)" },
    { icon: "star", text: "Pet-friendly cleaning methods" },
];

const whyChoose: { icon: IconName; text: string }[] = [
    { icon: "star", text: "Consistent, 5-star rated local cleaners" },
    { icon: "clock", text: "Punctual weekly, bi-weekly, or monthly visits" },
    { icon: "shield", text: "Fully insured and background-checked staff" },
    { icon: "check", text: "100% Satisfaction Guarantee" },
];

const faqs = [
    { q: "What's included in house cleaning?", a: "Dusting, surfaces, floors, kitchen and bathroom cleaning, plus add‑ons like interior windows and baseboards." },
    { q: "Do you offer deep cleaning?", a: "Yes. We perform detailed deep cleans including appliance interiors and intensive bathroom/kitchen scrubbing." },
    { q: "How often can I schedule?", a: "Weekly, bi‑weekly, monthly, or one‑time service with flexible booking." },
    { q: "Are supplies provided?", a: "Yes. We bring professional supplies and equipment." },
];

export default function HouseCleaning() {
    return (
        <main className="relative mx-auto max-w-7xl px-4 pt-12 pb-0 sm:px-6 lg:px-8">
            <ServiceJsonLd
                name="House Cleaning Services"
                description="Trusted house cleaning and maid service in Sanford. Weekly, bi-weekly, and deep cleaning."
                path="/house-cleaning"
            />
            <section>
                <article className="rounded-2xl bg-white p-8">
                    <div className="space-y-12 divide-y divide-slate-100">
                        <header className="space-y-3">
                            <h1 className="text-3xl font-bold tracking-tight text-slate-900">House Cleaning Services in Sanford, NC</h1>
                            <p className="text-slate-700">Experience a spotless home without lifting a finger. Our <strong>Sanford house cleaning</strong> team delivers reliable, top-quality maid services tailored to your lifestyle.</p>
                            <div className="pt-4">
                                <Link href="#booking" className="inline-flex rounded-full bg-[#0f5c5b] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1a7a78]">Get your free quote</Link>
                            </div>
                            <ServiceHeroImage image="kitchen" caption="Detailed house cleaning for kitchens, baths, and living spaces" />
                        </header>

                        <div className="pt-8 bg-[#1a7a78]/10 rounded-2xl p-8">
                            <h2 className="text-xl font-semibold text-slate-900">Comprehensive House Cleaning Checklist</h2>
                            <p className="mt-2 max-w-2xl text-slate-700">We don&#39;t just clear the clutter; we scrub, sanitize, and shine. From ceiling fans to baseboards, our <strong>maid service</strong> covers it all.</p>
                            <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                                {whatsIncluded.map((item) => (
                                    <div key={item.text} className="flex items-start gap-3">
                                        <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">Your Local Cleaning Partners</h2>
                            <p className="mt-3 text-slate-700">Finding reliable <strong>house cleaning in Sanford, NC</strong> shouldn&#39;t be a hassle. We are a locally owned business dedicated to serving our neighbors in Sanford, Jonesboro, and surrounding Lee County areas. Whether you need a one-time <strong>deep house cleaning</strong> or regular maintenance, we are here to help.</p>

                            <h3 className="mt-6 text-lg font-semibold text-slate-900">Flexible Scheduling</h3>
                            <p className="mt-2 text-slate-700">Life gets busy. That&#39;s why we offer weekly, bi-weekly, and monthly schedules. For recurring home maintenance, see our <Link href="/residential-cleaning" className="font-medium text-[#0f5c5b] hover:underline">residential cleaning</Link> options.</p>
                        </div>

                        <div className="pt-8 bg-slate-50 rounded-2xl p-8 border border-slate-100">
                            <h2 className="text-xl font-semibold text-slate-900">Why Neighbors Trust Us</h2>
                            <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-slate-700 sm:grid-cols-2">
                                {whyChoose.map((item) => (
                                    <div key={item.text} className="flex items-start gap-3">
                                        <Icon name={item.icon} className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-xl font-semibold text-slate-900">Detailed Maid Service</h2>
                            <p className="mt-3 text-slate-700">Our <strong>maid service in Sanford</strong> is designed for discerning homeowners. We use high-quality products and proven techniques to ensure your kitchen sparkles and your bathrooms are hygienic.</p>
                            <p className="mt-3 text-slate-700">See <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">cleaning prices</Link> or read our <Link href="/blog/cost-of-house-cleaning-sanford-nc" className="font-medium text-[#0f5c5b] hover:underline">cost guide</Link> before you book.</p>
                        </div>
                        <div className="pt-8">
                            <HouseCleaningContent />
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
                            <h3 className="text-xl font-semibold text-white">Reclaim your weekends</h3>
                            <p className="text-white/90 mt-1">Let us handle the chores. Book your house cleaning now.</p>
                        </div>
                        <Link href="#booking" className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f5c5b] shadow-sm hover:bg-[#1a7a78]/10">Get started</Link>
                    </div>
                </div>
            </section>

            <ServiceBookingSection />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "House Cleaning", path: "/house-cleaning" }])) }} />
        </main>
    );
}
