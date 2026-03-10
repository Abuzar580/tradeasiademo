"use client";

import { Button } from "@/components/ui";
import Slider from "./Silder";

type HeaderProps = {
  title: string
  subtitle?: string
}

export function IndustrialApplications({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div>
      <div className="flex flex-col gap-[30px] text-center md:text-left">
        <h1
          className="
            text-[length:var(--heading-3-size)]
            leading-[var(--heading-3-line-height)]
            font-[var(--font-weight-bold)]
            md:text-[length:var(--heading-2-size)]
            md:leading-[var(--heading-2-line-height)]
            text-[var(--brand-primary)]
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              tracking-[-0.008em]
              text-[var(--body-regular-size)]
              leading-[var(--body-large-line-height)]
              md:text-[var(--body-large-size)]
              font-[var(--font-weight-semibold)] mb-2
            "
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="w-full md:rounded-[40px] md:bg-[var(--brand-white)] md:px-5 md:py-8 md:shadow-[var(--box-shadow)] flex flex-col gap-2">
        <div className="flex-1 mb-8">
          <Slider />
        </div>

        <div className="flex justify-center">
          <Button variant="primary">
            SEE MORE INDUSTRIES
          </Button>
        </div>
      </div>
    </div>
  );
}