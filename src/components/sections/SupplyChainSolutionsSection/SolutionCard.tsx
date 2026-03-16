import Link from "next/link";
import { ArrowIcon } from "@/icons";
import React from "react";

type SolutionCardProps = {
  title: string;
  description: string;
  href: string;
  Icon: React.ComponentType<{ className?: string }>;
};

export function SolutionCard({
  title,
  description,
  href,
  Icon,
}: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex h-full flex-col rounded-[30px] bg-white p-[30px] md:p-10 shadow-[var(--btn-shadow-soft)]
      transition-[background-color,box-shadow] duration-300 ease-in-out
      hover:bg-[var(--brand-primary)]"
    >
      {/* Icon */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--brand-primary)]
        transition-colors duration-300 group-hover:bg-white"
      >
        <Icon
          className="h-10 w-10 text-[var(--brand-white)]
          transition-colors duration-300 group-hover:text-[var(--brand-primary)]"
        />
      </div>

      {/* Title */}
      <h3
        className="heading-4 mt-7 text-[var(--brand-primary)]
        transition-colors duration-300 group-hover:text-white"
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="body-regular mt-4
        transition-colors duration-300 group-hover:text-white"
      >
        {description}
      </p>

      {/* CTA */}
      <div
        className="body-regular mt-auto pt-7 text-[var(--brand-primary)]
        transition-colors duration-300 group-hover:text-white flex items-center"
      >
        Learn More
        <ArrowIcon className="ml-3 h-[10px] w-[5px]" />
      </div>
    </Link>
  );
}
