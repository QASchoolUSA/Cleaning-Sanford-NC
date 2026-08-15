import BookingWidgetLoader from "./BookingWidgetLoader";
import { getPricingConfig } from "@/lib/pricing-config";

export default async function ServiceBookingSection() {
  const config = await getPricingConfig();

  return (
    <section id="booking" className="border-t border-slate-100 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Book online</p>
          <h2 className="section-title mt-2">Get Your Instant Quote</h2>
          <p className="section-subtitle mx-auto">
            No payment required now — pay only after your cleaning is complete.
          </p>
        </div>
        <div className="mt-10">
          <BookingWidgetLoader config={config} />
        </div>
      </div>
    </section>
  );
}
