"use client";

type HeaderProps = {
  title: string
  subtitle?: string
}

export function IndustrialApplicationsHeader({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div>
      <div className="flex flex-col gap-[30px] text-center md:text-left">
        <h1
          className="
            text-[length:var(--heading-4-size)]
            leading-[var(--heading-4-line-height)]
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
              font-[var(--font-weight-semibold)]
            "
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}