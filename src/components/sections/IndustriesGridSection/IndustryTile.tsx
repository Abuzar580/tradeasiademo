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
        "group relative block overflow-hidden rounded-[var(--industries-grid-card-radius)] bg-[var(--industries-grid-card-bg)] shadow-[var(--industries-grid-card-shadow)]" +
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
            bg-[var(--industries-grid-overlay-bg)]
            pr-[var(--industries-grid-overlay-padding-right)]
            pl-[var(--industries-grid-overlay-padding-left)]
            py-[var(--industries-grid-overlay-padding-y)]
            gap-[var(--industries-grid-overlay-gap)]
          "
        >
          <span className="body-large text-[var(--industries-grid-title-color)]">
            {industry.name}
          </span>
          {industry.productCount !== undefined && (
            <span className="body-small text-[var(--industries-grid-badge-text-color)] uppercase whitespace-nowrap px-[var(--industries-grid-badge-padding-x)] py-[var(--industries-grid-badge-padding-y)] bg-[var(--industries-grid-badge-bg)] rounded-[var(--industries-grid-badge-radius)]">
              {industry.productCount} Products
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
