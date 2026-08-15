import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import HouseCleaningArticle from "@/components/HouseCleaningArticle";
import Testimonials from "@/components/Testimonials";
import SectionImage from "@/components/SectionImage";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Benefits />
      <HouseCleaningArticle />
      <Testimonials />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="card animate-fade-up overflow-hidden">
            <div className="grid lg:grid-cols-5">
              <div className="relative min-h-[220px] lg:col-span-2">
                <SectionImage
                  image="localHome"
                  rounded={false}
                  className="absolute inset-0 h-full min-h-[220px] rounded-none"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-8 lg:col-span-3">
                <p className="section-eyebrow">Local experts</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Professional Cleaning Services in Sanford, NC
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Cleaning Sanford provides{" "}
                  <strong className="font-semibold text-slate-800">
                    professional cleaning services in Sanford
                  </strong>{" "}
                  for homes and businesses. Explore our{" "}
                  <Link href="/house-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
                    house cleaning
                  </Link>
                  ,{" "}
                  <Link
                    href="/residential-cleaning"
                    className="font-medium text-[#0f5c5b] hover:underline"
                  >
                    residential cleaning
                  </Link>
                  ,{" "}
                  <Link
                    href="/commercial-cleaning"
                    className="font-medium text-[#0f5c5b] hover:underline"
                  >
                    commercial cleaning
                  </Link>
                  ,{" "}
                  <Link href="/airbnb-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
                    Airbnb cleaning
                  </Link>
                  ,{" "}
                  <Link
                    href="/move-out-cleaning"
                    className="font-medium text-[#0f5c5b] hover:underline"
                  >
                    move‑out cleaning
                  </Link>
                  ,{" "}
                  <Link href="/move-in-cleaning" className="font-medium text-[#0f5c5b] hover:underline">
                    move‑in cleaning
                  </Link>
                  , and{" "}
                  <Link
                    href="/post-construction-cleaning"
                    className="font-medium text-[#0f5c5b] hover:underline"
                  >
                    post‑construction cleaning
                  </Link>
                  .
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Serving Sanford,{" "}
                  <Link href="/communities" className="font-medium text-[#0f5c5b] hover:underline">
                    local communities
                  </Link>
                  ,{" "}
                  <Link href="/areas/jonesboro" className="font-medium text-[#0f5c5b] hover:underline">
                    Jonesboro
                  </Link>
                  ,{" "}
                  <Link
                    href="/areas/broadway"
                    className="font-medium text-[#0f5c5b] hover:underline"
                  >
                    Broadway
                  </Link>
                  ,{" "}
                  <Link href="/areas/cameron" className="font-medium text-[#0f5c5b] hover:underline">
                    Cameron
                  </Link>
                  , and nearby Lee County communities. View our{" "}
                  <Link href="/pricing" className="font-medium text-[#0f5c5b] hover:underline">
                    pricing
                  </Link>{" "}
                  or read cleaning tips on our{" "}
                  <Link href="/blog" className="font-medium text-[#0f5c5b] hover:underline">
                    blog
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0f5c5b] to-[#1a7a78]">
        <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.06%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="animate-fade-up flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-bold text-white">Ready for a spotless space?</h3>
              <p className="mt-2 text-sm text-white/85">
                Book now — pay only after your cleaning is complete.
              </p>
            </div>
            <a
              href="#booking"
              className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0f5c5b] shadow-lg transition hover:bg-white/95"
            >
              Get a quote
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
