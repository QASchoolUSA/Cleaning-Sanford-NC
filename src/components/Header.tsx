import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import {
  businessPhoneDisplay,
  hasPhone,
  logoPath,
  siteName,
  telHref,
} from "@/lib/site";

const SERVICE_LINKS = [
  { href: "/residential-cleaning", label: "Residential Cleaning" },
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/move-out-cleaning", label: "Move Out Cleaning" },
  { href: "/move-in-cleaning", label: "Move In Cleaning" },
  { href: "/airbnb-cleaning", label: "Airbnb Cleaning" },
  { href: "/commercial-cleaning", label: "Commercial Cleaning" },
  { href: "/post-construction-cleaning", label: "Post-Construction" },
];

export default function Header() {
  const phoneHref = telHref();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src={logoPath} alt={siteName} width={180} height={40} priority />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">
                Services
                <svg className="h-4 w-4 text-slate-400 transition group-hover:text-[#0f5c5b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-60 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-slate-100 bg-white p-2 shadow-xl shadow-slate-200/50">
                  {SERVICE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-slate-700 transition hover:bg-[#1a7a78]/10 hover:text-[#0f5c5b]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Pricing</Link>
            <Link href="/areas/jonesboro" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Areas</Link>
            <Link href="/blog" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Blog</Link>
            <Link href="/about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">About</Link>
            <Link href="/#benefits" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Why Us</Link>
            <Link href="/#testimonials" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Reviews</Link>
            <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#0f5c5b]">Contact</Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {hasPhone && phoneHref ? (
              <a href={phoneHref} className="text-sm font-medium text-slate-600 transition hover:text-[#0f5c5b]">
                {businessPhoneDisplay}
              </a>
            ) : (
              <Link href="/#booking" className="text-sm font-medium text-slate-600 transition hover:text-[#0f5c5b]">
                Get a quote
              </Link>
            )}
            <Link href="/#booking" className="btn-primary px-5 py-2.5 text-sm">Get a Quote</Link>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
