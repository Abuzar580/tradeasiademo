import Image from "next/image";
import { Button } from "@/components/ui";
import { StackIcon, GlobeIcon, ClockIcon } from "@/icons";

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
    <section className="relative overflow-hidden bg-[var(--brand-primary)] py-15 px-5 text-center md:py-16 lg:py-[120px]">

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
      <div className="relative z-10 layout-container flex flex-col items-center gap-7 md:gap-15">

        {/* Heading + Description */}
        <div className="flex flex-col gap-5 md:gap-15">
          <div
            className="text-[length:var(--heading-3-size)] leading-[var(--heading-3-line-height)]
            font-[var(--font-weight-semibold)] text-[var(--brand-white)]
            md:text-[length:var(--heading-1-size)] md:leading-[var(--heading-1-line-height)]"
          >
            Global Chemical Suppliers & Distributor
          </div>

          <p
            className="mx-auto max-w-[900px] text-[length:var(--body-regular-size)]
            leading-[var(--heading-4-line-height)] font-[var(--font-weight-semibold)]
            text-[rgba(var(--brand-white-rgb),0.9)]
            md:text-[length:var(--body-large-size)]"
          >
            {GLOBAL_SUPPLY_DESCRIPTION}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap w-full max-w-[900px] gap-6 justify-center items-center md:gap-14">

          {GLOBAL_SUPPLY_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.label}
                className="flex items-center gap-[6px] rounded-[var(--btn-border-radius)]
                bg-[rgba(var(--brand-white-rgb),0.08)] p-3 border
                border-[rgba(var(--brand-white-rgb),15%)] backdrop-blur-md md:gap-3 md:px-6"
              >

                {/* Icon */}
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-full bg-[var(--brand-white)]
                  md:h-12 md:w-12
                  text-[var(--brand-primary)]"
                >
                  <Icon className="h-[17px] w-[17px] md:h-6 md:w-6" />
                </div>

                {/* Text */}
                <div
                  className="flex flex-col items-start
                  text-[length:var(--body-small-size)]
                  leading-[var(--body-caption-line-height)]
                  font-[var(--font-weight-semibold)]
                  text-[var(--brand-white)]
                  md:text-[length:var(--heading-4-size)]
                  md:leading-[var(--heading-4-line-height)]"
                >
                  <span>{feature.value}</span>

                  <span
                    className="text-[length:var(--body-caption-size)]
                    md:text-[length:var(--body-small-size)]
                    md:leading-[var(--body-caption-line-height)]"
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
          href="#"
          className="max-w-[336px] w-full mx-auto md:mx-0 mt-3 md:mt-0"
        >
          explore our products
        </Button>

      </div>
    </section>
  );
}
