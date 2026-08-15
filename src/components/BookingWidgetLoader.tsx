"use client";

import dynamic from "next/dynamic";
import { DEFAULT_PRICING_CONFIG, type PricingConfig } from "@/lib/pricing";

const BookingWidget = dynamic(() => import("./BookingWidget"), {
  loading: () => (
    <div className="card mx-auto h-[480px] w-full max-w-lg animate-pulse rounded-2xl bg-slate-100" />
  ),
  ssr: false,
});

export default function BookingWidgetLoader({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) {
  return <BookingWidget config={config} />;
}
