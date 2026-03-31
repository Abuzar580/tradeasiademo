import { Button } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "@/constants/product-categories";
import { CategoryCard } from "./CategoryCard";

export function ProductCategoriesSection() {
  return (
    <section
      className="
        pt-[var(--product-categories-padding-top-mobile)]
        pb-[var(--product-categories-padding-bottom-mobile)]
        md:pt-[var(--product-categories-padding-top-desktop)]
        md:pb-[var(--product-categories-padding-bottom-desktop)]
        bg-[var(--product-categories-bg-color)]
      "
      aria-labelledby="product-categories-heading"
    >
      <div className="layout-container px-5 text-center">

        {/* Heading + Description */}
        <div className="max-w-[850px] mx-auto">

          <h2
            id="product-categories-heading"
            className="
            text-[length:var(--product-categories-heading-size-mobile)]
            leading-[var(--product-categories-heading-line-mobile)]
            md:text-[length:var(--product-categories-heading-size-desktop)]
            md:leading-[var(--product-categories-heading-line-desktop)]
            font-[var(--product-categories-heading-weight-mobile)]
            md:font-[var(--product-categories-heading-weight-desktop)]
            text-[var(--product-categories-heading-color)]
            "
          >
            Explore Our Extensive Range of Over
            <span className="text-[var(--product-categories-heading-highlight-color)]">
              {" "}
              500+ Products
            </span>
          </h2>

          <p
            className="
              text-[length:var(--product-categories-text-size-mobile)]
              leading-[var(--product-categories-text-line-mobile)]
              font-[var(--product-categories-text-weight-mobile)]
              text-[var(--product-categories-text-color)]
              mt-5
            "
          >
            Discover our comprehensive portfolio of high-quality chemical
            products across multiple categories, serving diverse industries worldwide.
          </p>

        </div>

        {/* Categories Grid */}
        <div
          className="
          mt-[var(--product-categories-gap-main-mobile)]
          md:mt-[var(--product-categories-gap-main-desktop)]
          grid grid-cols-2
          gap-x-[var(--product-categories-grid-gap-x-mobile)]
          gap-y-[var(--product-categories-grid-gap-y-mobile)]
          md:grid-cols-3
          lg:grid-cols-5
          lg:gap-y-[var(--product-categories-grid-gap-y-desktop)]
        "
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Button */}
        <Button
          variant="primary"
          href="/products"
          className="inline-flex justify-center w-full max-w-[250px] mx-auto mt-8 md:mt-[60px]"
        >
          View all products
        </Button>

      </div>
    </section>
  );
}
