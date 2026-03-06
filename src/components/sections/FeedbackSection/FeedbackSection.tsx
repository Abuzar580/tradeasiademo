"use client";
import { Button } from "@/components/ui/Button";

export type FeedbackSectionProps = {
  headingPrefix: string;
  headingHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  backgroundImage?: string;
};

export function FeedbackSection({
  headingPrefix,
  headingHighlight,
  subtitle,
  buttonText,
  buttonHref,
  backgroundImage,
}: FeedbackSectionProps) {
  return (
    <section className="relative py-16 px-5 md:py-20 text-center md:text-left">
      {backgroundImage && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="relative mx-auto layout-container flex flex-col gap-10 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-5">
            <div
              className="text-[length:var(--heading-5-size)] leading-[var(--heading-3-line-height)] text-[var(--brand-white)] font-[var(--font-weight-bold)]
              md:text-[length:var(--heading-2-size)] md:leading-[var(--heading-2-line-height)]"
            >
              {headingPrefix}
              <span
                className="block text-[var(--brand-primary)] text-[length:var(--heading-1-size)] leading-[var(--heading-1-line-height)]
                md:text-[length:var(--heading-2-size)] md:leading-[var(--heading-2-line-height)] md:ml-[15%] drop-shadow-[0_4px_4px_rgba(var(--brand-white-rgb),0.34)]"
              >
                {headingHighlight}
              </span>
            </div>
            <p className="text-[length:var(--body-medium-size)] leading-[var(--body-large-line-height)] font-[var(--font-weight-semibold)] text-[var(--brand-white)]
              md:text-[length:var(--heading-4-size)]">
              {subtitle}
            </p>
          </div>

          <Button
            className="max-w-[285px] mx-auto md:mx-0"
            variant="outlined"
            href={buttonHref}
          >
            {buttonText}
          </Button>
        </div>
    </section>
  );
}
