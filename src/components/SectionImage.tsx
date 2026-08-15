import Image from "next/image";
import { siteImages, type SiteImageKey } from "@/lib/images";

type Props = {
  image: SiteImageKey;
  className?: string;
  priority?: boolean;
  sizes?: string;
  rounded?: boolean;
};

export default function SectionImage({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  rounded = true,
}: Props) {
  const asset = siteImages[image];

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${rounded ? "rounded-2xl" : ""} ${className}`}>
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
