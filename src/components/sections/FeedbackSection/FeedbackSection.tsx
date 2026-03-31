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
    <section
      className="
        relative
        pt-[var(--feedback-padding-top-mobile)]
        pb-[var(--feedback-padding-bottom-mobile)]
        md:pt-[var(--feedback-padding-top-desktop)]
        md:pb-[var(--feedback-padding-bottom-desktop)]
        text-center
        md:text-left
      "
      style={{
        backgroundColor: "var(--feedback-bg-color)",
      }}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-left bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
      )}

      <div
        className="
          relative
          px-5
          layout-container
          flex
          flex-col
          gap-[var(--feedback-gap-main-mobile)]
          md:gap-[var(--feedback-gap-main-desktop)]
        "
      >
        <div
          className="
            flex
            flex-col
            gap-[var(--feedback-gap-inner-mobile)]
            md:gap-[var(--feedback-gap-inner-desktop)]
          "
        >
          <h2
            className="
              font-[var(--feedback-heading-weight-mobile)]
              text-[length:var(--feedback-heading-size-mobile)]
              leading-[var(--feedback-heading-line-mobile)]

              md:font-[var(--feedback-heading-weight-desktop)]
              md:text-[length:var(--feedback-heading-size-desktop)]
              md:leading-[var(--feedback-heading-line-desktop)]
            "
          >
            <span className="text-[var(--feedback-heading-prefix-color)]">
              {headingPrefix}
            </span>

            <span
              className="
                block
                text-[var(--feedback-heading-highlight-color)]

                text-[length:var(--feedback-highlight-size-mobile)]
                leading-[var(--feedback-highlight-line-mobile)]

                md:text-[length:var(--feedback-highlight-size-desktop)]
                md:leading-[var(--feedback-highlight-line-desktop)]

                md:ml-[var(--feedback-highlight-offset-desktop)]

                drop-shadow-[0_4px_4px_var(--feedback-highlight-shadow-color)]
              "
            >
              {headingHighlight}
            </span>
          </h2>

          <p
            className="
              text-[var(--feedback-text-color)]

              font-[var(--feedback-text-weight-mobile)]
              text-[length:var(--feedback-text-size-mobile)]
              leading-[var(--feedback-text-line-mobile)]

              md:font-[var(--feedback-text-weight-desktop)]
              md:text-[length:var(--feedback-text-size-desktop)]
              md:leading-[var(--feedback-text-line-desktop)]
            "
          >
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
