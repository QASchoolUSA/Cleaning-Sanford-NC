import Icon, { type IconName } from "@/components/Icon";
import Image from "next/image";
import { siteImages } from "@/lib/images";

const benefits: { icon: IconName; title: string; desc: string }[] = [
  {
    icon: "shield",
    title: "Licensed & Insured",
    desc: "Your Sanford property is protected and our Lee County team is vetted.",
  },
  {
    icon: "clock",
    title: "Flexible Scheduling",
    desc: "Book around your calendar with weekend availability across Lee County.",
  },
  {
    icon: "leaf",
    title: "Eco‑Friendly Options",
    desc: "Green products available on request for a healthier North Carolina home.",
  },
  {
    icon: "star",
    title: "Satisfaction Guaranteed",
    desc: "We fix anything you're not happy with—no questions.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-[#1a7a78]/10 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,92,91,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50 ring-1 ring-slate-200/70">
            <Image
              src={siteImages.cleanerWindow.src}
              alt={siteImages.cleanerWindow.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>

          <div>
            <p className="section-eyebrow">Why choose us</p>
            <h2 className="section-title mt-2">A local crew that shows up ready</h2>
            <p className="section-subtitle">
              Detail-focused cleaners, flexible scheduling, and results you can see in every room—from downtown Sanford to Jonesboro.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.title} className="card card-hover p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f5c5b]/10 text-[#0f5c5b]">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
