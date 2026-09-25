import {
  DEFAULT_PRICING_CONFIG,
  SERVICE_LABELS,
  type PricingConfig,
  type ServiceTypeId,
} from "@/lib/pricing";

export type PriceRow = { label: string; price: number; detail?: string };

/** Starting floors per service (minBase) for the pricing page. */
export function serviceRows(
  config: PricingConfig = DEFAULT_PRICING_CONFIG,
): PriceRow[] {
  return config.serviceRates.map((rate) => ({
    label: SERVICE_LABELS[rate.key as ServiceTypeId] ?? rate.key,
    price: rate.minBase,
    detail: `$${rate.perSqft.toFixed(2)}/sq ft`,
  }));
}

export function bedroomRate(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.bedroomRate;
}

export function bathroomRate(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.bathroomRate;
}

/** @deprecated Prefer bathroomRate — kept for call sites that said bathRate. */
export function bathRate(config: PricingConfig = DEFAULT_PRICING_CONFIG) {
  return config.bathroomRate;
}
