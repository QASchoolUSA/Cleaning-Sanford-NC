/**
 * Local professional photography catalog for section-relevant imagery.
 * Files live in /public/images (JPEG + WebP pairs).
 */
export const siteImages = {
  heroLiving: {
    src: "/images/hero-living.jpg",
    alt: "Bright, professionally cleaned living room with natural light in a Sanford, NC home",
  },
  heroExterior: {
    src: "/images/hero-home-exterior.jpg",
    alt: "Modern Sanford area home exterior representing premium residential cleaning",
  },
  kitchen: {
    src: "/images/kitchen-clean.jpg",
    alt: "Spotless modern kitchen after professional house cleaning",
  },
  bathroom: {
    src: "/images/bathroom-clean.jpg",
    alt: "Fresh, sanitized bathroom after detailed residential cleaning",
  },
  cleanerWindow: {
    src: "/images/cleaner-window.jpg",
    alt: "Professional cleaner detailing windows with protective gear",
  },
  supplies: {
    src: "/images/cleaning-supplies.jpg",
    alt: "Professional cleaning supplies and disinfectant spray used by Cleaning Sanford",
  },
  residential: {
    src: "/images/residential-living.jpg",
    alt: "Open-concept living and dining area after residential cleaning in Lee County",
  },
  commercial: {
    src: "/images/commercial-office.jpg",
    alt: "Clean modern office hallway and break area after commercial cleaning",
  },
  office: {
    src: "/images/office-conference.jpg",
    alt: "Spotless conference room ready for business after office cleaning",
  },
  moveOut: {
    src: "/images/move-out-keys.jpg",
    alt: "House keys ready for move-out cleaning and security deposit walkthrough",
  },
  moveIn: {
    src: "/images/move-in-ready.jpg",
    alt: "Bright move-in ready living space after deep cleaning",
  },
  airbnbBedroom: {
    src: "/images/airbnb-bedroom.jpg",
    alt: "Guest-ready bedroom with fresh linens after Airbnb turnover cleaning",
  },
  airbnbLiving: {
    src: "/images/airbnb-living.jpg",
    alt: "Staged vacation rental living area after same-day Airbnb cleaning",
  },
  postConstruction: {
    src: "/images/post-construction-site.jpg",
    alt: "Active construction site before post-construction cleaning and final dust removal",
  },
  localHome: {
    src: "/images/local-home-exterior.jpg",
    alt: "Well-maintained modern home exterior in the Sanford, NC service area",
  },
  stagedLiving: {
    src: "/images/staged-living.jpg",
    alt: "Professionally staged living room showing house cleaning results",
  },
} as const;

export type SiteImageKey = keyof typeof siteImages;
