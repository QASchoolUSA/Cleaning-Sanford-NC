import fs from "fs";
import path from "path";
import sharp from "sharp";

const outDir = path.resolve("public", "og");

const images = [
  { file: "default.jpg", title: "Cleaning Sanford", subtitle: "Professional Cleaning in Sanford, NC" },
  { file: "house-cleaning.jpg", title: "House Cleaning", subtitle: "Sanford, NC Maid Service" },
  { file: "residential-cleaning.jpg", title: "Residential Cleaning", subtitle: "Sanford, NC Home Cleaning" },
  { file: "commercial-cleaning.jpg", title: "Commercial Cleaning", subtitle: "Office & Janitorial — Sanford, NC" },
  { file: "move-out-cleaning.jpg", title: "Move-Out Cleaning", subtitle: "Deposit-Ready Vacancy Cleans" },
  { file: "move-in-cleaning.jpg", title: "Move-In Cleaning", subtitle: "Fresh Start Deep Cleaning" },
  { file: "post-construction-cleaning.jpg", title: "Post-Construction Cleaning", subtitle: "Builder & Renovation Cleanup" },
  { file: "pricing.jpg", title: "Cleaning Prices", subtitle: "Transparent Quotes — Sanford, NC" },
  { file: "areas.jpg", title: "Service Areas", subtitle: "Lee County Cleaning Coverage" },
  { file: "blog.jpg", title: "Cleaning Tips & Guides", subtitle: "Cleaning Sanford Blog" },
];

function escapeXml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildSvg(title, subtitle) {
  return `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a7a78;stop-opacity:0.25"/>
      <stop offset="100%" style="stop-color:#0f5c5b;stop-opacity:0.12"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="1050" cy="80" r="180" fill="#1a7a78" opacity="0.15"/>
  <circle cx="150" cy="550" r="220" fill="#0f5c5b" opacity="0.1"/>
  <rect x="80" y="80" width="8" height="470" rx="4" fill="#0f5c5b"/>
  <text x="120" y="280" font-family="Arial, Helvetica, sans-serif" font-size="64" font-weight="700" fill="#0f172a">${escapeXml(title)}</text>
  <text x="120" y="360" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#475569">${escapeXml(subtitle)}</text>
  <text x="120" y="500" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="600" fill="#0f5c5b">cleaningsanford.com</text>
</svg>`;
}

async function main() {
  await fs.promises.mkdir(outDir, { recursive: true });

  for (const img of images) {
    const svg = Buffer.from(buildSvg(img.title, img.subtitle));
    const outPath = path.join(outDir, img.file);
    await sharp(svg).jpeg({ quality: 85 }).toFile(outPath);
    console.log(`Generated ${img.file}`);
  }

  console.log("Done. OG images are in /public/og");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
