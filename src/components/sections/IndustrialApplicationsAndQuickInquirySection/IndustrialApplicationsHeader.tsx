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
      <div className="flex flex-col gap-[var(--industrial-applications-header-gap)] text-center md:text-left">
        <h1
          className="
            text-[length:var(--industrial-applications-header-title-size-mobile)]
            leading-[var(--industrial-applications-header-title-line-mobile)]
            font-[var(--industrial-applications-header-title-weight-mobile)]
            md:text-[length:var(--industrial-applications-header-title-size-desktop)]
            md:leading-[var(--industrial-applications-header-title-line-desktop)]
            md:font-[var(--industrial-applications-header-title-weight-desktop)]
            text-[var(--industrial-applications-header-title-color)]
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className="
              tracking-[-0.008em]
              text-[length:var(--industrial-applications-header-text-size-mobile)]
              leading-[var(--industrial-applications-header-text-line-mobile)]
              md:text-[length:var(--industrial-applications-header-text-size-desktop)]
              md:leading-[var(--industrial-applications-header-text-line-desktop)]
              font-[var(--industrial-applications-header-text-weight-mobile)]
              md:font-[var(--industrial-applications-header-text-weight-desktop)]
            "
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}