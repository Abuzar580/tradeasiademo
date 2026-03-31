import Image from "next/image";
import { Button } from "@/components/ui";
import { StackIcon, GlobeIcon, ClockIcon } from "@/icons";
import { routes } from "@/config/routes";

export type FeatureCard = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
};

const GLOBAL_SUPPLY_FEATURES: FeatureCard[] = [
  {
    icon: StackIcon,
    value: "20+",
    label: "Years Experience",
  },
  {
    icon: GlobeIcon,
    value: "Global",
    label: "Network Coverage",
  },
  {
    icon: ClockIcon,
    value: "24/7",
    label: "Support Available",
  },
];

const GLOBAL_SUPPLY_DESCRIPTION =
  "With two decades of expertise in chemical supply, Tradeasia International is your go-to source for a diverse array of raw materials essential across industries. As a reliable chemical distributor, we offer a comprehensive range of products to meet both commodity and specialty chemical needs worldwide.";

export function GlobalSupplySection() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--global-supply-bg-color)] pt-[var(--global-supply-padding-top-mobile)] pb-[var(--global-supply-padding-bottom-mobile)] text-center md:pt-[var(--global-supply-padding-top-desktop)] md:pb-[var(--global-supply-padding-bottom-desktop)]"
    >

      {/* Top Right Decoration */}
      <Image
        src="/Rectangle.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute right-0 top-0 hidden md:block
        w-[551px] h-[543px] opacity-60
        rounded-tl-[199px] mix-blend-soft-light"
      />

      {/* Bottom Left Decoration */}
      <Image
        src="/Rectangle.svg"
        alt=""
        width={551}
        height={543}
        className="pointer-events-none absolute left-0 bottom-0
        w-[551px] h-[543px] opacity-60
        rounded-tl-[192px] mix-blend-soft-light
        -rotate-180"
      />

      {/* Content */}
      <div
        className="relative z-10 layout-container px-5 flex flex-col items-center gap-[var(--global-supply-gap-main-mobile)] md:gap-[var(--global-supply-gap-main-desktop)]"
      >

        {/* Heading + Description */}
        <div
          className="flex flex-col gap-[var(--global-supply-gap-inner-mobile)] md:gap-[var(--global-supply-gap-inner-desktop)]"
        >
          <h2
            className="text-[length:var(--global-supply-heading-size-mobile)] leading-[var(--global-supply-heading-line-mobile)]
            font-[var(--global-supply-heading-weight-mobile)] text-[var(--global-supply-heading-color)]
            md:text-[length:var(--global-supply-heading-size-desktop)] md:leading-[var(--global-supply-heading-line-desktop)] md:font-[var(--global-supply-heading-weight-desktop)]"
          >
            Global Chemical Suppliers & Distributor
          </h2>

          <p
            className="mx-auto max-w-[900px] text-[length:var(--global-supply-text-size-mobile)]
            leading-[var(--global-supply-text-line-mobile)] font-[var(--global-supply-text-weight-mobile)]
            text-[var(--global-supply-text-color)]
            md:text-[length:var(--global-supply-text-size-desktop)] md:leading-[var(--global-supply-text-line-desktop)] md:font-[var(--global-supply-text-weight-desktop)]"
          >
            {GLOBAL_SUPPLY_DESCRIPTION}
          </p>
        </div>

        {/* Features */}
        <div
          className="flex flex-wrap w-full max-w-[900px] gap-[var(--global-supply-grid-gap-mobile)] justify-center items-center md:gap-[var(--global-supply-grid-gap-desktop)]"
        >

          {GLOBAL_SUPPLY_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="flex items-center gap-[var(--global-supply-card-gap-mobile)] rounded-[var(--global-supply-card-border-radius)]
                bg-[var(--global-supply-card-bg-color)] p-[var(--global-supply-card-padding-mobile)] border
                border-[var(--global-supply-card-border-color)] backdrop-blur-md md:gap-[var(--global-supply-card-gap-desktop)] md:px-[var(--global-supply-card-padding-desktop)]"
              >

                {/* Icon */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full bg-[var(--global-supply-card-icon-bg-color)]
                  md:h-12 md:w-12
                  text-[var(--global-supply-card-icon-color)]"
                >
                  <Icon className="h-[17px] w-[17px] md:h-6 md:w-6" />
                </div>

                {/* Text */}
                <div
                  className="flex flex-col items-start
                  text-[length:var(--global-supply-card-text-size-mobile)]
                  leading-[var(--global-supply-card-text-line-mobile)]
                  font-[var(--global-supply-card-text-weight-mobile)]
                  text-[var(--global-supply-card-text-color)]
                  md:text-[length:var(--global-supply-card-text-size-desktop)]
                  md:leading-[var(--global-supply-card-text-line-desktop)]
                  md:font-[var(--global-supply-card-text-weight-desktop)]"
                >
                  <span>{feature.value}</span>

                  <span
                    className="text-[length:var(--global-supply-card-label-text-size-mobile)]
                    md:text-[length:var(--global-supply-card-label-text-size-desktop)]
                    leading-[var(--global-supply-card-label-line-mobile)]
                    md:leading-[var(--global-supply-card-label-line-desktop)]"
                  >
                    {feature.label}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Button */}
        <Button
          variant="outlined"
          href="/products"
          className="max-w-[336px] w-full mx-auto md:mx-0 mt-3 md:mt-0"
        >
          explore our products
        </Button>

      </div>
    </section>
  );
}
