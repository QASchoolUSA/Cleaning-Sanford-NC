import Link from "next/link";
import Image from "next/image";
import BookingWidgetLoader from "./BookingWidgetLoader";
import { siteImages } from "@/lib/images";
import { getPricingConfig } from "@/lib/pricing-config";
import { siteName } from "@/lib/site";

const TRUST_ITEMS = [
  "Licensed & Insured",
  "Satisfaction Guaranteed",
  "Local Sanford, NC Team",
];

export default async function Hero() {
  const config = await getPricingConfig();

  return (
    <section className="gradient-hero relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#1a7a78]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#0f5c5b]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="max-w-xl lg:pt-2">
            <p className="section-eyebrow animate-fade-up">Sanford, NC · Lee County</p>
            <p className="animate-fade-up mt-4 font-display text-4xl font-bold tracking-tight text-[#0f5c5b] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              {siteName}
            </p>
            <h1 className="animate-fade-up-delay mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-snug">
              Professional house &amp; commercial cleaning
            </h1>
            <p className="animate-fade-up-delay-2 mt-5 text-lg leading-relaxed text-slate-600">
              Trusted residential, commercial, and post-construction cleaning for homes and
              businesses across Sanford and Lee County.
            </p>

            <ul className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0f5c5b]/10 text-[#0f5c5b]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
              <Link href="#booking" className="btn-primary">
                Get a fast quote
              </Link>
              <Link href="#services" className="btn-secondary">
                Explore services
              </Link>
            </div>

            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60 ring-1 ring-slate-200/80">
              <Image
                src={siteImages.heroLiving.src}
                alt={siteImages.heroLiving.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>

          <div id="booking" className="lg:sticky lg:top-24">
            <BookingWidgetLoader config={config} />
          </div>
        </div>
      </div>
    </section>
  );
}
