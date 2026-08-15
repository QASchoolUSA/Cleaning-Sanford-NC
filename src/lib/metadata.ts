import type { Metadata } from "next";
import { absoluteUrl, siteName } from "./site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = "/og/default.jpg",
  keywords,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
