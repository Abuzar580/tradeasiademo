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
      className="relative overflow-hidden rounded-[8px] md:rounded-[18px] aspect-[4/4.5]
      transition-shadow duration-300 hover:shadow-[10px_10px_5px_var(--brand-primary-hover)]"
      aria-label={`View ${category.title} category`}
    >
      <Image
        src={category.image ?? "/CategoryImage.png"}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 p-5 z-[2] text-left">
        <p className="font-[var(--font-weight-bold)] text-[18px] leading-[28px] text-[var(--brand-white)]">
          {category.title}
        </p>

        <p className="font-[var(--font-weight-semibold)] text-[14px] leading-[20px] text-[rgba(var(--brand-white-rgb),0.8)] mt-1">
          {category.description}
        </p>
      </div>
    </Link>
  );
}
