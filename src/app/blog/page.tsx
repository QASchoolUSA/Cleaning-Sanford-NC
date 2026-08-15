import { createPageMetadata } from "@/lib/metadata";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import { siteImages, type SiteImageKey } from "@/lib/images";

export const metadata = createPageMetadata({
  title: "Cleaning Tips & Guides",
  description:
    "Expert cleaning advice for Sanford homeowners and businesses. Pricing guides, checklists, and local cleaning tips from Cleaning Sanford.",
  path: "/blog",
  ogImage: "/og/blog.jpg",
  keywords: ["cleaning tips sanford", "house cleaning guide", "cleaning sanford blog"],
});

const POST_IMAGES: Record<string, SiteImageKey> = {
  "airbnb-turnover-time-sanford-nc": "airbnbBedroom",
  "move-out-cleaning-checklist-sanford-nc": "moveOut",
  "cost-of-house-cleaning-sanford-nc": "kitchen",
};

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="section-eyebrow">Resources</p>
        <h1 className="section-title mt-2">Cleaning Tips &amp; Guides</h1>
        <p className="section-subtitle">
          Practical advice for homeowners and businesses in Sanford and Lee County.
        </p>
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
