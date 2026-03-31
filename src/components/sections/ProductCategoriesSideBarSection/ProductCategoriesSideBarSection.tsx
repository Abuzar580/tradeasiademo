"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PRODUCT_CATEGORY_LABELS, PRODUCT_CATEGORY_ORDER } from "@/constants/products";

type Category = {
  label: string;
  slug: string;
  count: number;
};

type SidebarProduct = {
  category: string;
};

export function ProductCategoriesSideBar({
  products,
}: {
  products: SidebarProduct[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selected = (searchParams.get("category") ?? "").toLowerCase();
  const isAll = !selected || selected === "all-products";

  const toSlug = (value: string) =>
    value
      .trim()
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const setCategory = (categorySlug: string) => {
    const next = new URLSearchParams(searchParams.toString());

    if (categorySlug === "all-products") next.delete("category");
    else next.set("category", categorySlug);

    const qs = next.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  };

  const categories: Category[] = useMemo(() => {
    const categoryCounts = products.reduce((acc, p) => {
      const key = p.category.toLowerCase();
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      { label: "All Products", slug: "all-products", count: products.length },
      ...PRODUCT_CATEGORY_ORDER.flatMap((slug) => {
        const count = categoryCounts[slug];
        if (!count) return [];
        return [{ label: PRODUCT_CATEGORY_LABELS[slug], slug, count }];
      }),
    ];
  }, [products]);

  return (
    <div className="flex flex-col p-[var(--industries-products-sidebar-padding)] gap-[var(--industries-products-sidebar-gap)] rounded-[var(--industries-products-sidebar-radius)] bg-[var(--industries-products-sidebar-bg)] shadow-[var(--industries-products-sidebar-shadow)] mx-[var(--industries-products-sidebar-margin-x-mobile)] md:mx-0">

      {/* Heading */}
      <h3
        className="
          text-[length:var(--industries-products-sidebar-title-size-mobile)]
          md:text-[length:var(--industries-products-sidebar-title-size-desktop)]
          leading-[var(--industries-products-sidebar-title-line-mobile)]
          md:leading-[var(--industries-products-sidebar-title-line-desktop)]
          text-[var(--industries-products-sidebar-title-color)]
          font-[var(--industries-products-sidebar-title-weight-mobile)]
          md:font-[var(--industries-products-sidebar-title-weight-desktop)]"
      >
        Product Categories
      </h3>

      {/* Categories Menu List */}
      <div className="flex flex-col gap-[var(--industries-products-sidebar-menu-list-gap)]">
        {categories.map((category, index) => {
          const active = category.slug === "all-products" ? isAll : category.slug === selected;

          return (
          <div
            key={index}
            onClick={() => setCategory(category.slug)}
            className={`
              group flex items-center justify-between
              px-[var(--industries-products-sidebar-menu-list-padding-x)]
              py-[var(--industries-products-sidebar-menu-list-padding-y)]
              rounded-[var(--industries-products-sidebar-menu-list-radius)]
              cursor-pointer transition-all
              ${active
              ? "bg-[var(--industries-products-sidebar-menu-list-bg)]"
              : "hover:bg-[var(--industries-products-sidebar-menu-list-bg)]"
              }
            `}
          >
            {/* Name */}
            <span
              className={`
                text-[length:var(--industries-products-sidebar-menu-title-size)]
                leading-[var(--industries-products-sidebar-menu-title-line)]
                font-[var(--industries-products-sidebar-menu-title-weight)]
                transition-default
                ${active
                ? "text-[var(--industries-products-sidebar-menu-title-color-active)]"
                : "text-[var(--industries-products-sidebar-menu-title-color-inactive)] group-hover:text-[var(--industries-products-sidebar-menu-title-color-active)]"
                }
              `}
            >
              {category.label}
            </span>

            {/* Count Badge */}
            <span
              className={`
                flex items-center justify-center
                w-[var(--industries-products-sidebar-menu-badge-width)]
                h-[var(--industries-products-sidebar-menu-badge-height)]
                rounded-[var(--industries-products-sidebar-menu-badge-radius)]
                text-[length:var(--industries-products-sidebar-menu-badge-size)]
                leading-[var(--industries-products-sidebar-menu-badge-line)]
                font-[var(--industries-products-sidebar-menu-badge-weight)]
                transition-default
                ${active
                ? "bg-[var(--industries-products-sidebar-menu-badge-bg-active)] text-[var(--industries-products-sidebar-menu-badge-color-active)]"
                : "bg-[var(--industries-products-sidebar-menu-badge-bg-inactive)] text-[var(--industries-products-sidebar-menu-badge-color-inactive)] group-hover:bg-[var(--industries-products-sidebar-menu-badge-bg-active)] group-hover:text-[var(--industries-products-sidebar-menu-badge-color-active)]"
                }
              `}
            >
              {category.count}
            </span>
          </div>
          );
        })}
      </div>
    </div>
  );
}