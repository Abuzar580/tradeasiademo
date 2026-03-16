import { Button } from "@/components/ui";
import { PRODUCT_CATEGORIES } from "@/constants/product-categories";
import { CategoryCard } from "./CategoryCard";

export function ProductCategoriesSection() {
  return (
    <section
      className="pt-[60px] pb-10 md:pt-20 md:pb-[60px]"
      aria-labelledby="product-categories-heading"
    >
      <div className="layout-container px-5 text-center">

        {/* Heading + Description */}
        <div className="max-w-[850px] mx-auto">

          <h2
            id="product-categories-heading"
            className="font-[var(--font-weight-bold)]
            text-[length:var(--heading-4-size)]
            leading-[var(--heading-4-line-height)]
            md:text-[length:var(--heading-2-size)]
            md:leading-[var(--heading-2-line-height)]
            text-[var(--brand-black)]"
          >
            Explore Our Extensive Range of Over
            <span className="text-[var(--brand-primary)]"> 500+ Products</span>
          </h2>

          <p className="body-large mt-5">
            Discover our comprehensive portfolio of high-quality chemical
            products across multiple categories, serving diverse industries worldwide.
          </p>

        </div>

        {/* Categories Grid */}
        <div
          className="
          mt-[30px]
          md:mt-[60px]
          grid grid-cols-2
          gap-x-5 gap-y-8
          md:grid-cols-3
          lg:grid-cols-5
          lg:gap-y-14
        "
        >
          {PRODUCT_CATEGORIES.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>

        {/* Button */}
        <Button
          variant="primary"
          href="/categories"
          className="inline-flex justify-center w-full max-w-[250px] mx-auto mt-8 md:mt-[60px]"
        >
          View all products
        </Button>

      </div>
    </section>
  );
}
