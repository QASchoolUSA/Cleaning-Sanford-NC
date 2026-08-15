export type CommunityServiceLink = {
  href: string;
  label: string;
};

export type Community = {
  slug: string;
  name: string;
  city: "Sanford";
  county: "Lee County";
  state: "NC";
  shortBlurb: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  intro: string;
  context: string;
  housingNotes: string;
  accessNotes: string;
  priorities: string[];
  aeoQuestion: string;
  aeoAnswer: string;
  howVisitsWork: string;
  servicesFeatured: CommunityServiceLink[];
  nearbyCommunities: string[];
  faqs: { q: string; a: string }[];
};

const SHARED_SERVICES: CommunityServiceLink[] = [
  { href: "/house-cleaning", label: "House Cleaning" },
  { href: "/residential-cleaning", label: "Maintenance & Housekeeping" },
  { href: "/post-construction-cleaning", label: "Post-Construction Cleaning" },
  { href: "/move-in-cleaning", label: "Move-In Cleaning" },
  { href: "/move-out-cleaning", label: "Move-Out Cleaning" },
  { href: "/airbnb-cleaning", label: "Airbnb / Turnover Cleaning" },
];

export const communities: Community[] = [
  {
    slug: "carrington-place",
    name: "Carrington Place",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "Family-friendly house cleaning and housekeeping throughout Carrington Place streets and cul-de-sacs.",
    metaTitle: "House Cleaning Carrington Place | Sanford, NC",
    metaDescription:
      "Proudly serving Carrington Place in Sanford, NC with house cleaning, maintenance housekeeping, and post-construction cleaning. Local Lee County crew—request a quote.",
    keywords: [
      "house cleaning Carrington Place Sanford NC",
      "maid service Carrington Place Sanford",
      "housekeeping Carrington Place",
      "post construction cleaning Carrington Place",
      "residential cleaning Sanford NC",
    ],
    intro:
      "Cleaning Sanford is proud to serve homeowners throughout Carrington Place in Sanford, NC. From busy weeknight kitchens to weekend guest baths, we bring dependable house cleaning, maintenance housekeeping, and post-construction cleanup to homes along Carrington Place streets—so your family can enjoy Lee County living without the constant scrub list.",
    context:
      "Carrington Place is a family-oriented Sanford neighborhood where everyday life leaves a clear footprint: backpacks by the door, after-school snacks on counters, pets tracking spring pine pollen, and bathrooms that work hard in North Carolina humidity. Homes here typically mix open living areas with multiple baths, hard floors at entries, and ceiling fans that collect AC dust between visits. A smart cleaning plan focuses on high-traffic zones first, then rotates detail work so baseboards, vents, and window tracks never become a once-a-year crisis.",
    housingNotes:
      "Expect active households with kids and pets, mid-size floor plans, and finishes that show humidity film on shower glass. Open kitchens mean grease and crumbs travel farther than a single sink wipe can cover. We adjust dwell time in baths and kitchens so maintenance visits keep pace with real family use.",
    accessNotes:
      "Share gate or HOA entry instructions, preferred parking, pets on-site, and any alarm notes when you book. If your street has limited parking during school hours, tell us the best window so the crew arrives ready without blocking neighbors.",
    priorities: [
      "Kitchen counters, sinks, and appliance exteriors after weeknight cooking",
      "Bathroom humidity control—shower glass, fixtures, and floors",
      "Entry floors and high-traffic paths after outdoor play or pets",
      "Ceiling fans, AC returns, and pollen on window sills",
      "Rotating baseboards and detail work so buildup never snowballs",
    ],
    aeoQuestion:
      "What house cleaning and housekeeping services does Cleaning Sanford provide in Carrington Place?",
    aeoAnswer:
      "Cleaning Sanford provides house cleaning, recurring maintenance housekeeping, and post-construction cleaning for Carrington Place homes in Sanford, NC. Crews prioritize kitchens, humidity-prone bathrooms, entry floors, and AC dust—then set a weekly or biweekly rhythm matched to family traffic, pets, and Lee County pollen seasons.",
    howVisitsWork:
      "Most Carrington Place families choose weekly service when kids, pets, or frequent cooking keep surfaces busy, or biweekly service when the home needs steady maintenance without a weekly commitment. One-time deep cleans reset bathrooms and kitchens before recurring visits begin.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["west-lake", "wedgewood", "riverbirch", "tramway", "historic-downtown"],
    faqs: [
      {
        q: "Do you clean homes throughout Carrington Place in Sanford?",
        a: "Yes. Cleaning Sanford serves Carrington Place addresses across the community’s streets and cul-de-sacs, subject to route availability. Include your full address, preferred date, and parking notes when requesting a quote.",
      },
      {
        q: "Is weekly or biweekly housekeeping better for a Carrington Place family home?",
        a: "Weekly visits suit active homes with children, pets, or frequent guests. Biweekly maintenance cleaning works well for smaller households or lighter weekday use.",
      },
      {
        q: "Can you handle post-construction cleaning after a remodel?",
        a: "Yes. After builds or renovations we remove fine drywall dust, wipe protected surfaces carefully, and detail floors, fixtures, and vents so the home is ready for everyday living.",
      },
      {
        q: "What should I prepare before a housekeeping visit?",
        a: "Clear counters of clutter when you can, secure pets, and note any rooms that need extra attention. We bring supplies unless you prefer specific products for allergies.",
      },
    ],
  },
  {
    slug: "west-lake",
    name: "West Lake",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "Reliable house cleaning for West Lake homes—open kitchens, busy baths, and pollen-season resets.",
    metaTitle: "House Cleaning West Lake | Sanford, NC",
    metaDescription:
      "House cleaning and housekeeping for West Lake in Sanford, NC. Weekly or biweekly maintenance plus deep cleans from a local Lee County crew.",
    keywords: [
      "house cleaning West Lake Sanford NC",
      "maid service West Lake Sanford",
      "residential cleaning West Lake",
      "housekeeping Sanford NC",
    ],
    intro:
      "West Lake homeowners in Sanford, NC count on Cleaning Sanford for calm, consistent residential cleaning. Whether you need discreet weekly housekeeping or a deeper seasonal reset after pine pollen season, we work with your access preferences so visits feel respectful of neighbors.",
    context:
      "West Lake homes often feature open living areas, multiple bathrooms, and outdoor living that tracks clay dust and pollen indoors. Ceiling fans, window tracks, and entry floors take the brunt of Lee County seasons. Our plans start with high-traffic zones, then rotate detail work so the home stays guest-ready without a marathon scrub day.",
    housingNotes:
      "Larger floor plans and outdoor living mean more square footage underfoot and more pollen at sills. We pace kitchens and baths for humidity film and keep a detail rotation for baseboards and vents.",
    accessNotes:
      "Share driveway or HOA parking notes, pet instructions, and preferred arrival windows. If you work from home, tell us which rooms to finish first.",
    priorities: [
      "Open kitchen islands and appliance exteriors",
      "Primary and guest bathrooms",
      "Entry and patio-adjacent floors",
      "Pollen on sills, fans, and returns",
      "Rotating detail: baseboards, switches, tracks",
    ],
    aeoQuestion: "Does Cleaning Sanford offer house cleaning in West Lake, Sanford NC?",
    aeoAnswer:
      "Yes. Cleaning Sanford provides house cleaning and recurring housekeeping for West Lake homes in Sanford, NC, with optional deep cleans and post-construction support when renovations leave fine dust behind.",
    howVisitsWork:
      "Most West Lake clients book biweekly maintenance with an occasional deep clean before guests or after pollen peaks. We confirm scope and access before the first visit.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["carrington-place", "wedgewood", "riverbirch", "tramway", "historic-downtown"],
    faqs: [
      {
        q: "Do you serve all of West Lake?",
        a: "We serve West Lake addresses subject to route availability. Include your full street address when requesting a quote.",
      },
      {
        q: "Can you deep clean before holidays or guests?",
        a: "Yes. One-time deep cleans reset kitchens, baths, and detail areas before you return to a maintenance schedule.",
      },
      {
        q: "Do you bring supplies?",
        a: "Yes. We arrive with professional supplies. Prefer your own products for allergies? Just note that when you book.",
      },
    ],
  },
  {
    slug: "wedgewood",
    name: "Wedgewood",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "Trusted housekeeping and move-ready cleans for Wedgewood streets in Sanford.",
    metaTitle: "House Cleaning Wedgewood | Sanford, NC",
    metaDescription:
      "House cleaning, move-in/out, and post-construction cleaning for Wedgewood in Sanford, NC. Local Lee County team—request a quote.",
    keywords: [
      "house cleaning Wedgewood Sanford NC",
      "maid service Wedgewood",
      "move out cleaning Wedgewood Sanford",
      "residential cleaning Sanford NC",
    ],
    intro:
      "Cleaning Sanford proudly serves Wedgewood homeowners with consistent house cleaning and vacancy support. From recurring housekeeping to deposit-focused move-outs, we keep scopes clear and communication simple.",
    context:
      "Wedgewood blends established family homes with active households. Kitchens and baths see daily use; spring pollen and NC humidity leave film on glass and dust on fans. A predictable weekly or biweekly rhythm keeps the home ahead of buildup.",
    housingNotes:
      "Expect mid-size floor plans, pet traffic, and finishes that show wear at entries. We prioritize kitchens, baths, and floors, then rotate detail work.",
    accessNotes:
      "Note pets, parking, and any rooms off-limits. For move-outs, share keys, lockbox codes, and landlord walkthrough timing.",
    priorities: [
      "Kitchen grease and crumb control",
      "Bathrooms and shower glass",
      "High-traffic floors",
      "Fans, vents, and pollen sills",
      "Move-out detail when vacating",
    ],
    aeoQuestion: "What cleaning services are available in Wedgewood, Sanford?",
    aeoAnswer:
      "Cleaning Sanford offers house cleaning, recurring housekeeping, move-in/out cleaning, and post-construction cleaning for Wedgewood homes in Sanford, NC.",
    howVisitsWork:
      "Recurring clients keep a steady cadence; movers book a one-time deep vacancy clean timed to key return. We confirm the checklist before arrival.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["carrington-place", "west-lake", "riverbirch", "tramway", "historic-downtown"],
    faqs: [
      {
        q: "Do you do move-out cleaning in Wedgewood?",
        a: "Yes. Deposit-focused move-out cleans cover kitchens, baths, appliances, baseboards, and floors for empty units.",
      },
      {
        q: "How far in advance should I book?",
        a: "Recurring routes fill first—request a quote as early as you can. Move-outs should be booked once you know key-return timing.",
      },
    ],
  },
  {
    slug: "riverbirch",
    name: "Riverbirch",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "Detail-focused house cleaning for Riverbirch homes near everyday Sanford living.",
    metaTitle: "House Cleaning Riverbirch | Sanford, NC",
    metaDescription:
      "Professional house cleaning and housekeeping in Riverbirch, Sanford NC. Local crews, clear scopes, instant online quotes.",
    keywords: [
      "house cleaning Riverbirch Sanford",
      "maid service Riverbirch NC",
      "residential cleaning Riverbirch",
      "Cleaning Sanford Riverbirch",
    ],
    intro:
      "Riverbirch residents choose Cleaning Sanford for reliable residential cleaning that respects busy schedules. We handle standard and deep house cleans plus recurring maintenance so your home stays ahead of pollen and everyday clutter.",
    context:
      "Riverbirch homes see typical Lee County wear: outdoor dust at entries, humidity in baths, and AC dust on fans. Our checklist is built for lived-in homes—not empty model units.",
    housingNotes:
      "Floor plans vary; we quote by bedrooms and baths, then adjust dwell time for kitchens and humidity-prone showers.",
    accessNotes:
      "Share entry instructions and preferred parking. If you work remotely, tell us which spaces to prioritize first.",
    priorities: [
      "Kitchens and appliance exteriors",
      "Bathrooms and fixtures",
      "Floors and entries",
      "Dust on fans and returns",
      "Rotating detail work",
    ],
    aeoQuestion: "Does Cleaning Sanford clean homes in Riverbirch?",
    aeoAnswer:
      "Yes. Cleaning Sanford provides house cleaning and maintenance housekeeping for Riverbirch addresses in Sanford, NC, subject to route availability.",
    howVisitsWork:
      "Start with a deep or standard reset, then lock in weekly or biweekly visits. Add-ons like inside oven or fridge can be scheduled as needed.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["carrington-place", "west-lake", "wedgewood", "tramway", "historic-downtown"],
    faqs: [
      {
        q: "Are you licensed and insured?",
        a: "Yes. Cleaning Sanford operates as a licensed, insured service-area business serving Sanford and Lee County.",
      },
      {
        q: "Can I get an online quote?",
        a: "Yes. Use the booking widget on our homepage for an instant estimate, then confirm details by email.",
      },
    ],
  },
  {
    slug: "tramway",
    name: "Tramway",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "House and post-construction cleaning for Tramway-area homes and new builds.",
    metaTitle: "House Cleaning Tramway | Sanford, NC",
    metaDescription:
      "House cleaning and post-construction cleanup for Tramway near Sanford, NC. Local Lee County crew—book a quote online.",
    keywords: [
      "house cleaning Tramway Sanford NC",
      "post construction cleaning Tramway",
      "maid service Tramway NC",
      "new home cleaning Sanford",
    ],
    intro:
      "Tramway-area homeowners and new-build residents trust Cleaning Sanford for house cleaning and post-construction dust removal. We clear settle dust after builders leave, then keep kitchens and baths on a maintenance schedule.",
    context:
      "Newer and growing pockets near Tramway often need two kinds of help: a thorough reset after construction or move-in dust, then reliable housekeeping that protects finishes from pollen and humidity. Fine drywall dust hides on window tracks, closet shelves, fans, and inside returns—places a quick wipe never reaches.",
    housingNotes:
      "Open kitchens, light floors, and tall ceilings collect fine dust long after punch lists. Once lived-in, humidity and pollen start building film on shower glass and sills.",
    accessNotes:
      "For new builds, share builder or HOA access notes and which rooms are furniture-ready. For occupied homes, note pets and parking.",
    priorities: [
      "Construction settle dust on fans, vents, and tracks",
      "Kitchen and bath reset",
      "Hard floors and entries",
      "Ongoing pollen and humidity maintenance",
      "Final touch-ups before move-in",
    ],
    aeoQuestion: "Do you offer post-construction and house cleaning near Tramway?",
    aeoAnswer:
      "Yes. Cleaning Sanford offers post-construction cleaning and ongoing house cleaning for Tramway-area homes near Sanford, NC—removing fine settle dust, then shifting to weekly or biweekly housekeeping.",
    howVisitsWork:
      "New homes often start with a post-construction or move-in deep clean, then convert to maintenance. Established homes book standard or deep cleans on a recurring cadence.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["carrington-place", "west-lake", "wedgewood", "riverbirch", "historic-downtown"],
    faqs: [
      {
        q: "Is new-home dust different from everyday dust?",
        a: "Yes. Construction dust is finer and settles into tracks, vents, and high surfaces. We use methods suited to that fine particulate before switching to maintenance cleaning.",
      },
      {
        q: "Can you clean after a remodel in an occupied home?",
        a: "Yes. We protect finished areas, remove renovation dust, and detail the rooms that were opened up.",
      },
    ],
  },
  {
    slug: "historic-downtown",
    name: "Historic Downtown",
    city: "Sanford",
    county: "Lee County",
    state: "NC",
    shortBlurb:
      "Discreet residential and small-commercial cleaning near Sanford’s historic downtown.",
    metaTitle: "House Cleaning Historic Downtown | Sanford, NC",
    metaDescription:
      "House cleaning and light commercial cleaning near Historic Downtown Sanford, NC. Local crew, clear scopes, online quotes.",
    keywords: [
      "house cleaning downtown Sanford NC",
      "maid service historic Sanford",
      "office cleaning downtown Sanford",
      "residential cleaning Sanford NC",
    ],
    intro:
      "Cleaning Sanford serves homes and small workplaces near Historic Downtown Sanford with discreet, reliable cleaning. From upstairs apartments to street-adjacent offices, we keep scopes clear and arrival windows predictable.",
    context:
      "Downtown-adjacent living often means tighter parking, mixed residential/commercial neighbors, and older finishes that need careful product choices. We plan visits around access and quiet hours when needed.",
    housingNotes:
      "Expect varied floor plans—cottages, apartments, and renovated spaces. We quote by size and condition, not a one-size checklist.",
    accessNotes:
      "Share parking, stair access, and preferred quiet hours. For offices, note after-hours entry and alarm codes.",
    priorities: [
      "Kitchens and baths",
      "Floors and high-traffic paths",
      "Dust on trim and older surfaces",
      "Office common areas when booked commercially",
      "Respectful noise and parking etiquette",
    ],
    aeoQuestion: "Does Cleaning Sanford serve Historic Downtown Sanford?",
    aeoAnswer:
      "Yes. Cleaning Sanford provides residential house cleaning and light commercial cleaning for addresses near Historic Downtown Sanford, NC, subject to access and route availability.",
    howVisitsWork:
      "Residential clients book standard or recurring cleans; small offices often prefer early morning or evening windows. We confirm access before the first visit.",
    servicesFeatured: SHARED_SERVICES,
    nearbyCommunities: ["carrington-place", "west-lake", "wedgewood", "riverbirch", "tramway"],
    faqs: [
      {
        q: "Do you clean small offices downtown?",
        a: "Yes. Ask about commercial cleaning for offices, studios, and shared spaces near downtown Sanford.",
      },
      {
        q: "Is parking an issue?",
        a: "Tell us the best place to park and any time restrictions. We plan arrivals to avoid blocking neighbors or storefronts.",
      },
    ],
  },
];

export function getCommunityBySlug(slug: string): Community | undefined {
  return communities.find((c) => c.slug === slug);
}
