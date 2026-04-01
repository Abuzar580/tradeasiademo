import { ProductsListTile } from "@/components/sections/ProductsListSection/ProductsListSection";
import { ProductCategoriesSideBar } from "@/components/sections/ProductCategoriesSideBarSection/ProductCategoriesSideBarSection";
import type { Product } from "@/constants/products";

export function IndustriesProductsSection({
  products,
  title,
  description,
}: {
  products: Product[];
  title: string;
  description: string;
}) {
  return (
    <section className="pt-[var(--industries-products-section-padding-top-mobile)] pb-[var(--industries-products-section-padding-bottom-mobile)] md:pt-[var(--industries-products-section-padding-top-desktop)] md:pb-[var(--industries-products-section-padding-bottom-desktop)]">
      <div className="layout-container px-5">
        <div className="flex flex-col gap-[var(--industries-products-grid-gap-mobile)] md:grid md:grid-cols-12 md:gap-[var(--industries-products-grid-gap-desktop)]">
          <div className="order-1 md:order-1 md:col-span-3 md:self-start">
            <ProductCategoriesSideBar products={products} />
          </div>

          <div className="order-2 md:order-2 md:col-span-9 flex flex-col gap-[var(--industries-products-grid-intro-gap-mobile)] md:gap-[var(--industries-products-grid-intro-gap-desktop)]">
            <div className="flex flex-col gap-[var(--industries-products-grid-intro-gap-mobile)] md:gap-[var(--industries-products-grid-intro-gap-desktop)] pb-[var(--industries-products-grid-padding-bottom-mobile)] md:pb-0">
              <h3
                className="
                  text-[length:var(--industries-products-grid-title-size-mobile)]
                  md:text-[length:var(--industries-products-grid-title-size-desktop)]
                  leading-[var(--industries-products-grid-title-line-mobile)]
                  md:leading-[var(--industries-products-grid-title-line-desktop)]
                  font-[var(--industries-products-grid-title-weight-mobile)]
                  md:font-[var(--industries-products-grid-title-weight-desktop)]
                  text-[var(--industries-products-grid-title-color)]"
              >
                {title}
              </h3>
              <p
                className="
                  text-[length:var(--industries-products-grid-subtitle-size-mobile)]
                  md:text-[length:var(--industries-products-grid-subtitle-size-desktop)]
                  leading-[var(--industries-products-grid-subtitle-line-mobile)]
                  md:leading-[var(--industries-products-grid-subtitle-line-desktop)]
                  font-[var(--industries-products-grid-subtitle-weight-mobile)]
                  md:font-[var(--industries-products-grid-subtitle-weight-desktop)]
                  text-[var(--industries-products-grid-subtitle-color)]"
              >
                {description}
              </p>
            </div>

            <ProductsListTile
              title="Products"
              Products={products}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
