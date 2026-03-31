import {
  HeroBreadcrumbs,
  type HeroBreadcrumbItem,
} from "@/components/navigation/Breadcrumbs";

export type HeroSectionProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  breadcrumbs?: HeroBreadcrumbItem[];
  badge?: string;
  heroVariant ?: "default" | "industries";
};

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
  badge,
  heroVariant = "default",
}: HeroSectionProps) {
  const hasBreadcrumbs = !!breadcrumbs && breadcrumbs.length > 0;
  const isIndustries = heroVariant === "industries";

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
          bg-[linear-gradient(90deg,var(--hero-gradient-start)_0%,rgba(0,0,0,0.3)_50%,transparent_100%)]
        "
      />

      {/* Full-width breadcrumb row (sits outside the content container) */}
      {hasBreadcrumbs && (
        <HeroBreadcrumbs items={breadcrumbs!} />
      )}

      <div
        className={`
          relative
          px-5
          layout-container
          flex flex-col
          gap-[var(--hero-gap-mobile)] md:gap-[var(--hero-gap-desktop)]
          ${isIndustries ? "pt-[var(--hero-industry-padding-top-mobile)] md:pt-[var(--hero-industry-padding-top-desktop)] pb-[var(--hero-industry-padding-bottom-mobile)] md:pb-[var(--hero-industry-padding-bottom-desktop)]" : "pt-[var(--hero-padding-top-mobile)] pb-[var(--hero-padding-bottom-mobile)]"}
        `}
      >
        {/* Hero content card */}
        <div
          className={`
            flex flex-col
            gap-[var(--hero-card-gap)]
            ${isIndustries ? "bg-[var(--hero-card-bg)]/57 text-center md:text-left py-[var(--hero-card-padding-y-mobile)] px-[var(--hero-card-padding-x-mobile)]" : ""}
            md:bg-transparent md:p-0
          `}
        >

          {badge && (
            <span
              className="
              inline-flex w-fit uppercase
              pt-[var(--hero-badge-text-padding-top)]
              pb-[var(--hero-badge-text-padding-bottom)]
              px-[var(--hero-badge-text-padding-x)]
              rounded-[var(--hero-badge-text-radius)]
              text-[length:var(--hero-badge-text-size)]
              leading-[var(--hero-badge-text-line)]
              font-[var(--hero-badge-text-weight)]
              text-[var(--hero-badge-text-color)]
              bg-[var(--hero-badge-text-bg)]
              "
            >
              {badge}
            </span>
          )}

          <h2
            className="
              text-[length:var(--hero-heading-size-mobile)]
              leading-[var(--hero-heading-line-mobile)]
              text-[var(--hero-heading-color)]
              font-[var(--hero-heading-weight-mobile)]
              md:text-[length:var(--hero-heading-size-desktop)]
              md:leading-[var(--hero-heading-line-desktop)]
              md:font-[var(--hero-heading-weight-desktop)]
            "
          >
            {title}
          </h2>

          <p
            className="
              text-[length:var(--hero-text-size-mobile)]
              leading-[var(--hero-text-line-mobile)]
              font-[var(--hero-text-weight-mobile)]
              text-[var(--hero-text-color)]
              md:text-[length:var(--hero-text-size-desktop)]
              md:leading-[var(--hero-text-line-desktop)]
              md:font-[var(--hero-text-weight-desktop)]
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
