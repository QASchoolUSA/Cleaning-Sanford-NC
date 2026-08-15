export type ServiceArea = {
  slug: string;
  name: string;
  description: string;
  nearby: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "jonesboro",
    name: "Jonesboro",
    description:
      "Professional house and commercial cleaning for Jonesboro homes and businesses in Lee County, just south of Sanford.",
    nearby: ["Sanford", "Broadway", "Lemon Springs"],
  },
  {
    slug: "broadway",
    name: "Broadway",
    description:
      "Reliable residential and office cleaning throughout Broadway, NC—including nearby rural roads and in-town addresses.",
    nearby: ["Sanford", "Lillington", "Jonesboro"],
  },
  {
    slug: "cameron",
    name: "Cameron",
    description:
      "Trusted cleaning services for Cameron homes and workplaces along the US-1 corridor toward Southern Pines.",
    nearby: ["Sanford", "Carthage", "Vass"],
  },
  {
    slug: "lillington",
    name: "Lillington",
    description:
      "House, move-out, and commercial cleaning for Lillington and Harnett County neighbors who want a Sanford-based crew.",
    nearby: ["Sanford", "Broadway", "Buies Creek"],
  },
];

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
