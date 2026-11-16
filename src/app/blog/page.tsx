import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import { siteImages, type SiteImageKey } from "@/lib/images";
import { serviceAreas } from "@/lib/areas";
import { siteAreas, siteCounty, siteName } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Cleaning Tips & Guides",
  description:
    "Expert cleaning advice for Sanford, North Carolina homeowners and businesses. Pricing guides, checklists, and local Lee County cleaning tips from Cleaning Sanford.",
  path: "/blog",
  ogImage: "/og/blog.jpg",
  keywords: [
    "cleaning tips sanford nc",
    "house cleaning guide lee county",
    "cleaning sanford north carolina blog",
  ],
});

const POST_IMAGES: Record<string, SiteImageKey> = {
  "airbnb-turnover-time-sanford-nc": "airbnbBedroom",
  "move-out-cleaning-checklist-sanford-nc": "moveOut",
  "cost-of-house-cleaning-sanford-nc": "kitchen",
};

export default function BlogPage() {
  const nearby = serviceAreas.map((area) => area.name).join(", ");

  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="section-eyebrow">Resources · {siteCounty}, NC</p>
        <h1 className="section-title mt-2">Cleaning Tips &amp; Guides</h1>
        <p className="section-subtitle">
          Practical advice for homeowners and businesses in Sanford, North Carolina and {siteCounty}.
        </p>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
          <p>
            {siteName} is the Sanford, <strong>North Carolina</strong> cleaning brand—not the Florida company with a
            similar name. These guides cover house cleaning costs, move-out deposit protection, and Airbnb turnover
            timing for Lee County homes and rentals. Clay dust at entries, pollen seasons, humidity in baths, and
            rural-road addresses around Sanford all shape how we write checklists and quotes.
          </p>
          <p>
            We serve {siteAreas.join(", ")}, with nearby routes through {nearby}. Browse{" "}
            <Link href="/communities" className="font-semibold text-[#0f5c5b] hover:underline">
              Sanford NC communities
            </Link>{" "}
            such as Carrington Place, West Lake, Wedgewood, Riverbirch, and Tramway when you want more than a
            city-level overview—or nearby cities like{" "}
            <Link href="/areas/jonesboro" className="font-semibold text-[#0f5c5b] hover:underline">
              Jonesboro
            </Link>{" "}
            and{" "}
            <Link href="/areas/broadway" className="font-semibold text-[#0f5c5b] hover:underline">
              Broadway
            </Link>
            . Start with the cost article if you are comparing quotes, the move-out checklist before a landlord
            walkthrough, or the Airbnb timing guide when guest calendars are tight.
          </p>
          <p>
            Pair these posts with our service pages for{" "}
            <Link href="/house-cleaning" className="font-semibold text-[#0f5c5b] hover:underline">
              house cleaning
            </Link>
            ,{" "}
            <Link href="/move-out-cleaning" className="font-semibold text-[#0f5c5b] hover:underline">
              move-out cleaning
            </Link>
            , and{" "}
            <Link href="/airbnb-cleaning" className="font-semibold text-[#0f5c5b] hover:underline">
              Airbnb cleaning
            </Link>
            . Ready for a number?{" "}
            <Link href="/#booking" className="font-semibold text-[#0f5c5b] hover:underline">
              Get an instant quote
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="font-semibold text-[#0f5c5b] hover:underline">
              contact Cleaning Sanford
            </Link>
            . Dollar ranges in articles are Lee County planning bands—your final price still depends on bedrooms,
            bathrooms, condition, and frequency.
          </p>
          <p>
            Searching from elsewhere in North Carolina? Confirm you are on cleaningsanford.com (Sanford, NC / Lee
            County). Florida Sanford cleaning content belongs to a different business and service area.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => {
          const imageKey = POST_IMAGES[post.slug] ?? "stagedLiving";
          const img = siteImages[imageKey];
          return (
            <article key={post.slug} className="card card-hover overflow-hidden">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] bg-slate-100">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </Link>
              <div className="p-6">
                <p className="text-xs font-medium text-slate-500">{post.readTime}</p>
                <h2 className="mt-2 text-xl font-bold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#0f5c5b]">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-[#0f5c5b] hover:underline"
                >
                  Read article →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
