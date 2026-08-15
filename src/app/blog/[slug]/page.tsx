import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost } from "@/lib/blog";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";
import { absoluteUrl, siteName, siteUrl } from "@/lib/site";
import { siteImages, type SiteImageKey } from "@/lib/images";
import MoveOutChecklistArticle from "@/components/MoveOutChecklistArticle";
import AirbnbTurnoverSlaArticle from "@/components/AirbnbTurnoverSlaArticle";
import {
  levelAdjustments,
  residentialPrices,
  type LevelKey,
  type PricingConfig,
} from "@/lib/pricing";
import { getPricingConfig } from "@/lib/pricing-config";

type Props = { params: Promise<{ slug: string }> };

const KEYWORDS: Record<string, string[]> = {
  "airbnb-turnover-time-sanford-nc": [
    "airbnb turnover time Sanford",
    "how long does airbnb cleaning take",
    "vacation rental cleaning Jonesboro",
    "same day turnover cleaning Lee County",
  ],
  "move-out-cleaning-checklist-sanford-nc": [
    "move out cleaning checklist Sanford",
    "security deposit cleaning Lee County",
    "move out cleaning Sanford NC",
    "apartment turnover cleaning checklist",
  ],
  "cost-of-house-cleaning-sanford-nc": [
    "house cleaning cost Sanford",
    "house cleaning prices Lee County",
    "maid service cost Sanford NC",
  ],
};

const POST_IMAGES: Record<string, SiteImageKey> = {
  "airbnb-turnover-time-sanford-nc": "airbnbBedroom",
  "move-out-cleaning-checklist-sanford-nc": "moveOut",
  "cost-of-house-cleaning-sanford-nc": "kitchen",
};

export async function generateStaticParams() {
  const { blogPosts } = await import("@/lib/blog");
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: "/og/blog.jpg",
    keywords: KEYWORDS[slug],
  });
}

function CostOfCleaningArticle({ config }: { config: PricingConfig }) {
  const prices = residentialPrices(config);
  const uplift = (key: LevelKey) =>
    levelAdjustments(config).find((level) => level.key === key)?.uplift ?? 0;

  return (
    <>
      <p>
        If you&apos;re searching for <strong>house cleaning prices in Sanford</strong>,
        you&apos;re not alone. Most homeowners want a clear answer before booking — without
        hidden fees or surprise add-ons.
      </p>

      <h2>Typical House Cleaning Prices in Sanford</h2>
      <p>Based on our local pricing, here&apos;s what most Sanford homeowners pay:</p>
      <ul>
        <li>
          <strong>Studio / 1-bedroom standard clean:</strong> ${prices.studio}–$
          {prices["1bed"]}
        </li>
        <li>
          <strong>2-bedroom standard clean:</strong> ${prices["2bed"]}
        </li>
        <li>
          <strong>3-bedroom standard clean:</strong> ${prices["3bed"]}
        </li>
        <li>
          <strong>4+ bedroom standard clean:</strong> ${prices["4plus"]}+
        </li>
        <li>
          <strong>Deep clean premium:</strong> ~{uplift("deep")}% above standard
        </li>
        <li>
          <strong>Move-in / move-out:</strong> ~{uplift("move")}% above standard
        </li>
      </ul>

      <h2>What Affects Your Quote?</h2>
      <p>Several factors influence your final price:</p>
      <ul>
        <li>
          <strong>Home size</strong> — bedrooms and square footage
        </li>
        <li>
          <strong>Cleaning level</strong> — standard, deep, or move-in/out
        </li>
        <li>
          <strong>Add-ons</strong> — inside fridge, oven, windows, cabinets, baseboards
        </li>
        <li>
          <strong>Frequency</strong> — recurring clients often get better per-visit value
        </li>
      </ul>

      <h2>Get an Instant Quote</h2>
      <p>
        Use our <Link href="/#booking">online booking widget</Link> for a real-time estimate, or
        see our full <Link href="/pricing">pricing page</Link> for residential, commercial, and
        post-construction rates.
      </p>
      <p>
        Ready to book? Explore our{" "}
        <Link href="/house-cleaning">house cleaning services in Sanford</Link> or request a
        custom quote online.
      </p>
    </>
  );
}

