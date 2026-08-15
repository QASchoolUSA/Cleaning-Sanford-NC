#!/usr/bin/env node
/**
 * Integration test: submit a demo booking through the local /api/book proxy
 * (or directly to Booking Broom when BASE_URL is unset and BOOKING_BROOM_* are set).
 *
 * Usage:
 *   node scripts/test-booking.mjs
 *   BASE_URL=http://localhost:3000 node scripts/test-booking.mjs
 */

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const stamp = new Date().toISOString().replace(/[:.]/g, "-");

const payload = {
  customer_name: "Demo Test User",
  email: "demo.test+booking@example.com",
  phone: "(919) 555-0199",
  address: "123 Demo St, Sanford, NC 27330",
  service_type: "Residential — Standard (2 Bedroom)",
  preferred_date: "2026-07-20",
  preferred_time: "10:00",
  notes: [
    "AUTOMATION TEST BOOKING — please ignore",
    `Size: 2 Bedroom`,
    `Level: Standard`,
    `Add-ons: None`,
    `Run id: ${stamp}`,
  ].join("\n"),
};

async function main() {
  const url = `${BASE_URL.replace(/\/$/, "")}/api/book`;
  console.log(`POST ${url}`);
  console.log("Payload:", JSON.stringify(payload, null, 2));

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  console.log(`Status: ${res.status}`);
  console.log("Response:", JSON.stringify(data, null, 2));

  if (!res.ok) {
    console.error("FAIL: booking request was not successful");
    process.exit(1);
  }

  if (!data.id && !data.message) {
    console.error("FAIL: unexpected success payload (missing id/message)");
    process.exit(1);
  }

  console.log("PASS: demo booking created successfully");
}

main().catch((err) => {
  console.error("FAIL:", err);
  process.exit(1);
});
