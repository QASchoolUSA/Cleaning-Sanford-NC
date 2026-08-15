export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  updatedAt: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "airbnb-turnover-time-sanford-nc",
    title:
      "How Long Does Airbnb Turnover Cleaning Take in Sanford, NC?",
    description:
      "Same-day Airbnb turnover timing for 2–3 bedroom rentals in Sanford and Lee County — minute-by-minute SLA, booking-gap math, and what extends the clock.",
    updatedAt: "2026-08-14",
    readTime: "7 min read",
  },
  {
    slug: "move-out-cleaning-checklist-sanford-nc",
    title:
      "Move-Out Cleaning Checklist for Sanford, NC: Protect Your Security Deposit",
    description:
      "Deposit-safe move-out cleaning checklist for Sanford and Lee County rentals — the five failure zones landlords flag most, NC-specific add-ons, and photo tips.",
    updatedAt: "2026-08-14",
    readTime: "8 min read",
  },
  {
    slug: "cost-of-house-cleaning-sanford-nc",
    title: "How Much Does House Cleaning Cost in Sanford, NC?",
    description:
      "A transparent breakdown of house cleaning prices in Sanford, North Carolina — standard cleans, deep cleans, move-in/out, and what affects your quote.",
    updatedAt: "2026-08-14",
    readTime: "5 min read",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
