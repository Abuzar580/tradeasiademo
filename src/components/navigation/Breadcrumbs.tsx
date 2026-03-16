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
        bg-[rgba(var(--brand-white-rgb),0.89)]
        px-5 pt-[105px] pb-5 md:pt-[160px] md:pb-9
        flex items-center justify-center gap-2
      "
    >
      <nav aria-label="Breadcrumb" className="overflow-hidden">
        <ol className="flex flex-wrap items-center justify-center gap-3 text-[length:var(--body-small-size)] leading-[var(--body-small-line-height)]">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-3">
                {index > 0 && (
                  <span className="flex items-center text-[var(--brand-neutral-text)]">
                    <ArrowIcon className="h-2 w-1" aria-hidden="true" />
                  </span>
                )}

                {/* home icon */}
                {isFirst ? (
                  item.href ? (
                    <Link href={item.href} aria-label={item.label} className="inline-flex items-center text-[var(--brand-neutral-text)]">
                      <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-[var(--brand-neutral-text)]">
                      <HomeIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  )
                ) : // Other items: non-last are links, last is plain text
                  isLast || !item.href ? (
                    <span className="body-regular text-[var(--brand-black)] !font-[var(--font-weight-medium)]">
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className="body-regular text-[var(--brand-neutral-text)] !font-[var(--font-weight-medium)] hover:text-[var(--brand-black)] transition-colors"
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

