import Link from "next/link";
import { HomeIcon, ArrowIcon } from "@/icons";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <div
      className="
        w-full
        bg-[var(--breadcrumbs-bg)]
        px-5 pt-[var(--breadcrumbs-padding-top-mobile)] pb-[var(--breadcrumbs-padding-bottom-mobile)] md:pt-[var(--breadcrumbs-padding-top-desktop)] md:pb-[var(--breadcrumbs-padding-bottom-desktop)]
        flex items-center justify-center gap-[var(--breadcrumbs-gap)]
      "
    >
      <nav aria-label="Breadcrumb" className="overflow-hidden">
        <ol className="flex flex-wrap items-center justify-center gap-[var(--breadcrumbs-item-gap)] text-[length:var(--breadcrumbs-font-size-mobile)] leading-[var(--breadcrumbs-line-mobile)] md:text-[length:var(--breadcrumbs-font-size-desktop)] md:leading-[var(--breadcrumbs-line-desktop)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-[var(--breadcrumbs-item-gap)]">
                {index > 0 && (
                  <span className="flex items-center text-[var(--breadcrumbs-separator-color)]">
                    <ArrowIcon className="h-2 w-1" aria-hidden="true" />
                  </span>
                )}

                {isFirst ? (
                  item.href ? (
                    <Link href={item.href} aria-label={item.label} className="inline-flex items-center text-[var(--breadcrumbs-link-color)]">
                      <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-[var(--breadcrumbs-text-color)]">
                      <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )
                ) :
                  isLast || !item.href ? (
                    <span className="body-regular text-[var(--breadcrumbs-text-active)] !font-[var(--breadcrumbs-weight-mobile)] md:!font-[var(--breadcrumbs-weight-desktop)]">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="body-regular text-[var(--breadcrumbs-link-color)] !font-[var(--breadcrumbs-weight-mobile)] md:!font-[var(--breadcrumbs-weight-desktop)] hover:text-[var(--breadcrumbs-link-hover-color)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

// Backwards-compat aliases for existing imports/props
export type HeroBreadcrumbItem = BreadcrumbItem;
export const HeroBreadcrumbs = Breadcrumbs;

