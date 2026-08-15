import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ReviewJsonLd from "@/components/ReviewJsonLd";
import { absoluteUrl, siteDescription, siteName } from "@/lib/site";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cleaningsanford.com"),
  applicationName: siteName,
  title: {
    default: "Cleaning Services in Sanford, NC | Cleaning Sanford",
    template: "%s | Cleaning Sanford",
  },
  description: siteDescription,
  keywords: [
    "cleaning sanford",
    "cleaning sanford nc",
    "house cleaning sanford nc",
    "residential cleaning sanford nc",
    "commercial cleaning sanford nc",
    "move out cleaning sanford nc",
    "maid service sanford nc",
    "cleaning services lee county nc",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName,
    title: "Cleaning Sanford | Professional Cleaning in Sanford, NC",
    description:
      "Expert residential and commercial cleaning in Sanford, North Carolina and Lee County. Book your trusted local cleaners today.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Cleaning Sanford — Professional cleaning services in Sanford, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Sanford | Professional Cleaning Services",
    description: "Expert residential and commercial cleaning in Sanford, NC.",
    images: ["/og/default.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} font-sans antialiased`}>
        <JsonLd />
        <ReviewJsonLd />
        <Header />
        {children}
        <Footer />
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');
            `}</Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