function articleJsonLd(slug: string, title: string, description: string, updatedAt: string) {
  const url = absoluteUrl(`/blog/${slug}`);
  const isMoveOut = slug === "move-out-cleaning-checklist-sanford-nc";
  const isAirbnb = slug === "airbnb-turnover-time-sanford-nc";
  const isTech = isMoveOut || isAirbnb;

  return {
    "@context": "https://schema.org",
    "@type": isTech ? ["TechArticle", "BlogPosting"] : "BlogPosting",
    "@id": `${url}#article`,
    headline: title,
    name: title,
    description,
    datePublished: updatedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/cleaning-sanford-logo.svg"),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    image: absoluteUrl("/og/blog.jpg"),
    inLanguage: "en-US",
    about: isAirbnb
      ? [
          { "@type": "Service", name: "Airbnb Cleaning" },
          { "@type": "Service", name: "Turnover Cleaning" },
          { "@type": "City", name: "Sanford" },
          { "@type": "City", name: "Jonesboro" },
        ]
      : isMoveOut
        ? [
            { "@type": "Service", name: "Move Out Cleaning" },
            { "@type": "Thing", name: "Security Deposit" },
            { "@type": "City", name: "Sanford" },
            { "@type": "AdministrativeArea", name: "Lee County" },
          ]
        : [
            { "@type": "Service", name: "House Cleaning" },
            { "@type": "City", name: "Sanford" },
          ],
    mentions: isAirbnb
      ? [
          { "@type": "Audience", name: "Airbnb Hosts" },
          { "@type": "Audience", name: "Property Managers" },
          { "@type": "Service", name: "Move Out Cleaning" },
          { "@type": "AdministrativeArea", name: "Lee County" },
        ]
      : isMoveOut
        ? [
            { "@type": "Service", name: "Airbnb Cleaning" },
            { "@type": "Service", name: "Turnover Cleaning" },
            { "@type": "Service", name: "Apartment Cleaning" },
            { "@type": "Audience", name: "Property Managers" },
            { "@type": "Audience", name: "Tenants" },
            { "@type": "City", name: "Jonesboro" },
          ]
        : [
            { "@type": "Service", name: "Deep Cleaning" },
            { "@type": "Service", name: "Move Out Cleaning" },
            { "@type": "AdministrativeArea", name: "Lee County" },
          ],
    ...(isAirbnb
      ? {
          proficiencyLevel: "Expert",
          dependencies:
            "Same-day booking gaps, linen logistics, and North Carolina humidity conditions for short-term rentals",
        }
      : isMoveOut
        ? {
            proficiencyLevel: "Expert",
            dependencies:
              "Local lease walkthrough standards and hard-water / humidity conditions",
          }
        : {}),
  };
}

const moveOutFaqs = [
  {
    q: "What should a move-out cleaning checklist include to protect a Sanford security deposit?",
    a: "Prioritize oven interiors, shower glass hard-water film, refrigerator seals, baseboards, and AC return dust. Pair room-by-room tasks with timestamped photos, humidity odor control, and a final landlord-walkthrough pass before returning keys.",
  },
  {
    q: "How long does move-out cleaning take in Sanford?",
    a: "Most studio and 1-bedroom units take 2–3 hours. A 2–3 bedroom home typically takes 3–5 hours. Larger or heavily soiled homes can take 5–8 hours.",
  },
  {
    q: "Who pays for move-out cleaning in North Carolina — tenant or landlord?",
    a: "Leases vary. Many Lee County leases require tenants to return the unit broom-clean or professionally cleaned. Confirm the lease clause and property manager walkthrough checklist before booking.",
  },
  {
    q: "Is move-out cleaning the same as Airbnb turnover cleaning?",
    a: "No. Move-out cleaning targets an empty unit and deposit risk. Airbnb turnover cleaning is a same-day SLA with linen reset, amenity restock, and listing photo parity.",
  },
];

const airbnbFaqs = [
  {
    q: "How long does a same-day Airbnb turnover clean take for a 2–3 bedroom rental near Jonesboro / Sanford?",
    a: "About 90–120 minutes with a two-person crew when checkout access starts on time. The SLA covers access photos, linen strip, kitchen and bath reset, bed staging, floors, and a 12-point QA walk before host notification.",
  },
  {
    q: "What makes Airbnb turnover cleaning take longer?",
    a: "Late checkouts, pet hair, leftover food, linen shortages, and humidity odor passes commonly add 15–40 minutes or more.",
  },
  {
    q: "How much booking-gap buffer should hosts plan?",
    a: "For a 2–3 bedroom near Sanford or Jonesboro, plan 90–120 minutes of cleaning plus at least 60 minutes of buffer for travel, lockbox issues, and laundry dry time.",
  },
  {
    q: "Is Airbnb cleaning the same as move-out cleaning?",
    a: "No. Airbnb turnover is a same-day guest-ready SLA. Move-out cleaning targets empty-unit deposit walkthrough standards.",
  },
];

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const config = await getPricingConfig();
  const breadcrumbs = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ]);

  const article = articleJsonLd(post.slug, post.title, post.description, post.updatedAt);
  const faqs =
    slug === "move-out-cleaning-checklist-sanford-nc"
      ? faqJsonLd(moveOutFaqs)
      : slug === "airbnb-turnover-time-sanford-nc"
        ? faqJsonLd(airbnbFaqs)
        : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <article>
        <p className="section-eyebrow">Blog</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          {post.readTime} · Updated {post.updatedAt}
        </p>

        {POST_IMAGES[slug] ? (
          <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={siteImages[POST_IMAGES[slug]].src}
              alt={siteImages[POST_IMAGES[slug]].alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : null}

        <div className="prose prose-slate mt-10 max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:leading-relaxed prose-p:text-slate-600 prose-a:text-[#0f5c5b]">
          {slug === "airbnb-turnover-time-sanford-nc" ? (
            <AirbnbTurnoverSlaArticle />
          ) : slug === "move-out-cleaning-checklist-sanford-nc" ? (
            <MoveOutChecklistArticle config={config} />
          ) : slug === "cost-of-house-cleaning-sanford-nc" ? (
            <CostOfCleaningArticle config={config} />
          ) : null}
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      {faqs ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }}
        />
      ) : null}
    </main>
  );
}
