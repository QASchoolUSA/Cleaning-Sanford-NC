import {
  absoluteUrl,
  businessEmail,
  businessPhone,
  hasPhone,
  logoPath,
  siteLocality,
  siteName,
  sitePostal,
  siteRegion,
} from "@/lib/site";

export default function ServiceJsonLd({
  name,
  description,
  path,
  type = "Service",
}: {
  name: string;
  description: string;
  path: string;
  type?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteName,
      image: absoluteUrl(logoPath),
      ...(hasPhone && businessPhone ? { telephone: businessPhone } : {}),
      email: businessEmail,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteLocality,
        addressRegion: siteRegion,
        postalCode: sitePostal,
        addressCountry: "US",
      },
    },
    areaServed: [
      { "@type": "City", name: "Sanford" },
      { "@type": "City", name: "Jonesboro" },
      { "@type": "City", name: "Broadway" },
      { "@type": "City", name: "Cameron" },
      { "@type": "City", name: "Lillington" },
      { "@type": "AdministrativeArea", name: "Lee County" },
    ],
    url: absoluteUrl(path),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
