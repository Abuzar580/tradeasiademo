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
    <section className="relative overflow-hidden bg-[var(--brand-neutral-surface-2)] pt-[120px] pb-[60px] md:pt-[150px] lg:pt-[190px]">

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

      <div className="layout-container px-5 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">

        {/* Text */}
        <div className="flex flex-col gap-[30px] text-center md:text-left">
          <h1
            className="
            text-[length:var(--heading-3-size)]
            leading-[var(--heading-3-line-height)]
            font-[var(--font-weight-bold)]
            md:text-[length:var(--heading-2-size)]
            md:leading-[var(--heading-2-line-height)]
            text-[var(--brand-black)]
          "
          >
            {title}
            <span className="text-[var(--brand-primary)]"> {highlight}</span>
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
