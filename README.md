# Cleaning Sanford

Professional residential and commercial cleaning website for **Sanford, North Carolina** (`cleaningsanford.com`).

## Getting started

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Cloudflare

```bash
pnpm build          # OpenNext → .open-next/
pnpm exec wrangler deploy
# or
pnpm deploy
```

## Brand & contact

- Brand: **Cleaning Sanford** (not Sanford Cleaning / FL)
- Email: `info@cleaningsanford.com`
- Phone: set `NEXT_PUBLIC_BUSINESS_PHONE` + `NEXT_PUBLIC_BUSINESS_PHONE_DISPLAY` when available

## Booking

Env keys in `.env.example` connect quote/book requests to Booking Broom site slug `sanford-nc`.

## Assets

```bash
pnpm assets   # regenerate icons + OG images
```
