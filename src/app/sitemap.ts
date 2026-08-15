import type { MetadataRoute } from "next";
import { serviceAreas } from "@/lib/areas";
import { blogPosts } from "@/lib/blog";
import { communities } from "@/lib/communities";
import { siteUrl } from "@/lib/site";

const SERVICE_ROUTES = [
  "/residential-cleaning",
  "/commercial-cleaning",
  "/post-construction-cleaning",
  "/house-cleaning",
  "/move-out-cleaning",
  "/move-in-cleaning",
  "/airbnb-cleaning",
];

const LAST_CONTENT_UPDATE = new Date("2026-07-10");
const COMMUNITIES_UPDATE = new Date("2026-08-09");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/privacy`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/pricing`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: LAST_CONTENT_UPDATE, changeFrequency: "weekly", priority: 0.7 },
    {
      url: `${siteUrl}/communities`,
      lastModified: COMMUNITIES_UPDATE,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    ...SERVICE_ROUTES.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: route === "/house-cleaning" ? 0.9 : 0.8,
    })),
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/areas/${area.slug}`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...communities.map((community) => ({
      url: `${siteUrl}/communities/${community.slug}`,
      lastModified: COMMUNITIES_UPDATE,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return staticPages;
}
