import Image from "next/image";
import { siteImages, type SiteImageKey } from "@/lib/images";

type Props = {
  image: SiteImageKey;
  caption?: string;
};

/** Full-bleed visual band used under service page headers. */
export default function ServiceHeroImage({ image, caption }: Props) {
  const asset = siteImages[image];

  return (
    <figure className="relative mt-8 overflow-hidden rounded-2xl bg-slate-100">
      <div className="relative aspect-[21/9] min-h-[180px] w-full sm:aspect-[2.4/1]">
        <Image
          src={asset.src}
          alt={asset.alt}
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
      </div>
      {caption ? (
        <figcaption className="absolute bottom-3 left-4 right-4 text-sm font-medium text-white drop-shadow sm:bottom-4 sm:left-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
