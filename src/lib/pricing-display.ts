import {
  DEFAULT_PRICING_CONFIG,
  bedroomLabel,
  type PricingConfig,
} from "@/lib/pricing";

export type PriceRow = { label: string; price: number };

/** Derived from the live quote engine so the page can never drift from the calculator. */
export function residentialRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  return config.bedroomBase.map((row) => ({
    label: bedroomLabel(row.bedrooms, config),
    price: row.price,
  }));
}

export function commercialRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  return config.sqftBands.map((band) => ({
    label: band.label,
    price: config.commercialByBand.find((b) => b.key === band.key)?.value ?? 0,
  }));
}

export function postRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG
): PriceRow[] {
  return config.sqftBands.map((band) => ({
    label: band.label,
    price: config.postByBand.find((b) => b.key === band.key)?.value ?? 0,
  }));
}

/** Each bathroom past the first. */
export function bathRate(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.bathRate;
}
