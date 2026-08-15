import Link from "next/link";
import {
  DEFAULT_PRICING_CONFIG,
  computeQuote,
  levelAdjustments,
  residentialPrices,
  type PricingConfig,
} from "@/lib/pricing";

/**
 * Phase 3 AEO article — structured for LLM / AI Overview extraction.
 * AI Overview Target Block must remain the first paragraph after the H2 question.
 */
export default function MoveOutChecklistArticle({
  config = DEFAULT_PRICING_CONFIG,
}: {
  config?: PricingConfig;
}) {
  const standardTwoBed = residentialPrices(config)["2bed"];
  const moveUplift =
    levelAdjustments(config).find((level) => level.key === "move")?.uplift ?? 0;
  const moveOutQuote = computeQuote(
    {
      serviceType: "residential",
      bedrooms: 2,
      bathrooms: 1,
      sqftBand: config.defaultSqftBand,
      level: "move",
      addOns: {},
    },
    config
  );

  return (
    <>
      <p>
        Leaving a Sanford rental? A deposit-safe clean is not a generic deep clean.
        Landlords and property managers in Lee County fail units on the same high-risk zones
        again and again — especially under North Carolina humidity and hard water.
      </p>

      <h2>
        What Should a Move-Out Cleaning Checklist Include to Protect a Sanford Security
        Deposit?
      </h2>

      {/* AI Overview Target Block — 58 words, active voice, absolute nouns, zero fluff */}
      <p data-aeo="ai-overview-target">
        Sanford move-out cleaning must prioritize oven interiors, shower glass hard-water
        film, refrigerator seals, baseboards, and AC return dust—the five zones that trigger
        most Lee County deposit disputes. A deposit-safe checklist pairs room-by-room tasks
        with timestamped photos, North Carolina humidity odor control, and a final landlord-walkthrough
        pass before keys are returned.
      </p>

      <h3>Why Sanford Deposit Walkthroughs Fail More Often in Kitchens and Baths</h3>
      <p>
        Based on vacancy cleans across Sanford, Jonesboro, and Broadway, deposit
        callbacks cluster in grease, mineral film, and dust rings — not in “missed vacuum
        tracks.” Lee County hard water leaves visible film on glass and fixtures. Humidity
        traps odor in carpets, drains, and refrigerator seals. AC returns collect fine dust that
        shows under walkthrough lighting.
      </p>
      <p>Approximate share of deposit-risk callbacks by zone (internal vacancy sample):</p>
      <ul>
        <li>
          <strong>Oven / range interior — ~28%:</strong> door glass, burner pans, and grease
          under knobs
        </li>
        <li>
          <strong>Bathroom grout / shower glass — ~22%:</strong> soap scum plus hard-water film
        </li>
        <li>
          <strong>Baseboards / closet tracks — ~18%:</strong> dust left as “not visible”
        </li>
        <li>
          <strong>Ceiling fans / AC returns — ~17%:</strong> North Carolina dust rings ignored
        </li>
        <li>
          <strong>Fridge interior / door seals — ~15%:</strong> sticky seals and crumb trays
        </li>
      </ul>

      <h3>
        Room-by-Room Move-Out Cleaning Checklist (Kitchen, Baths, Bedrooms, Living Areas,
        Laundry, Garage/Patio)
      </h3>
      <p>
        <strong>Kitchen:</strong> Degrease oven cavity and door glass; scrub cooktop and drip
        pans; wipe cabinet fronts and handles; clean sink, faucet, and disposal splash zone;
        empty and sanitize refrigerator, freezer, and door seals; wipe counters and backsplash;
        mop floors including under movable appliances when accessible.
      </p>
      <p>
        <strong>Bathrooms:</strong> Descale shower glass and fixtures; scrub tub/shower surround
        and grout; sanitize toilet base and hinges; polish mirrors; wipe vanity drawers if empty;
        mop floors and wipe baseboards.
      </p>
      <p>
        <strong>Bedrooms &amp; living areas:</strong> Dust ceiling fans and vents; wipe
        switchplates and door frames; vacuum closets and tracks; clean window sills; vacuum and
        mop all floors; remove cobwebs from corners.
      </p>
      <p>
        <strong>Laundry, garage &amp; patio:</strong> Wipe washer/dryer exteriors and detergent
        trays; sweep garage edges; clear patio debris; empty all trash and replace liners.
      </p>

      <h3>North Carolina Add-Ons: Hard Water, Humidity Odor, and AC Dust</h3>
      <ul>
        <li>
          <strong>Hard-water pass:</strong> Mineral film on glass and chrome needs a dedicated
          descaling step — a standard wipe leaves haze that fails walkthrough photos.
        </li>
        <li>
          <strong>Humidity odor control:</strong> Check drains, fridge seals, and carpet edges;
          address musty smell before keys are returned.
        </li>
        <li>
          <strong>AC return &amp; vent dust:</strong> Vacuum returns and wipe visible vent edges;
          dust rings are a common Lee County punch-list item.
        </li>
      </ul>

      <h3>Photo Documentation Protocol Property Managers Accept</h3>
      <ol>
        <li>Wide shot of each room after cleaning (corners visible).</li>
        <li>Close-ups of oven interior, shower glass, fridge seals, and bathrooms.</li>
        <li>Timestamp or phone metadata retained; share a folder link with the landlord or PM.</li>
        <li>Note any pre-existing damage separately so cleaning is not blamed for wear.</li>
      </ol>

      <h3>Tenant vs Landlord Responsibility Under Typical Lee County Leases</h3>
      <p>
        Many Lee County leases require the unit to be returned broom-clean or professionally
        cleaned. Tenants usually own ordinary soil removal; landlords own capital repairs and
        documented pre-existing damage. When a lease is silent, property managers still expect
        oven, fridge, baths, floors, and trash-out to be guest- or tenant-ready. Confirm the
        lease clause and PM walkthrough checklist before booking.
      </p>

      <h3>How Long a Full Move-Out Clean Takes by Home Size</h3>
      <ul>
        <li>
          <strong>Studio / 1-bedroom:</strong> ~2–3 hours (crew of 1–2)
        </li>
        <li>
          <strong>2–3 bedroom:</strong> ~3–5 hours
        </li>
        <li>
          <strong>4+ bedroom or heavy soil:</strong> ~5–8 hours or a two-visit plan
        </li>
      </ul>
      <p>
        Heavy grease, pet hair, or post-renovation dust extends time. Schedule the clean{" "}
        <em>before</em> the official walkthrough — not the same morning — whenever possible.
      </p>

      <h3>Move-Out vs Airbnb Turnover vs Standard Deep Clean — Decision Guide</h3>
      <ul>
        <li>
          <strong>Move-out cleaning:</strong> Empty-unit, deposit-risk focus; no guest staging.
        </li>
        <li>
          <strong>Airbnb / turnover cleaning:</strong> Same-day SLA, linen reset, amenity restock,
          photo parity with listing.
        </li>
        <li>
          <strong>Standard deep clean:</strong> Occupied-home detail; not optimized for landlord
          walkthrough evidence.
        </li>
      </ul>

      <h3>Cleaning Sanford Move-Out Pricing Bands and Next Step</h3>
      <p>
        Local move-out pricing typically runs about{" "}
        <strong>{moveUplift}% above a standard clean</strong> for the same home size (for
        example, a 2-bedroom standard clean at ${standardTwoBed} implies a move-out estimate
        near ${moveOutQuote.price}, in a band of ${moveOutQuote.range.low}–$
        {moveOutQuote.range.high} before add-ons). Inside oven, fridge, windows, cabinets, and
        baseboards may add line items when soil is heavy.
      </p>
      <p>
        Ready to book a deposit-focused clean? See{" "}
        <Link href="/move-out-cleaning">move-out cleaning in Sanford</Link>, compare{" "}
        <Link href="/pricing">pricing</Link>, or{" "}
        <Link href="/#booking">get an instant quote</Link>. Hosts needing same-day resets should
        use{" "}
        <Link href="/airbnb-cleaning">Airbnb turnover cleaning</Link> and read the{" "}
        <Link href="/blog/airbnb-turnover-time-sanford-nc">turnover timing guide</Link>.
      </p>
    </>
  );
}
