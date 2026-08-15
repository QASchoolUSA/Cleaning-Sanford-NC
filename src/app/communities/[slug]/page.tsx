import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  communities,
  getCommunityBySlug,
} from "@/lib/communities";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import ServiceBookingSection from "@/components/ServiceBookingSection";
import { siteImages } from "@/lib/images";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return communities.map((community) => ({ slug: community.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) return {};

  return createPageMetadata({
    title: community.metaTitle,
    description: community.metaDescription,
    path: `/communities/${community.slug}`,
    ogImage: "/og/areas.jpg",
    keywords: community.keywords,
  });
}

export default async function CommunityPage({ params }: Props) {
  const { slug } = await params;
  const community = getCommunityBySlug(slug);
  if (!community) notFound();

  const nearby = community.nearbyCommunities
    .map((nearbySlug) => getCommunityBySlug(nearbySlug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Communities", path: "/communities" },
    { name: community.name, path: `/communities/${community.slug}` },
  ]);
  const faqs = faqJsonLd(community.faqs);

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">
              Proudly serving {community.city}, {community.state} · {community.county}
            </p>
            <h1 className="section-title mt-2">
              House cleaning in {community.name}
            </h1>
            <p className="section-subtitle max-w-3xl">{community.intro}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-200/80">
            <Image
              src={siteImages.localHome.src}
              alt={`Professional house cleaning services in ${community.name}, Sanford, NC`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900">{community.aeoQuestion}</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700" data-aeo="ai-overview-target">
            {community.aeoAnswer}
          </p>
        </section>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              How {community.name} living shapes the checklist
            </h2>
            <p className="mt-4 leading-relaxed text-slate-700">{community.context}</p>
            <p className="mt-4 leading-relaxed text-slate-700">{community.housingNotes}</p>
            <p className="mt-4 leading-relaxed text-slate-700">{community.accessNotes}</p>
            <p className="mt-4 leading-relaxed text-slate-700">
              Cleaning Sanford serves homes throughout {community.name}&apos;s streets and
              cul-de-sacs in {community.city}, {community.state}. Exact coverage depends on the
              address and schedule. Quotes reflect home size, bathrooms, condition, service
              type, frequency, and agreed add-ons—not a one-size-fits-all community price. See{" "}
              <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">
                pricing
              </Link>{" "}
              for how estimates work.
            </p>
          </div>
          <aside className="rounded-2xl bg-[#1a7a78]/10 p-6">
            <h2 className="text-xl font-bold text-slate-900">Common local priorities</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
              {community.priorities.map((priority) => (
                <li key={priority}>{priority}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            Cleaning services we perform in {community.name}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            We proudly offer house cleaning, maintenance housekeeping, and after-construction
            cleanup for {community.name} residents—plus move and turnover support when you need
            a vacancy or guest reset.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {community.servicesFeatured.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card card-hover p-5 text-sm font-semibold text-slate-800 hover:text-[#0f5c5b]"
              >
                {link.label} in {community.name} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">
            How visits work in {community.name}
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
            {community.howVisitsWork}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold text-slate-900">Frequently asked questions</h2>
          <div className="mt-6 space-y-4">
            {community.faqs.map((faq) => (
              <article key={faq.q} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-900">{faq.q}</h3>
                <p className="mt-2 leading-relaxed text-slate-700">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50 p-8">
          <h2 className="text-xl font-semibold text-slate-900">
            Nearby Sanford communities we serve
          </h2>
          <p className="mt-3 text-slate-600">
            Exploring another neighborhood? Browse our{" "}
            <Link href="/communities" className="font-medium text-[#0f5c5b] hover:underline">
              communities hub
            </Link>{" "}
            or jump to a neighbor page:
          </p>
          <p className="mt-4 text-sm text-slate-600">
            {nearby.map((item, i) => (
              <span key={item.slug}>
                <Link
                  href={`/communities/${item.slug}`}
                  className="font-medium text-[#0f5c5b] hover:underline"
                >
                  {item.name}
                </Link>
                {i < nearby.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>

      <ServiceBookingSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
      />
    </main>
  );
}
