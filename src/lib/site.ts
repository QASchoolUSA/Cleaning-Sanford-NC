export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cleaningsanford.com";

export const siteName = "Cleaning Sanford";

/** E.164 when set; empty until a number is provided */
export const businessPhone = process.env.NEXT_PUBLIC_BUSINESS_PHONE ?? "";
export const businessPhoneDisplay =
  process.env.NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY ?? "";

export const hasPhone = Boolean(businessPhone && businessPhoneDisplay);

export const businessEmail = "info@cleaningsanford.com";

export const siteLocality = "Sanford";
export const siteRegion = "NC";
export const sitePostal = "27330";
export const siteCounty = "Lee County";
export const siteCountry = "US";
export const siteGeo = { latitude: 35.4799, longitude: -79.1803 };

export const siteAreas = [
  "Sanford, NC",
  "Jonesboro, NC",
  "Broadway, NC",
  "Cameron, NC",
  "Lillington, NC",
] as const;

export const siteDescription =
  "Professional house, residential, move-out, Airbnb, commercial, and post-construction cleaning in Sanford, North Carolina and Lee County. Licensed & insured. Instant online quote.";

export const bookingBroomSiteSlug =
  "sanford-nc";

export const googleBusinessUrl =
  process.env.NEXT_PUBLIC_GBP_URL ?? "";

export const facebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "";

export const logoPath = "/cleaning-sanford-logo.svg";

export function absoluteUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, siteUrl).toString();
}

export function telHref(): string | undefined {
  return hasPhone ? `tel:${businessPhone}` : undefined;
}
