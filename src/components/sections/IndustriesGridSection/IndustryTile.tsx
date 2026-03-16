import Image from "next/image";
import Link from "next/link";

export type IndustryCard = {
  id: string;
  name: string;
  image: string;
  href: string;
  productCount?: number;
};

export type IndustryTileProps = {
  industry: IndustryCard;
  isCenteredOnLastRow?: boolean;
};

export function IndustryTile({ industry, isCenteredOnLastRow }: IndustryTileProps) {
  return (
    <Link
      href={industry.href}
      className={
        "group relative block overflow-hidden rounded-[25px] bg-[var(--brand-neutral-surface-2)] shadow-[var(--btn-shadow-soft)]" +
        (isCenteredOnLastRow ? " md:col-span-1 md:col-start-2" : "")
      }
    >
      <div className="aspect-[4/3] w-full overflow-hidden relative">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end">
        <div
          className="
            inline-flex
            items-center
            justify-between
            w-full
            bg-[color-mix(in_srgb,var(--brand-primary)_50%,transparent)]
            pr-5
            pl-6
            py-7
            gap-3
          "
        >
          <span className="body-large text-[var(--brand-white)]">
            {industry.name}
          </span>
          {industry.productCount !== undefined && (
            <span className="body-small text-[var(--brand-primary)] uppercase whitespace-nowrap px-3 py-2 bg-[var(--brand-white)] rounded-[20px]">
              {industry.productCount} Products
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
