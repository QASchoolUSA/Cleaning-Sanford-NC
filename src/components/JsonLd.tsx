import {
  absoluteUrl,
  businessEmail,
  businessPhone,
  facebookUrl,
  googleBusinessUrl,
  hasPhone,
  logoPath,
  siteCounty,
  siteGeo,
  siteLocality,
  siteName,
  sitePostal,
  siteRegion,
  siteUrl,
} from "@/lib/site";
import { aggregateRating } from "@/lib/reviews";

/**
 * Organization + WebSite + ProfessionalService graph for local SEO / AEO.
 */
export default function JsonLd() {
  const sameAs = [
    googleBusinessUrl || undefined,
    facebookUrl || undefined,
  ].filter(Boolean) as string[];

  const aboutEntities = [
    {
      "@type": "Thing",
      name: "Cleaning services in Sanford, NC",
      description:
        "Professional residential, commercial, vacancy, and specialty cleaning serving Sanford and Lee County, North Carolina.",
    },
    {
      "@type": "City",
      name: "Sanford",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Lee County",
        containedInPlace: { "@type": "State", name: "North Carolina" },
      },
    },
    { "@type": "Service", name: "House Cleaning" },
    { "@type": "Service", name: "Apartment Cleaning" },
    { "@type": "Service", name: "Move Out Cleaning" },
    { "@type": "Service", name: "Airbnb Cleaning" },
    { "@type": "Service", name: "Commercial Cleaning" },
    { "@type": "Service", name: "Post Construction Cleaning" },
  ];

  const mentionEntities = [
    { "@type": "Service", name: "Turnover Cleaning" },
    { "@type": "Service", name: "Move In Cleaning" },
    { "@type": "Service", name: "Office Cleaning" },
    { "@type": "Service", name: "Restaurant Cleaning" },
    { "@type": "Service", name: "Cafe Cleaning" },
    { "@type": "City", name: "Jonesboro" },
    { "@type": "City", name: "Broadway" },
    { "@type": "City", name: "Cameron" },
    { "@type": "City", name: "Lillington" },
    { "@type": "AdministrativeArea", name: "Lee County" },
    { "@type": "Audience", name: "Homeowners" },
    { "@type": "Audience", name: "Apartment Owners" },
    { "@type": "Audience", name: "Property Managers" },
    { "@type": "Audience", name: "Business Owners" },
  ];

  const areaServed = [
    { "@type": "City", name: "Sanford" },
    { "@type": "City", name: "Jonesboro" },
    { "@type": "City", name: "Broadway" },
    { "@type": "City", name: "Cameron" },
    { "@type": "City", name: "Lillington" },
    { "@type": "AdministrativeArea", name: "Lee County" },
  ];

  const postalAddress = {
    "@type": "PostalAddress",
    addressLocality: siteLocality,
    addressRegion: siteRegion,
    postalCode: sitePostal,
    addressCountry: "US",
  };

  const organizationId = `${siteUrl}/#organization`;
  const businessId = `${siteUrl}/#business`;
  const websiteId = `${siteUrl}/#website`;
  const logoUrl = absoluteUrl(logoPath);

  const organization = {
    "@type": ["Organization", "LocalBusiness", "HouseCleaner"],
    "@id": organizationId,
    name: siteName,
    legalName: siteName,
    alternateName: ["cleaningsanford.com"],
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
    image: logoUrl,
    ...(hasPhone && businessPhone ? { telephone: businessPhone } : {}),
    email: businessEmail,
    description:
      "Professional residential, commercial, Airbnb turnover, move-out, and post-construction cleaning services in Sanford, NC and Lee County.",
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteGeo.latitude,
      longitude: siteGeo.longitude,
    },
    areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      ...(hasPhone && businessPhone ? { telephone: businessPhone } : {}),
      email: businessEmail,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: ["English", "Spanish"],
    },
    about: aboutEntities,
    mentions: mentionEntities,
    knowsAbout: [
      "House cleaning in Sanford NC",
      "Move-out cleaning checklists for security deposits",
      "Airbnb turnover cleaning SLAs",
      "Commercial office and restaurant cleaning",
      "Post-construction dust removal protocols",
      "Lee County pollen and humidity cleaning",
      siteCounty,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteName} Services`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-residential` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-move-out` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-airbnb` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-commercial` },
        },
        {
          "@type": "Offer",
          itemOffered: { "@id": `${siteUrl}/#service-post-construction` },
        },
      ],
    },
  };

  const businessAlias = {
    "@type": ["LocalBusiness", "HouseCleaner"],
    "@id": businessId,
    name: siteName,
    url: siteUrl,
    parentOrganization: { "@id": organizationId },
    ...(hasPhone && businessPhone ? { telephone: businessPhone } : {}),
    address: postalAddress,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: aggregateRating.bestRating,
      worstRating: aggregateRating.worstRating,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
    alternateName: ["cleaningsanford.com"],
    url: siteUrl,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
    about: aboutEntities,
    mentions: mentionEntities,
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: absoluteUrl("/#booking"),
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Cleaning service booking",
      },
    },
  };

  const professionalServices = [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-residential`,
      name: "Residential & House Cleaning in Sanford, NC",
      serviceType: "House Cleaning",
      description:
        "Standard, deep, and recurring house and apartment cleaning for homeowners and renters in Sanford and Lee County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/house-cleaning"),
      about: [
        { "@type": "Service", name: "House Cleaning" },
        { "@type": "Service", name: "Apartment Cleaning" },
        { "@type": "City", name: "Sanford" },
      ],
      mentions: [
        { "@type": "Service", name: "Maid Service" },
        { "@type": "Service", name: "Deep Cleaning" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-move-out`,
      name: "Move-Out & Move-In Cleaning in Sanford, NC",
      serviceType: "Move Out Cleaning",
      description:
        "Deposit-focused vacancy cleans and move-in resets for tenants, landlords, and property managers in Sanford, NC.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/move-out-cleaning"),
      about: [
        { "@type": "Service", name: "Move Out Cleaning" },
        { "@type": "Service", name: "Move In Cleaning" },
      ],
      mentions: [
        { "@type": "Audience", name: "Property Managers" },
        { "@type": "Audience", name: "Tenants" },
        { "@type": "Thing", name: "Security Deposit" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-airbnb`,
      name: "Airbnb & Vacation Rental Turnover Cleaning",
      serviceType: "Airbnb Cleaning",
      description:
        "Same-day Airbnb and short-term rental turnover cleaning with linen reset, staging, and host QA for Sanford, Jonesboro, and Lee County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/airbnb-cleaning"),
      about: [
        { "@type": "Service", name: "Airbnb Cleaning" },
        { "@type": "Service", name: "Turnover Cleaning" },
        { "@type": "City", name: "Sanford" },
        { "@type": "City", name: "Jonesboro" },
      ],
      mentions: [
        { "@type": "Audience", name: "Airbnb Hosts" },
        { "@type": "Audience", name: "Property Managers" },
        { "@type": "Thing", name: "Same-Day Turnover SLA" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-commercial`,
      name: "Commercial, Office & Restaurant Cleaning",
      serviceType: "Commercial Cleaning",
      description:
        "Scheduled office, retail, café, and restaurant cleaning for business owners in Sanford and surrounding Lee County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/commercial-cleaning"),
      about: [
        { "@type": "Service", name: "Commercial Cleaning" },
        { "@type": "Service", name: "Office Cleaning" },
        { "@type": "Service", name: "Restaurant Cleaning" },
      ],
      mentions: [
        { "@type": "Audience", name: "Business Owners" },
        { "@type": "Service", name: "Cafe Cleaning" },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service-post-construction`,
      name: "Post-Construction Cleaning in Sanford, NC",
      serviceType: "Post Construction Cleaning",
      description:
        "Rough, final, and touch-up post-construction cleaning for renovations and new builds across Sanford and Lee County.",
      provider: { "@id": organizationId },
      areaServed,
      url: absoluteUrl("/post-construction-cleaning"),
      about: [
        { "@type": "Service", name: "Post Construction Cleaning" },
        { "@type": "City", name: "Sanford" },
      ],
      mentions: [
        { "@type": "Thing", name: "Drywall Dust Removal" },
        { "@type": "Thing", name: "Final Clean" },
      ],
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, businessAlias, website, ...professionalServices],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
