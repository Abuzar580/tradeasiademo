import Image from "next/image";
import Link from "next/link";

const DESCRIPTION =
  "Your solution to efficient shipment tracking and document access. Download Now for a seamless Experience!";

export function AppDownloadSection() {
  return (
    <section className="relative py-12 md:py-[100px]">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/neturalBgImage.png)" }}
      />
      <div className="relative px-5 flex layout-container flex-col items-center md:flex-row gap-[50px]" style={{ textAlign: "center" }}>
        {/* Left: Text + buttons */}
        <div className="flex flex-1 md:flex-[3] flex-col items-center">
          <h2
            className="text-[32px] leading-[44.8px] md:text-[46px] md:leading-[62.1px] font-bold text-[var(--brand-black)]"
          >
            Introducing our NEW
            <span className="block font-bold text-[var(--brand-primary)]">
              Chemicals B2B Mobile App
            </span>
          </h2>
          <p className="text-[length:var(--body-regular-size)] line-height:var(--body-large-line-height) font-[weight:var(--font-weight-semibold)] mt-4 max-w-[600px] text-[20px] md:text-[length:var(--body-large-size)]">
            {DESCRIPTION}
          </p>
          <div className="pt-7 flex items-center gap-4">
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
