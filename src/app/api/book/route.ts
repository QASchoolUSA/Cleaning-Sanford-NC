import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const bookingBroomUrl = process.env.BOOKING_BROOM_URL;
  const apiKey = process.env.BOOKING_BROOM_API_KEY;

  if (!bookingBroomUrl || !apiKey) {
    return NextResponse.json(
      { error: "Booking service is not configured" },
      { status: 500 }
    );
  }

  let form: Record<string, unknown>;
  try {
    form = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!form.customer_name || typeof form.customer_name !== "string") {
    return NextResponse.json(
      { error: "customer_name is required" },
      { status: 400 }
    );
  }

  let res: Response;
  try {
    res = await fetch(`${bookingBroomUrl}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        site_slug: "sanford-nc",
        api_key: apiKey,
        customer_name: form.customer_name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        service_type: form.service_type,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
        notes: form.notes,
        intent:
          form.intent === "quote" || form.intent === "book" ? form.intent : undefined,
        property: form.property,
        quote: form.quote,
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to reach booking service" },
      { status: 502 }
    );
  }

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return NextResponse.json(
      { error: data.error ?? "Booking failed" },
      { status: res.status }
    );
  }

  return NextResponse.json(data, { status: 201 });
}
