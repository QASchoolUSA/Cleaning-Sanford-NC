"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  businessEmail,
  businessPhoneDisplay,
  hasPhone,
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

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const phoneHref = telHref();

  useEffect(() => {
    function handleOutside(event: MouseEvent | TouchEvent) {
      if (!open) return;
      const target = event.target as Node;
      if (!buttonRef.current?.contains(target) && !menuRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
        ref={buttonRef}
        className="rounded-xl p-2.5 text-slate-900 transition hover:bg-slate-100 md:hidden"
        onClick={() => setOpen(!open)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <>
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </>
          ) : (
            <>
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="pb-4 md:hidden" ref={menuRef} id="mobile-menu">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            <nav className="flex flex-col gap-1">
              <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Services</p>
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-[#1a7a78]/10 hover:text-[#0f5c5b]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-2 h-px bg-slate-100" />
              <Link href="/pricing" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Pricing</Link>
              <Link href="/areas/jonesboro" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Service Areas</Link>
              <Link href="/blog" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/about" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>About</Link>
              <Link href="/#benefits" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Why Us</Link>
              <Link href="/#testimonials" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Reviews</Link>
              <Link href="/contact" className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>Contact</Link>
              {hasPhone && phoneHref ? (
                <a href={phoneHref} className="rounded-xl px-3 py-2 text-sm font-medium text-[#0f5c5b]">
                  {businessPhoneDisplay}
                </a>
              ) : (
                <a href={`mailto:${businessEmail}`} className="rounded-xl px-3 py-2 text-sm font-medium text-[#0f5c5b]">
                  {businessEmail}
                </a>
              )}
              <Link href="/#booking" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>Get a Quote</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
