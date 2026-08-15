import Accordion from "./Accordion";
import Icon from "./Icon";
import Link from "next/link";

export default function AirbnbCleaningContent() {
  return (
    <div className="prose prose-lg mx-auto text-slate-600 prose-headings:text-[#0f5c5b] prose-a:text-[#0f5c5b] prose-strong:text-slate-900 prose-ul:list-none prose-ul:pl-0">
      <p>
        Short-term rentals near Sanford, Jonesboro, and the US-1 corridor live or die on
        guest reviews and same-day readiness.{" "}
        <strong>Cleaning Sanford</strong> provides professional{" "}
        <strong>Airbnb cleaning and turnover cleaning</strong> built around booking gaps—not a
        slow residential deep clean squeezed between check-out and check-in.
      </p>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">
        What an Airbnb Turnover Includes
      </h3>
      <p>
        Every turnover follows a timed workflow so hosts can confirm the listing before the next
        guest arrives:
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Access &amp; condition photos:</strong> Document the unit at arrival for host
            records and damage disputes.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Strip, laundry start &amp; trash-out:</strong> Remove used linens, bag laundry,
            empty all bins.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Kitchen &amp; bath reset:</strong> Sanitize high-touch surfaces, restock basics
            per host checklist, clear hard-water film on glass when needed.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Beds &amp; staging:</strong> Fresh linens, pillows, and listing-photo parity for
            living areas.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="check" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Floors + QA walk:</strong> Vacuum/mop, 12-point checklist, host notification
            when the unit is guest-ready.
          </span>
        </li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">
        Built for Lee County Short-Term Rentals
      </h3>
      <p>
        Vacation homes around Sanford and Jonesboro face North Carolina humidity, hard water, and
        tight same-day turnovers. Our crews plan for pet hair, late checkouts, and amenity restock
        so review scores stay protected. Need an empty-unit deposit clean instead? See{" "}
        <Link href="/move-out-cleaning">move-out cleaning</Link>.
      </p>
      <ul>
        <li className="flex items-start gap-3">
          <Icon name="clock" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Same-day SLA focus:</strong> Typical 2–3 bedroom turnovers run about 90–120
            minutes with a two-person crew when access is on time.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Icon name="star" className="h-5 w-5 flex-shrink-0 text-[#0f5c5b]" />
          <span>
            <strong>Host communication:</strong> We flag issues early—broken items, leftover food,
            or odor—so you can message guests before the next arrival.
          </span>
        </li>
      </ul>

      <h3 className="mt-12 text-2xl font-bold tracking-tight sm:text-3xl">Airbnb Cleaning FAQs</h3>
      <Accordion title="Do you bring linens or use the host’s supply?">
        <p>
          Most hosts provide linen inventory on-site. We can start laundry during the clean and
          remake beds with your stock. Bring-your-own linen programs can be arranged for multi-unit
          portfolios.
        </p>
      </Accordion>
      <Accordion title="Can you restock toiletries and coffee?">
        <p>
          Yes. Share your amenity checklist and storage locations. Restocking from on-site supply
          is included; shopping runs can be quoted as an add-on.
        </p>
      </Accordion>
      <Accordion title="What if checkout runs late?">
        <p>
          We adjust the clock when access is delayed and notify the host if the next check-in
          window is at risk. Overlap buffers and priority slots are available for high-occupancy
          weeks.
        </p>
      </Accordion>
    </div>
  );
}
