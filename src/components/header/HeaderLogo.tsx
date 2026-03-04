"use client";

import Image from "next/image";
import Link from "next/link";

type HeaderLogoProps = {
  src: string;
  alt: string;
  href: string;
};

export function HeaderLogo({ src, alt, href }: HeaderLogoProps) {
  return (
    <Link
      href={href}
      className="relative h-[46px] w-[125px] shrink-0 md:h-[61px] md:w-[164px]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-left"
        sizes="(max-width: 768px) 125px, 164px"
        priority
      />
    </Link>
  );
}
