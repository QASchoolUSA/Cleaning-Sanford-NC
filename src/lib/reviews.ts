export type Review = {
  author: string;
  rating: number;
  body: string;
};

export const reviews: Review[] = [
  {
    author: "Maria G.",
    rating: 5,
    body: "They did an incredible deep clean before our move-in near downtown Sanford. Floors and windows looked brand new!",
  },
  {
    author: "Trent P.",
    rating: 5,
    body: "Reliable weekly office cleaning in Lee County—our team notices the difference. Highly recommend Cleaning Sanford.",
  },
  {
    author: "Sofia R.",
    rating: 5,
    body: "Post-construction dust everywhere after our remodel—gone in a day. Fast and thorough service.",
  },
];

const averageRating =
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

export const aggregateRating = {
  ratingValue: Number.isFinite(averageRating)
    ? String(Math.round(averageRating * 10) / 10)
    : "0",
  reviewCount: String(reviews.length),
  bestRating: 5,
  worstRating: 1,
};
