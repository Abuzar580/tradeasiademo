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
      className="group relative flex h-full flex-col rounded-[var(--supply-chain-solutions-card-radius)] bg-[var(--supply-chain-solutions-card-bg)] p-[var(--supply-chain-solutions-card-padding-mobile)] md:p-[var(--supply-chain-solutions-card-padding-desktop)] shadow-[var(--supply-chain-solutions-card-shadow)]
      transition-[background-color,box-shadow] duration-300 ease-in-out
      hover:bg-[var(--supply-chain-solutions-card-bg-hover)]"
    >
      {/* Icon */}
      <div
        className="flex h-20 w-20 items-center justify-center rounded-full bg-[var(--supply-chain-solutions-card-icon-bg)]
        transition-colors duration-300 group-hover:bg-[var(--supply-chain-solutions-card-icon-bg-hover)]"
      >
        <Icon
          className="h-10 w-10 text-[var(--supply-chain-solutions-card-icon-color)]
          transition-colors duration-300 group-hover:text-[var(--supply-chain-solutions-card-icon-color-hover)]"
        />
      </div>

      {/* Title */}
      <h3
        className="heading-4 mt-7 text-[var(--supply-chain-solutions-card-title-color)]
        transition-colors duration-300 group-hover:text-[var(--supply-chain-solutions-card-title-color-hover)]"
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="body-regular mt-4
        transition-colors duration-300 group-hover:text-[var(--supply-chain-solutions-card-text-color-hover)]"
      >
        {description}
      </p>

      {/* CTA */}
      <div
        className="body-regular mt-auto pt-7 text-[var(--supply-chain-solutions-card-cta-color)]
        transition-colors duration-300 group-hover:text-[var(--supply-chain-solutions-card-cta-color-hover)] flex items-center"
      >
        Learn More
        <ArrowIcon className="ml-3 h-[10px] w-[5px]" />
      </div>
    </Link>
  );
}
