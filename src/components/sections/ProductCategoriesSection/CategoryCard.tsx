import Image from "next/image";
import Link from "next/link";
import type { ProductCategory } from "@/constants/product-categories";

type CategoryCardProps = {
  category: ProductCategory;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="relative overflow-hidden rounded-[var(--product-categories-card-radius-mobile)] md:rounded-[var(--product-categories-card-radius-desktop)] aspect-[4/4.5]
      transition-shadow duration-300 hover:shadow-[10px_10px_5px_var(--product-categories-card-hover-shadow-color)]"
      aria-label={`View ${category.title} category`}
    >
      <Image
        src={category.image ?? "/CategoryImage.png"}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        className="object-cover"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--product-categories-card-overlay-black-rgb),0.8),rgba(var(--product-categories-card-overlay-black-rgb),0.4),transparent)]" />

      {/* Text */}
      <div className="absolute bottom-0 p-5 z-[2] text-left">
        <p
          className="
            font-[var(--product-categories-card-title-weight-mobile)]
            text-[length:var(--product-categories-card-title-size-mobile)]
            leading-[var(--product-categories-card-title-line-mobile)]
            text-[var(--product-categories-card-title-color)]
            md:font-[var(--product-categories-card-title-weight-desktop)]
            md:text-[length:var(--product-categories-card-title-size-desktop)]
            md:leading-[var(--product-categories-card-title-line-desktop)]
          "
        >
          {category.title}
        </p>

        <p
          className="
            font-[var(--product-categories-card-desc-weight-mobile)]
            text-[length:var(--product-categories-card-desc-size-mobile)]
            leading-[var(--product-categories-card-desc-line-mobile)]
            text-[var(--product-categories-card-desc-color)]
            mt-1
            md:font-[var(--product-categories-card-desc-weight-desktop)]
            md:text-[length:var(--product-categories-card-desc-size-desktop)]
            md:leading-[var(--product-categories-card-desc-line-desktop)]
          "
        >
          {category.description}
        </p>
      </div>
    </Link>
  );
}
