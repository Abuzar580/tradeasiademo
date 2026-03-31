import Image from "next/image";
import { Button } from "@/components/ui";

type BannerSectionProps = {
  title: string;
  highlight: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

export function BannerSection({
  title,
  highlight,
  subtitle,
  buttonText,
  buttonHref,
}: BannerSectionProps) {
  return (
    <section
      className="relative overflow-hidden bg-[var(--banner-bg-color)] pt-[var(--banner-padding-top-mobile)] pb-[var(--banner-padding-bottom-mobile)] md:pb-[var(--banner-padding-bottom-desktop)] md:pt-[var(--banner-padding-top-desktop)] lg:pt-[var(--banner-padding-top-lg)]"
    >

      {/* Decorations */}
      <Image
        src="/DecoratorImage.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute right-[-80px] top-0 hidden md:block opacity-70"
      />

      <Image
        src="/DecoratorImage.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute left-0 top-[-80px] opacity-70 rotate-270"
      />

      <div
        className="layout-container px-5 grid grid-cols-1 md:grid-cols-2 gap-[var(--banner-gap-main-mobile)] md:gap-[var(--banner-gap-main-desktop)] items-center relative"
      >

        {/* Text */}
        <div
          className="flex flex-col gap-[var(--banner-gap-inner-mobile)] md:gap-[var(--banner-gap-inner-desktop)] text-center md:text-left"
        >
          <h1
            className="
            text-[length:var(--banner-heading-size-mobile)]
            leading-[var(--banner-heading-line-mobile)]
            font-[var(--banner-heading-weight-mobile)]
            md:text-[length:var(--banner-heading-size-desktop)]
            md:leading-[var(--banner-heading-line-desktop)]
            md:font-[var(--banner-heading-weight-desktop)]
            text-[var(--banner-heading-color)]
          "
          >
            {title}
            <span className="text-[var(--banner-heading-highlight-color)]"> {highlight}</span>
          </h1>

          {subtitle && (
            <p
              className="
              tracking-[-0.008em]
              text-[length:var(--banner-text-size-mobile)]
              leading-[var(--banner-text-line-mobile)]
              md:text-[length:var(--banner-text-size-desktop)]
              md:leading-[var(--banner-text-line-desktop)]
              font-[var(--banner-text-weight-mobile)]
              md:font-[var(--banner-text-weight-desktop)]
              text-[var(--banner-text-color)]
            "
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/BannerImage.png"
            alt="TradeAsia platform preview"
            width={500}
            height={500}
            sizes="(max-width:768px) 100vw, 50vw"
            className="w-full max-h-[286px] md:max-h-[360px] rounded-[51px] object-cover"
            priority
          />
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <Button
            variant="primary"
            href={buttonHref}
            className="min-w-[200px]"
          >
            {buttonText}
          </Button>
        </div>

      </div>
    </section>
  );
}
