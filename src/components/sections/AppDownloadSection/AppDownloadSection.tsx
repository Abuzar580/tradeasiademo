import Image from "next/image";
import Link from "next/link";

const DESCRIPTION =
  "Your solution to efficient shipment tracking and document access. Download Now for a seamless Experience!";

export function AppDownloadSection() {
  return (
    <section
      className="
        relative
        bg-[var(--app-download-bg-color)]
        pt-[var(--app-download-padding-top-mobile)]
        pb-[var(--app-download-padding-bottom-mobile)]
        md:pt-[var(--app-download-padding-top-desktop)]
        md:pb-[var(--app-download-padding-bottom-desktop)]
      "
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/neturalBgImage.png)" }}
      />
      <div
        className="
          relative
          px-5
          flex
          layout-container
          flex-col
          items-center
          md:flex-row
          gap-[var(--app-download-gap-main-mobile)]
          md:gap-[var(--app-download-gap-main-desktop)]
          text-center
        "
      >
        {/* Left: Text + buttons */}
        <div className="flex flex-1 md:flex-[3] flex-col items-center">
          <h2
            className="
              text-[length:var(--app-download-heading-size-mobile)]
              leading-[var(--app-download-heading-line-mobile)]
              md:text-[length:var(--app-download-heading-size-desktop)]
              md:leading-[var(--app-download-heading-line-desktop)]
              font-[var(--app-download-heading-weight-mobile)]
              md:font-[var(--app-download-heading-weight-desktop)]
              text-[var(--app-download-heading-color)]
            "
          >
            Introducing our NEW
            <span
              className="
                block
                font-[var(--app-download-heading-weight-mobile)]
                md:font-[var(--app-download-heading-weight-desktop)]
                text-[var(--app-download-heading-highlight-color)]
              "
            >
              Chemicals B2B Mobile App
            </span>
          </h2>
          <p
            className="
              text-[length:var(--app-download-text-size-mobile)]
              leading-[var(--app-download-text-line-mobile)]
              font-[var(--app-download-text-weight-mobile)]
              md:font-[var(--app-download-text-weight-desktop)]
              text-[var(--app-download-text-color)]
              mt-4
              max-w-[600px]
              md:text-[length:var(--app-download-text-size-desktop)]
              md:leading-[var(--app-download-text-line-desktop)]
            "
          >
            {DESCRIPTION}
          </p>
          <div
            className="
              pt-7
              flex
              items-center
              gap-[var(--app-download-gap-inner-mobile)]
              md:gap-[var(--app-download-gap-inner-desktop)]
            "
          >
            <Link href="#" className="flex h-10 items-center">
              <Image
                src="/AppStoreIcon.svg"
                alt="Download on the App Store"
                width={121}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <Link href="#" className="flex h-10 items-center">
              <Image
                src="/google.svg"
                alt="Get it on Google Play"
                width={121}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Right: Mobile phone mockups */}
        <div className="relative flex flex-1 md:flex-[2] justify-center md:justify-end">
          <Image
            src="/mobileImage.png"
            alt="Mobile App on smartphone"
            width={500}
            height={650}
            className="h-auto max-w-[320px] object-contain md:max-w-[380px] lg:max-w-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
