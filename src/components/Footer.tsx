import Link from "next/link";
import Image from "next/image";
import { serviceAreas } from "@/lib/areas";
import { communities } from "@/lib/communities";
import {
  businessEmail,
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
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
];

export default function Footer() {
  const phoneHref = telHref();

  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center">
              <Image src={logoPath} alt={siteName} width={180} height={40} />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
              Exceptional residential, commercial, and post-construction cleaning across Sanford, NC and Lee County.
            </p>
            <p className="mt-4 text-xs font-medium text-slate-500">Licensed & Insured · Satisfaction Guaranteed</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a href={`mailto:${businessEmail}`} className="font-medium text-[#0f5c5b] hover:underline">
                  {businessEmail}
                </a>
              </li>
              <li>
                {hasPhone && phoneHref ? (
                  <a href={phoneHref} className="font-medium text-[#0f5c5b] hover:underline">
                    {businessPhoneDisplay}
                  </a>
                ) : (
                  <Link href="/#booking" className="font-medium text-[#0f5c5b] hover:underline">
                    Get a quote
                  </Link>
                )}
              </li>
              <li>Hours: Mon–Sat 8:00–18:00</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-600 transition hover:text-[#0f5c5b]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-slate-600 transition hover:text-[#0f5c5b]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 transition hover:text-[#0f5c5b]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 transition hover:text-[#0f5c5b]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">Service Areas</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/areas/jonesboro" className="text-slate-600 transition hover:text-[#0f5c5b]">
                  Sanford &amp; Jonesboro
                </Link>
              </li>
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/areas/${area.slug}`} className="text-slate-600 transition hover:text-[#0f5c5b]">
                    {area.name}, NC
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/communities" className="text-slate-600 transition hover:text-[#0f5c5b]">
                  Sanford Communities
                </Link>
              </li>
              {communities.map((community) => (
                <li key={community.slug}>
                  <Link
                    href={`/communities/${community.slug}`}
                    className="text-slate-600 transition hover:text-[#0f5c5b]"
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} {siteName}. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy" className="text-xs font-semibold text-slate-500 hover:text-[#0f5c5b]">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs font-semibold text-slate-500 hover:text-[#0f5c5b]">
              Terms
            </Link>
            <Link href="/contact" className="text-xs font-semibold text-slate-500 hover:text-[#0f5c5b]">
              Contact
            </Link>
            <Link href="/blog" className="text-xs font-semibold text-slate-500 hover:text-[#0f5c5b]">
              Blog
            </Link>
            <Link href="/#booking" className="text-xs font-semibold text-[#0f5c5b] hover:underline">
              Book a cleaning →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
