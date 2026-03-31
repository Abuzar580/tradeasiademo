import { ProductsListTile } from "@/components/sections/ProductsListSection/ProductsListSection";
import { ProductCategoriesSideBar } from "@/components/sections/ProductCategoriesSideBarSection/ProductCategoriesSideBarSection";
import type { Product } from "@/constants/products";

export function IndustriesProductsSection({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="pt-[var(--industries-products-section-padding-top-mobile)] pb-[var(--industries-products-section-padding-bottom-mobile)] md:pt-[var(--industries-products-section-padding-top-desktop)] md:pb-[var(--industries-products-section-padding-bottom-desktop)]">
      <div className="layout-container px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--industries-products-grid-gap-mobile)] md:gap-[var(--industries-products-grid-gap-desktop)]">

          {/* Sidebar — full height, sticks to top */}
          <div className="md:col-span-3 order-2 md:order-1 md:self-start">
            <ProductCategoriesSideBar products={products} />
          </div>

          {/* Right side: intro + products stacked */}
          <div className="md:col-span-9 order-1 md:order-2 flex flex-col gap-[var(--industries-products-grid-intro-gap-mobile)] md:gap-[var(--industries-products-grid-intro-gap-desktop)]">
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
                Crops & Agro Chemicals
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
                The agricultural chemical industry is a critical component of contemporary agriculture across the world. Chemical fertilizers, insecticides, and other chemical-based agricultural products are widely used all over the world. Agriculture industries require fertilizer-grade chemicals for crop growth which are typically unavailable in several locations. Pesticides, herbicides, insecticides, fungicides, synthetic fertilizers, and a variety of other chemicals used for plant and crop protection are among the available chemicals. Tradeasia International offers agricultural chemicals to support the industrial needs in the agricultural sector.
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
