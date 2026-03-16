import {
  HeroBreadcrumbs,
  type HeroBreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumbs?: HeroBreadcrumbItem[];
};

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: HeroSectionProps) {
  const hasBreadcrumbs = !!breadcrumbs && breadcrumbs.length > 0;

  return (
    <section
      className="
        relative
      "
    >
      {/* Background image */}
      {backgroundImage && (
        <div
          className="
            absolute inset-0 -z-20
            bg-cover bg-center bg-no-repeat
          "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Gradient overlay */}
      <div
        className="
          hidden md:block
          absolute inset-0 -z-10
          bg-[linear-gradient(90deg,var(--brand-primary)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)]
        "
      />

      {/* Full-width breadcrumb row (sits outside the content container) */}
      {hasBreadcrumbs && (
        <HeroBreadcrumbs items={breadcrumbs!} />
      )}

      <div
        className="
          relative
          px-5
          layout-container
          flex flex-col
          gap-8 md:gap-10 py-[110px]
        "
      >
        {/* Hero content card */}
        <div
          className="
            flex flex-col
            gap-4
            px-3 py-10
            bg-[var(--brand-primary)]/57
            md:bg-transparent md:p-0
          "
        >
          <h2
            className="
              text-[length:var(--heading-4-size)]
              leading-[var(--heading-4-line-height)]
              text-[var(--brand-white)]
              font-[var(--font-weight-medium)]

              md:text-[length:var(--heading-2-size)]
              md:leading-[var(--heading-2-line-height)]
            "
          >
            {title}
          </h2>

          <p
            className="
              text-[length:var(--body-regular-size)]
              leading-[var(--body-regular-line-height)]
              font-[var(--font-weight-medium)]
              text-[var(--brand-white)]

              md:text-[length:var(--heading-4-size)]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
