# Cleaning Sanford (NC)

Next.js 16 / React 19 marketing site for **Cleaning Sanford** — Sanford, North Carolina (Lee County). Domain: `cleaningsanford.com`.

Not the same product as **Sanford Cleaning** (Florida).

## Services

| Service | Command | Port |
|---|---|---|
| Next.js web app | `pnpm dev` | 3000 |

Scripts: `dev`, `build`, `start`, `lint`, `test:booking`, `icons`, `og`, `assets`.

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `BOOKING_BROOM_URL` | Booking Broom base URL |
| `BOOKING_BROOM_API_KEY` | `bb_sanford-nc_dev_key` (or rotated prod key) |
| `BOOKING_BROOM_SITE_SLUG` | `sanford-nc` |
| `NEXT_PUBLIC_SITE_URL` | Production: `https://cleaningsanford.com` |
| `NEXT_PUBLIC_BUSINESS_PHONE` | Optional E.164 (empty until provided) |
| `NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY` | Optional display string |

Phone is wired through `src/lib/site.ts` (`hasPhone` / `telHref`). Until set, UI shows quote/email CTAs instead of a tel link.

## Booking Broom

Slug **`sanford-nc`** (Florida owns `sanford`). Quotes/bookings via `POST /api/book` → Booking Broom `/api/bookings`. Pricing via `/api/pricing`.

See Booking Broom `docs/sanford-nc-site.md`. After BB deploy: `syncSeedSites` + `syncSeedPricing`.

## Notes

- Brand in SERPs: titles / `applicationName` / schema use **Cleaning Sanford**; domain is alternate only.
- `pnpm lint` may report pre-existing style warnings; do not treat as setup failure unless introduced by your change.
