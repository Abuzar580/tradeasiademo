"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, } from "@/components/ui/pagination";
import { ArrowIcon } from "@/icons";

type ProductsCard = {
  id: number;
  name: string;
  casNumber: string;
  hsCode: string;
  image: string;
  badge: string;
  category: string;
};

type ProductsProps = {
  title: string;
  Products?: ProductsCard[];
};

export function ProductsListTile({
  title,
  Products = [],
}: ProductsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selected = (searchParams.get("category") ?? "").toLowerCase();
  const sort = (searchParams.get("sort") ?? "asc").toLowerCase();
  const pageParam = Number(searchParams.get("page") ?? "1");
  const page = Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;
  const PAGE_SIZE = 9;

  const filtered =
    !selected || selected === "all-products"
      ? Products
      : Products.filter((p) => p.category.toLowerCase() === selected);

  const sorted = [...filtered].sort((a, b) => {
    const dir = sort === "desc" ? -1 : 1;
    return dir * a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" });
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(pageStart, pageStart + PAGE_SIZE);

  const hrefWith = (nextParams: URLSearchParams) => {
    const qs = nextParams.toString();
    return qs ? `${pathname}?${qs}` : pathname;
  };

  const pageHref = (nextPage: number) => {
    const next = new URLSearchParams(searchParams.toString());
    if (nextPage <= 1) next.delete("page");
    else next.set("page", String(nextPage));
    return hrefWith(next);
  };

  return (
    <div className="flex flex-col gap-[var(--industries-products-list-gap-mobile)] md:gap-[var(--industries-products-list-gap-desktop)] w-full">
      <div className="flex justify-between items-center">
        <h3
          className="
          text-[length:var(--industries-products-list-title-size-mobile)]
          md:text-[length:var(--industries-products-list-title-size-desktop)]
          leading-[var(--industries-products-list-title-line-mobile)]
          md:leading-[var(--industries-products-list-title-line-desktop)]
          font-[var(--industries-products-list-title-weight-mobile)]
          md:font-[var(--industries-products-list-title-weight-desktop)]
          text-[var(--industries-products-list-title-color)]"
        >
          {title}
        </h3>
        <div className="flex items-center gap-[var(--industries-products-sort-gap)]">
          <span className="
          text-[length:var(--industries-products-sort-title-size)]
          leading-[var(--industries-products-sort-title-line)]
          font-[var(--industries-products-sort-title-weight)]
          text-[var(--industries-products-sort-title-color)]">
            Sort by :
          </span>

          <div className="relative">
            <select
            value={sort === "desc" ? "desc" : "asc"}
            onChange={(e) => {
              const next = new URLSearchParams(searchParams.toString());
              const value = e.target.value === "desc" ? "desc" : "asc";
              if (value === "asc") next.delete("sort");
              else next.set("sort", value);
              next.delete("page");
              const qs = next.toString();
              router.push(qs ? `${pathname}?${qs}` : pathname);
            }}
            className="
            appearance-none
            w-[var(--industries-products-dropdown-width)]
            border border-[var(--industries-products-dropdown-border-color)]
            text-[length:var(--industries-products-dropdown-option-size)]
            leading-[var(--industries-products-dropdown-option-line)]
            font-[var(--industries-products-dropdown-option-weight)]
            text-[var(--industries-products-dropdown-option-color)]
            px-[var(--industries-products-dropdown-padding-x)]
            py-[var(--industries-products-dropdown-padding-y)]
            pr-[var(--industries-products-dropdown-padding-r)]
            rounded-[var(--industries-products-dropdown-radius)]
            bg-[var(--industries-products-dropdown-bg)]
            outline-none cursor-pointer "
            >
              <option value="asc">Ascending (A-Z)</option>
              <option value="desc">Descending (Z-A)</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-[var(--industries-products-dropdown-arrow-right)] flex items-center">
              <ArrowIcon className="w-[12px] h-[12px] rotate-90 text-[var(--industries-products-dropdown-arrow-color)]" />
            </div>
          </div>

        </div>
      </div>

      {/* Products Grid */}
      {pageItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-[var(--industries-products-grid-card-gap-y-mobile)] md:gap-y-[var(--industries-products-grid-card-gap-y-desktop)] gap-x-[var(--industries-products-grid-card-gap-x)] px-[var(--industries-products-grid-card-padding-x)] md:px-0">
          {pageItems.map((product) => (
            <div
              key={product.id}
              className=" flex flex-col
              rounded-b-[var(--industries-products-grid-card-bottom-radius)]
              bg-[var(--industries-products-grid-card-bg)]
              shadow-[var(--industries-products-grid-card-shadow)]
              hover:shadow-[var(--industries-products-grid-card-shadow-hover)]
              overflow-hidden
              "
            >
              <div className="relative w-full bg-[var(--industries-products-tile-bg)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={260}
                  className="w-full max-h-[200px] object-cover"
                />

                <span className="
                absolute capitalize
                rounded-[var(--industries-products-tile-badge-radius)]
                top-[var(--industries-products-tile-badge-gap-top)]
                left-[var(--industries-products-tile-badge-gap-left)]
                py-[var(--industries-products-tile-badge-padding-y)]
                px-[var(--industries-products-tile-badge-padding-x)]
                text-[length:var(--industries-products-tile-badge-size)]
                leading-[var(--industries-products-tile-badge-line)]
                font-[var(--industries-products-tile-badge-weight)]
                text-[var(--industries-products-tile-badge-color)]
                bg-[var(--industries-products-tile-badge-bg)]

                "
                >
                  {product.badge}
                </span>
              </div>
              <div className="
              flex flex-col
              bg-[var(--industries-products-tile-bg)]
              pt-[var(--industries-products-tile-padding-top)]
              pb-[var(--industries-products-tile-padding-bottom)]
              px-[var(--industries-products-tile-padding-x)]
              gap-[var(--industries-products-tile-gap)] h-full"
              >
                <h3
                  className="
                  text-[length:var(--industries-products-tile-title-size-mobile)]
                  md:text-[length:var(--industries-products-tile-title-size-desktop)]
                  leading-[var(--industries-products-tile-title-line-mobile)]
                  md:leading-[var(--industries-products-tile-title-line-desktop)]
                  font-[var(--industries-products-tile-title-weight-mobile)]
                  md:font-[var(--industries-products-tile-title-weight-desktop)]
                  text-[var(--industries-products-tile-title-color)]"
                >
                  {product.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <p className="
                    flex justify-between w-full
                    text-[length:var(--industries-products-tile-subtitle-size)]
                    leading-[var(--industries-products-tile-subtitle-line)]
                    font-[var(--industries-products-tile-subtitle-value-weight)]
                    text-[var(--industries-products-tile-subtitle-value-color)]"
                    >
                      <span className="
                      text-[length:var(--industries-products-tile-subtitle-size)]
                      leading-[var(--industries-products-tile-subtitle-line)]
                      font-[var(--industries-products-tile-subtitle-weight)]
                      text-[var(--industries-products-tile-subtitle-color)]">CAS NUMBER:</span> {product.casNumber}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <p className="
                    flex justify-between w-full
                    text-[length:var(--industries-products-tile-subtitle-size)]
                    leading-[var(--industries-products-tile-subtitle-line)]
                    font-[var(--industries-products-tile-subtitle-value-weight)]
                    text-[var(--industries-products-tile-subtitle-value-color)]"
                    >
                      <span className="
                      text-[length:var(--industries-products-tile-subtitle-size)]
                      leading-[var(--industries-products-tile-subtitle-line)]
                      font-[var(--industries-products-tile-subtitle-weight)]
                      text-[var(--industries-products-tile-subtitle-color)]">HS CODE:</span> {product.hsCode}
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  href="#"
                  className="w-full mt-auto uppercase text-[var(--industries-products-cta-text-color)]! py-[var(--industries-products-cta-padding-y)]!"
                >
                  Inquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="md:pt-[var(--pagination-padding-top-desktop)]">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={pageHref(Math.max(1, currentPage - 1))}
                disabled={currentPage <= 1}
              />
            </PaginationItem>
            {(() => {
              const windowSize = 5;
              const half = Math.floor(windowSize / 2);
              let start = Math.max(1, currentPage - half);
              let end = Math.min(totalPages, start + windowSize - 1);
              start = Math.max(1, end - windowSize + 1);

              const pages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

              return (
                <>
                  {totalPages <= 7 &&
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <PaginationItem key={p}>
                        <PaginationLink href={pageHref(p)} isActive={p === currentPage}>
                          {p}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  {totalPages > 7 && (
                    <>
                  {start > 1 && (
                    <PaginationItem>
                      <PaginationLink href={pageHref(1)} isActive={currentPage === 1}>
                        1
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {start > 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}

                  {pages.map((p) => (
                    <PaginationItem key={p}>
                      <PaginationLink href={pageHref(p)} isActive={p === currentPage}>
                        {p}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  {end < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {end < totalPages && (
                    <PaginationItem>
                      <PaginationLink href={pageHref(totalPages)} isActive={totalPages === currentPage}>
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                    </>
                  )}
                </>
              );
            })()}
            <PaginationItem>
              <PaginationNext
                href={pageHref(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage >= totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
