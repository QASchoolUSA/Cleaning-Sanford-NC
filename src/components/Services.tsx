import Link from "next/link";
import Image from "next/image";
import { siteImages, type SiteImageKey } from "@/lib/images";

const services: {
  key: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
  image: SiteImageKey;
}[] = [
  {
    key: "residential",
    title: "Residential Cleaning",
    desc: "Recurring home maintenance for a consistently clean Sanford home.",
    href: "/residential-cleaning",
    cta: "Residential cleaning in Sanford",
    image: "residential",
  },
  {
    key: "house",
    title: "House Cleaning",
    desc: "Detailed maid service for one-time deep or standard cleanings.",
    href: "/house-cleaning",
    cta: "House cleaning & maid service",
    image: "kitchen",
  },
  {
    key: "move-out",
    title: "Move Out Cleaning",
    desc: "Vacancy cleaning to help you protect your security deposit.",
    href: "/move-out-cleaning",
    cta: "Move-out cleaning services",
    image: "moveOut",
  },
  {
    key: "airbnb",
    title: "Airbnb Cleaning",
    desc: "Same-day turnover cleans with linen reset and guest-ready QA.",
    href: "/airbnb-cleaning",
    cta: "Airbnb & vacation rental turnovers",
    image: "airbnbBedroom",
  },
  {
    key: "move-in",
    title: "Move In Cleaning",
    desc: "New home deep cleaning for a fresh, sanitized start.",
    href: "/move-in-cleaning",
    cta: "Move-in deep cleaning",
    image: "moveIn",
  },
  {
    key: "commercial",
    title: "Commercial Cleaning",
    desc: "Offices, retail, and shared spaces—consistent and professional.",
    href: "/commercial-cleaning",
    cta: "Commercial & office cleaning",
    image: "commercial",
  },
  {
    key: "post-construction",
    title: "Post‑Construction",
    desc: "Dust removal, detailing, and handover‑ready finishing cleans.",
    href: "/post-construction-cleaning",
    cta: "Post-construction cleanup",
    image: "postConstruction",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-eyebrow">What we offer</p>
            <h2 className="section-title mt-2">Cleaning services for Sanford homes &amp; businesses</h2>
            <p className="section-subtitle">
              One clear menu of residential, commercial, and specialty cleans—so you book the right scope the first time.
            </p>
          </div>
          <Link href="#booking" className="btn-primary hidden shrink-0 sm:inline-flex">
            Get a quote
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const img = siteImages[s.image];
            return (
              <Link
                key={s.key}
                href={s.href}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-900 transition group-hover:text-[#0f5c5b]">
                    {s.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0f5c5b]">
                    {s.cta}
                    <span aria-hidden className="transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
