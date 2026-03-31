import { ProductsListTile } from "@/components/sections/ProductsListSection/ProductsListSection";
import { ProductCategoriesSideBar } from "@/components/sections/ProductCategoriesSideBarSection/ProductCategoriesSideBarSection";
import type { Product } from "@/constants/products";

export function ProductsSection({
  products,
}: {
  products: Product[];
}) {
  return (
    <section className="pt-[var(--industries-products-section-padding-top-mobile)] pb-[var(--industries-products-section-padding-bottom-mobile)] md:pt-[var(--industries-products-section-padding-top-desktop)] md:pb-[var(--industries-products-section-padding-bottom-desktop)]">
      <div className="layout-container px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[var(--industries-products-grid-gap-mobile)] md:gap-[var(--industries-products-grid-gap-desktop)]">
          <div className="md:col-span-3 order-2 md:order-1">
            <ProductCategoriesSideBar products={products} />
          </div>
          <div className="md:col-span-9 order-1 md:order-2">
            <ProductsListTile
              title="All Products"
              Products={products}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
